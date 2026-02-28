/**
 * GSAP-powered scroll reveals and load animations
 * Physical metaphor: objects settling onto a table
 */
(function() {
  gsap.registerPlugin(ScrollTrigger);

  // ─── Page Load: Staggered fade-in ───
  function initLoadAnimation() {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: 'power3.out'
      }
    });

    // Header fades in
    tl.fromTo('.site-header',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
      0.2
    );

    // Hero name slides up with spring feel
    tl.fromTo('.hero__name',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      0.4
    );

    // Tagline follows
    tl.fromTo('.hero__tagline',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      0.7
    );

    // Section labels
    tl.fromTo('.section-label',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      0.9
    );

    // Project cards stagger in
    tl.fromTo('.project-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out'
      },
      1.0
    );
  }

  // ─── Scroll Reveals ───
  function initScrollReveals() {
    // Generic [data-reveal] elements
    const reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach((el) => {
      // Skip elements animated by load timeline
      if (el.closest('.hero') || el.classList.contains('project-card')) return;

      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Sketches strip — slide in from right
    const strip = document.querySelector('.sketches-strip');
    if (strip) {
      gsap.fromTo(strip,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: strip,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }

  // ─── Project Card Parallax on Hover ───
  function initCardParallax() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      const img = card.querySelector('.project-card__image');
      if (!img) return;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(img, {
          x: x * 10,
          y: y * 10,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });
  }

  // ─── Project Page Scroll Animations ───
  function initProjectPageAnimations() {
    // Content blocks reveal on scroll
    const blocks = document.querySelectorAll('.content-block');
    blocks.forEach((block, i) => {
      gsap.fromTo(block,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    // Project header load
    const header = document.querySelector('.project-header');
    if (header) {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' }});

      tl.fromTo('.project-header__title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        0.3
      );
      tl.fromTo('.project-header__subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        0.5
      );
      tl.fromTo('.project-header__intro',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        0.6
      );
      tl.fromTo('.project-meta',
        { opacity: 0 },
        { opacity: 1 },
        0.8
      );
    }

    // Hero image parallax
    const heroImg = document.querySelector('.project-hero img');
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.project-hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }

  // ─── Archive / Work Page Load Animation ───
  function initArchiveAnimation() {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'power3.out' }
    });

    tl.fromTo('.site-header',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
      0.2
    );

    tl.fromTo('.work-hero__title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      0.4
    );

    tl.fromTo('.archive-grid .project-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out'
      },
      0.7
    );
  }

  // ─── Init ───
  document.addEventListener('DOMContentLoaded', () => {
    // Determine page type
    const isHome = document.querySelector('.hero');
    const isProject = document.querySelector('.project-header');
    const isArchive = document.querySelector('.archive-grid');

    if (isHome) {
      initLoadAnimation();
      initCardParallax();
    }

    if (isArchive) {
      initArchiveAnimation();
      initCardParallax();
    }

    if (isProject) {
      initProjectPageAnimations();
    }

    initScrollReveals();
  });
})();
