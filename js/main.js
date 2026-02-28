/**
 * Main entry point
 * Initializes all systems after DOM ready
 */
(function() {
  // View Transition API support check
  if (document.startViewTransition) {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href$=".html"]');
      if (!link || link.target === '_blank') return;

      e.preventDefault();
      const href = link.getAttribute('href');

      document.startViewTransition(() => {
        window.location.href = href;
      });
    });
  }

  // Lazy load images with IntersectionObserver
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    lazyImages.forEach((img) => observer.observe(img));
  }

  // Log ready state
  console.log('%cdesignedby bruno', 'font-family: monospace; font-size: 12px; color: #D4622B;');
})();
