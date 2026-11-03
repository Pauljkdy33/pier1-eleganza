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

  /* Animación fade-in al hacer scroll (IntersectionObserver) */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
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
