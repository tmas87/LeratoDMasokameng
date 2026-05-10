// ============================================================
// THEME TOGGLE
// ============================================================
const toggle = document.getElementById('themeToggle');
const body   = document.body;

const saved = localStorage.getItem('fp-theme');
if (saved === 'light') {
  body.classList.add('light');
  if (toggle) toggle.checked = true;
}

if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('light');
      localStorage.setItem('fp-theme', 'light');
    } else {
      body.classList.remove('light');
      localStorage.setItem('fp-theme', 'dark');
    }
  });
}

// ============================================================
// ACTIVE NAV LINK
// ============================================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) link.classList.add('active');
});

// ============================================================
// SCROLL FADE-IN
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
