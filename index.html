<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PBB LIVE ACCESS – EARL</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.11.2/shaka-player.compiled.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    :root {
      --bg: #0a0c10;
      --panel: #12151c;
      --card: #171b24;
      --border: #252a36;
      --text: #eef0f4;
      --muted: #7d8699;
      --teal: #00d2a0;
      --teal-dim: rgba(0, 210, 160, 0.15);
      --red: #ff4d6a;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'DM Sans', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ---------- Header ---------- */
    .top {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 24px; border-bottom: 1px solid var(--border); background: var(--bg);
      flex-shrink: 0; gap: 12px;
    }
    .logo { display: flex; align-items: center; gap: 10px; }
    .logo-icon {
      width: 32px; height: 32px; background: linear-gradient(135deg, #00d2a0, #00b4d8);
      border-radius: 8px; display: grid; place-items: center;
      font-weight: 700; font-size: 13px; color: #000;
    }
    .logo h1 { font-size: 1.05rem; font-weight: 700; letter-spacing: -0.3px; }
    .logo small { display: block; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.5px; margin-top: 1px; }

    .status-right { display: flex; align-items: center; gap: 10px; }
    .live-pill {
      display: flex; align-items: center; gap: 7px;
      background: rgba(255, 77, 106, 0.12); color: var(--red);
      padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
    }
    .live-pill span {
      width: 7px; height: 7px; background: var(--red); border-radius: 50%;
      animation: pulse 1.4s infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    .info-pill {
      display: flex; align-items: center; gap: 7px; font-size: 0.78rem; color: var(--muted);
      border: 1px solid var(--border); border-radius: 20px; padding: 5px 12px; background: var(--panel);
    }
    .info-pill b { color: var(--text); font-weight: 700; font-variant-numeric: tabular-nums; }
    .info-pill .sig { width: 16px; height: 16px; fill: none; stroke: var(--teal); stroke-width: 2.6; stroke-linecap: round; }
    .info-pill .sig path { animation: sigpulse 1.8s infinite; }
    .info-pill .sig path:nth-child(2) { animation-delay: .15s; }
    .info-pill .sig path:nth-child(3) { animation-delay: .3s; }
    .info-pill .sig path:nth-child(4) { animation-delay: .45s; }
    @keyframes sigpulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

    /* ---------- Stage (grid + controls) ---------- */
    .stage {
      position: relative; flex: 1; min-height: 0; min-width: 0;
      display: flex; flex-direction: column; background: var(--bg);
    }
    .stage:is(:fullscreen, .pfs) { width: 100vw; height: 100vh; height: 100dvh; }
    .stage.pfs { position: fixed; top: 0; left: 0; z-index: 9999; }
    .stage:is(:fullscreen, .pfs).idle { cursor: none; }

    .grid {
      flex: 1; display: grid; gap: 10px; padding: 12px; min-height: 0; min-width: 0;
      justify-content: center; align-content: center; position: relative;
    }
    .grid.one  { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, 1fr); }
    .grid.two  { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: minmax(0, 1fr); }
    .grid.four { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); }

    .fs-exit {
      display: none; position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
      z-index: 20; background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
      color: var(--text); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px;
      padding: 7px 16px; font-family: inherit; font-size: 0.78rem; font-weight: 600; cursor: pointer;
      transition: opacity 0.3s, border-color 0.15s;
    }
    .fs-exit:hover { border-color: var(--teal); }
    .stage:is(:fullscreen, .pfs) .fs-exit { display: block; }
    .stage.idle .fs-exit { opacity: 0; pointer-events: none; }

    .cam {
      position: relative; background: #000; border-radius: 12px; overflow: hidden;
      border: 1px solid var(--border); min-height: 0; min-width: 0; transition: border-color 0.15s;
    }
    .cam.off { display: none; }
    .grid.one .cam { border-color: var(--border); }
    .cam video {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: contain; display: block; background: #000;
    }
    .grid.two .cam, .grid.four .cam { cursor: pointer; }
    .cam video { transform-origin: center center; will-change: transform; }
    .cam.zoomed { cursor: grab; touch-action: none; }
    .cam.zoomed.panning { cursor: grabbing; }

    .back-btn {
      display: none; position: absolute; top: 8px; left: 58px; z-index: 7;
      background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); color: var(--text);
      border: 1px solid rgba(255,255,255,0.25); border-radius: 6px;
      padding: 4px 10px; font-family: inherit; font-size: 0.72rem; font-weight: 600; cursor: pointer;
    }
    .cam.expanded .back-btn { display: block; }
    .stage:is(:fullscreen, .pfs) .cam.expanded .back-btn { display: none; }
    .back-btn:hover { background: rgba(0,0,0,0.9); border-color: var(--teal); }

    /* small per-camera speaker (multi-view only) */
    .audio-ctl {
      position: absolute; right: 8px; bottom: 8px; z-index: 7;
      display: flex; align-items: center; gap: 6px;
      background: rgba(0,0,0,0.65); backdrop-filter: blur(4px); border-radius: 20px;
      padding: 3px 8px 3px 4px;
    }
    .spk { background: none; border: none; color: var(--text); line-height: 1; cursor: pointer; padding: 3px 4px; display: grid; place-items: center; }
    .spk:hover, .cam.audio .spk { color: var(--teal); }
    .spk svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; display: block; }
    .cam .cam-vol { display: none; width: 70px; accent-color: var(--teal); cursor: pointer; }
    .cam.audio .cam-vol, .cam:hover .cam-vol { display: block; }

    .overlay-top {
      position: absolute; top: 10px; left: 10px; right: 10px;
      display: flex; justify-content: space-between; align-items: flex-start;
      z-index: 5; pointer-events: none;
    }
    .badge-live { display: inline-flex; align-items: center; gap: 6px; background: none; color: #fff; font-size: 0.7rem; font-weight: 700; padding: 3px 2px; letter-spacing: 0.6px; text-shadow: 0 1px 4px rgba(0,0,0,.85); }
    .badge-live::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--red); box-shadow: 0 0 6px var(--red); animation: pulse 1.4s infinite; }
    .badge-q { background: rgba(0,0,0,0.65); backdrop-filter: blur(4px); color: #c0c6d4; font-size: 0.68rem; padding: 3px 8px; border-radius: 4px; }

    .overlay-bottom {
      position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 14px 12px;
      background: linear-gradient(transparent, rgba(0,0,0,0.75)); z-index: 5; pointer-events: none;
    }
    .cam-title { font-size: 0.9rem; font-weight: 600; }

    .loader {
      position: absolute; inset: 0; background: rgba(10,12,16,0.9);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 12px; z-index: 4; color: var(--muted); font-size: 0.85rem;
    }
    .loader.hide { display: none; }
    .spin {
      width: 26px; height: 26px; border: 3px solid var(--border);
      border-top-color: var(--teal); border-radius: 50%; animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ---------- Player control bar ---------- */
    .ctrl-bar {
      flex-shrink: 0; display: flex; align-items: center; justify-content: space-between;
      gap: 10px; padding: 0 24px 8px; transition: opacity 0.3s; flex-wrap: wrap; justify-content: flex-end;
    }
    .stage:is(:fullscreen, .pfs) .ctrl-bar {
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 15;
      padding: 40px 24px 18px; background: linear-gradient(transparent, rgba(0,0,0,0.7));
      pointer-events: none;
    }
    .stage:is(:fullscreen, .pfs) .ctrl-bar .ctrl-group,
    .stage:is(:fullscreen, .pfs) .ctrl-bar .q-select { pointer-events: auto; }
    .stage.idle .ctrl-bar { opacity: 0; pointer-events: none; }
    .ctrl-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-left: auto; }

    .ctrl-group {
      display: flex; align-items: center; gap: 4px;
      background: rgba(18, 21, 28, 0.85); backdrop-filter: blur(6px);
      border: 1px solid var(--border); border-radius: 999px; padding: 4px;
    }
    .ctrl-btn {
      width: 34px; height: 34px; border-radius: 50%; border: none; background: transparent;
      color: var(--text); cursor: pointer; display: grid; place-items: center;
      transition: background 0.15s, color 0.15s; font-family: inherit;
    }
    .ctrl-btn:hover { background: var(--teal-dim); color: var(--teal); }
    .ctrl-btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .ctrl-btn.txt { font-size: 1.1rem; font-weight: 600; line-height: 1; }

    #vol { width: 90px; accent-color: var(--teal); cursor: pointer; margin: 0 10px 0 2px; }
    .boost-btn {
      height: 34px; padding: 0 14px; border: none; border-radius: 999px; background: transparent;
      color: var(--muted); font-family: inherit; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.6px; cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }
    .boost-btn:hover { color: var(--text); }
    .boost-btn.on { background: var(--teal-dim); color: var(--teal); }
    .spd-val {
      min-width: 46px; text-align: center; font-size: 0.8rem; font-weight: 600;
      font-variant-numeric: tabular-nums; color: var(--text);
    }
    .q-select {
      appearance: none; -webkit-appearance: none;
      background: rgba(18, 21, 28, 0.85) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' fill='none' stroke='%237d8699' stroke-width='1.6' stroke-linecap='round'/></svg>") no-repeat right 12px center;
      color: var(--text); border: 1px solid var(--border); border-radius: 999px;
      padding: 9px 30px 9px 16px; font-family: inherit; font-size: 0.8rem; font-weight: 600;
      cursor: pointer; transition: border-color 0.15s;
    }
    .q-select:hover, .q-select:focus { outline: none; border-color: var(--teal); }
    .q-select option { background: var(--panel); color: var(--text); }

    /* ---------- Bottom nav pill ---------- */
    .nav { flex-shrink: 0; display: flex; justify-content: center; padding: 6px 12px 16px; }
    .nav-pill {
      display: flex; align-items: center; gap: 4px; padding: 6px;
      background: var(--panel); border: 1px solid var(--border); border-radius: 999px;
      max-width: 100%; overflow-x: auto; scrollbar-width: none;
    }
    .nav-pill::-webkit-scrollbar { display: none; }
    .nav-btn {
      display: flex; align-items: center; gap: 8px; white-space: nowrap;
      padding: 10px 18px; border-radius: 999px; border: none; background: transparent;
      color: var(--muted); font-family: inherit; font-size: 0.85rem; font-weight: 600;
      cursor: pointer; transition: background 0.15s, color 0.15s;
    }
    .nav-btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
    .nav-btn:hover { color: var(--text); background: var(--card); }
    .nav-btn.active { background: var(--teal); color: #04120d; }

    /* ---------- 2-view slot picker ---------- */
    .nav { position: relative; }
    .slots {
      position: absolute; left: 50%; bottom: 100%; transform: translateX(-50%);
      margin-bottom: 2px; z-index: 30; display: flex; flex-direction: column; gap: 8px;
      background: rgba(18, 21, 28, 0.96); backdrop-filter: blur(8px);
      border: 1px solid var(--border); border-radius: 16px; padding: 12px 14px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    }
    .slots[hidden] { display: none; }
    .slot-row { display: flex; align-items: center; gap: 8px; }
    .slot-label {
      width: 68px; font-size: 0.68rem; font-weight: 700; color: var(--muted);
      letter-spacing: 0.8px; text-transform: uppercase;
    }
    .slot-btn {
      min-width: 62px; padding: 9px 12px; border-radius: 9px; cursor: pointer;
      background: var(--card); border: 1px solid var(--border); color: var(--muted);
      font-family: inherit; font-size: 0.76rem; font-weight: 700; letter-spacing: 0.4px;
      transition: border-color 0.15s, color 0.15s, background 0.15s, box-shadow 0.15s;
    }
    .slot-btn:hover { color: var(--text); border-color: #3a4255; }
    .slot-btn.active {
      color: #fff; background: var(--teal-dim); border-color: var(--teal);
      box-shadow: 0 0 0 1px var(--teal) inset, 0 0 14px rgba(0, 210, 160, 0.25);
    }

    @media (max-width: 800px) {
      .top { padding: 10px 12px; }
      .info-pill { padding: 5px 10px; }
      .ctrl-bar { padding: 0 8px 6px; }
      #vol { display: none; }
      .grid { gap: 6px; padding: 6px; }
      .grid.four { grid-template-columns: minmax(0, 1fr); grid-template-rows: repeat(4, minmax(0, 1fr)); }
      .grid.two  { grid-template-columns: minmax(0, 1fr); grid-template-rows: repeat(2, minmax(0, 1fr)); }
      .nav { padding: 4px 8px 12px; }
      .nav-btn { padding: 10px 12px; }
      .nav-btn:not(.active) span { display: none; }
    }

    /* ---------- Live chat ---------- */
    .chat-wrap { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 60; display: flex; flex-direction: column; align-items: flex-end; pointer-events: none; }
    .chat-wrap > * { pointer-events: auto; }
    .chat-toggle { position: relative; width: 50px; height: 50px; border-radius: 50%; border: 1px solid var(--border); background: rgba(18,21,28,.92); color: var(--text); cursor: pointer; display: grid; place-items: center; backdrop-filter: blur(6px); box-shadow: 0 4px 16px rgba(0,0,0,.4); }
    .chat-wrap.open .chat-toggle { display: none; }
    .stage { transition: padding-right .2s ease; }
    .stage.chat-reserve { padding-right: 300px; }
    @media (max-width: 699px) { .stage.chat-reserve { padding-right: 0; } }
    .chat-toggle:hover { border-color: var(--teal); }
    .chat-toggle svg { width: 24px; height: 24px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .chat-dot { position: absolute; top: 6px; right: 6px; width: 10px; height: 10px; background: var(--red); border-radius: 50%; display: none; }
    .chat-panel { width: min(290px, calc(100vw - 20px)); height: min(480px, 62vh); display: none; flex-direction: column; background: rgba(18,21,28,.96); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; backdrop-filter: blur(8px); }
    .chat-wrap.open .chat-panel { display: flex; }
    .chat-head { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid var(--border); font-size: .8rem; font-weight: 700; }
    .chat-head button { background: none; border: 0; color: var(--muted); cursor: pointer; font-size: 1rem; }
    .chat-msgs { flex: 1; overflow-y: auto; padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; font-size: .82rem; line-height: 1.35; }
    .chat-msg b { color: var(--teal); font-weight: 600; margin-right: 6px; }
    .chat-msg.me b { color: #00b4d8; }
    .chat-msg span { word-break: break-word; }
    .chat-empty { color: var(--muted); text-align: center; margin: auto; font-size: .78rem; }
    .chat-me { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-bottom: 1px solid var(--border); font-size: .78rem; color: var(--muted); }
    .chat-me .nm { color: var(--teal); font-weight: 600; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .chat-me input { flex: 1; min-width: 0; background: var(--card); border: 1px solid var(--teal); border-radius: 6px; color: var(--text); padding: 4px 8px; font: inherit; font-size: .78rem; outline: none; display: none; }
    .chat-me.editing input { display: block; }
    .chat-me.editing .nm { display: none; }
    .chat-me button { background: var(--card); border: 1px solid var(--border); color: var(--text); border-radius: 6px; padding: 4px 8px; font: inherit; font-size: .72rem; cursor: pointer; white-space: nowrap; }
    .chat-me button:hover { border-color: var(--teal); }
    .chat-foot { border-top: 1px solid var(--border); padding: 8px; display: flex; flex-direction: column; gap: 6px; }
    .chat-foot input { width: 100%; background: var(--card); border: 1px solid var(--border); border-radius: 8px; color: var(--text); padding: 8px 10px; font: inherit; font-size: .82rem; outline: none; }
    .chat-foot input:focus { border-color: var(--teal); }
    .chat-row { display: flex; gap: 6px; }
    .chat-row input { flex: 1; }
    .chat-row button { background: var(--teal); color: #000; border: 0; border-radius: 8px; padding: 0 14px; font: inherit; font-weight: 700; font-size: .8rem; cursor: pointer; }
    .chat-note { font-size: .68rem; color: var(--red); min-height: 1em; }
  </style>
</head>
<body>

  <header class="top">
    <div class="logo">
      <div class="logo-icon">PBB</div>
      <div>
        <h1>PBB LIVE ACCESS</h1>
        <small>PBB LIVE ACCESS</small>
      </div>
    </div>
    <div class="status-right">
      <div class="live-pill"><span></span> LIVE</div>
      <div class="info-pill" title="Mga nanonood ngayon">
        <svg class="sig" viewBox="0 0 24 24"><path d="M4 20v-3"/><path d="M10 20v-7"/><path d="M16 20V9"/><path d="M22 20V4"/></svg>
        <b id="viewerCount">1</b><span>watching</span>
      </div>
    </div>
  </header>

  <div class="stage" id="stage">
    <div class="chat-wrap" id="chatWrap">
      <div class="chat-panel">
        <div class="chat-head"><span>💬 Live Chat</span><button type="button" id="chatClose" title="Close">✕</button></div>
        <div class="chat-me" id="chatMeBar">
          <span>Ikaw:</span>
          <span class="nm" id="chatMe">Anon</span>
          <input id="chatEdit" maxlength="20" autocomplete="off" />
          <button type="button" id="chatRename">Change name</button>
        </div>
        <div class="chat-msgs" id="chatMsgs"><div class="chat-empty" id="chatEmpty">Wala pang chat. Mauna ka na!</div></div>
        <div class="chat-foot">
          <div class="chat-row">
            <input id="chatText" maxlength="200" placeholder="Mag-chat..." autocomplete="off" />
            <button type="button" id="chatSend">Send</button>
          </div>
          <div class="chat-note" id="chatNote"></div>
        </div>
      </div>
      <button class="chat-toggle" type="button" id="chatToggle" title="Chat">
        <svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><circle cx="8.5" cy="12" r=".6" fill="currentColor"/><circle cx="12" cy="12" r=".6" fill="currentColor"/><circle cx="15.5" cy="12" r=".6" fill="currentColor"/></svg>
        <span class="chat-dot" id="chatDot"></span>
      </button>
    </div>
    <div class="grid four" id="grid">
      <div class="cam" data-id="1">
        <div class="overlay-top"><span class="badge-live">LIVE</span><span class="badge-q" data-q>AUTO</span></div>
        <div class="loader" id="load1"><div class="spin"></div><span>Connecting...</span></div>
        <video id="v1" muted playsinline crossorigin="anonymous"></video>
        <button class="back-btn" type="button">← Back</button>
        <div class="audio-ctl"><button class="spk" type="button" title="Turn on sound for this camera"></button><input class="cam-vol" type="range" min="0" max="100" value="70" title="Volume" /></div>
        <div class="overlay-bottom"><div class="cam-title">Main Stage</div></div>
      </div>

      <div class="cam" data-id="2">
        <div class="overlay-top"><span class="badge-live">LIVE</span><span class="badge-q" data-q>AUTO</span></div>
        <div class="loader" id="load2"><div class="spin"></div><span>Connecting...</span></div>
        <video id="v2" muted playsinline crossorigin="anonymous"></video>
        <button class="back-btn" type="button">← Back</button>
        <div class="audio-ctl"><button class="spk" type="button" title="Turn on sound for this camera"></button><input class="cam-vol" type="range" min="0" max="100" value="70" title="Volume" /></div>
        <div class="overlay-bottom"><div class="cam-title">All Access</div></div>
      </div>

      <div class="cam" data-id="3">
        <div class="overlay-top"><span class="badge-live">LIVE</span><span class="badge-q" data-q>AUTO</span></div>
        <div class="loader" id="load3"><div class="spin"></div><span>Connecting...</span></div>
        <video id="v3" muted playsinline crossorigin="anonymous"></video>
        <button class="back-btn" type="button">← Back</button>
        <div class="audio-ctl"><button class="spk" type="button" title="Turn on sound for this camera"></button><input class="cam-vol" type="range" min="0" max="100" value="70" title="Volume" /></div>
        <div class="overlay-bottom"><div class="cam-title">External Den</div></div>
      </div>

      <div class="cam" data-id="4">
        <div class="overlay-top"><span class="badge-live">LIVE</span><span class="badge-q" data-q>AUTO</span></div>
        <div class="loader" id="load4"><div class="spin"></div><span>Connecting...</span></div>
        <video id="v4" muted playsinline crossorigin="anonymous"></video>
        <button class="back-btn" type="button">← Back</button>
        <div class="audio-ctl"><button class="spk" type="button" title="Turn on sound for this camera"></button><input class="cam-vol" type="range" min="0" max="100" value="70" title="Volume" /></div>
        <div class="overlay-bottom"><div class="cam-title">Dining Area</div></div>
      </div>

      <button class="fs-exit" id="fsExit" type="button">← Back</button>
    </div>

    <!-- Player controls -->
    <div class="ctrl-bar" id="ctrlBar">
      <div class="ctrl-right">
        <div class="ctrl-group" id="zoomGroup" title="Zoom (drag the video to move around when zoomed)">
          <button class="ctrl-btn txt" id="spdDown" type="button" aria-label="Zoom out">−</button>
          <span class="spd-val" id="spdVal">1.0x</span>
          <button class="ctrl-btn txt" id="spdUp" type="button" aria-label="Zoom in">+</button>
        </div>

        <div class="ctrl-group" title="Volume">
          <button class="ctrl-btn" id="muteBtn" type="button" title="Mute all"></button>
          <input type="range" id="vol" min="0" max="100" value="70" title="Master volume" />
        </div>

        <div class="ctrl-group" id="boostGroup">
          <button class="boost-btn" id="boostBtn" type="button" title="Boost volume (louder than 100%)" aria-pressed="false">BOOST</button>
        </div>

        <select class="q-select" id="quality" title="Quality">
          <option value="AUTO" selected>Auto</option>
          <option value="1080">1080p</option>
          <option value="720">720p</option>
          <option value="480">480p</option>
          <option value="360">360p</option>
        </select>

        <div class="ctrl-group">
          <button class="ctrl-btn" id="fsBtn" type="button" title="Fullscreen">
            <svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom nav pill -->
  <nav class="nav">
    <div class="slots" id="slots" hidden>
      <div class="slot-row" data-slot="0">
        <span class="slot-label">Screen 1</span>
        <button class="slot-btn" type="button" data-cam="0">MAIN STAGE</button>
        <button class="slot-btn" type="button" data-cam="1">ALL ACCESS</button>
        <button class="slot-btn" type="button" data-cam="2">EXTERNAL DEN</button>
        <button class="slot-btn" type="button" data-cam="3">DINING AREA</button>
      </div>
      <div class="slot-row" data-slot="1">
        <span class="slot-label">Screen 2</span>
        <button class="slot-btn" type="button" data-cam="0">MAIN STAGE</button>
        <button class="slot-btn" type="button" data-cam="1">ALL ACCESS</button>
        <button class="slot-btn" type="button" data-cam="2">EXTERNAL DEN</button>
        <button class="slot-btn" type="button" data-cam="3">DINING AREA</button>
      </div>
    </div>
    <div class="nav-pill" id="nav">
      <button class="nav-btn" type="button" data-cam="0">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg><span>Main</span>
      </button>
      <button class="nav-btn" type="button" data-cam="1">
        <svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg><span>All Access</span>
      </button>
      <button class="nav-btn" type="button" data-cam="2">
        <svg viewBox="0 0 24 24"><rect x="5" y="3" width="10" height="18" rx="1"/><path d="M15 9h4v12h-4M9 7h2M9 11h2M9 15h2"/></svg><span>External</span>
      </button>
      <button class="nav-btn" type="button" data-cam="3">
        <svg viewBox="0 0 24 24"><path d="M6 3v7a2 2 0 0 0 2 2v9M4 3v5M8 3v5M18 3c-2 2-3 5-3 8h3v10"/></svg><span>Dining</span>
      </button>
      <button class="nav-btn" type="button" data-view="2">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/></svg><span>2-view</span>
      </button>
      <button class="nav-btn" type="button" data-view="4">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M3 12h18"/></svg><span>All</span>
      </button>
    </div>
  </nav>

  <script>
    const ORIGIN = 'https://absp-live.akamaized.net';

    const STREAMS = {
      1: ORIGIN + '/dash/live/2099522/pinoybigbrothercollabedition30live/manifest.mpd',
      2: ORIGIN + '/dash/live/2099522/pbbcollab30allaccesslivestream/manifest.mpd',
      3: ORIGIN + '/dash/live/2099522/pbbcollab30allaccesslivestream-externalden/manifest.mpd',
      4: ORIGIN + '/dash/live/2099522/pbbcollab30allaccesslivestream-diningarea/manifest.mpd'
    };

    const CLEAR_KEYS = {
      1: '1044e7ece2d741bcafe80d8613da104f:f5e17f169ff05ea40c5d3f065f523942',
      2: '8150b74d16324bb4b2ff62e3e202fc7a:0c5ed4f9db9d4ee61bbc91b3a51ef8b5',
      3: 'b750a40736a24e60b5a4f256208b92c5:af07292597f692726dcac2bd297ddf8e',
      4: 'ea6588d030c94ca89925ac0c49974430:3e6de4afee1eff8e14f9506b76ac9ee6'
    };

    function clearKeysFor(camId) {
      const pair = CLEAR_KEYS[camId];
      if (!pair) return null;
      const [kid, key] = pair.split(':');
      if (!kid || !key) return null;
      const dashed = kid.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5').toLowerCase();
      return { [kid]: key, [dashed]: key };
    }

    const $ = id => document.getElementById(id);
    const players = {};
    const reloadTimers = {};
    const videos = {};
    let focus = 0;
    let layout = 4;
    let muted = false;                      // master mute (bottom bar)
    let masterVol = 100;                    // master volume (bottom bar)
    const audioOn = { 1: false, 2: false, 3: false, 4: false }; // per-camera sound: all muted on load, any number can be turned on
    let audioLocked = false; // browser blocked sound-on autoplay until first click/tap
    let expanded = null;
    let zoom = 1, panX = 0, panY = 0, zoomKey = null;
    let currentQuality = 'AUTO';
    const volumes = { 1: 70, 2: 70, 3: 70, 4: 70 };
    const CAM_NAMES = { 1: 'Main Stage', 2: 'All Access', 3: 'External Den', 4: 'Dining Area' };

    // AUTO keeps the original 720p cap so 4 feeds stay light
    const AUTO_MAX_HEIGHT = 720;

    if (window.shaka) shaka.polyfill.installAll();

    /* ---------------- Quality ---------------- */
    function activeTrack(p) {
      try { return p.getVariantTracks().find(t => t.active); } catch (e) { return null; }
    }

    function updateBadge(i) {
      const el = document.querySelector('.cam[data-id="' + i + '"] [data-q]');
      if (!el) return;
      const p = players[i];
      const tr = p && activeTrack(p);
      const h = tr && tr.height ? tr.height + 'P' : '';
      if (currentQuality === 'AUTO') el.textContent = h ? 'AUTO · ' + h : 'AUTO';
      else el.textContent = h || (currentQuality + 'P');
    }

    function applyQualityTo(i) {
      const p = players[i];
      if (!p) return;
      try {
        const tracks = p.getVariantTracks();
        if (!tracks.length) return;

        if (currentQuality === 'AUTO') {
          p.configure({ abr: { enabled: true, restrictions: { maxHeight: AUTO_MAX_HEIGHT } } });
          return;
        }

        const target = +currentQuality;
        const cur = tracks.find(t => t.active);
        // stay on the same audio language so quality change doesn't swap the audio
        let pool = cur ? tracks.filter(t => t.language === cur.language) : tracks;
        if (!pool.length) pool = tracks;

        const heights = [...new Set(pool.map(t => t.height || 0))].sort((a, b) => a - b);
        let h = [...heights].reverse().find(x => x <= target);
        if (h === undefined) h = heights[0];           // nothing that low -> lowest available
        const best = pool.filter(t => (t.height || 0) === h)
                         .sort((a, b) => b.bandwidth - a.bandwidth)[0];
        if (!best) return;

        // lock to this track: turn ABR off, remove caps, then switch right away
        p.configure({ abr: { enabled: false, restrictions: { maxHeight: Infinity } } });
        p.selectVariantTrack(best, true);
      } catch (e) {
        console.warn('Quality switch failed on cam', i, e);
      }
    }

    function applyQuality() {
      for (let i = 1; i <= 4; i++) {
        applyQualityTo(i);
        updateBadge(i);
      }
    }

    /* ---------------- Players ---------------- */
    async function initPlayer(i) {
      const vid = $('v' + i);
      videos[i] = vid;
      const loader = $('load' + i);
      vid.addEventListener('playing', () => { if (loader) loader.classList.add('hide'); });

      try {
        const player = new shaka.Player();
        await player.attach(vid);
        players[i] = player;

        const keys = clearKeysFor(i);
        if (keys) {
          player.configure({ drm: { preferredKeySystems: ['org.w3.clearkey'], clearKeys: keys } });
        }

        player.configure({
          abr: { enabled: true, restrictions: { maxHeight: AUTO_MAX_HEIGHT } },
          manifest: { dash: { clockSyncUri: 'https://time.akamai.com/?iso&ms' } },
          streaming: {
            bufferingGoal: 20, rebufferingGoal: 4, bufferBehind: 30,
            retryParameters: { maxAttempts: 6, baseDelay: 500, backoffFactor: 2, fuzzFactor: 0.5, timeout: 20000 }
          }
        });
        player.configure('manifest.retryParameters',
          { maxAttempts: 6, baseDelay: 500, backoffFactor: 2, fuzzFactor: 0.5, timeout: 20000 });

        player.addEventListener('error', ev => {
          const detail = (ev && ev.detail) || {};
          console.warn('Cam', i, 'error', detail.code, detail.message || detail, detail.data);
          // severity 2 = critical: reload the stream after a short delay
          if (detail.severity === 2) {
            clearTimeout(reloadTimers[i]);
            reloadTimers[i] = setTimeout(async () => {
              try { await player.load(STREAMS[i]); await vid.play(); applyQualityTo(i); } catch (e) {}
            }, 3000);
          }
        });
        player.addEventListener('variantchanged', () => updateBadge(i));
        player.addEventListener('adaptation', () => updateBadge(i));

        await player.load(STREAMS[i]);
        try {
          await vid.play();
        } catch (e) {
          // browser won't autoplay with sound: play muted now, unmute on first click/tap
          if (e && e.name === 'NotAllowedError') {
            audioLocked = true;
            applyAudio();
            try { await vid.play(); } catch (e2) {}
          }
        }

        applyQualityTo(i);
        updateBadge(i);

        if (loader) loader.classList.add('hide');
      } catch (err) {
        console.error('Cam', i, 'failed', err);
        if (loader) {
          loader.classList.remove('hide');
          loader.innerHTML = '<span>Offline</span>';
        }
      }
    }

    for (let i = 1; i <= 4; i++) initPlayer(i);

    /* ---------------- Layout / navigation ---------------- */
    const grid = $('grid');
    const stage = $('stage');
    const cams = document.querySelectorAll('.cam');
    const navBtns = document.querySelectorAll('.nav-btn');

    function updateNav() {
      let key;
      if (expanded !== null) key = 'cam' + expanded;
      else if (layout === 1) key = 'cam' + focus;
      else key = 'view' + layout;
      navBtns.forEach(b => {
        const k = b.dataset.cam !== undefined ? 'cam' + b.dataset.cam : 'view' + b.dataset.view;
        b.classList.toggle('active', k === key);
      });
    }

    // 2-view: aling camera ang nasa Slot A at Slot B (0=Main, 1=All, 2=External, 3=Dining)
    const slotsEl = $('slots');
    let slots = [0, 1];
    let slotsOpen = false;

    function updateSlots() {
      const show = slotsOpen && layout === 2 && expanded === null;
      slotsEl.hidden = !show;
      slotsEl.querySelectorAll('.slot-row').forEach(row => {
        const si = +row.dataset.slot;
        row.querySelectorAll('.slot-btn').forEach(btn => {
          btn.classList.toggle('active', +btn.dataset.cam === slots[si]);
        });
      });
    }

    function setLayout(n) {
      layout = n;
      cams.forEach(c => { c.classList.remove('off', 'expanded'); c.style.order = ''; });
      grid.className = 'grid';
      if (expanded !== null) {
        grid.classList.add('one');
        cams.forEach((c, i) => {
          if (i !== expanded) c.classList.add('off'); else c.classList.add('expanded');
        });
      } else if (n === 1) {
        grid.classList.add('one');
        cams.forEach((c, i) => { if (i !== focus) c.classList.add('off'); });
      } else if (n === 2) {
        grid.classList.add('two');
        cams.forEach((c, i) => {
          const k = slots.indexOf(i);
          if (k < 0) c.classList.add('off'); else c.style.order = k;
        });
      } else {
        grid.classList.add('four');
      }
      applyAudio();
      applyZoom();
      updateNav();
      updateSlots();
      fitGrid();
    }

    navBtns.forEach(b => {
      b.addEventListener('click', () => {
        const was2view = layout === 2 && expanded === null;
        expanded = null;
        if (b.dataset.cam !== undefined) {
          focus = +b.dataset.cam;
          muted = false;
          slotsOpen = false;
          setLayout(1);
        } else {
          const n = +b.dataset.view;
          // 2-view: buksan ang slot panel; pindutin ulit para isara
          slotsOpen = n === 2 ? (was2view ? !slotsOpen : true) : false;
          setLayout(n);
        }
      });
    });

    slotsEl.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const si = +btn.closest('.slot-row').dataset.slot;
        const ci = +btn.dataset.cam;
        const other = 1 - si;
        if (slots[other] === ci) slots[other] = slots[si];   // palitan ang dalawa kung pareho
        slots[si] = ci;
        setLayout(2);
      });
    });

    // isara ang panel kapag pumindot sa labas
    document.addEventListener('click', e => {
      if (slotsOpen && !e.target.closest('#slots, .nav-btn[data-view="2"]')) {
        slotsOpen = false;
        updateSlots();
      }
    });

    /* ---------------- Audio ---------------- */
    const volSlider = $('vol');
    const muteBtn = $('muteBtn');
    const ICON_VOL  = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
    const ICON_MUTE = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>';

    function applyAudio() {
      for (let i = 1; i <= 4; i++) {
        const v = videos[i];
        if (!v) continue;
        v.muted = audioLocked || muted || !audioOn[i];
        v.volume = Math.max(0, Math.min(1, (volumes[i] / 100) * (masterVol / 100)));
      }
      cams.forEach(c => {
        const id = +c.dataset.id;
        c.classList.toggle('audio', !!audioOn[id]);
        c.querySelector('.spk').innerHTML = audioOn[id] ? ICON_VOL : ICON_MUTE;
        c.querySelector('.spk').title = audioOn[id] ? 'Mute this camera' : 'Turn on sound for this camera';
        c.querySelector('.cam-vol').value = volumes[id];
      });
      volSlider.value = masterVol;
      muteBtn.innerHTML = muted ? ICON_MUTE : ICON_VOL;
      muteBtn.title = muted ? 'Unmute all' : 'Mute all';
    }

    function toggleCamAudio(id) {
      audioOn[id] = !audioOn[id];
      if (audioOn[id]) muted = false;  // turning a cam on should be heard
      applyAudio();
    }

    let fsFromExpanded = false;
    document.addEventListener('fullscreenchange', () => {
      fsFromExpanded = !!document.fullscreenElement && expanded !== null;
    });

    function goBack() {
      if (fsFromExpanded && document.fullscreenElement) document.exitFullscreen().catch(() => {});
      fsFromExpanded = false;
      expanded = null;
      setLayout(layout);
    }

    cams.forEach((c, i) => {
      const id = +c.dataset.id;
      c.addEventListener('click', e => {
        if (e.target.closest('.audio-ctl, .back-btn')) return;
        // clicking a camera turns its sound on automatically
        audioOn[id] = true;
        muted = false;
        applyAudio();
        if (expanded === null && layout !== 1) {
          expanded = i;
          setLayout(layout);
        }
      });
      // keep clicks on the speaker/volume from reaching the cam's own click handler
      // (the icon gets re-rendered, so closest() can no longer find .audio-ctl and would turn sound back on)
      c.querySelector('.audio-ctl').addEventListener('click', e => e.stopPropagation());
      c.querySelector('.spk').addEventListener('click', () => {
        toggleCamAudio(id);
      });
      c.querySelector('.cam-vol').addEventListener('input', e => {
        volumes[id] = +e.target.value;
        applyAudio();
      });
      c.querySelector('.back-btn').addEventListener('click', goBack);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && stage.classList.contains('pfs')) { setPfs(false); return; }
      if (e.key === 'Escape' && expanded !== null && !document.fullscreenElement) goBack();
    });

    muteBtn.addEventListener('click', () => { muted = !muted; applyAudio(); });
    volSlider.addEventListener('input', e => {
      masterVol = +e.target.value;
      if (muted && masterVol > 0) muted = false;
      applyAudio();
    });

    /* ---------------- Boost (volume above 100%) ---------------- */
    const BOOST_LEVEL = 2; // loudness when Boost is ON (2x)
    let boost = 1, audioCtx = null;
    const boostGains = {};

    function ensureBoostGraph() {
      if (audioCtx) return true;
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AC();
        for (let i = 1; i <= 4; i++) {
          const src = audioCtx.createMediaElementSource(videos[i]);
          const g = audioCtx.createGain();
          const limiter = audioCtx.createDynamicsCompressor(); // keeps boosted sound from crackling
          src.connect(g); g.connect(limiter); limiter.connect(audioCtx.destination);
          boostGains[i] = g;
        }
        return true;
      } catch (e) {
        console.warn('Boost unavailable', e);
        audioCtx = null;
        return false;
      }
    }

    function applyBoost() {
      if (boost > 1 && !ensureBoostGraph()) boost = 1;
      if (audioCtx) {
        audioCtx.resume().catch(() => {});
        for (let i = 1; i <= 4; i++) if (boostGains[i]) boostGains[i].gain.value = boost;
      }
      $('boostBtn').classList.toggle('on', boost > 1);
      $('boostBtn').setAttribute('aria-pressed', boost > 1 ? 'true' : 'false');
    }
    $('boostBtn').addEventListener('click', () => { boost = boost > 1 ? 1 : BOOST_LEVEL; applyBoost(); });

    /* ---------------- Zoom ---------------- */
    const ZOOM_MIN = 1, ZOOM_MAX = 4, ZOOM_STEP = 0.25;

    // zoom only exists when ONE video is shown (1-view or expanded)
    function isSingle() { return expanded !== null || layout === 1; }

    function clampPan() {
      const c = [...cams].find(x => !x.classList.contains('off'));
      const w = c ? c.clientWidth : 0, h = c ? c.clientHeight : 0;
      const mx = (zoom - 1) * w / 2, my = (zoom - 1) * h / 2;
      panX = Math.max(-mx, Math.min(mx, panX));
      panY = Math.max(-my, Math.min(my, panY));
    }

    function applyZoom() {
      const single = isSingle();
      // reset whenever the single video changes or we go back to multi-view
      const key = single ? ([...cams].findIndex(x => !x.classList.contains('off'))) : null;
      if (key !== zoomKey) { zoomKey = key; zoom = 1; panX = 0; panY = 0; }
      if (!single) zoom = 1;
      if (zoom <= 1) { panX = 0; panY = 0; } else clampPan();
      cams.forEach((c, i) => {
        const v = videos[i + 1];
        const on = single && zoom > 1 && !c.classList.contains('off');
        if (v) v.style.transform = on ? 'translate(' + panX + 'px,' + panY + 'px) scale(' + zoom + ')' : '';
        c.classList.toggle('zoomed', on);
      });
      $('zoomGroup').style.display = single ? '' : 'none';
      $('spdVal').textContent = zoom.toFixed(2).replace(/0$/, '') + 'x';
    }
    function setZoom(z) {
      if (!isSingle()) return;
      zoom = Math.round(Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z)) * 100) / 100;
      applyZoom();
    }
    $('spdDown').addEventListener('click', () => setZoom(zoom - ZOOM_STEP));
    $('spdUp').addEventListener('click',   () => setZoom(zoom + ZOOM_STEP));

    // mouse wheel zoom on the video
    cams.forEach(c => c.addEventListener('wheel', e => {
      if (!isSingle()) return;
      e.preventDefault();
      setZoom(zoom + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
    }, { passive: false }));

    // drag to pan when zoomed (and don't treat a drag as a click)
    let drag = null, dragMoved = false;
    cams.forEach(c => {
      c.addEventListener('pointerdown', e => {
        if (zoom <= 1 || e.target.closest('.audio-ctl, .back-btn')) return;
        drag = { x: e.clientX, y: e.clientY, px: panX, py: panY, id: e.pointerId };
        dragMoved = false;
        try { c.setPointerCapture(e.pointerId); } catch (_) {}
      });
      c.addEventListener('pointermove', e => {
        if (!drag || e.pointerId !== drag.id) return;
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!dragMoved && Math.abs(dx) + Math.abs(dy) < 5) return;
        dragMoved = true;
        c.classList.add('panning');
        panX = drag.px + dx; panY = drag.py + dy;
        applyZoom();
      });
      const end = () => { drag = null; c.classList.remove('panning'); };
      c.addEventListener('pointerup', end);
      c.addEventListener('pointercancel', end);
      c.addEventListener('click', e => { if (dragMoved) { e.stopImmediatePropagation(); dragMoved = false; } }, true);
    });
    window.addEventListener('resize', applyZoom);

    /* ---------------- Quality select ---------------- */
    $('quality').addEventListener('change', e => {
      currentQuality = e.target.value;
      applyQuality();
      e.target.blur();
    });

    /* ---------------- Grid fit ---------------- */
    function fitGrid() {
      const visible = [...cams].filter(c => !c.classList.contains('off'));
      const n = visible.length;
      if (!n) return;
      const cs = getComputedStyle(grid);
      const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
      const gap = parseFloat(cs.columnGap) || 0;
      const W = grid.clientWidth - padX;
      const H = grid.clientHeight - padY;
      if (W <= 0 || H <= 0) return;

      let best = { w: 0, c: 1, r: n };
      for (let c = 1; c <= n; c++) {
        const r = Math.ceil(n / c);
        const cellW = (W - gap * (c - 1)) / c;
        const cellH = (H - gap * (r - 1)) / r;
        const w = Math.min(cellW, cellH * 16 / 9);
        if (w > best.w + 0.5) best = { w, c, r };
      }
      const w = Math.floor(best.w);
      const h = Math.floor(w * 9 / 16);
      grid.style.gridTemplateColumns = `repeat(${best.c}, ${w}px)`;
      grid.style.gridTemplateRows = `repeat(${best.r}, ${h}px)`;
      if (typeof chatReserve === 'function') chatReserve();
    }

    new ResizeObserver(fitGrid).observe(grid);
    window.addEventListener('resize', fitGrid);
    window.addEventListener('orientationchange', () => setTimeout(fitGrid, 200));

    /* ---------------- Fullscreen + idle hide ---------------- */
    const fsExit = $('fsExit');

    // iPhone Safari walang element fullscreen -> gumagamit tayo ng "pseudo fullscreen"
    function isFs() { return !!document.fullscreenElement || stage.classList.contains('pfs'); }
    function setPfs(on) {
      stage.classList.toggle('pfs', on);
      document.body.style.overflow = on ? 'hidden' : '';
      if (on) wake(); else { clearTimeout(idleTimer); stage.classList.remove('idle'); }
      setTimeout(fitGrid, 100);
    }
    function enterFs() {
      const req = stage.requestFullscreen || stage.webkitRequestFullscreen;
      if (!req) { setPfs(true); return; }
      try {
        const r = req.call(stage);
        if (r && r.catch) r.catch(() => setPfs(true));
      } catch (e) { setPfs(true); }
    }
    function exitFs() {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      if (stage.classList.contains('pfs')) setPfs(false);
    }
    let idleTimer;
    function wake() {
      stage.classList.remove('idle');
      clearTimeout(idleTimer);
      if (isFs()) {
        idleTimer = setTimeout(() => {
          // huwag itago ang bar habang nakaturo ang mouse o bukas ang quality menu
          if ($('ctrlBar').matches(':hover') || document.activeElement === $('quality')) { wake(); return; }
          stage.classList.add('idle');
        }, 3000);
      }
    }
    ['mousemove', 'touchstart', 'click', 'keydown'].forEach(ev =>
      stage.addEventListener(ev, wake, { passive: true })
    );
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) wake();
      else { clearTimeout(idleTimer); stage.classList.remove('idle'); }
      setTimeout(fitGrid, 100);
    });

    fsExit.addEventListener('click', () => {
      if (expanded !== null) goBack();
      else exitFs();
    });

    $('fsBtn').addEventListener('click', () => { isFs() ? exitFs() : enterFs(); });

    /* ---------------- Viewer counter ----------------
       Ilagay dito ang URL ng presence Worker (hal. 'https://pbb-presence.YOURNAME.workers.dev').
       Kapag walang URL o hindi maka-connect, mga tab lang sa browser na ito ang binibilang. */
    // Auto: gagamitin ang parehong server (Render) na nag-serve ng page na ito.
    const PRESENCE_URL = 'https://pbb-site-1.onrender.com';

    const viewerEl = $('viewerCount');
    const myId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    const peers = new Map();
    let remoteCount = null;

    function showViewers() {
      const now = Date.now();
      for (const [id, t] of peers) if (now - t > 12000) peers.delete(id);
      const n = remoteCount !== null ? remoteCount : peers.size + 1;
      viewerEl.textContent = Math.max(1, n).toLocaleString();
    }

    try {
      const bc = new BroadcastChannel('pbb-presence');
      bc.onmessage = e => {
        if (e.data && e.data.id && e.data.id !== myId) {
          if (e.data.bye) peers.delete(e.data.id);
          else peers.set(e.data.id, Date.now());
          showViewers();
        }
      };
      const ping = () => bc.postMessage({ id: myId });
      ping();
      setInterval(ping, 5000);
      window.addEventListener('pagehide', () => { try { bc.postMessage({ id: myId, bye: true }); } catch (e) {} });
    } catch (e) {}

    /* ---------------- Live chat ---------------- */
    const chatWrap = $('chatWrap'), chatMsgs = $('chatMsgs'), chatText = $('chatText'),
          chatNote = $('chatNote'), chatDot = $('chatDot');
    function randomAnon() { return 'Anon_' + (1000 + Math.floor(Math.random() * 9000)); }
    let myName = '';
    try { myName = localStorage.getItem('pbbChatName2') || ''; } catch (e) {}
    if (!myName) { myName = randomAnon(); try { localStorage.setItem('pbbChatName2', myName); } catch (e) {} }
    const chatMe = $('chatMe'), chatEdit = $('chatEdit'), chatRename = $('chatRename'), chatMeBar = $('chatMeBar');
    chatMe.textContent = myName;

    function stopEdit(save) {
      if (save) {
        const v = chatEdit.value.replace(/\s+/g, ' ').trim().slice(0, 20);
        myName = v || randomAnon();
        try { localStorage.setItem('pbbChatName2', myName); } catch (e) {}
        chatMe.textContent = myName;
      }
      chatMeBar.classList.remove('editing');
      chatRename.textContent = 'Change name';
    }
    chatRename.addEventListener('click', () => {
      if (chatMeBar.classList.contains('editing')) { stopEdit(true); return; }
      chatEdit.value = myName;
      chatMeBar.classList.add('editing');
      chatRename.textContent = 'Save';
      chatEdit.focus(); chatEdit.select();
    });
    chatEdit.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); stopEdit(true); }
      else if (e.key === 'Escape') { e.stopPropagation(); stopEdit(false); }
    });

    /* Sa malalapad na screen, hindi gagalaw ang video; uusog lang kapag talagang tatamaan ng chat */
    var chatReady = false;
    function chatReserve() {
      if (!chatReady) return;
      let reserve = false;
      if (chatWrap.classList.contains('open') && window.innerWidth >= 700) {
        const n = [...cams].filter(c => !c.classList.contains('off')).length;
        if (n) {
          const cs = getComputedStyle(grid);
          const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
          const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
          const gap = parseFloat(cs.columnGap) || 0;
          const full = stage.clientWidth;
          const W = full - padX, H = grid.clientHeight - padY;
          if (W > 0 && H > 0) {
            let bw = 0, bc = 1;
            for (let c = 1; c <= n; c++) {
              const r = Math.ceil(n / c);
              const w = Math.min((W - gap * (c - 1)) / c, ((H - gap * (r - 1)) / r) * 16 / 9);
              if (w > bw + 0.5) { bw = w; bc = c; }
            }
            const content = Math.floor(bw) * bc + gap * (bc - 1) + padX;
            reserve = (full + content) / 2 > full - 300;
          }
        }
      }
      stage.classList.toggle('chat-reserve', reserve);
    }

    function chatOpen(v) {
      chatWrap.classList.toggle('open', v);
      chatReserve();
      if (v) { chatDot.style.display = 'none'; chatMsgs.scrollTop = chatMsgs.scrollHeight; }
    }
    chatReady = true;
    chatOpen(window.innerWidth >= 700);   // bukas agad sa laptop/tablet; sa maliit na phone nakasara muna
    $('chatToggle').addEventListener('click', () => chatOpen(!chatWrap.classList.contains('open')));
    $('chatClose').addEventListener('click', () => chatOpen(false));

    function addChat(m, silent) {
      if (!m || typeof m.text !== 'string') return;
      const empty = $('chatEmpty'); if (empty) empty.remove();
      const row = document.createElement('div');
      row.className = 'chat-msg' + (m.id === myId ? ' me' : '');
      const b = document.createElement('b'); b.textContent = String(m.name || 'Viewer').slice(0, 20);
      const t = document.createElement('span'); t.textContent = m.text.slice(0, 200);
      row.append(b, t);
      const atBottom = chatMsgs.scrollHeight - chatMsgs.scrollTop - chatMsgs.clientHeight < 40;
      chatMsgs.appendChild(row);
      while (chatMsgs.children.length > 100) chatMsgs.firstChild.remove();
      if (atBottom || m.id === myId) chatMsgs.scrollTop = chatMsgs.scrollHeight;
      if (!silent && !chatWrap.classList.contains('open')) chatDot.style.display = 'block';
    }

    let noteTimer = null;
    function chatSay(msg) {
      chatNote.textContent = msg;
      clearTimeout(noteTimer);
      noteTimer = setTimeout(() => { chatNote.textContent = ''; }, 3000);
    }

    function sendChat() {
      const text = chatText.value.replace(/\s+/g, ' ').trim();
      if (!text) return;
      if (!presenceWS || presenceWS.readyState !== 1) { chatSay('Hindi pa konektado. Subukan ulit sa ilang segundo.'); return; }
      const name = myName;
      presenceWS.send(JSON.stringify({ type: 'chat', id: myId, name, text }));
      chatText.value = '';
    }
    $('chatSend').addEventListener('click', sendChat);
    chatText.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); sendChat(); } });

    let presenceWS = null, presenceRetry = 0, presencePing = null;
    function connectPresence() {
      if (!PRESENCE_URL) return;
      let ws;
      try { ws = new WebSocket(PRESENCE_URL.replace(/^http/, 'ws')); } catch (e) { return; }
      presenceWS = ws;
      ws.onopen = () => {
        presenceRetry = 0;
        clearInterval(presencePing);
        presencePing = setInterval(() => { try { ws.send('ping'); } catch (e) {} }, 25000);
      };
      ws.onmessage = e => {
        if (e.data === 'pong') return;
        try {
          const d = JSON.parse(e.data);
          if (d.type === 'chat') { addChat(d); return; }
          if (d.type === 'history') { (d.msgs || []).forEach(m => addChat(m, true)); return; }
          if (d.type === 'error') { chatSay(d.message || ''); return; }
          if (Number.isFinite(d.count)) { remoteCount = d.count; showViewers(); }
        } catch (err) {}
      };
      ws.onclose = () => {
        clearInterval(presencePing);
        remoteCount = null;
        showViewers();
        setTimeout(connectPresence, Math.min(30000, 1000 * Math.pow(2, presenceRetry++)));
      };
      ws.onerror = () => { try { ws.close(); } catch (e) {} };
    }
    connectPresence();
    setInterval(showViewers, 5000);
    showViewers();

    applyZoom();
    setLayout(4);

    // first click/tap/key lets the browser allow sound -> restore the default audio (All Access)
    ['pointerdown', 'keydown', 'touchstart'].forEach(ev => document.addEventListener(ev, function unlock() {
      if (!audioLocked) return;
      audioLocked = false;
      applyAudio();
      Object.values(videos).forEach(v => { if (v.paused) v.play().catch(() => {}); });
    }, { passive: true }));
  </script>
</body>
</html>
