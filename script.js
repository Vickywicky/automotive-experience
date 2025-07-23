// Intersection observer for animating sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observerInstance.unobserve(entry.target);
      }
    });
  }, options);
  document.querySelectorAll('.feature-item, .about-section, .contact-section').forEach(section => {
    observer.observe(section);
  });
});
