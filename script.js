document.addEventListener('DOMContentLoaded', function() {
  
  // === Mobile Menu Toggle ===
  var burgerBtn = document.getElementById('burger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconMenu = document.getElementById('icon-menu');
  var iconClose = document.getElementById('icon-close');
  var isMenuOpen = false;
  
  burgerBtn.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.add('open');
      iconMenu.classList.add('hidden');
      iconClose.classList.remove('hidden');
      burgerBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.remove('open');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close mobile menu when clicking a link
  var mobileLinks = mobileMenu.querySelectorAll('a');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function() {
      isMenuOpen = false;
      mobileMenu.classList.remove('open');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  }
  
  // === FAQ Accordion ===
  var faqToggles = document.querySelectorAll('.faq-toggle');
  for (var j = 0; j < faqToggles.length; j++) {
    faqToggles[j].addEventListener('click', function() {
      var answerId = this.getAttribute('aria-controls');
      var answerEl = document.getElementById(answerId);
      var chevron = this.querySelector('.faq-chevron');
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      
      // Close all others
      for (var k = 0; k < faqToggles.length; k++) {
        var otherToggle = faqToggles[k];
        var otherAnswerId = otherToggle.getAttribute('aria-controls');
        var otherAnswer = document.getElementById(otherAnswerId);
        var otherChevron = otherToggle.querySelector('.faq-chevron');
        
        if (otherToggle !== this) {
          otherToggle.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('open');
          otherChevron.style.transform = 'rotate(0deg)';
        }
      }
      
      // Toggle current
      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        answerEl.classList.remove('open');
        chevron.style.transform = 'rotate(0deg)';
      } else {
        this.setAttribute('aria-expanded', 'true');
        answerEl.classList.add('open');
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  }
  
  // === Form Validation & Submission ===
  var bookingForm = document.getElementById('booking-form');
  var submitBtn = document.getElementById('submit-btn');
  var successMessage = document.getElementById('success-message');
  
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var isValid = true;
    
    // Reset errors
    var errorMessages = document.querySelectorAll('.error-msg');
    for (var m = 0; m < errorMessages.length; m++) {
      errorMessages[m].classList.remove('visible');
    }
    var inputs = bookingForm.querySelectorAll('input, select');
    for (var n = 0; n < inputs.length; n++) {
      inputs[n].classList.remove('input-error');
    }
    
    // Validate Nom
    var nomInput = document.getElementById('form-nom');
    if (!nomInput.value.trim()) {
      document.getElementById('error-nom').classList.add('visible');
      nomInput.classList.add('input-error');
      isValid = false;
    }
    
    // Validate Email
    var emailInput = document.getElementById('form-email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById('error-email').classList.add('visible');
      emailInput.classList.add('input-error');
      isValid = false;
    }
    
    // Validate Phone
    var phoneInput = document.getElementById('form-phone');
    var phoneClean = phoneInput.value.replace(/\s/g, '');
    if (!/^[0-9]{10}$/.test(phoneClean)) {
      document.getElementById('error-phone').classList.add('visible');
      phoneInput.classList.add('input-error');
      isValid = false;
    }
    
    // Validate Slot
    var slotSelect = document.getElementById('form-slot');
    if (!slotSelect.value) {
      document.getElementById('error-slot').classList.add('visible');
      slotSelect.classList.add('input-error');
      isValid = false;
    }
    
    if (isValid) {
      // Simulate submission
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      
      setTimeout(function() {
        bookingForm.querySelector('.space-y-5').style.display = 'none';
        bookingForm.querySelector('h3').style.display = 'none';
        successMessage.classList.remove('hidden');
      }, 800);
    }
  });
  
  // Remove error state on input
  var formInputs = bookingForm.querySelectorAll('input, select');
  for (var p = 0; p < formInputs.length; p++) {
    formInputs[p].addEventListener('input', function() {
      this.classList.remove('input-error');
      var errorMsg = this.parentElement.querySelector('.error-msg');
      if (errorMsg) {
        errorMsg.classList.remove('visible');
      }
    });
  }
  
  // === Scroll Fade-In Animation avec Intersection Observer ===
  var fadeElements = document.querySelectorAll('.fade-in');
  
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  for (var q = 0; q < fadeElements.length; q++) {
    observer.observe(fadeElements[q]);
  }
  
  // === Parallax Effect pour Images ===
  var parallaxImages = document.querySelectorAll('.parallax-img');
  
  if (parallaxImages.length > 0) {
    window.addEventListener('scroll', function() {
      parallaxImages.forEach(function(img) {
        var rect = img.getBoundingClientRect();
        var elementTop = rect.top;
        var elementHeight = rect.height;
        var windowHeight = window.innerHeight;
        
        // Element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          var yPos = (elementTop / windowHeight) * 25;
          img.style.transform = 'translateY(' + yPos + 'px)';
        }
      });
    });
  }
  
  // === Count-Up Animation pour Chiffres ===
  function animateCounter(element, target, duration) {
    var start = 0;
    var increment = target / (duration / 16);
    var current = start;
    
    var timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
  
  var countElements = document.querySelectorAll('.count-up');
  var countObserverOptions = { threshold: 0.5 };
  var hasCountedUp = false;
  
  if (countElements.length > 0) {
    var countObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !hasCountedUp) {
          hasCountedUp = true;
          countElements.forEach(function(el) {
            var target = parseInt(el.textContent);
            if (!isNaN(target)) {
              animateCounter(el, target, 1200);
            }
          });
          countObserver.disconnect();
        }
      });
    }, countObserverOptions);
    
    countObserver.observe(countElements[0]);
  }
  
});
