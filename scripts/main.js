// Place in: /scripts/main.js
// Simple accessible mobile hamburger toggle & small helpers

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = siteNav.querySelectorAll('a');

  // Set initial aria-hidden
  siteNav.setAttribute('aria-hidden', 'true');

  function openNav() {
    navToggle.setAttribute('aria-expanded', 'true');
    siteNav.setAttribute('aria-hidden', 'false');
    navToggle.classList.add('open');
  }

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.setAttribute('aria-hidden', 'true');
    navToggle.classList.remove('open');
  }

  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav();
    else openNav();
  });

  // Close nav when a link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // small delay to allow anchor navigation
      if (window.innerWidth <= 768) {
        closeNav();
      }
    });
  });

  // Close nav on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Optional: smooth scroll polyfill for older browsers handled by CSS scroll-behavior
});
