/**
 * Craft Demos — 9 interactive demonstrations for "The Feel of Things"
 * Vanilla JS + Canvas + GSAP — no additional dependencies
 */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // ─── Utility ───
  function lerp(a, b, t) { return a + (a - b) * -t; }
  function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, w: rect.width, h: rect.height, dpr };
  }

  // ─── 01. GRAIN ───
  function initGrainDemo() {
    const canvas = document.getElementById('demo-grain');
    const slider = document.getElementById('grain-density');
    if (!canvas || !slider) return;

    const { ctx, w, h } = setupCanvas(canvas);
    let mouseX = w / 2, mouseY = h / 2;
    let density = parseInt(slider.value) / 100;

    function drawGrain() {
      // Base surface
      ctx.fillStyle = '#F0EDE6';
      ctx.fillRect(0, 0, w, h);

      // Grain noise
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const grainAmount = density * 60;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * grainAmount;
        data[i] = clamp(data[i] + noise, 0, 255);
        data[i + 1] = clamp(data[i + 1] + noise, 0, 255);
        data[i + 2] = clamp(data[i + 2] + noise, 0, 255);
      }
      ctx.putImageData(imageData, 0, 0);

      // Depth layers driven by mouse — parallax texture circles
      const layers = 5;
      for (let l = 0; l < layers; l++) {
        const depth = (l + 1) / layers;
        const offsetX = (mouseX / w - 0.5) * 30 * depth;
        const offsetY = (mouseY / h - 0.5) * 30 * depth;
        const alpha = 0.02 + density * 0.03;

        ctx.beginPath();
        ctx.arc(w / 2 + offsetX + l * 80 - 160, h / 2 + offsetY + l * 30 - 60, 60 + l * 20, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 98, 43, ${alpha})`;
        ctx.fill();
      }

      // Surface text
      ctx.fillStyle = 'rgba(26, 26, 26, 0.12)';
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`grain: ${Math.round(density * 100)}%`, w / 2, h - 16);
    }

    drawGrain();

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      drawGrain();
    });

    slider.addEventListener('input', () => {
      density = parseInt(slider.value) / 100;
      drawGrain();
    });

    // Touch support
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
      drawGrain();
    }, { passive: false });
  }

  // ─── 02. WARMTH ───
  function initWarmthDemo() {
    const slider = document.getElementById('warmth-slider');
    const card = document.getElementById('warmth-card');
    if (!slider || !card) return;

    function updateWarmth(val) {
      const t = val / 100; // 0 = cold, 1 = warm

      // Interpolate colors
      const bgH = lerp(210, 35, t);
      const bgS = lerp(15, 20, t);
      const bgL = lerp(97, 93, t);

      const imgH = lerp(210, 25, t);
      const imgS = lerp(10, 30, t);
      const imgL = lerp(85, 78, t);

      const textH = lerp(210, 30, t);
      const textS = lerp(5, 15, t);
      const textL = lerp(15, 12, t);

      const mutedH = lerp(210, 30, t);
      const mutedS = lerp(5, 12, t);
      const mutedL = lerp(55, 50, t);

      const shadowAlpha = lerp(0.04, 0.1, t);
      const borderRadius = lerp(4, 12, t);

      const cardBody = card.querySelector('.warmth-card__body');
      const cardImage = card.querySelector('.warmth-card__image');
      const cardTitle = card.querySelector('.warmth-card__title');
      const cardText = card.querySelector('.warmth-card__text');
      const cardMeta = card.querySelector('.warmth-card__meta');

      card.style.borderRadius = `${borderRadius}px`;
      card.style.boxShadow = `0 4px 20px rgba(26, 26, 26, ${shadowAlpha})`;
      cardBody.style.backgroundColor = `hsl(${bgH}, ${bgS}%, ${bgL}%)`;
      cardImage.style.backgroundColor = `hsl(${imgH}, ${imgS}%, ${imgL}%)`;
      cardTitle.style.color = `hsl(${textH}, ${textS}%, ${textL}%)`;
      cardText.style.color = `hsl(${textH}, ${textS}%, ${textL + 15}%)`;
      cardMeta.style.color = `hsl(${mutedH}, ${mutedS}%, ${mutedL}%)`;
    }

    updateWarmth(parseInt(slider.value));

    slider.addEventListener('input', () => {
      updateWarmth(parseInt(slider.value));
    });
  }

  // ─── 03. PATINA ───
  function initPatinaDemo() {
    const canvas = document.getElementById('demo-patina');
    if (!canvas) return;

    const { ctx, w, h } = setupCanvas(canvas);
    const marks = [];

    // Base surface
    function drawBase() {
      ctx.fillStyle = '#E8E2D6';
      ctx.fillRect(0, 0, w, h);

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    }

    function drawMarks() {
      drawBase();

      // Draw accumulated marks
      marks.forEach((mark) => {
        // Age the mark slightly
        mark.age = Math.min(mark.age + 0.001, 1);
        const alpha = mark.alpha * (0.3 + mark.age * 0.7);

        ctx.beginPath();
        ctx.arc(mark.x, mark.y, mark.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${mark.r}, ${mark.g}, ${mark.b}, ${alpha})`;
        ctx.fill();
      });

      // Worn text
      if (marks.length > 0) {
        ctx.fillStyle = 'rgba(26, 26, 26, 0.08)';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${marks.length} interaction${marks.length === 1 ? '' : 's'} recorded`, w / 2, h - 16);
      }
    }

    function addMark(x, y, type) {
      const isClick = type === 'click';
      marks.push({
        x,
        y,
        radius: isClick ? 12 + Math.random() * 8 : 4 + Math.random() * 6,
        alpha: isClick ? 0.06 : 0.02,
        r: isClick ? 180 : 26,
        g: isClick ? 80 : 26,
        b: isClick ? 30 : 26,
        age: 0
      });
    }

    drawBase();

    let lastMoveTime = 0;
    canvas.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastMoveTime < 50) return;
      lastMoveTime = now;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addMark(x, y, 'hover');
      drawMarks();
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addMark(x, y, 'click');
      drawMarks();
    });

    // Touch support
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastMoveTime < 50) return;
      lastMoveTime = now;

      const rect = canvas.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      addMark(x, y, 'hover');
      drawMarks();
    }, { passive: false });
  }

  // ─── 04. WEIGHT ───
  function initWeightDemo() {
    const heavy = document.getElementById('weight-heavy');
    const light = document.getElementById('weight-light');
    if (!heavy || !light) return;

    function makeDraggable(el, mass) {
      let isDragging = false;
      let startX, startY, origX, origY;
      let velX = 0, velY = 0;
      let lastX = 0, lastY = 0;
      let lastTime = 0;

      el.addEventListener('pointerdown', (e) => {
        isDragging = true;
        el.setPointerCapture(e.pointerId);

        // Kill any running GSAP animation and read current position
        gsap.killTweensOf(el);
        const currentX = gsap.getProperty(el, 'x') || 0;
        const currentY = gsap.getProperty(el, 'y') || 0;

        startX = e.clientX;
        startY = e.clientY;
        origX = currentX;
        origY = currentY;
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = Date.now();
        velX = 0;
        velY = 0;
      });

      el.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const now = Date.now();
        const dt = Math.max(now - lastTime, 1);

        const newX = origX + (e.clientX - startX);
        const newY = origY + (e.clientY - startY);

        velX = (e.clientX - lastX) / dt * 16;
        velY = (e.clientY - lastY) / dt * 16;

        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;

        // Use GSAP set so state stays consistent
        gsap.set(el, { x: newX, y: newY });
      });

      el.addEventListener('pointerup', () => {
        isDragging = false;

        if (mass === 'heavy') {
          // Heavy: slow, overshooting spring — feels like dropping a brick
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 2.2,
            ease: 'elastic.out(0.3, 0.2)',
            overwrite: true
          });
        } else {
          // Light: snappy, quick — feels like flicking a card
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: 'back.out(2.5)',
            overwrite: true
          });
        }
      });
    }

    makeDraggable(heavy, 'heavy');
    makeDraggable(light, 'light');
  }

  // ─── 05. FRICTION ───
  function initFrictionDemo() {
    const handle = document.getElementById('friction-handle');
    const slider = document.getElementById('friction-coeff');
    if (!handle || !slider) return;

    const track = handle.parentElement;
    let isDragging = false;
    let startX, handleStartLeft;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let currentLeft = 0;
    let animFrame = null;

    handle.addEventListener('pointerdown', (e) => {
      isDragging = true;
      handle.setPointerCapture(e.pointerId);
      startX = e.clientX;
      handleStartLeft = currentLeft;
      lastX = e.clientX;
      lastTime = Date.now();
      velocity = 0;
      if (animFrame) cancelAnimationFrame(animFrame);
    });

    handle.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const trackWidth = track.getBoundingClientRect().width - 48;
      const now = Date.now();
      const dt = Math.max(now - lastTime, 1);

      velocity = (e.clientX - lastX) / dt * 16;
      lastX = e.clientX;
      lastTime = now;

      currentLeft = clamp(handleStartLeft + (e.clientX - startX), 0, trackWidth);
      handle.style.left = `${currentLeft}px`;
    });

    handle.addEventListener('pointerup', () => {
      isDragging = false;
      const friction = parseInt(slider.value) / 100;

      // friction 0 (ice) = velocity barely decays, slides forever
      // friction 1 (grass) = velocity dies almost instantly
      // Decay multiplier: 0.99 (icy, almost no friction) to 0.7 (very grippy)
      const decay = 0.99 - friction * 0.29;

      function coast() {
        velocity *= decay;

        const trackWidth = track.getBoundingClientRect().width - 48;
        currentLeft = clamp(currentLeft + velocity, 0, trackWidth);
        handle.style.left = `${currentLeft}px`;

        // Bounce off edges
        if (currentLeft <= 0 || currentLeft >= trackWidth) {
          velocity *= -0.4;
        }

        if (Math.abs(velocity) > 0.1) {
          animFrame = requestAnimationFrame(coast);
        }
      }

      coast();
    });
  }

  // ─── 06. FLUID ───
  function initFluidDemo() {
    const canvas = document.getElementById('demo-fluid');
    if (!canvas) return;

    const { ctx, w, h } = setupCanvas(canvas);

    const particles = [];
    const numParticles = 60;
    let mouseX = w / 2, mouseY = h / 2;
    let isActive = false;

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        vx: 0,
        vy: 0,
        radius: 3 + Math.random() * 8,
        color: `rgba(${Math.random() > 0.5 ? '212, 98, 43' : '27, 45, 79'}, ${0.08 + Math.random() * 0.12})`
      });
    }

    function update() {
      ctx.fillStyle = '#F0EDE6';
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        // Attraction to mouse (fluid behavior)
        if (isActive) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.min(150 / (dist + 1), 3);

          p.vx += dx / dist * force * 0.3;
          p.vy += dy / dist * force * 0.3;
        }

        // Return to base position (gentle spring)
        const homeX = p.baseX - p.x;
        const homeY = p.baseY - p.y;
        p.vx += homeX * 0.008;
        p.vy += homeY * 0.008;

        // Damping (fluid viscosity)
        p.vx *= 0.92;
        p.vy *= 0.92;

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(update);
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isActive = true;
    });

    canvas.addEventListener('mouseleave', () => {
      isActive = false;
    });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
      isActive = true;
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
      isActive = false;
    });

    update();
  }

  // ─── 07. TACTILITY ───
  function initTactilityDemo() {
    const btn = document.getElementById('tactile-btn');
    const feedback = document.getElementById('tactile-feedback');
    if (!btn || !feedback) return;

    let pressStart = 0;
    let pressInterval = null;
    let pressForce = 0;

    function updatePress() {
      const duration = Date.now() - pressStart;
      pressForce = Math.min(duration / 1000, 1); // 0 to 1 over 1 second

      const depth = 2 + pressForce * 4;
      const shadow = 6 - pressForce * 5;
      const scale = 1 - pressForce * 0.03;

      btn.style.transform = `translateY(${depth}px) scale(${scale})`;
      btn.style.boxShadow = `0 ${Math.max(shadow, 1)}px 0 rgba(26, 26, 26, ${0.3 - pressForce * 0.2}), 0 ${Math.max(shadow + 2, 2)}px ${Math.max(shadow * 2.5, 3)}px rgba(26, 26, 26, ${0.12 - pressForce * 0.08})`;

      if (pressForce < 0.3) {
        feedback.textContent = 'Light touch';
      } else if (pressForce < 0.7) {
        feedback.textContent = 'Pressing...';
      } else {
        feedback.textContent = 'Full press — committed';
      }
    }

    btn.addEventListener('pointerdown', (e) => {
      pressStart = Date.now();
      pressInterval = setInterval(updatePress, 16);
      updatePress();
    });

    function release() {
      if (pressInterval) {
        clearInterval(pressInterval);
        pressInterval = null;
      }

      const finalForce = pressForce;

      // Spring release — more force = more energetic release
      gsap.to(btn, {
        y: finalForce > 0.5 ? -4 : -1,
        scaleX: 1 + finalForce * 0.02,
        scaleY: 1 - finalForce * 0.01,
        duration: 0.15,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(btn, {
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)'
          });
        }
      });

      btn.style.boxShadow = '';
      pressForce = 0;

      setTimeout(() => {
        feedback.textContent = '';
      }, 1500);
    }

    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
  }

  // ─── 08. RESISTANCE ───
  function initResistanceDemo() {
    const el = document.getElementById('resistance-el');
    const status = document.getElementById('resistance-status');
    const track = el ? el.parentElement : null;
    if (!el || !status || !track) return;

    let isDragging = false;
    let startX, elStartLeft;
    let currentLeft = 0;

    // Mobile portrait needs more resistance; laptop trackpads need less
    const isMobilePortrait = () => window.innerWidth < 600 && window.innerHeight > window.innerWidth;
    const getThreshold = () => isMobilePortrait() ? 0.72 : 0.65;

    el.addEventListener('pointerdown', (e) => {
      isDragging = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      elStartLeft = currentLeft;
      status.textContent = '';
    });

    el.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const trackWidth = track.getBoundingClientRect().width;
      const elWidth = el.getBoundingClientRect().width;
      const maxLeft = trackWidth - elWidth - 8;
      const thresholdPercent = getThreshold();

      let rawLeft = elStartLeft + (e.clientX - startX);

      if (isMobilePortrait()) {
        // Asymptotic resistance for touch — harder to complete
        const threshold = maxLeft * thresholdPercent;
        if (rawLeft > threshold * 0.5) {
          const overAmount = rawLeft - threshold * 0.5;
          const resistance = 1 / (1 + overAmount * 0.014);
          rawLeft = threshold * 0.5 + overAmount * resistance;
        }
      } else {
        // Trackpad: free drag early, resistance ramps in the back half
        const confirmLine = maxLeft * thresholdPercent;
        const resistanceOnset = confirmLine * 0.55;
        if (rawLeft > resistanceOnset) {
          const overAmount = rawLeft - resistanceOnset;
          // Linear slowdown — 38% speed, always reachable
          rawLeft = resistanceOnset + overAmount * 0.38;
        }
      }

      currentLeft = clamp(rawLeft, 0, maxLeft);
      el.style.left = `${currentLeft}px`;

      // Visual feedback
      const progress = currentLeft / maxLeft;
      if (progress > thresholdPercent) {
        el.style.backgroundColor = 'var(--orange)';
        status.textContent = 'Release to confirm';
      } else if (progress > thresholdPercent * 0.7) {
        status.textContent = 'Keep going...';
        el.style.backgroundColor = '';
      } else {
        status.textContent = '';
        el.style.backgroundColor = '';
      }
    });

    el.addEventListener('pointerup', () => {
      isDragging = false;
      const trackWidth = track.getBoundingClientRect().width;
      const elWidth = el.getBoundingClientRect().width;
      const maxLeft = trackWidth - elWidth - 8;
      const progress = currentLeft / maxLeft;

      if (progress > getThreshold()) {
        // Confirmed — snap to end
        gsap.to(el, {
          left: maxLeft,
          duration: 0.3,
          ease: 'power3.out',
          onComplete: () => {
            status.textContent = 'Confirmed';
            el.style.backgroundColor = 'var(--orange)';

            // Reset after a moment
            setTimeout(() => {
              gsap.to(el, {
                left: 0,
                duration: 0.6,
                ease: 'power3.inOut',
                onComplete: () => {
                  currentLeft = 0;
                  status.textContent = '';
                  el.style.backgroundColor = '';
                }
              });
            }, 1200);
          }
        });
        currentLeft = maxLeft;
      } else {
        // Spring back
        gsap.to(el, {
          left: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          onComplete: () => {
            currentLeft = 0;
            status.textContent = '';
          }
        });
      }
    });
  }

  // ─── 09. SILENCE ───
  function initSilenceDemo() {
    const playBtn = document.getElementById('silence-play');
    const continuous = document.getElementById('silence-continuous');
    const paused = document.getElementById('silence-paused');
    if (!playBtn || !continuous || !paused) return;

    let isPlaying = false;

    function resetBlocks(container) {
      const blocks = container.querySelectorAll('.silence-block');
      blocks.forEach((block) => {
        gsap.set(block, { opacity: 0, scaleX: 0 });
      });
    }

    function playContinuous() {
      const blocks = continuous.querySelectorAll('.silence-block');
      const tl = gsap.timeline();

      blocks.forEach((block, i) => {
        tl.to(block, {
          opacity: 1,
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out'
        }, i * 0.3);
      });

      return tl;
    }

    function playPaused() {
      const blocks = paused.querySelectorAll('.silence-block');
      const tl = gsap.timeline();

      blocks.forEach((block, i) => {
        tl.to(block, {
          opacity: 1,
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out'
        }, i * 0.3 + i * 0.25); // Add deliberate pauses between each
      });

      return tl;
    }

    playBtn.addEventListener('click', () => {
      if (isPlaying) return;
      isPlaying = true;
      playBtn.textContent = 'Playing...';
      playBtn.style.pointerEvents = 'none';

      resetBlocks(continuous);
      resetBlocks(paused);

      const tl1 = playContinuous();
      const tl2 = playPaused();

      const maxDuration = Math.max(tl1.duration(), tl2.duration());

      setTimeout(() => {
        isPlaying = false;
        playBtn.textContent = 'Play again';
        playBtn.style.pointerEvents = '';
      }, maxDuration * 1000 + 500);
    });
  }

  // ─── INIT ALL ───
  document.addEventListener('DOMContentLoaded', () => {
    initGrainDemo();
    initWarmthDemo();
    initPatinaDemo();
    initWeightDemo();
    initFrictionDemo();
    initFluidDemo();
    initTactilityDemo();
    initResistanceDemo();
    initSilenceDemo();
  });
})();
