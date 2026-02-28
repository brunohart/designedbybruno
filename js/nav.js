/**
 * Navigation behavior
 * - Smooth scroll to anchors
 * - Hide current-page nav link
 */
(function() {
  // Smooth scroll for hash links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Hide nav link for current page (except Archive — always visible)
  var path = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
  if (path === '') path = 'index.html';
  var navLinks = document.querySelectorAll('.site-header nav a');
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var linkPage = href.replace(/^\.\//, '').replace(/^\.\.\//, '').split('/').pop();
    // Never hide the Archive link
    if (linkPage === 'work.html') return;
    if (linkPage === path || (link.getAttribute('aria-current') === 'page')) {
      link.style.display = 'none';
    }
  });
})();
