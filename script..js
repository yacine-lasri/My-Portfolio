// Animate project cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.project-card').forEach(card => {
  card.classList.add('fade-in');
  observer.observe(card);
});

animate();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('visible');
  });
});
