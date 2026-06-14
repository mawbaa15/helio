document.addEventListener('DOMContentLoaded', function () {

  /* ════════════════════════════════════════════
     NAVIGATION — Scroll behaviour + hero mode
     ════════════════════════════════════════════ */
  var nav = document.getElementById('main-nav');
  var hero = document.querySelector('.hero');

  function updateNav() {
    var heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    // Keep hero-mode (white text) while hero is still visible
    if (heroBottom > 72) {
      nav.classList.add('hero-mode');
    } else {
      nav.classList.remove('hero-mode');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ════════════════════════════════════════════
     MOBILE MENU
     ════════════════════════════════════════════ */
  var burgerBtn  = document.getElementById('burger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpen   = false;

  function closeMenu() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    menuOpen = true;
    mobileMenu.classList.add('open');
    burgerBtn.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', 'true');
  }

  burgerBtn.addEventListener('click', function () {
    if (menuOpen) { closeMenu(); } else { openMenu(); }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (menuOpen && !nav.contains(e.target)) { closeMenu(); }
  });

  /* ════════════════════════════════════════════
     SCROLL REVEAL
     ════════════════════════════════════════════ */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ════════════════════════════════════════════
     FAQ ACCORDION
     ════════════════════════════════════════════ */
  var faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answerId = btn.getAttribute('aria-controls');
      var answer   = document.getElementById(answerId);
      var isOpen   = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqToggles.forEach(function (other) {
        var otherId  = other.getAttribute('aria-controls');
        var otherAns = document.getElementById(otherId);
        other.setAttribute('aria-expanded', 'false');
        otherAns.classList.remove('open');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  /* ════════════════════════════════════════════
     FORM VALIDATION & SUBMISSION
     ════════════════════════════════════════════ */
  var form           = document.getElementById('booking-form');
  var formFields     = document.getElementById('form-fields');
  var submitBtn      = document.getElementById('submit-btn');
  var successMessage = document.getElementById('success-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Clear previous errors
      form.querySelectorAll('.error-msg').forEach(function (el) {
        el.classList.remove('visible');
      });
      form.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });

      // Validate nom
      var nom = document.getElementById('form-nom');
      if (!nom.value.trim()) {
        document.getElementById('error-nom').classList.add('visible');
        nom.classList.add('input-error');
        valid = false;
      }

      // Validate email
      var email = document.getElementById('form-email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById('error-email').classList.add('visible');
        email.classList.add('input-error');
        valid = false;
      }

      // Validate phone
      var phone      = document.getElementById('form-phone');
      var phoneClean = phone.value.replace(/\s/g, '');
      if (!/^[0-9]{10}$/.test(phoneClean)) {
        document.getElementById('error-phone').classList.add('visible');
        phone.classList.add('input-error');
        valid = false;
      }

      // Validate slot
      var slot = document.getElementById('form-slot');
      if (!slot.value) {
        document.getElementById('error-slot').classList.add('visible');
        slot.classList.add('input-error');
        valid = false;
      }

      if (valid) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours…';

        setTimeout(function () {
          formFields.style.display = 'none';
          successMessage.classList.remove('hidden');
        }, 900);
      }
    });

    // Live error clearing
    form.querySelectorAll('input, select').forEach(function (input) {
      input.addEventListener('input', function () {
        input.classList.remove('input-error');
        var err = input.parentElement.querySelector('.error-msg');
        if (err) { err.classList.remove('visible'); }
      });
    });
  }

  /* ════════════════════════════════════════════
     MARQUEE — pause on hover (already in CSS,
     this is a JS fallback for touch devices)
     ════════════════════════════════════════════ */
  // Nothing extra needed: CSS handles animation-play-state on hover.

});
