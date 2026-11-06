/**
 * Pier 1 Eleganza — script principal (vanilla JS)
 */
(function () {
  'use strict';

  /* Header: fondo sólido al hacer scroll */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Navegación móvil */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    var setMenu = function (isOpen) {
      navLinks.classList.toggle('is-open', isOpen);
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    };

    navToggle.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('is-open'));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
        setMenu(false);
        navToggle.focus();
      }
    });
  }

  /* Resalta el link de navegación activo según la página actual */
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* Animación al hacer scroll: aparición escalonada y limpieza al terminar */
  var revealEls = document.querySelectorAll('.reveal');
  var finishReveal = function (el, delay) {
    window.setTimeout(function () {
      el.classList.remove('reveal', 'is-visible');
      el.style.transitionDelay = '';
    }, delay + 1700);
  };

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visibles = entries.filter(function (entry) {
          return entry.isIntersecting;
        });
        visibles.forEach(function (entry, index) {
          var delay = Math.min(index * 100, 400);
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
          finishReveal(entry.target, delay);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* Hero con parallax suave y barra de progreso de lectura */
  var hero = document.querySelector('.hero');
  var heroMedia = document.querySelector('.hero-media');
  var heroContent = document.querySelector('.hero-content');
  var progressBar = document.querySelector('.scroll-progress');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function updateScrollEffects() {
    ticking = false;
    var y = window.scrollY;

    if (progressBar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }

    if (hero) {
      hero.classList.toggle('is-away', y > 40);
      if (!reduceMotion && y < hero.offsetHeight) {
        if (heroMedia) {
          heroMedia.style.transform = 'translate3d(0,' + (y * 0.2).toFixed(1) + 'px,0)';
        }
        if (heroContent) {
          heroContent.style.opacity = Math.max(0, 1 - y / (hero.offsetHeight * 0.6)).toFixed(2);
          heroContent.style.transform = 'translate3d(0,' + (y * 0.08).toFixed(1) + 'px,0)';
        }
      }
    }
  }

  function requestScrollUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScrollEffects);
    }
  }

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);
  updateScrollEffects();

  /* Formulario de contacto: arma el mensaje y lo envía por WhatsApp (sin backend) */
  var WHATSAPP_NUMBER = '593987252354';
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var successBox = document.getElementById('form-success');
      var errorBox = document.getElementById('form-error');
      var nameField = contactForm.querySelector('#name');
      var emailField = contactForm.querySelector('#email');
      var messageField = contactForm.querySelector('#message');

      var nameMissing = !nameField.value.trim();
      var messageMissing = !messageField.value.trim();
      nameField.setAttribute('aria-invalid', String(nameMissing));
      messageField.setAttribute('aria-invalid', String(messageMissing));

      if (nameMissing || messageMissing) {
        if (successBox) successBox.classList.remove('is-visible');
        if (errorBox) errorBox.hidden = false;
        (nameMissing ? nameField : messageField).focus();
        return;
      }
      if (errorBox) errorBox.hidden = true;

      var text = 'Hola, soy ' + nameField.value.trim() + '. ' + messageField.value.trim();
      if (emailField && emailField.value.trim()) {
        text += ' (Mi correo: ' + emailField.value.trim() + ')';
      }
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener');

      contactForm.reset();
      if (successBox) {
        successBox.classList.add('is-visible');
      }
    });
  }

  /* Año dinámico en el footer */
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
