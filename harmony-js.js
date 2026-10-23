/* ── SCROLL REVEAL: Feature Cards & Steps ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-card, .step').forEach(el => revealObs.observe(el));


/* ── SCROLL REVEAL: Spotlight Spec Tags ── */
const spotlightObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => document.getElementById('tag1').classList.add('visible'), 300);
      setTimeout(() => document.getElementById('tag2').classList.add('visible'), 600);
      setTimeout(() => document.getElementById('tag3').classList.add('visible'), 900);
    }
  });
}, { threshold: 0.3 });

const spotlightEl = document.getElementById('spotlight');
if (spotlightEl) spotlightObs.observe(spotlightEl);


/* ── SMOOTH SCROLL: Anchor Links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ── 3D DRAG ROTATION: Hero Product ── */
(function () {
  const el = document.getElementById('heroProduct');
  if (!el) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let rotX = 5, rotY = 0;

  el.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    el.style.animation = 'none'; // pause auto-spin on drag
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    rotY += dx * 0.5;
    rotX -= dy * 0.5;
    el.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    startX = e.clientX;
    startY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      el.style.animation = ''; // resume auto-spin
    }
  });
})();


/* ── 3D DRAG ROTATION: Spotlight Big Product ── */
(function () {
  const el = document.getElementById('bigProduct');
  if (!el) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let rotX = 5, rotY = -20;

  el.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    el.style.animation = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    rotY += dx * 0.4;
    rotX -= dy * 0.4;
    el.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    startX = e.clientX;
    startY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      el.style.animation = ''; // resume auto-spin
    }
  });
})();
