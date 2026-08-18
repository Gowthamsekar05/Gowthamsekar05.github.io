/**
 * Gowtham S — Academic & Research Portfolio Script
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollProgress();
  initNavbar();
  initScrollSpy();
  initScrollAnimations();
  initExpandableDetails();
  initBackToTop();
  initEmailCopy();
  initDiagramLightbox();
  initSkillCardInteractions();
});

/**
 * 0. Theme Toggle (High-Contrast Research Dark Mode)
 */
function initThemeToggle() {
  const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
  const THEME_STORAGE_KEY = 'gowtham_portfolio_theme';

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function applyTheme(theme, persist = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    const isDark = theme === 'dark';
    const nextLabel = isDark ? 'Switch to light mode' : 'Switch to high-contrast dark mode';
    const nextTitle = isDark ? 'Switch to Light Mode (T)' : 'Switch to High-Contrast Dark Mode (T)';

    themeToggles.forEach(btn => {
      btn.setAttribute('aria-label', nextLabel);
      btn.setAttribute('title', nextTitle);
    });
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  }

  // Initial sync with current theme
  applyTheme(getCurrentTheme(), false);

  // Attach button click handlers
  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // Keyboard shortcut: Press 'T' or 't' to toggle theme
  window.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
      const activeEl = document.activeElement;
      const isInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);
      if (!isInput) {
        e.preventDefault();
        toggleTheme();
      }
    }
  });

  // Auto update on OS color scheme change if user has not explicitly chosen
  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  } catch (err) {
    // Ignore legacy browser matchMedia listener issues
  }
}

/**
 * 1. Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/**
 * 2. Navigation & Mobile Menu
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.nav-link, .nav-cta') : [];

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    const menuIcon = navToggle.querySelector('.icon-menu');
    const closeIcon = navToggle.querySelector('.icon-close');
    if (menuIcon && closeIcon) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    const menuIcon = navToggle.querySelector('.icon-menu');
    const closeIcon = navToggle.querySelector('.icon-close');
    if (menuIcon && closeIcon) {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }
}

/**
 * 3. Active Navigation Spy via IntersectionObserver
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 4. Smooth Section Stagger & Scroll Micro-Animations
 */
function initScrollAnimations() {
  // Check if reduced motion is requested by user
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-init').forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  // Ensure major section elements and cards have reveal-init class and dynamic stagger delays
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    // Collect interactive child elements within the section
    const targets = section.querySelectorAll(
      '.section-header, .about-bio, .info-card, .timeline-item, .project-card, .research-card, .pub-card, .skill-category-card, .contact-card, .contact-cta-box, .stat-card, .reveal-init'
    );

    // Apply incremental stagger timing within each section container
    let staggerIndex = 0;
    targets.forEach(target => {
      if (!target.classList.contains('reveal-init')) {
        target.classList.add('reveal-init');
      }
      
      // Calculate smooth cascading delay based on position if not hardcoded with .delay-*
      const hasExplicitDelay = Array.from(target.classList).some(c => c.startsWith('delay-'));
      if (!hasExplicitDelay) {
        const delayMs = Math.min(staggerIndex * 75, 450);
        target.style.setProperty('--stagger-delay', `${delayMs}ms`);
      }
      staggerIndex++;
    });
  });

  const animatedElements = document.querySelectorAll('.reveal-init');
  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * 5. Expandable Technical Details in Project & Research Cards
 */
