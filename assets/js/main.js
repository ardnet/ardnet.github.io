// ~/ardi — small enhancements only; the page works without JS.
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'close' : 'menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'menu';
      }
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Type out the hero command
  var typed = document.getElementById('typed');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typed && !reduce) {
    var text = typed.getAttribute('data-text') || typed.textContent;
    typed.textContent = '';
    var i = 0;
    var tick = function () {
      typed.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, 90 + Math.random() * 60);
    };
    setTimeout(tick, 400);
  }
})();
