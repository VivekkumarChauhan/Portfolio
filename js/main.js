/* ============================================================
   VIVEKKUMAR CHAUHAN — PORTFOLIO JAVASCRIPT
   ============================================================ */

'use strict';

/* ── LOADER ─────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('done');
  }, 1400);
});

/* ── THEME TOGGLE ───────────────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function getStoredTheme() {
  return localStorage.getItem('portfolio-theme') || 'dark';
}
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

// Init theme on load
setTheme(getStoredTheme());

themeToggle && themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
const dot    = document.getElementById('cursorDot');
const ring   = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
let raf;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot) {
    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  }
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  if (ring) {
    ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
  }
  raf = requestAnimationFrame(animateRing);
}
animateRing();

// Expand ring on hover
document.querySelectorAll('a, button, .pill, .project-card, .award-card, .cert-card, .skill-block, .research-item').forEach(el => {
  el.addEventListener('mouseenter', () => ring && ring.classList.add('expanded'));
  el.addEventListener('mouseleave', () => ring && ring.classList.remove('expanded'));
});

/* ── NAVBAR SCROLL ──────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── ACTIVE NAV HIGHLIGHT ───────────────────────────────────── */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function initReveal() {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Stagger siblings in grids
    const parent = el.parentElement;
    const siblings = parent ? [...parent.querySelectorAll(':scope > .reveal')] : [];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 0.1}s`;
    revealObserver.observe(el);
  });
}
initReveal();

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    start = Math.floor(eased * target);
    el.textContent = start;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        animateCounter(el, target);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsCard = document.querySelector('.stats-card');
if (statsCard) counterObserver.observe(statsCard);

/* ── MOBILE MENU ────────────────────────────────────────────── */
const hamburger     = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose   = document.getElementById('mobileClose');

function openMobile() {
  if (!mobileOverlay) return;
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobile() {
  if (!mobileOverlay) return;
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger   && hamburger.addEventListener('click', openMobile);
mobileClose && mobileClose.addEventListener('click', closeMobile);

// Close on link click
document.querySelectorAll('[data-mobile-link]').forEach(a => {
  a.addEventListener('click', closeMobile);
});

/* ── SKILLS FILTER TABS ─────────────────────────────────────── */
const skillsTabs  = document.getElementById('skillsTabs');
const skillsBento = document.getElementById('skillsBento');

if (skillsTabs && skillsBento) {
  skillsTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.skills-tab');
    if (!tab) return;

    // Update active tab
    skillsTabs.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    const blocks = skillsBento.querySelectorAll('.skill-block');

    blocks.forEach(block => {
      if (filter === 'all' || block.getAttribute('data-category') === filter) {
        block.classList.remove('hidden');
      } else {
        block.classList.add('hidden');
      }
    });
  });
}

/* ── CONTACT FORM ───────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span>Message Sent! ✓</span>';
  btn.style.background = '#4ade80';
  btn.style.borderColor = '#4ade80';
  btn.style.color = '#0a0a0e';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
// Expose to inline handler
window.handleFormSubmit = handleFormSubmit;

/* ── SMOOTH ANCHOR SCROLL ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = navbar ? navbar.offsetHeight : 0;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── PILL HOVER RIPPLE (optional delight) ───────────────────── */
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', function(e) {
    this.style.setProperty('--rx', `${e.offsetX}px`);
    this.style.setProperty('--ry', `${e.offsetY}px`);
  });
});

/* ── PREFERS REDUCED MOTION ─────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  document.querySelectorAll('[style*="animation"]').forEach(el => {
    el.style.animation = 'none';
  });
  cancelAnimationFrame(raf);
}

console.log('%c VIVEKKUMAR CHAUHAN — Portfolio ', 'background:#c9a84c;color:#09090e;font-weight:700;padding:4px 8px;font-size:14px;');
console.log('%c AI & Data Science Developer ', 'color:#c9a84c;font-size:12px;');