function initExpandableDetails() {
  const toggles = document.querySelectorAll('.details-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const detailsBox = document.getElementById(targetId);
      if (!detailsBox) return;

      const isExpanded = detailsBox.classList.contains('open');
      if (isExpanded) {
        detailsBox.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        detailsBox.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 6. Back To Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 7. Copy Email with Toast Notification
 */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('copy-toast');
  let toastTimer = null;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'gowthamsekar0805@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for older browsers / insecure context
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        showToast('Email copied to clipboard');
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    const toastText = toast.querySelector('.toast-text');
    if (toastText) toastText.textContent = message;

    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }
}

/**
 * 9. Architecture & Diagram Lightbox / Carousel System
 */
function initDiagramLightbox() {
  const modal = document.getElementById('diagram-lightbox');
  const container = document.getElementById('lightbox-container');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const zoomBtn = document.getElementById('lightbox-zoom-toggle');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  const badgeEl = document.getElementById('lightbox-badge');
  const categoryEl = document.getElementById('lightbox-category');
  const projTitleEl = document.getElementById('lightbox-project-title');
  const counterEl = document.getElementById('lightbox-counter');
  const slideTitleEl = document.getElementById('lightbox-slide-title');
  const metricChipsEl = document.getElementById('lightbox-metric-chips');
  const descEl = document.getElementById('lightbox-slide-desc');
  const keyPointsEl = document.getElementById('lightbox-key-points');
  const displayEl = document.getElementById('carousel-display');
  const dotsWrapperEl = document.getElementById('carousel-dots');

  if (!modal || !displayEl) return;

  let currentDiagramKey = null;
  let currentSlideIndex = 0;
  let lastActiveElement = null;

  // Triggers (both buttons & preview banner cards)
  const triggerElements = document.querySelectorAll('.diagram-lightbox-btn, .card-diagram-preview');

  triggerElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const diagramId = el.getAttribute('data-diagram-id');
      if (diagramId) {
        openLightbox(diagramId, 0, el);
      }
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const diagramId = el.getAttribute('data-diagram-id');
        if (diagramId) {
          openLightbox(diagramId, 0, el);
        }
      }
    });
  });

  function openLightbox(diagramKey, slideIndex = 0, triggerSource = null) {
    const data = window.PROJECT_DIAGRAMS ? window.PROJECT_DIAGRAMS[diagramKey] : null;
    if (!data || !data.slides || data.slides.length === 0) return;

    lastActiveElement = triggerSource || document.activeElement;
    currentDiagramKey = diagramKey;
    currentSlideIndex = Math.max(0, Math.min(slideIndex, data.slides.length - 1));

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');

    renderLightbox('fade');
    closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    container.classList.remove('zoomed');
    document.body.classList.remove('lightbox-open');

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function renderLightbox(direction = 'fade') {
    const data = window.PROJECT_DIAGRAMS[currentDiagramKey];
    if (!data) return;

    const slides = data.slides;
    const currentSlide = slides[currentSlideIndex];
    const totalSlides = slides.length;

    // Header info
    badgeEl.textContent = data.badge;
    categoryEl.textContent = data.category;
    projTitleEl.textContent = data.title;

    // Slide Counter & Title
    counterEl.textContent = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;
    slideTitleEl.textContent = currentSlide.title;

    // Metric Chips
    metricChipsEl.innerHTML = '';
    if (currentSlide.metrics && currentSlide.metrics.length > 0) {
      currentSlide.metrics.forEach(m => {
        const chip = document.createElement('span');
        chip.className = `lightbox-chip ${m.highlight ? 'lightbox-chip-highlight' : ''}`;
        chip.textContent = `${m.label}: ${m.value}`;
        metricChipsEl.appendChild(chip);
      });
    }

    // Description & Key Points
    descEl.textContent = currentSlide.desc;
    keyPointsEl.innerHTML = '';
    if (currentSlide.points && currentSlide.points.length > 0) {
      currentSlide.points.forEach(pt => {
        const badge = document.createElement('span');
        badge.className = 'lightbox-point-badge';
        badge.innerHTML = `<strong>${escapeHtml(pt.strong)}</strong> ${escapeHtml(pt.text)}`;
        keyPointsEl.appendChild(badge);
      });
    }

    // Trigger caption stagger animations
    [slideTitleEl, descEl, metricChipsEl, keyPointsEl].forEach(el => {
      if (el) {
        el.classList.remove('caption-animated');
        void el.offsetWidth; // force DOM reflow
        el.classList.add('caption-animated');
      }
    });

    // Render SVG into display stage with directional transition animation
    displayEl.innerHTML = currentSlide.svg;
    displayEl.classList.remove('slide-enter-right', 'slide-enter-left', 'slide-enter-fade');
    void displayEl.offsetWidth; // force DOM reflow for 60fps restart

    if (direction === 'next') {
      displayEl.classList.add('slide-enter-right');
    } else if (direction === 'prev') {
      displayEl.classList.add('slide-enter-left');
    } else {
      displayEl.classList.add('slide-enter-fade');
    }

    // Navigation Buttons visibility / disability
    if (totalSlides <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      prevBtn.disabled = currentSlideIndex === 0;
      nextBtn.disabled = currentSlideIndex === totalSlides - 1;
      prevBtn.style.opacity = currentSlideIndex === 0 ? '0.4' : '1';
      nextBtn.style.opacity = currentSlideIndex === totalSlides - 1 ? '0.4' : '1';
    }

    // Carousel Dots / Thumbnails
    dotsWrapperEl.innerHTML = '';
    if (totalSlides > 1) {
      slides.forEach((slide, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot-btn ${idx === currentSlideIndex ? 'active' : ''}`;
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', idx === currentSlideIndex ? 'true' : 'false');
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}: ${slide.title}`);
        dot.innerHTML = `<span>${idx + 1}</span> <span>${slide.title.split(' ')[0]}</span>`;
        dot.addEventListener('click', () => {
          if (idx === currentSlideIndex) return;
          const jumpDir = idx > currentSlideIndex ? 'next' : 'prev';
          currentSlideIndex = idx;
          renderLightbox(jumpDir);
        });
        dotsWrapperEl.appendChild(dot);
      });
    }
  }

  function prevSlide() {
    const data = window.PROJECT_DIAGRAMS[currentDiagramKey];
    if (!data) return;
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderLightbox('prev');
    }
  }

  function nextSlide() {
    const data = window.PROJECT_DIAGRAMS[currentDiagramKey];
    if (!data) return;
    if (currentSlideIndex < data.slides.length - 1) {
      currentSlideIndex++;
      renderLightbox('next');
    }
  }

  function toggleZoom() {
    container.classList.toggle('zoomed');
    const isZoomed = container.classList.contains('zoomed');
    zoomBtn.setAttribute('aria-pressed', isZoomed ? 'true' : 'false');
  }

  // Event Listeners
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (zoomBtn) zoomBtn.addEventListener('click', toggleZoom);

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleZoom();
      }
    }
  });

  // Interactive Swipe & Touch Gesture Navigation Engine
  const viewportEl = document.querySelector('.carousel-viewport') || stageEl;
  let isSwiping = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let startTime = 0;
  let isHorizontalGesture = null;

  if (viewportEl) {
    // Touch Events
    viewportEl.addEventListener('touchstart', onTouchStart, { passive: true });
    viewportEl.addEventListener('touchmove', onTouchMove, { passive: false });
    viewportEl.addEventListener('touchend', onTouchEnd, { passive: true });
    viewportEl.addEventListener('touchcancel', onTouchCancel, { passive: true });

    // Pointer Events (Unified Mouse/Trackpad/Stylus Drag Support)
    viewportEl.addEventListener('pointerdown', onPointerDown);
  }

  function onTouchStart(e) {
    if (!e.touches || e.touches.length !== 1) return;
    if (container.classList.contains('zoomed')) return; // Allow natural scroll when zoomed

    const touch = e.touches[0];
    initGesture(touch.clientX, touch.clientY);
  }

  function onTouchMove(e) {
    if (!isSwiping || !e.touches || e.touches.length !== 1) return;

    const touch = e.touches[0];
    currentX = touch.clientX;
    currentY = touch.clientY;

    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    // Detect horizontal vs vertical intent
    if (isHorizontalGesture === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (isHorizontalGesture) {
      if (e.cancelable) e.preventDefault(); // Prevent accidental page rubberbanding

      // Apply live elastic visual feedback
      const dampening = 0.55;
      const dragTranslate = deltaX * dampening;
      const dragOpacity = Math.max(0.65, 1 - (Math.abs(deltaX) / 450));
      
      displayEl.classList.add('is-dragging');
      displayEl.style.transform = `translate3d(${dragTranslate}px, 0, 0) scale(${1 - Math.abs(deltaX) * 0.0003})`;
      displayEl.style.opacity = `${dragOpacity}`;
    }
  }

  function onTouchEnd() {
    if (!isSwiping) return;
    finishGesture();
  }

  function onTouchCancel() {
    if (!isSwiping) return;
    resetGestureVisuals();
    isSwiping = false;
    isHorizontalGesture = null;
  }

  function onPointerDown(e) {
    if (e.pointerType === 'touch') return; // Handled by touch events
    if (e.button !== 0) return; // Left click only
    if (container.classList.contains('zoomed')) return;

    initGesture(e.clientX, e.clientY);
    viewportEl.classList.add('is-dragging');

    function onPointerMove(moveEvent) {
      if (!isSwiping) return;
      currentX = moveEvent.clientX;
      currentY = moveEvent.clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      if (isHorizontalGesture === null) {
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
          isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
        }
      }

      if (isHorizontalGesture) {
        const dampening = 0.5;
        const dragTranslate = deltaX * dampening;
        displayEl.classList.add('is-dragging');
        displayEl.style.transform = `translate3d(${dragTranslate}px, 0, 0)`;
      }
    }

    function onPointerUp() {
      viewportEl.classList.remove('is-dragging');
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      finishGesture();
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  function initGesture(clientX, clientY) {
    isSwiping = true;
    startX = clientX;
    startY = clientY;
    currentX = clientX;
    currentY = clientY;
    startTime = Date.now();
    isHorizontalGesture = null;
    displayEl.classList.remove('drag-released', 'slide-enter-right', 'slide-enter-left', 'slide-enter-fade');
  }

  function finishGesture() {
    if (!isSwiping) return;
    isSwiping = false;

    const deltaX = currentX - startX;
    const deltaTime = Date.now() - startTime;
    const velocityX = Math.abs(deltaX) / (deltaTime || 1); // px per ms

    const swipeThreshold = 45;
    const velocityThreshold = 0.35; // fast flick

    const isSwipeRightToLeft = deltaX < -swipeThreshold || (deltaX < -15 && velocityX > velocityThreshold);
    const isSwipeLeftToRight = deltaX > swipeThreshold || (deltaX > 15 && velocityX > velocityThreshold);

    if (isHorizontalGesture && isSwipeRightToLeft) {
      resetGestureStyles();
      nextSlide();
    } else if (isHorizontalGesture && isSwipeLeftToRight) {
      resetGestureStyles();
      prevSlide();
    } else {
      // Rebound back to center smoothly
      resetGestureVisuals();
    }

    isHorizontalGesture = null;
  }

  function resetGestureVisuals() {
    displayEl.classList.remove('is-dragging');
    displayEl.classList.add('drag-released');
    displayEl.style.transform = 'translate3d(0, 0, 0)';
    displayEl.style.opacity = '1';

    setTimeout(() => {
      resetGestureStyles();
    }, 280);
  }

  function resetGestureStyles() {
    displayEl.classList.remove('is-dragging', 'drag-released');
    displayEl.style.transform = '';
    displayEl.style.opacity = '';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

/**
 * 10. Skills Card Micro-Interactions (Dynamic Ambient Spotlight & Tilt)
 */
function initSkillCardInteractions() {
  const skillCards = document.querySelectorAll('.skill-category-card');
  if (!skillCards.length) return;

  skillCards.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}

