(function () {
  var STORAGE_KEY = 'biltzone-lang';
  var toggle = document.getElementById('langToggle');
  var root = document.documentElement;

  function applyLang(lang) {
    document.querySelectorAll('[data-ko][data-en]').forEach(function (el) {
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ko');
    });
    root.setAttribute('lang', lang === 'en' ? 'en' : 'ko');
    toggle.setAttribute('data-active', lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var saved = 'ko';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'ko'; } catch (e) {}
  applyLang(saved);

  toggle.addEventListener('click', function () {
    var current = toggle.getAttribute('data-active') === 'en' ? 'en' : 'ko';
    applyLang(current === 'en' ? 'ko' : 'en');
  });

  // Mobile menu
  var burger = document.getElementById('navBurger');
  var navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    burger.classList.toggle('active', open);
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.classList.remove('active');
    });
  });

  // Nav shadow on scroll
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal sections as they snap into view
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealTargets = document.querySelectorAll('.section, .strategy, .footer');
    revealTargets.forEach(function (el) { el.classList.add('reveal-pending'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }
})();
