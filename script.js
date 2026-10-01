// ── TOUR DIVIDE SUPPLY PANEL ──
let openTourDivideDetail;
(function() {
  const overlay = document.createElement('div');
  overlay.className = 'proj-overlay';

  const panel = document.createElement('div');
  panel.className = 'proj-panel';
  panel.innerHTML = `
    <div class="proj-titlebar">
      <div class="wb wb--close" id="tdClose"></div>
      <span class="proj-titlebar-name">Tour Divide Supply</span>
    </div>
    <div class="proj-scroll">
      <img class="proj-hero" src="2025-Tour-Divide-Day1-2_Eddie-Clark_6-2000x1334.jpg" alt="Tour Divide rider on the route">
      <div style="padding:4px 16px 4px;font-size:11px;color:#666;">Photo by: Eddie Clark</div>
      <div class="proj-body">
        <div class="proj-title">Tour Divide Supply</div>
        <p class="proj-text">Tour Divide Supply started on the route itself — a way to capture ideas, decisions, and details without breaking stride. It's since grown into a small set of note-taking tools built specifically for riding: fast to open, quick to log, and built to hold up over thousands of miles.</p>
        <p class="proj-text">It also serves as a creative outlet, translating the experience of the route into graphics, systems, and artifacts.</p>
        <div style="margin:4px 0 18px;">
          <a href="https://tourdividesupply.com" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#f5c842;color:#3a3000;padding:6px 16px;border-radius:999px;font-weight:500;font-size:13px;text-decoration:none;letter-spacing:0.02em;">Visit tourdividesupply.com →</a>
        </div>
      </div>
      <div class="td-scene">
        <div class="td-notebook-wrap" id="tdNotebookWrap">
          <img class="td-page td-page-3" src="tourdividesupply/page-3.png" alt="">
          <img class="td-page td-page-2" src="tourdividesupply/page-2.png" alt="">
          <img class="td-page td-page-1" src="tourdividesupply/page-1.png" alt="">
          <img class="td-notebook" src="tourdividesupply/notebook.png" alt="Tour Divide Supply Ride Journal notebook">
        </div>
        <div class="td-phone-wrap" id="tdPhoneWrap">
          <img class="td-phone td-phone-app" src="tourdividesupply/iphone-app.png" alt="Tour Divide Supply app showing the route">
          <img class="td-phone td-phone-splash" src="tourdividesupply/iphone-splash.png" alt="Tour Divide Supply">
        </div>
      </div>
      <img src="tourdividesupply/stickers.jpg" alt="Tour Divide bumper stickers" style="width:100%;display:block;margin-top:8px;">
    </div>`;

  document.body.appendChild(overlay);
  document.body.appendChild(panel);

  function close() {
    panel.classList.remove('visible');
    overlay.classList.remove('visible');
  }

  openTourDivideDetail = function() {
    closeAllPanels();
    panel.classList.add('visible');
    overlay.classList.add('visible');
  };

  panel.querySelector('#tdClose').addEventListener('click', close);

  const isTouch = () => window.matchMedia('(hover: none)').matches;

  const notebookWrap = panel.querySelector('#tdNotebookWrap');
  const pages = Array.from(notebookWrap.querySelectorAll('.td-page'));
  const shuffleOrder = [pages[2], pages[1], pages[0]];
  let shuffleIndex = -1;

  notebookWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!isTouch()) return;
    shuffleOrder.forEach(p => p.classList.remove('td-page-top'));
    shuffleIndex = (shuffleIndex + 1) % (shuffleOrder.length + 1);
    if (shuffleIndex < shuffleOrder.length) {
      shuffleOrder[shuffleIndex].classList.add('td-page-top');
    }
  });

  const phoneWrap = panel.querySelector('#tdPhoneWrap');

  phoneWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isTouch()) {
      phoneWrap.classList.toggle('active');
    } else {
      phoneWrap.classList.add('active');
    }
  });

  phoneWrap.addEventListener('mouseleave', () => {
    if (isTouch()) return;
    if (!phoneWrap.classList.contains('active')) return;
    phoneWrap.classList.add('returning');
    phoneWrap.classList.remove('active');
    setTimeout(() => phoneWrap.classList.remove('returning'), 300);
  });
  overlay.addEventListener('click', close);
})();

