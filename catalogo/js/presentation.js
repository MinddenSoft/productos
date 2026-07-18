/* ============================================================
   CATALOGO — Presentation JS
   ============================================================ */

(function () {
  'use strict';

  /* === Reveal on scroll (Intersection Observer) === */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      obs.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in');
    });
  }

  /* === Navigation dots === */
  var slides = document.querySelectorAll('.slide');
  var navContainer = document.createElement('div');
  navContainer.className = 'nav-dots';
  document.body.appendChild(navContainer);

  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', function () {
      slides[i].scrollIntoView({ behavior: 'smooth' });
    });
    navContainer.appendChild(dot);
  });

  var dots = navContainer.querySelectorAll('.nav-dot');

  var navCounter = document.createElement('div');
  navCounter.className = 'nav-counter';
  navCounter.innerHTML = '<strong>1</strong> / ' + slides.length;
  document.body.appendChild(navCounter);

  var navHint = document.createElement('div');
  navHint.className = 'nav-hint';
  navHint.innerHTML =
    '<kbd>\u2191</kbd><kbd>\u2193</kbd> navegar &nbsp;|&nbsp; <kbd>Home</kbd> inicio';
  document.body.appendChild(navHint);

  function updateNav() {
    var scrollY = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;
    var current = 0;
    slides.forEach(function (slide, i) {
      var rect = slide.getBoundingClientRect();
      if (rect.top <= vh * 0.5) current = i;
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
    navCounter.innerHTML =
      '<strong>' + (current + 1) + '</strong> / ' + slides.length;
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* === Keyboard navigation === */
  document.addEventListener('keydown', function (e) {
    var scrollY = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;
    var current = 0;
    slides.forEach(function (slide, i) {
      var rect = slide.getBoundingClientRect();
      if (rect.top <= vh * 0.5) current = i;
    });

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      if (current < slides.length - 1) {
        slides[current + 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (current > 0) {
        slides[current - 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      slides[0].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      slides[slides.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* === Magnetic button effect === */
  var magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform =
        'translate(' + x * 0.15 + 'px, ' + y * 0.15 + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
    });
  });

  /* === Catalog filter === */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var catalogCards = document.querySelectorAll('.catalog-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      catalogCards.forEach(function (card, i) {
        var category = card.getAttribute('data-category');
        var show = filter === 'all' || category === filter;

        card.style.transition =
          'opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)';

        if (show) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.pointerEvents = 'auto';
          card.style.position = 'relative';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          card.style.pointerEvents = 'none';
          setTimeout(function () {
            if (card.style.opacity === '0') {
              card.style.position = 'absolute';
              card.style.visibility = 'hidden';
            }
          }, 400);
        }
      });

      // Reset visibility after filter change
      setTimeout(function () {
        catalogCards.forEach(function (card) {
          if (card.style.opacity === '1') {
            card.style.position = 'relative';
            card.style.visibility = 'visible';
          }
        });
      }, 50);
    });
  });

  /* === Card entrance animation on scroll === */
  if ('IntersectionObserver' in window) {
    var cardObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    catalogCards.forEach(function (card) {
      card.style.animationPlayState = 'paused';
      cardObs.observe(card);
    });
  }
})();
