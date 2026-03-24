const projects = {
  td:  { title:'Tour Divide Supply', kind:'Software', name:'Tour Divide Supply', desc:'Tour Divide Supply is a set of note-taking tools built for the Tour Divide, designed to capture ideas, decisions, and details in motion. It also serves as a creative outlet, translating the experience of the route into graphics, systems, and artifacts.', platform:'iOS · Android', status:'In development', linkLabel:'Visit tourdividesupply.com →', linkHref:'https://tourdividesupply.com', img:'tourdividesupply.jpeg' },
  mp3: { title:'EMPEETHREE', kind:'Software', name:'EMPEETHREE', desc:'A desktop MP3 player. Plays your local files. No subscriptions, no cloud, no accounts.', platform:'macOS · Windows', status:'In development', linkLabel:'See project →', linkAction:'empeethree-detail', img:'empeethree.jpeg' },
  obs: { title:'Obsidian Customization', kind:'System', name:'Obsidian Customization', desc:'A heavily customized Obsidian vault. Weekly notes, custom templates, and dashboards built around how I actually think.', platform:'Obsidian', status:'Personal project', headerBg:'#8B5CF6', linkLabel:'See project →', linkAction:'obs-detail' }
};

let activeIcon = null;
const panel = document.getElementById('infoPanel');

// ── EMPEETHREE DETAIL ──
function openEmpeethreeDetail() {
  closeInfo();
  document.getElementById('empDetail').classList.add('visible');
}

document.getElementById('empDetailBack').addEventListener('click', () => {
  document.getElementById('empDetail').classList.remove('visible');
});

// ── OBSIDIAN DETAIL ──
function openObsidianDetail() {
  closeInfo();
  document.getElementById('obsDetail').classList.add('visible');
}

document.getElementById('obsDetailBack').addEventListener('click', () => {
  document.getElementById('obsDetail').classList.remove('visible');
});

// ── HOME (logo + site name) ──
document.getElementById('homeLink').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('empDetail').classList.remove('visible');
  document.getElementById('obsDetail').classList.remove('visible');
  document.getElementById('gdDetail').classList.remove('visible');
  closeInfo();
});

// ── RANDOM ICON PLACEMENT ──
(function() {
  const icons = document.querySelectorAll('.icon');
  const dw = window.innerWidth;
  const dh = window.innerHeight;
  const iW = 128, iH = 150;
  const pad = 24;

  const s   = document.getElementById('stickie');
  const sr  = s.getBoundingClientRect();
  const blocked = [
    { x: sr.left  - pad, y: sr.top  - pad, w: sr.width  + pad*2, h: sr.height  + pad*2 }
  ];

  function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
  }

  function overlapsAny(x, y, w, h) {
    return blocked.some(b => rectsOverlap(x, y, w + pad, h + pad, b.x, b.y, b.w, b.h));
  }

  // Position stickie2 randomly
  const s2 = document.getElementById('stickie2');
  const s2W = 180, s2H = 80;
  let s2x, s2y, attempts = 0;
  const zoneX = dw * 0.15;
  const zoneY = dh * 0.15;
  const zoneW = dw * 0.70;
  const zoneH = dh * 0.65;
  do {
    s2x = zoneX + Math.random() * (zoneW - s2W);
    s2y = zoneY + Math.random() * (zoneH - s2H);
    attempts++;
  } while (overlapsAny(s2x, s2y, s2W, s2H) && attempts < 200);
  blocked.push({ x: s2x - pad, y: s2y - pad, w: s2W + pad*2, h: s2H + pad*2 });
  s2.style.left = Math.round(s2x) + 'px';
  s2.style.top  = Math.round(s2y) + 'px';

  // Position icons randomly
  icons.forEach(icon => {
    let x, y, attempts = 0;
    do {
      x = zoneX + Math.random() * (zoneW - iW);
      y = zoneY + Math.random() * (zoneH - iH);
      attempts++;
    } while (overlapsAny(x, y, iW, iH) && attempts < 200);
    blocked.push({ x: x - pad, y: y - pad, w: iW + pad*2, h: iH + pad*2 });
    icon.style.left = Math.round(x) + 'px';
    icon.style.top  = Math.round(y) + 'px';
  });
})();