// ── EMPEETHREE PANEL ──
let openEmpeethreeDetail;
(function() {
  const overlay = document.createElement('div');
  overlay.className = 'proj-overlay';

  const panel = document.createElement('div');
  panel.className = 'proj-panel';
  panel.innerHTML = `
    <div class="proj-titlebar">
      <div class="wb wb--close" id="empClose"></div>
      <span class="proj-titlebar-name">EMPEETHREE</span>
    </div>
    <div class="proj-scroll">
      <img class="proj-hero" src="empeethree/ipodheader.jpg" alt="iPod with earbuds on yellow background">
      <div class="proj-body">
        <div class="proj-title">EMPEETHREE</div>
        <p class="proj-text">EMPEETHREE started as a frustration with modern music players. Every app wants you to stream, subscribe, or surrender your library to the cloud. EMPEETHREE does none of that. It reads your local files, plays them without fuss, and gets out of the way.</p>
        <p class="proj-text">Gapless playback, waveform scrubbing, keyboard-first controls. The interface is minimal by design. The music is the thing. Available for download now.</p>
        <div style="margin:4px 0 18px;">
          <a href="https://empeethree.app" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#f5c842;color:#3a3000;padding:6px 16px;border-radius:999px;font-weight:500;font-size:13px;text-decoration:none;letter-spacing:0.02em;">Download at empeethree.app →</a>
        </div>
      </div>
      <div class="proj-grid-header">
        <div class="proj-grid-title">Screens</div>
      </div>
      <div class="proj-grid">
        <img src="empeethree/emp_1_icon.png" alt="EMPEETHREE icon">
        <img src="empeethree/emp_2_search.png" alt="EMPEETHREE search">
        <img src="empeethree/emp_3_shortcuts.png" alt="EMPEETHREE shortcuts">
        <img src="empeethree/emp_4_fullapp.png" alt="EMPEETHREE full app">
      </div>
    </div>`;

  document.body.appendChild(overlay);
  document.body.appendChild(panel);

  function close() {
    panel.classList.remove('visible');
    overlay.classList.remove('visible');
  }

  openEmpeethreeDetail = function() {
    closeAllPanels();
    panel.classList.add('visible');
    overlay.classList.add('visible');
  };

  panel.querySelector('#empClose').addEventListener('click', close);
  overlay.addEventListener('click', close);
})();

const projectOpeners = { td: openTourDivideDetail, mp3: openEmpeethreeDetail, dc: () => window.openDontCoast() };

// ── RANDOM ICON PLACEMENT ──
(function() {
  const isMobile = window.innerWidth <= 768;
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

  const sl = document.getElementById('stickieLinks');
  if (sl) {
    const slr = sl.getBoundingClientRect();
    blocked.push({ x: slr.left - pad, y: slr.top - pad, w: slr.width + pad*2, h: slr.height + pad*2 });
  }

  function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
  }

  function overlapsAny(x, y, w, h) {
    return blocked.some(b => rectsOverlap(x, y, w + pad, h + pad, b.x, b.y, b.w, b.h));
  }

  // Position stickie2 randomly
  const s2 = document.getElementById('stickie2');
  const s2W = 240, s2H = 300;
  let s2x, s2y, attempts = 0;
  const zoneX = isMobile ? 8              : dw * 0.15;
  const zoneY = isMobile ? sr.bottom + 16 : dh * 0.15;
  const zoneW = isMobile ? dw - 16        : dw * 0.70;
  const zoneH = isMobile ? dh - zoneY - 60 : dh * 0.65;
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


// ── SELECTED WORK HOVER PREVIEW ──
(function () {
  const stickie2 = document.getElementById('stickie2');
  const imgs = document.querySelectorAll('#stickie2Preview .stickie-2-preview-img');
  let idx = 0;
  let timer = null;

  function showNext() {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }

  stickie2.addEventListener('mouseenter', () => {
    if (timer) return;
    timer = setInterval(showNext, 550);
  });

  stickie2.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = null;
    imgs.forEach((img, i) => img.classList.toggle('active', i === 0));
    idx = 0;
  });
})();

// ── GD PAGE ──
document.getElementById('gdLink').addEventListener('click', () => {
  closeAllPanels();
  document.getElementById('gdDetail').classList.add('visible');
});

document.getElementById('gdDetailBack').addEventListener('click', () => {
  document.getElementById('gdDetail').classList.remove('visible');
});

document.getElementById('gdTapeBack').addEventListener('click', () => {
  document.getElementById('gdDetail').classList.remove('visible');
});

