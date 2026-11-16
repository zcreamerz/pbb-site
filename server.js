const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');
const HAS_PUBLIC = fs.existsSync(PUBLIC);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json' };

const MAX_HISTORY = 50, MAX_TEXT = 200, MAX_NAME = 20, COOLDOWN_MS = 1000;
const history = [];

const server = http.createServer((req, res) => {
  const url = decodeURI(req.url.split('?')[0]);
  if (url === '/count') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    return res.end(JSON.stringify({ count: wss.clients.size }));
  }
  if (url === '/health') { res.writeHead(200); return res.end('ok'); }

  let file;
  if (HAS_PUBLIC) {
    file = path.normalize(path.join(PUBLIC, url === '/' ? 'index.html' : url));
    if (!file.startsWith(PUBLIC)) { res.writeHead(403); return res.end(); }
  } else {
    if (url !== '/' && url !== '/index.html') { res.writeHead(404); return res.end('Not found'); }
    file = path.join(__dirname, 'index.html');
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server });

let last = -1;
function broadcast(force) {
  const count = wss.clients.size;
  if (!force && count === last) return;
  last = count;
  const msg = JSON.stringify({ count });
  wss.clients.forEach(c => { if (c.readyState === 1) c.send(msg); });
}
function sendAll(obj) {
  const msg = JSON.stringify(obj);
  wss.clients.forEach(c => { if (c.readyState === 1) c.send(msg); });
}
function clean(s, max) {
  return String(s || '').replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
}

wss.on('connection', ws => {
  ws.isAlive = true;
  ws.lastChat = 0;
  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', raw => {
    ws.isAlive = true;
    const str = String(raw);
    if (str === 'ping') return ws.send('pong');
    if (str.length > 1000) return;

    let d;
    try { d = JSON.parse(str); } catch (e) { return; }
    if (!d || d.type !== 'chat') return;

    const text = clean(d.text, MAX_TEXT);
    if (!text) return;

    const now = Date.now();
    if (now - ws.lastChat < COOLDOWN_MS) {
      return ws.send(JSON.stringify({ type: 'error', message: 'Dahan-dahan lang sa pag-chat 🙂' }));
    }
    ws.lastChat = now;

    const m = { type: 'chat', id: clean(d.id, 40), name: clean(d.name, MAX_NAME) || 'Viewer', text };
    history.push(m);
    if (history.length > MAX_HISTORY) history.shift();
    sendAll(m);
  });
    ws.on('close', () => {
    if (wss.clients.size === 0) history.length = 0;   // 0 na ang nanonood: burahin lahat ng chat
    broadcast();
  });
  ws.on('error', () => {});

  ws.send(JSON.stringify({ type: 'history', msgs: history }));
  broadcast(true);
});

setInterval(() => {
  wss.clients.forEach(ws => {
    if (!ws.isAlive) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
  broadcast();
}, 30000);

server.listen(PORT, () => console.log('Running on port ' + PORT));
