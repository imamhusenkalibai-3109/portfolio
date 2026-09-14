/**
 * Apple Design System - Main Controller
 * Handles scroll observers, sticky mini-nav, section spy, and responsive navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initStickyMiniNav();
  initActiveSectionSpy();
  initMobileNav();
  initSmoothScroll();

  // Review & screenshot isolation helper
  const isolateTarget = urlParams.get('isolate');
  if (isolateTarget === 'achievements') {
    document.querySelectorAll('section').forEach(sec => {
      if (sec.id !== 'achievements') {
        sec.style.display = 'none';
      }
    });
    // Remove delay and reveal immediately
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('reveal-visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  }

  // Instant scroll jump helper for review & screenshots
  const scrollToTarget = urlParams.get('scroll_to');
  if (scrollToTarget) {
    const targetEl = document.getElementById(scrollToTarget);
    if (targetEl) {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      targetEl.scrollIntoView({ behavior: 'instant', block: 'start' });
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('reveal-visible'));
    }
  }

  const demoCard = urlParams.get('demo_card');
  if (demoCard !== null) {
    const cards = document.querySelectorAll('.service-card');
    const idx = parseInt(demoCard, 10) || 0;
    if (cards[idx]) {
      cards[idx].classList.add('demo-hover');
    }
  }
});

/**
 * Hardware-accelerated IntersectionObserver for smooth scroll reveals
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Sticky Mini-Nav visibility management based on hero scroll depth
 */
function initStickyMiniNav() {
  const miniNav = document.getElementById('sticky-mini-nav');
  const heroSection = document.getElementById('hero');
  
  if (!miniNav || !heroSection) return;

  const handleScroll = () => {
    const heroRect = heroSection.getBoundingClientRect();
    // Show mini nav when scrolled past half of the hero section
    if (heroRect.bottom <= 120) {
      miniNav.style.transform = 'translateY(0)';
      miniNav.style.opacity = '1';
      miniNav.style.pointerEvents = 'auto';
    } else {
      miniNav.style.transform = 'translateY(-100%)';
      miniNav.style.opacity = '0';
      miniNav.style.pointerEvents = 'none';
    }
  };

  // Initial check
  miniNav.style.transform = 'translateY(-100%)';
  miniNav.style.opacity = '0';
  miniNav.style.pointerEvents = 'none';

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Spy on active sections and update mini-nav active state
 */
function initActiveSectionSpy() {
  const sections = document.querySelectorAll('section[id]');
  const miniNavLinks = document.querySelectorAll('.mini-nav-links a');

  if (!sections.length || !miniNavLinks.length) return;

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        miniNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(sec => spyObserver.observe(sec));
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-drawer a');

  if (!toggleBtn || !mobileDrawer) return;

  const toggleDrawer = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggleDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Luxurious Apple-style animated smooth scroll with natural cubic easing
 */
function smoothScrollTo(targetPosition, duration = 900) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Natural Apple-grade easeInOutCubic curve
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startPosition + distance * ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * Smooth scrolling with sticky header offset compensation and natural easing glide
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      smoothScrollTo(offsetPosition, 900);
    });
  });
}
