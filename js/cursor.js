/**
 * Custom cursor with hover reactions
 * Physical metaphor: finger approaching a surface
 */
(function() {
  const cursor = document.querySelector('.cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Spring-like following with lerp
  function animate() {
    const ease = 0.15;
    cursorX += (mouseX - cursorX) * ease;
    cursorY += (mouseY - cursorY) * ease;
    cursor.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover reactions on interactive elements
  const hoverTargets = 'a, button, .project-card, .sketches-strip__item, [data-cursor-hover]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('cursor--hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('cursor--hover');
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.classList.add('cursor--hidden');
  });

  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('cursor--hidden');
  });
})();
