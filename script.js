(() => {
  'use strict';

  const PROJECT_ID = 'suGMUori';
  const API = 'https://api.modrinth.com/v2';

  /* ---------- DATA ---------- */
  const MODS = [
    // Performance
    { name: 'Sodium', id: 'AANobbMI', cat: 'Performance', desc: 'Modern rendering engine that greatly improves frame rates and reduces stutter.' },
    { name: 'Lithium', id: 'gvQqBUqZ', cat: 'Performance', desc: 'General-purpose game logic and server optimizations.' },
    { name: 'FerriteCore', id: 'uXXizFIs', cat: 'Performance', desc: 'Memory usage optimizations.' },
    { name: 'ModernFix', id: 'nmDcB62a', cat: 'Performance', desc: 'Improves performance, cuts memory usage and fixes many bugs.' },
    { name: 'ImmediatelyFast', id: '5ZwdcRci', cat: 'Performance', desc: 'Speeds up immediate-mode rendering for the HUD, text and entities.' },
    { name: 'Entity Culling', id: 'NNAgCjsB', cat: 'Performance', desc: 'Skips rendering entities and block entities that you cannot see.' },
    { name: 'More Culling', id: '51shyZVL', cat: 'Performance', desc: 'Additional culling to avoid drawing hidden geometry.' },
    { name: 'Dynamic FPS', id: 'LQ3K71Q1', cat: 'Performance', desc: 'Reduces resource usage when the game window is unfocused.' },
    { name: 'Better Block Entities', id: 'ONZm0H7Y', cat: 'Performance', desc: 'Faster rendering of chests, signs and other block entities.' },
    { name: 'Model Gap Fix', id: 'QdG47OkI', cat: 'Performance', desc: 'Fixes visual gaps in item and block models.' },
    { name: 'Ixeris', id: 'p8RJPJIC', cat: 'Performance', desc: 'Improves FPS by optimizing how the game polls input events, such as mouse movement.' },
    { name: 'Debugify', id: 'QwxR6Gcd', cat: 'Performance', desc: 'Fixes a wide range of vanilla Minecraft bugs.' },

    // Visuals
    { name: 'Continuity', id: '1IjD5062', cat: 'Visuals', desc: 'Connected textures support for a cleaner, more polished look.' },
    { name: 'Sodium Extra', id: 'PtjYWJkn', cat: 'Visuals', desc: 'Extra video settings and options for Sodium.' },
    { name: "Reese's Sodium Options", id: 'Bh37bMuy', cat: 'Visuals', desc: 'A tidier, more readable video settings screen.' },
    { name: 'Third Person Nametags', id: 'ZS0HNETF', cat: 'Visuals', desc: 'Shows your own nametag when in third-person view.' },

    // Quality of life
    { name: "Xaero's Minimap", id: '1bokaNcj', cat: 'Quality of Life', desc: 'A clean minimap that works great with Cobblemon icons.' },
    { name: "Xaero's World Map", id: 'NcUtCpym', cat: 'Quality of Life', desc: 'Full-screen world map that records where you have explored.' },
    { name: 'Just Enough Items', id: 'u6dRKJwZ', cat: 'Quality of Life', desc: 'Item and recipe viewer.' },
    { name: 'AppleSkin', id: 'EsAfCjCV', cat: 'Quality of Life', desc: 'Food and hunger HUD improvements.' },
    { name: 'Zoomify', id: 'w7ThoJFB', cat: 'Quality of Life', desc: 'A configurable zoom with smooth animation.' },
    { name: 'Tooltip Scroll', id: 'wySVd6d8', cat: 'Quality of Life', desc: 'Scroll long tooltips that do not fit on the screen.' },
    { name: 'Chat Patches', id: 'MOqt4Z5n', cat: 'Quality of Life', desc: 'Chat improvements such as history and copy tools.' },
    { name: 'No Chat Reports', id: 'qQyHxfxd', cat: 'Quality of Life', desc: 'Disables chat message signing and reporting.' },
    { name: 'Cape Provider', id: 'orXAsira', cat: 'Quality of Life', desc: 'Shows capes from supported cape providers.' },
    { name: 'Cubes Without Borders', id: 'ETlrkaYF', cat: 'Quality of Life', desc: 'Borderless fullscreen window mode.' },
    { name: 'YOSBR', id: 'WwbubTsV', cat: 'Quality of Life', desc: 'Your Options Shall Be Respected — keeps default configs from overwriting yours.' },

    // Cobblemon
    { name: 'Cobblemon', id: 'MdwFAVRL', cat: 'Cobblemon', desc: 'The star of the show: catch, train and battle Pokémon in Minecraft.' },
    { name: 'Catch Indicator', id: 'tpTcu2PM', cat: 'Cobblemon', desc: 'Cobblemon add-on that shows whether you have already caught a species.' },
    { name: 'Cobblemon Info for REI / JEI / EMI', id: 'qekxLrOP', cat: 'Cobblemon', desc: 'Adds Cobblemon drops, spawns and recipes to your recipe viewer.' },
    { name: 'MoreCobblemonTweaks', id: '5KWlJ2HC', cat: 'Cobblemon', desc: 'A collection of small Cobblemon tweaks and options.' },
    { name: 'Cobblemon Move Inspector', id: 'MqcGBDhG', cat: 'Cobblemon', desc: 'Inspect Pokémon moves and details more easily.' },

    // Libraries
    { name: 'Fabric API', id: 'P7dR8mSH', cat: 'Libraries', desc: 'Core library for Fabric mods.' },
    { name: 'Fabric Language Kotlin', id: 'Ha28R6CL', cat: 'Libraries', desc: 'Kotlin language adapter required by Cobblemon.' },
    { name: 'Cloth Config v15', id: '9s6osm5g', cat: 'Libraries', desc: 'Configuration library used by many mods.' },
    { name: 'YetAnotherConfigLib (YACL)', id: '1eAoo2KR', cat: 'Libraries', desc: 'Config screen library used by many mods.' },
    { name: 'Architectury API', id: 'lhGA9TYQ', cat: 'Libraries', desc: 'Cross-platform library used by several mods.' }
  ];

  const PACKS = [
    { name: 'E19 — Cobblemon Minimap Icons', url: 'https://modrinth.com/resourcepack/Va3BanZa' },
    { name: 'Authentic Shadows', url: 'https://modrinth.com/resourcepack/kWgq7eAt' },
    { name: 'Chat Reporting Helper', url: 'https://modrinth.com/resourcepack/tN4E9NfV' },
    { name: 'Translations for Sodium', url: 'https://modrinth.com/resourcepack/yfDziwn1' },
    { name: 'Vanilla Tweaks', url: 'https://vanillatweaks.net/' }
  ];

  const SERVERS = [
    { name: 'Complex Gaming', url: 'https://www.mc-complex.com/' },
    { name: 'Cobblemon GG', url: 'https://cobblemon.gg/' },
    { name: 'CobbleGalaxy', url: 'https://store.cobblegalaxy.com/' },
    { name: 'MMO Realms', url: 'https://mmorealms.gg/' },
    { name: 'Cobblemon Delta', url: 'https://wiki.cobblemondelta.com/' },
    { name: 'Poké Legends', url: 'https://poke-legends.com/' },
    { name: 'SmashMC', url: 'https://store.smashmc.co/' },
    { name: 'PokéHub', url: 'https://store.pokehub.org/' },
    { name: 'Cobblemon Islands', url: 'https://store.cobblemonislands.com/' },
    { name: 'Cobblemon Rivals', url: 'https://store.cobblemonrivals.com/' },
    { name: 'Apex Cobblemon', url: 'https://apexcobblemon.com/' },
    { name: 'CobbleLand', url: 'https://store.cobbleland.com/' }
  ];

  const EXTERNAL_ICON =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>';

  const $ = (sel, root = document) => root.querySelector(sel);

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- NAV ---------- */
  const navToggle = $('#navToggle');
  const navLinks = $('#navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  const closeNav = () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeNav();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#nav')) closeNav();
  });

  /* ---------- MODS ---------- */
  const modGrid = $('#modGrid');
  const modEmpty = $('#modEmpty');
  const modSearch = $('#modSearch');
  const modFilters = $('#modFilters');
  const categories = ['All', ...new Set(MODS.map((m) => m.cat))];
  let activeCat = 'All';

  function renderFilters() {
    modFilters.innerHTML = categories
      .map(
        (c) =>
          `<button type="button" class="filter${c === activeCat ? ' active' : ''}" data-cat="${esc(c)}" aria-pressed="${c === activeCat}">${esc(c)}</button>`
      )
      .join('');
  }

  function renderMods() {
    const q = modSearch.value.trim().toLowerCase();
    const list = MODS.filter(
      (m) =>
        (activeCat === 'All' || m.cat === activeCat) &&
        (!q || m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q))
    );
    modGrid.innerHTML = list
      .map(
        (m) => `
        <a class="mod" href="https://modrinth.com/mod/${esc(m.id)}" target="_blank" rel="noopener">
          <h4><span>${esc(m.name)}</span>${EXTERNAL_ICON}</h4>
          <p>${esc(m.desc)}</p>
          <span class="cat">${esc(m.cat)}</span>
        </a>`
      )
      .join('');
    modEmpty.hidden = list.length > 0;
  }

  modFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    activeCat = btn.dataset.cat;
    renderFilters();
    renderMods();
  });
  modSearch.addEventListener('input', renderMods);

  renderFilters();
  renderMods();
  $('#modCountSpec').textContent = String(MODS.length);

  /* ---------- PACKS + SERVERS ---------- */
  $('#packGrid').innerHTML = PACKS.map(
    (p) => `<a class="pack" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>`
  ).join('');

  $('#serverGrid').innerHTML = SERVERS.map(
    (s) => `<a class="server" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}<span>↗</span></a>`
  ).join('');

  /* ---------- COPY JVM ARGS ---------- */
  const copyBtn = $('#copyJvm');
  copyBtn.addEventListener('click', async () => {
    const text = $('#jvmArgs').textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const range = document.createRange();
      range.selectNodeContents($('#jvmArgs'));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      sel.removeAllRanges();
    }
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1800);
  });

  /* ---------- LIVE STATS FROM MODRINTH ---------- */
  const fmt = (n) =>
    n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' :
    n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K' : String(n);

  function timeAgo(iso) {
    const diff = Math.max(0, Date.now() - new Date(iso).getTime());
    const h = Math.floor(diff / 36e5);
    if (h < 1) return 'Just Now';
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    if (d < 30) return `${d}d ago`;
    const mo = Math.floor(d / 30);
    if (mo < 12) return `${mo}mo ago`;
    return `${Math.floor(mo / 12)}y ago`;
  }

  const CACHE_KEY = 'cobblefine-stats-v1';
  const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

  function readCache() {
    try {
      const c = JSON.parse(sessionStorage.getItem(CACHE_KEY));
      if (c && Date.now() - c.t < CACHE_TTL) return c.data;
    } catch (e) { /* storage unavailable */ }
    return null;
  }
  function writeCache(data) {
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data })); } catch (e) { /* ignore */ }
  }

  async function getJson(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      return res.ok ? await res.json() : null;
    } catch (e) {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }

  function setStat(id, value) {
    const el = $(id);
    if (value) {
      el.textContent = value;
      el.parentElement.classList.remove('stat-hidden');
    } else if (el.textContent.trim() === '—') {
      // No live value and no fallback: hide this stat instead of showing a dash.
      el.parentElement.classList.add('stat-hidden');
    }
  }

  function applyStats(d) {
    setStat('#statDownloads', d.downloads != null ? fmt(d.downloads) : '');
    setStat('#statFollowers', d.followers != null ? fmt(d.followers) : '');
    setStat('#statVersion', d.version || '');
    setStat('#statUpdated', d.updated ? timeAgo(d.updated) : '');
  }

  async function loadStats() {
    const cached = readCache();
    if (cached) return applyStats(cached);

    const [project, versions] = await Promise.all([
      getJson(`${API}/project/${PROJECT_ID}`),
      getJson(`${API}/project/${PROJECT_ID}/version`)
    ]);
    const latest = Array.isArray(versions) && versions.length ? versions[0] : null;
    const data = {
      downloads: project ? project.downloads : null,
      followers: project ? project.followers : null,
      updated: project ? project.updated : null,
      version: latest ? latest.version_number || latest.name : ''
    };
    if (project || latest) writeCache(data);
    applyStats(data);
  }
  loadStats();

  /* ---------- YOUTUBE FACADE (loads the player only on click) ---------- */
  const video = $('#video');
  const videoPlay = $('#videoPlay');
  if (video && videoPlay) {
    videoPlay.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${video.dataset.yt}?autoplay=1&rel=0`;
      iframe.title = 'Cobblefine showcase';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      video.replaceChildren(iframe);
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }
})();
