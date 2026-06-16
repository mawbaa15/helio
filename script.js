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
     GALLERY — image navigation + thumbnails
     ════════════════════════════════════════════ */
  var gallery = document.querySelector('[data-gallery]');

  if (gallery) {
    var galleryImage = gallery.querySelector('[data-gallery-image]');
    var galleryCounter = gallery.querySelector('[data-gallery-counter]');
    var galleryTitle = gallery.querySelector('[data-gallery-title]');
    var galleryText = gallery.querySelector('[data-gallery-text]');
    var prevButton = gallery.querySelector('[data-gallery-prev]');
    var nextButton = gallery.querySelector('[data-gallery-next]');
    var thumbButtons = gallery.querySelectorAll('[data-gallery-thumb]');
    var activeIndex = 0;
    var gallerySwapTimer = null;
    var gallerySlides = [
      {
        src: 'media/coach+cliente.jpg',
        alt: 'Coach certifié du Studio Hélio corrigeant la posture d\'une cliente lors d\'un bilan personnalisé',
        title: "L'attention au millimètre",
        text: "Un regard précis, des corrections immédiates, et une séance qui s'adapte à ton corps."
      },
      {
        src: 'media/reformers.jpg',
        alt: 'Reformers alignés dans le studio Hélio',
        title: 'La mécanique du geste',
        text: 'Des reformers alignés pour travailler force, contrôle et fluidité dans un cadre net et lumineux.'
      },
      {
        src: 'media/pilates2.jpg',
        alt: 'Séance de Pilates dans le studio Hélio',
        title: 'Le rythme du studio',
        text: 'Une atmosphère claire, calme et rythmée pour rester concentré et progresser sans tension.'
      },
      {
        src: 'media/plates1.jpg',
        alt: 'Matériel de Pilates et plates dans le studio Hélio',
        title: 'L\'intensité maîtrisée',
        text: 'Le matériel devient un levier de progression, jamais une brutalité. On dose, on contrôle, on avance.'
      }
    ];

    function setActiveThumb(index) {
      thumbButtons.forEach(function (button, thumbIndex) {
        var isActive = thumbIndex === index;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    function updateSlide(index) {
      activeIndex = (index + gallerySlides.length) % gallerySlides.length;
      var slide = gallerySlides[activeIndex];

      galleryImage.classList.add('is-changing');
      setActiveThumb(activeIndex);

      if (gallerySwapTimer) {
        window.clearTimeout(gallerySwapTimer);
      }

      gallerySwapTimer = window.setTimeout(function () {
        galleryImage.src = slide.src;
        galleryImage.alt = slide.alt;
        galleryCounter.textContent = String(activeIndex + 1).padStart(2, '0') + ' / 04';
        galleryTitle.textContent = slide.title;
        galleryText.textContent = slide.text;

        window.requestAnimationFrame(function () {
          galleryImage.classList.remove('is-changing');
        });
      }, 120);
    }

    prevButton.addEventListener('click', function () {
      updateSlide(activeIndex - 1);
    });

    nextButton.addEventListener('click', function () {
      updateSlide(activeIndex + 1);
    });

    thumbButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var index = parseInt(button.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          updateSlide(index);
        }
      });
    });

    gallery.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        updateSlide(activeIndex - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        updateSlide(activeIndex + 1);
      }
      if (event.key === 'Home') {
        event.preventDefault();
        updateSlide(0);
      }
      if (event.key === 'End') {
        event.preventDefault();
        updateSlide(gallerySlides.length - 1);
      }
    });
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