// ── GD PAGE ──
document.getElementById('gdLink').addEventListener('click', () => {
  document.getElementById('empDetail').classList.remove('visible');
  document.getElementById('obsDetail').classList.remove('visible');
  document.getElementById('gdDetail').classList.add('visible');
});

document.getElementById('gdDetailBack').addEventListener('click', () => {
  document.getElementById('gdDetail').classList.remove('visible');
});

document.querySelectorAll('.gd-nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


// ── ICON DRAG ──
document.querySelectorAll('.icon').forEach(icon => {
  let startX, startY, origLeft, origTop, dragging = false, moved = false;

  function onDown(e) {
    e.preventDefault();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    startX = cx; startY = cy;
    origLeft = parseInt(icon.style.left);
    origTop  = parseInt(icon.style.top);
    dragging = true; moved = false;
    icon.classList.add('dragging');
    document.querySelectorAll('.icon').forEach(i => i.style.zIndex = 20);
    icon.style.zIndex = 150;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
  }

  function onMove(e) {
    if (!dragging) return;
    e.preventDefault();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = cx - startX, dy = cy - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    const dw = document.getElementById('desktop').offsetWidth;
    const dh = document.getElementById('desktop').offsetHeight;
    icon.style.left = Math.max(0, Math.min(origLeft + dx, dw - 72)) + 'px';
    icon.style.top  = Math.max(36, Math.min(origTop  + dy, dh - 80)) + 'px';
  }

  function onUp() {
    dragging = false;
    icon.classList.remove('dragging');
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove);
    window.removeEventListener('touchend', onUp);
    if (!moved) toggleInfo(icon.dataset.id, icon);
  }

  icon.addEventListener('mousedown', onDown);
  icon.addEventListener('touchstart', onDown, { passive: false });
});

// ── DRAGGABLE STICKIES ──
document.querySelectorAll('.draggable').forEach(el => {
  let startX, startY, origLeft, origTop, dragging = false;

  function onDown(e) {
    if (e.target.closest('.stickie-2-link')) return;
    e.preventDefault();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    startX = cx; startY = cy;
    origLeft = parseInt(el.style.left);
    origTop  = parseInt(el.style.top);
    dragging = true;
    el.classList.add('dragging');
    el.style.zIndex = 150;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
  }

  function onMove(e) {
    if (!dragging) return;
    e.preventDefault();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = cx - startX, dy = cy - startY;
    const dw = document.getElementById('desktop').offsetWidth;
    const dh = document.getElementById('desktop').offsetHeight;
    el.style.left = Math.max(0, Math.min(origLeft + dx, dw - el.offsetWidth)) + 'px';
    el.style.top  = Math.max(36, Math.min(origTop  + dy, dh - el.offsetHeight)) + 'px';
  }

  function onUp() {
    dragging = false;
    el.classList.remove('dragging');
    el.style.zIndex = 30;
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove);
    window.removeEventListener('touchend', onUp);
  }

  el.addEventListener('mousedown', onDown);
  el.addEventListener('touchstart', onDown, { passive: false });
});