document.querySelectorAll('.gd-nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── RESUME PAGE ──
document.getElementById('resumeLink').addEventListener('click', (e) => {
  e.preventDefault();
  closeAllPanels();
  document.getElementById('gdDetail').classList.remove('visible');
  document.getElementById('resumeDetail').classList.add('visible');
});

document.getElementById('resumeDetailBack').addEventListener('click', () => {
  document.getElementById('resumeDetail').classList.remove('visible');
});

document.getElementById('resumeTapeBack').addEventListener('click', () => {
  document.getElementById('resumeDetail').classList.remove('visible');
});

(function () {
  const btn = document.getElementById('resumeViewAllBtn');
  const more = document.getElementById('resumeJobMore');
  const label = btn.querySelector('.resume-view-all-label');
  const defaultLabel = 'View All';

  btn.addEventListener('click', () => {
    const expanded = more.classList.toggle('expanded');
    btn.classList.toggle('expanded', expanded);
    label.textContent = expanded ? 'Show Less' : defaultLabel;
  });
})();


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
    if (!moved) {
      const open = projectOpeners[icon.dataset.id];
      if (open) open();
    }
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

document.getElementById('desktop').addEventListener('mousedown', closeAllPanels);

// ── PANEL MANAGER ──
function closeAllPanels() {
  document.querySelectorAll('.bio-panel, .bio-overlay').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.dc-panel, .dc-overlay').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.archive-panel, .archive-overlay').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.proj-panel, .proj-overlay').forEach(el => el.classList.remove('visible'));
  ['infoLink', 'archiveLink'].forEach(id => document.getElementById(id).classList.remove('active'));
}

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
        <p class="dc-text">See where JJJJustin is riding right now.</p>
        <div style="margin:4px 0 20px;">
          <a href="https://dontcoast.com" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#f5c842;color:#3a3000;padding:6px 16px;border-radius:999px;font-weight:500;font-size:13px;text-decoration:none;letter-spacing:0.02em;">Visit dontcoast.com →</a>
        </div>
        <span class="dc-tag">Cycling</span>
        <span class="dc-tag">Bikepacking</span>
        <span class="dc-tag">Tour Divide</span>
        <span class="dc-tag">Boulder, CO</span>
      </div>
      <div class="dc-video">
        <iframe src="https://www.youtube.com/embed/pzGovAmOSmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="dc-grid">
        <img src="tourdividesupply/Artboard 4 copy 3-100.jpg" alt="">
        <img src="tourdividesupply/Artboard 4 copy 4-100.jpg" alt="">
        <img src="tourdividesupply/Artboard 4 copy 5-100.jpg" alt="">
        <img src="tourdividesupply/Artboard 4 copy 6-100.jpg" alt="">
        <img src="tourdividesupply/Artboard 4 copy 7-100.jpg" alt="">
        <img src="tourdividesupply/Artboard 4 copy 8-100.jpg" alt="">
      </div>
    </div>`;

  document.body.appendChild(dcOverlay);
  document.body.appendChild(dcPanel);

  function openDC(e) {
    if (e) e.preventDefault();
    closeAllPanels();
    dcPanel.classList.add('visible');
    dcOverlay.classList.add('visible');
  }

  function closeDC() {
    dcPanel.classList.remove('visible');
    dcOverlay.classList.remove('visible');
  }

  window.openDontCoast = openDC;

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
      <span class="bio-titlebar-name">About</span>
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
            <span>Type set in Inconsolata, Vollkorn & Work Sans</span>
            <span>Photography by Elliot Whitehead, Lucas Winzenburg & Eddie Clark</span>
            <span>Typed on an OLKB x Drop Planck · Gateron Milky Whites</span>
          </div>
        </div>
      </div>
    </div>`;

  document.body.appendChild(bioOverlay);
  document.body.appendChild(bioPanel);

  function openBio(e) {
    e.preventDefault();
    closeAllPanels();
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
    { src: '376f65e65908ba62b9234f69a56079a7.jpg' },
    { src: '68e15943f693a121620ae2dc9995513c.jpg' },
    { src: '9902d5495666672995c6b7b3464ae973.png' },
    { src: 'Screen Shot 2021-08-11 at 11.40.07 AM.jpg' },
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
      <span class="archive-titlebar-name">Sketchbook</span>
    </div>
    <div class="archive-scroll" id="archiveScroll">
      <div style="padding:48px 16px 40px;text-align:center;width:100%;box-sizing:border-box;"><div style="display:inline-block;text-align:left;"><p style="font-size:26px;font-weight:bold;color:#e8e4dc;margin:0 0 6px 0;line-height:1.2;">"DON'T STOP THINKING ABOUT TOMORROW."</p><p style="font-size:13px;color:#888;margin:0;letter-spacing:0.08em;text-align:right;">— Fleetwood Mac</p></div></div>
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
    closeAllPanels();
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
  slider.querySelectorAll('.gd-slide-img').forEach(img => {
    img.addEventListener('click', () => goTo(current + 1));
  });
});