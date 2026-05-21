// Dark / light mode toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('.theme-toggle__icon');

const saved = localStorage.getItem('theme');
if (saved === 'dark') {
  document.body.classList.add('dark');
  icon.textContent = '○';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  icon.textContent = isDark ? '○' : '◑';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a nav link is clicked
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });
});

// Reading progress bar
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}, { passive: true });

// Sticky header: add shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 16px rgba(0,0,0,0.08)'
    : 'none';
}, { passive: true });