// ── INFO PANEL ──
function toggleInfo(id, iconEl) {
  if (activeIcon === iconEl && panel.classList.contains('visible')) { closeInfo(); return; }
  if (activeIcon && activeIcon !== iconEl) activeIcon.classList.remove('selected');
  iconEl.classList.add('selected');
  activeIcon = iconEl;
  const d = projects[id];
  document.getElementById('p-title').textContent    = d.title;
  document.getElementById('p-kind').textContent     = d.kind;
  document.getElementById('p-name').textContent     = d.name;
  document.getElementById('p-desc').textContent     = d.desc;
  document.getElementById('p-platform').textContent = d.platform;
  document.getElementById('p-status').textContent   = d.status;

  const img    = document.getElementById('p-img');
  const colorH = document.getElementById('p-color-header');
  if (d.headerBg) {
    img.style.display        = 'none';
    img.src                  = '';
    colorH.style.display     = 'block';
    colorH.style.background  = d.headerBg;
  } else if (d.img) {
    colorH.style.display = 'none';
    img.src              = d.img;
    img.style.display    = 'block';
    img.className        = 'info-img' + (d.img.includes('image/svg') ? ' svg-logo' : '');
  } else {
    img.style.display    = 'none';
    img.src              = '';
    colorH.style.display = 'none';
    img.className        = 'info-img';
  }

  const linkWrap = document.getElementById('p-link-wrap');
  const linkEl   = document.getElementById('p-link');
  const ssWrap   = document.getElementById('p-screenshot-wrap');
  const ssToggle = document.getElementById('p-screenshot-toggle');
  const ssImg    = document.getElementById('p-screenshot-img');

  ssWrap.style.display = 'none';
  ssImg.style.display  = 'none';
  ssToggle.textContent = '▸ See screenshot';
  ssImg.src            = 'obsidian.png';

  if (d.linkHref) {
    linkEl.innerHTML       = `<a href="${d.linkHref}" target="_blank" class="info-link">${d.linkLabel}</a>`;
    linkWrap.style.display = 'block';
  } else if (d.linkAction === 'empeethree-detail') {
    linkEl.innerHTML       = `<span class="info-link" id="emp-detail-btn">${d.linkLabel}</span>`;
    linkWrap.style.display = 'block';
    document.getElementById('emp-detail-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openEmpeethreeDetail();
    });
  } else if (d.linkAction === 'obs-detail') {
    linkEl.innerHTML       = `<span class="info-link" id="obs-detail-btn">${d.linkLabel}</span>`;
    linkWrap.style.display = 'block';
    document.getElementById('obs-detail-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openObsidianDetail();
    });
  } else {
    linkWrap.style.display = 'none';
  }

  const ir = iconEl.getBoundingClientRect();
  const pw = 240, vw = window.innerWidth, vh = window.innerHeight;
  panel.style.visibility = 'hidden';
  panel.classList.add('visible');
  const ph = panel.offsetHeight || 300;
  panel.classList.remove('visible');
  panel.style.visibility = '';

  let left = ir.right + 14;
  let top  = ir.top;
  if (left + pw > vw - 12) left = ir.left - pw - 14;
  if (left < 8) left = 8;
  if (top + ph > vh - 12) top = vh - ph - 12;
  if (top < 40) top = 40;
  panel.style.left = left + 'px';
  panel.style.top  = top  + 'px';
  panel.classList.add('visible');
}

function closeInfo() {
  panel.classList.remove('visible');
  if (activeIcon) { activeIcon.classList.remove('selected'); activeIcon = null; }
}

document.getElementById('closeBtn').addEventListener('click', closeInfo);
document.getElementById('desktop').addEventListener('mousedown', e => {
  if (!e.target.closest('.icon') && !e.target.closest('.info-panel')) closeInfo();
});

