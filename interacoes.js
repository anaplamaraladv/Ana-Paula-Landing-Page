// Revelação suave de cards e filetes ao rolar a página.
(function () {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.pre-reveal, .filete.pre-grow').forEach(function (el) {
    observer.observe(el);
  });
})();