// ── CLOCK (America/Denver) ──
function tick() {
  const n    = new Date();
  const time = n.toLocaleTimeString('en-GB', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit' });
  const day  = n.toLocaleDateString('en-US', { timeZone: 'America/Denver', weekday: 'short', month: 'short', day: 'numeric' });
  document.getElementById('clock').textContent = day + '  ' + time;
}
tick(); setInterval(tick, 1000);

// ── WEATHER (Boulder, CO) ──
(async function() {
  const weatherEl = document.getElementById('weatherDisplay');
  weatherEl.textContent = '…';
  const wmoIcon = {
    0:'☀️', 1:'🌤', 2:'⛅', 3:'☁️',
    45:'🌫', 48:'🌫',
    51:'🌦', 53:'🌦', 55:'🌧',
    61:'🌧', 63:'🌧', 65:'🌧',
    71:'🌨', 73:'🌨', 75:'❄️', 77:'❄️',
    80:'🌦', 81:'🌧', 82:'⛈',
    85:'🌨', 86:'❄️', 95:'⛈', 96:'⛈', 99:'⛈'
  };
  try {
    const res  = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.015&longitude=-105.2705&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph');
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    const cw   = data.current_weather;
    const icon = wmoIcon[cw.weathercode] ?? '🌡';
    const temp = Math.round(cw.temperature);
    weatherEl.textContent = temp + '°F';
  } catch(e) {
    weatherEl.textContent = '';
  }
})();

// ── DON'T COAST PANEL ──
(function() {
  const dcOverlay = document.createElement('div');
  dcOverlay.className = 'dc-overlay';

  const dcPanel = document.createElement('div');
  dcPanel.className = 'dc-panel';
  dcPanel.innerHTML = `
    <div class="dc-titlebar">
      <div class="wb wb--close" id="dcClose"></div>
      <span class="dc-titlebar-name">Don't Coast</span>
    </div>
    <div class="dc-scroll">
      <img class="dc-hero" src="dontcoast.jpeg" alt="Don't Coast">
      <div style="padding:4px 16px 4px;font-size:11px;color:#666;">Photo by: Lucas Winzenburg</div>
      <div class="dc-body">
        <div class="dc-title">Don't Coast</div>
        <p class="dc-text">Don't Coast is a personal project built around forward motion, as much a creative pursuit as it is a physical one. It started on the bike as a reminder to keep pedaling and stay engaged, and has since become a way of approaching work, process, and long-term ideas.</p>
        <p class="dc-text">Cycling has been a constant in my life and a primary source of inspiration. The repetition, the terrain, and the time spent moving through landscapes all shape how I think and create. That connection carries directly into my work across writing, photography, video, and design.</p>
        <p class="dc-text">Much of this is currently centered around the Tour Divide, where I document the miles, the gear, and the people along the way. Most of that documentation lives on YouTube, alongside an ongoing archive of notes, images, and studies that reflect the process as it unfolds.</p>
        <p class="dc-text">My work with brands follows the same approach. I don't take on traditional ambassador roles, instead building partnerships through personal connections and shared intent. Each collaboration is goal-driven and takes shape through content that reflects real use, including writing, photography, video, and design.</p>
        <p class="dc-text">I've collaborated with brands including <a href="https://otsocycles.com" target="_blank" rel="noopener noreferrer">Otso Cycles</a>, <a href="https://wolftoothcomponents.com" target="_blank" rel="noopener noreferrer">Wolf Tooth Components</a>, <a href="https://topodesigns.com" target="_blank" rel="noopener noreferrer">Topo Designs</a>, <a href="https://jpaks.com" target="_blank" rel="noopener noreferrer">JPaks</a>, <a href="https://klite.com.au" target="_blank" rel="noopener noreferrer">kLite</a>, <a href="https://roka.com" target="_blank" rel="noopener noreferrer">Roka</a>, <a href="https://hydrapak.com" target="_blank" rel="noopener noreferrer">HydraPak</a>, and <a href="https://pedaled.com" target="_blank" rel="noopener noreferrer">PedalEd</a>.</p>
        <span class="dc-tag">Cycling</span>
        <span class="dc-tag">Bikepacking</span>
        <span class="dc-tag">Tour Divide</span>
        <span class="dc-tag">Boulder, CO</span>
      </div>
    </div>`;

  document.body.appendChild(dcOverlay);
  document.body.appendChild(dcPanel);

  function openDC(e) {
    e.preventDefault();
    dcPanel.classList.add('visible');
    dcOverlay.classList.add('visible');
    document.getElementById('dcLink').classList.add('active');
  }

  function closeDC() {
    dcPanel.classList.remove('visible');
    dcOverlay.classList.remove('visible');
    document.getElementById('dcLink').classList.remove('active');
  }

  document.getElementById('dcLink').addEventListener('click', openDC);
  dcPanel.querySelector('#dcClose').addEventListener('click', closeDC);
  dcOverlay.addEventListener('click', closeDC);
})();

// ── INFO / BIO PANEL ──
(function() {
  const bioOverlay = document.createElement('div');
  bioOverlay.className = 'bio-overlay';

  const bioPanel = document.createElement('div');
  bioPanel.className = 'bio-panel';
  bioPanel.innerHTML = `
    <div class="bio-titlebar">
      <div class="wb wb--close" id="bioClose"></div>
      <span class="bio-titlebar-name">Info</span>
    </div>
    <div class="bio-scroll">
      <img class="bio-hero" src="IMG_1615 Large.jpeg" alt="Justin McKinley">
      <div style="padding:4px 16px 4px;font-size:11px;color:#666;">Photo by: Elliot Whitehead</div>
      <div class="bio-body" style="padding:0;">
        <div style="padding:16px 16px 16px;">
          <div class="bio-name">Justin McKinley</div>
          <div class="bio-handle">@jjjjustin · Boulder, Colorado</div>
          <p class="bio-text">JJJJustin is Justin McKinley, a Boulder-based visual designer working at the intersection of brand, product, and crafted content. He has a trained eye for how ideas take shape across systems, objects, and experiences, informed by a background in digital and traditional ad agencies, in-house teams, and collaborations with writers, industrial designers, engineers, founders, and creative directors.</p>
          <p class="bio-text">His work is rooted in process and built through doing. Outside of client projects, he spends his time riding bikes, sleeping in the woods, drawing, making coffee, and developing personal work that moves between disciplines. Cycling remains a constant and continues to shape how he thinks about repetition, environment, and long-term creative output.</p>
          <p class="bio-text">He approaches both independent and collaborative work with the same mindset, staying engaged, following ideas through, and allowing the process to inform the outcome. His work spans branding, product design, illustration, and art direction, with a focus on clarity, function, and honest expression.</p>
          <div style="margin-top:18px;margin-bottom:18px;">
            <a href="mailto:hello@justinmckinley.com" class="bio-link" style="background:#f5c842;color:#3a3000;border:none;padding:4px 12px;border-radius:999px;font-weight:500;border-bottom:none;">Get in touch</a>
          </div>
          <div class="bio-links">
            <a href="https://instagram.com/jjjjustin" target="_blank" class="bio-link">Instagram</a>
            <a href="https://linkedin.com/in/jjjjustin" target="_blank" class="bio-link">LinkedIn</a>
            <a href="https://www.are.na/justin-mckinley/channels" target="_blank" class="bio-link">Are.na</a>
            <a href="https://www.youtube.com/@jjjjustin" target="_blank" class="bio-link">YouTube</a>
            <a href="https://dribbble.com/jjjjustin" target="_blank" class="bio-link">Dribbble</a>
          </div>
        </div>
      </div>
      <div class="bio-credits">
        <img src="keeb.jpg" alt="Keyboard" class="bio-credits-img">
        <div class="bio-credits-overlay">
          <div class="bio-credits-text">
            <span class="bio-credits-title">Website Credits:</span>
            <span>Set in Inconsolata, Vollkorn & Work Sans</span>
            <span>Photography by Elliot Whitehead & Lucas Winzenburg</span>
            <span>Typed with OLKB x Drop Planck · Gateron Milky Whites</span>
          </div>
        </div>
      </div>
    </div>`;

  document.body.appendChild(bioOverlay);
  document.body.appendChild(bioPanel);

  function openBio(e) {
    e.preventDefault();
    bioPanel.classList.add('visible');
    bioOverlay.classList.add('visible');
    document.getElementById('infoLink').classList.add('active');
  }

  function closeBio() {
    bioPanel.classList.remove('visible');
    bioOverlay.classList.remove('visible');
    document.getElementById('infoLink').classList.remove('active');
  }

  document.getElementById('infoLink').addEventListener('click', openBio);
  document.getElementById('stickieInfoLink').addEventListener('click', openBio);
  bioPanel.querySelector('#bioClose').addEventListener('click', closeBio);
  bioOverlay.addEventListener('click', closeBio);
})();

// ── ARCHIVE ──
(function() {
  const items = [
    { src: '1car-facebook_thumbnail01.jpg' },
    { src: '02Artboard+1+copy+3.png' },
    { src: '8b2b50d306a788eaaa2aa527aaaedd66.gif' },
    { src: '20b79f3a0618613d25cf5acbad217635.png' },
    { src: '22f20ad9295ac4bfc915209134639d70.png' },
    { src: '057c4d489c2339858191a4050a310e83.png' },
    { src: '1068x713.jpg' },
    { src: '7468b9427ac8f4aae265884aa8e4e525.jpg' },
    { src: '6661181d627a8f652e50f58223ce7fe6.gif' },
    { src: '8322374c7371a3c4e56a9c653b2b88dc.jpg' },
    { src: '33088565361_78533b029c_o.jpg' },
    { src: 'Artboard+2.png' },
    { src: 'Artboard+13@2x.png' },
    { src: 'b8f74bf791a10a95218067b7d0cd2517.jpg' },
    { src: 'big-animation_40.gif' },
    { src: 'c21ea8d0c710d0f085f1a4e3b6072c54.jpg' },
    { src: 'Comp 1_1.gif' },
    { src: 'Comp 2.gif' },
    { src: 'desert-moon Large.jpeg' },
    { src: 'drawing.jpg' },
    { src: 'EllisBuilds_Vertical_PMS7409_large.jpg' },
    { src: 'ello-optimized-fec89038.jpg' },
    { src: 'fandfArtboard+4+copy.png' },
    { src: 'fandfArtboard+4+copy+2.png' },
    { src: 'fandfArtboard+4+copy+3.png' },
    { src: 'ff.jpg' },
    { src: 'H.jpg' },
    { src: 'hoof-hair.png' },
    { src: 'human_4x.jpg' },
    { src: 'image-asset.png' },
    { src: 'IMGP7418.jpg' },
    { src: 'Justin-McKinley-2024-Tour-Divide-Sketches_1.jpg' },
    { src: 'Justin-McKinley-2024-Tour-Divide-Sketches_2.jpg' },
    { src: 'mslion.jpg' },
    { src: 'mtn.jpg' },
    { src: 'original-7d38bfe770731922f342746b47264e7d.jpg' },
    { src: 'original-b393033a13b7ee70c8703d6cac82bccd.jpg' },
    { src: 'original-c9021770389cef35070348f3f60a1c47.jpg' },
    { src: 'rbr_Artboard+8.png' },
    { src: 'rbr_Artboard+8+copy.png' },
    { src: 'rbr_Artboard+8+copy+2.png' },
    { src: 'Untitled-3.png' },
  ];

  const overlay = document.createElement('div');
  overlay.className = 'archive-overlay';
  overlay.id = 'archiveOverlay';

  const panel = document.createElement('div');
  panel.className = 'archive-panel';
  panel.id = 'archivePanel';
  panel.innerHTML = `
    <div class="archive-titlebar">
      <div class="wb wb--close" id="archiveClose"></div>
      <span class="archive-titlebar-name">Archive</span>
    </div>
    <p style="font-size:13px;line-height:1.3;color:#888;padding:12px 16px;max-width:500px;margin:0;flex-shrink:0;">This is just a collection of everything I've ever made.</p>
    <div class="archive-scroll" id="archiveScroll">
      <div class="masonry" id="masonryGrid" style="padding:16px;"></div>
    </div>`;

  document.body.appendChild(overlay);
  document.body.appendChild(panel);

  const grid = panel.querySelector('#masonryGrid');
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'masonry-item';
    el.innerHTML = `<img src="Archive/${item.src}" alt="" loading="lazy">`;
    grid.appendChild(el);
  });

  function openArchive(e) {
    e.preventDefault();
    panel.classList.add('visible');
    overlay.classList.add('visible');
    document.getElementById('archiveLink').classList.add('active');
  }

  function closeArchive() {
    panel.classList.remove('visible');
    overlay.classList.remove('visible');
    document.getElementById('archiveLink').classList.remove('active');
  }

  document.getElementById('archiveLink').addEventListener('click', openArchive);
  document.getElementById('archiveClose').addEventListener('click', closeArchive);
  overlay.addEventListener('click', closeArchive);
})();

// ── GD SLIDERS ──
document.querySelectorAll('.gd-slider').forEach(slider => {
  const slides   = slider.querySelector('.gd-slides');
  const controls = slider.nextElementSibling;
  const count    = controls.querySelector('.gd-count');
  const total    = slider.querySelectorAll('.gd-slide').length;
  let current    = 0;

  function goTo(n) {
    current = (n + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
    count.textContent = `${current + 1} / ${total}`;
  }

  controls.querySelector('.gd-prev').addEventListener('click', () => goTo(current - 1));
  controls.querySelector('.gd-next').addEventListener('click', () => goTo(current + 1));
});