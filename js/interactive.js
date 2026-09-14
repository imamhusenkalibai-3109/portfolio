/**
 * Interactive Features & Micro-Interactions
 * Interactive device simulations, tab controls, skills filter, clipboard copying, and contact dialog.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroTabs();
  initSkillsFilter();
  initClipboardCopy();
  initContactModal();
  renderSkillCards();
  initFloatingBubbles();
  initWaterRipple();
  initEducationCards();
});

/**
 * Hero Workstation Interactive Tab Switching
 */
function initHeroTabs() {
  const tabs = document.querySelectorAll('.display-tab');
  const panels = document.querySelectorAll('.device-tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });
  });

  // Mode switcher inside Nexus AI tab
  const nexusModes = document.querySelectorAll('.nexus-mode-btn');
  const nexusOutput = document.getElementById('nexus-mode-output');

  if (nexusModes.length && nexusOutput) {
    const modeOutputs = {
      code: `<div class="code-stream">
<span class="syn-comment">// Spring AI + Ollama (LLaMA 3.2) dynamic technical routing</span>
<span class="syn-kw">@RestController</span>
<span class="syn-kw">public class</span> <span class="syn-class">ChatAssistantController</span> {
    <span class="syn-kw">private final</span> ChatClient chatClient;

    <span class="syn-kw">public</span> ChatAssistantController(ChatClient.Builder builder) {
        <span class="syn-kw">this</span>.chatClient = builder
            .defaultSystem(<span class="syn-str">"You are Nexus, an offline technical problem-solver."</span>)
            .build();
    }

    <span class="syn-kw">@PostMapping</span>(<span class="syn-str">"/api/chat"</span>)
    <span class="syn-kw">public</span> Flux&lt;String&gt; generateStream(<span class="syn-kw">@RequestBody</span> PromptQuery query) {
        <span class="syn-kw">return</span> chatClient.prompt().user(query.message()).stream().content();
    }
}</div>`,
      context: `<div class="terminal-log">
<span class="syn-info">[MEMORY RETENTION]</span> Active multi-turn context: 4,096 tokens retained.
<span class="syn-info">[LOCAL INFERENCE]</span> LLaMA 3.2 running on device via Ollama backend.
<span class="syn-info">[LATENCY]</span> Time-to-first-token: 18ms | Zero third-party API costs incurred.
<span class="syn-success">[STATUS 200]</span> Context steering validated for enterprise query.
</div>`,
      voice: `<div class="terminal-log">
<span class="syn-info">[AUDIO SUBSYSTEM]</span> Local speech recognition pipeline initialized.
<span class="syn-info">[BIOMETRICS]</span> Voiceprint authentication handshake: VERIFIED.
<span class="syn-info">[WORKFLOW ENGINE]</span> Desktop automated workspace dispatch activated.
<span class="syn-success">[CONNECTED]</span> Ready for hands-free natural developer steering.
</div>`
    };

    nexusModes.forEach(btn => {
      btn.addEventListener('click', () => {
        nexusModes.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        if (modeOutputs[mode]) {
          nexusOutput.innerHTML = modeOutputs[mode];
        }
      });
    });
  }

  // KSRTC Transit Role Switcher
  const ksrtcRoles = document.querySelectorAll('.ksrtc-role-btn');
  const ksrtcRoleOutput = document.getElementById('ksrtc-role-content');

  if (ksrtcRoles.length && ksrtcRoleOutput) {
    const roleDetails = {
      passenger: `<div class="ksrtc-panel-content">
        <div class="ksrtc-metric-row">
          <div class="metric-item">
            <span class="metric-num">8 min</span>
            <span class="metric-lbl">ETA to Kittur Stop</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">KA-22-F-1892</span>
            <span class="metric-lbl">Airawat Club Class</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">98.4%</span>
            <span class="metric-lbl">LSTM Arrival Accuracy</span>
          </div>
        </div>
        <div class="ksrtc-progress-wrap">
          <div class="progress-bar-fill" style="width: 72%;"></div>
        </div>
        <p class="ksrtc-note">Live GPS telemetry updating every 2.5s via Firebase Realtime Database.</p>
      </div>`,
      conductor: `<div class="ksrtc-panel-content">
        <div class="ksrtc-metric-row">
          <div class="metric-item">
            <span class="metric-num">44 / 52</span>
            <span class="metric-lbl">Occupied Seats</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">ON SCHEDULE</span>
            <span class="metric-lbl">Corridor Status</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">0 Latency</span>
            <span class="metric-lbl">Offline Sync Mode</span>
          </div>
        </div>
        <p class="ksrtc-note">EAS-built APK with native battery-optimized background location polling.</p>
      </div>`,
      officer: `<div class="ksrtc-panel-content">
        <div class="ksrtc-metric-row">
          <div class="metric-item">
            <span class="metric-num">38</span>
            <span class="metric-lbl">Active Depot Buses</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">Belagavi - Dharwad</span>
            <span class="metric-lbl">Primary Monitored Axis</span>
          </div>
          <div class="metric-item">
            <span class="metric-num">99.9%</span>
            <span class="metric-lbl">Telemetry Uptime</span>
          </div>
        </div>
        <p class="ksrtc-note">Enterprise administrative dashboard with route anomaly detection.</p>
      </div>`
    };

    ksrtcRoles.forEach(btn => {
      btn.addEventListener('click', () => {
        ksrtcRoles.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const role = btn.dataset.role;
        if (roleDetails[role]) {
          ksrtcRoleOutput.innerHTML = roleDetails[role];
        }
      });
    });
  }
}

/**
 * Comprehensive Skills Data Definition
 */
const skillsData = [
  // Programming Languages
  { name: 'Java', category: 'languages', icon: 'java', desc: 'Core Java, OOP, Multithreading & Collections' },
  { name: 'JavaScript', category: 'languages', icon: 'javascript', desc: 'ES6+, Async, DOM & Client Logic' },
  { name: 'TypeScript', category: 'languages', icon: 'typescript', desc: 'Type-Safe App Development & Clean Interfaces' },
  { name: 'Python (Basic)', category: 'languages', icon: 'python', desc: 'Scripting, Automation & AI Tooling' },
  { name: 'SQL', category: 'languages', icon: 'sql', desc: 'Relational Queries, Joins & Performance Tuning' },
  { name: 'HTML5', category: 'languages', icon: 'languages', iconSvg: 'html5', desc: 'Semantic Architecture & Accessibility' },
  { name: 'CSS3', category: 'languages', iconSvg: 'css3', desc: 'Responsive Design, Grid, Flexbox & Apple Tokens' },

  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'frameworks', iconSvg: 'spring', desc: 'Enterprise Microservices & REST APIs' },
  { name: 'Spring AI', category: 'frameworks', iconSvg: 'spring', desc: 'Local & Cloud LLM Orchestration' },
  { name: 'React Native', category: 'frameworks', iconSvg: 'react', desc: 'Cross-Platform Mobile App Engineering' },
  { name: 'React', category: 'frameworks', iconSvg: 'react', desc: 'Declarative State & Interactive UI Systems' },
  { name: 'Expo', category: 'frameworks', iconSvg: 'expo', desc: 'EAS Builds, Native Modules & Mobile Tooling' },
  { name: 'Hibernate', category: 'frameworks', iconSvg: 'layers', desc: 'ORM, Entity Persistence & Transaction Management' },
  { name: 'Node.js', category: 'frameworks', iconSvg: 'nodejs', desc: 'Backend Services, Tooling & Realtime Endpoints' },

  // Databases & Cloud
  { name: 'MySQL', category: 'databases', iconSvg: 'mysql', desc: 'Relational Database Architecture & Indexing' },
  { name: 'Firebase Realtime DB', category: 'databases', iconSvg: 'firebase', desc: 'Live Telemetry & WebSocket Event Sync' },
  { name: 'RESTful APIs', category: 'databases', iconSvg: 'external', desc: 'Clean Contract Design & HTTP Status Governance' },
  { name: 'JDBC', category: 'databases', iconSvg: 'sql', desc: 'Direct Database Connectivity & Batch Processing' },

  // AI & Modern Engineering
  { name: 'Ollama (LLaMA 3.2)', category: 'ai', iconSvg: 'ollama', desc: 'Local Inference, Zero-Egress Latency & Privacy' },
  { name: 'Claude Engineering', category: 'ai', iconSvg: 'claude', desc: 'Agentic Engineering & Autonomous Coding Workflows' },
  { name: 'Google Analytics', category: 'ai', iconSvg: 'analytics', desc: 'User Engagement Tracking & Metric Optimization' },

  // Core CS Competencies
  { name: 'Data Structures & Algorithms', category: 'core', iconSvg: 'layers', desc: 'Rigorous Problem-Solving & Optimization' },
  { name: 'Object-Oriented Design', category: 'core', iconSvg: 'cpu', desc: 'Inheritance, Polymorphism & Encapsulation' },
  { name: 'Multithreading & Concurrency', category: 'core', iconSvg: 'cpu', desc: 'Thread Safety, Synchronization & Parallel Tasks' },
  { name: 'DBMS & MVC Architecture', category: 'core', iconSvg: 'layers', desc: 'Modular Separation of Concerns & Clean Code' }
];

/**
 * Render Skill Cards with official SVG logos
 */
function renderSkillCards(filter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  container.innerHTML = filtered.map(skill => {
    let iconSvg = '';
    if (window.TechIcons) {
      if (skill.iconSvg && window.TechIcons[skill.iconSvg]) {
        iconSvg = window.TechIcons[skill.iconSvg];
      } else if (skill.icon && window.TechIcons[skill.icon]) {
        iconSvg = window.TechIcons[skill.icon];
      } else {
        iconSvg = window.TechIcons.cpu;
      }
    }

    return `
      <div class="skill-card reveal-on-scroll" data-category="${skill.category}">
        <div class="skill-icon-wrapper">
          ${iconSvg}
        </div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-category-label">${skill.desc}</div>
      </div>
    `;
  }).join('');

  // Re-observe newly rendered cards for animations
  const newCards = container.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const cardObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    newCards.forEach(c => cardObserver.observe(c));
  } else {
    newCards.forEach(c => c.classList.add('reveal-visible'));
  }
}

/**
 * Skills Category Filter Buttons
 */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;
      renderSkillCards(category);
    });
  });
}

/**
 * One-Click Clipboard Copying with Apple-Style Toast
 */
function initClipboardCopy() {
  const copyElements = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('copy-toast');

  if (!copyElements.length || !toast) return;

  copyElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const text = el.dataset.copy;
      const label = el.dataset.copyLabel || 'Text';

      navigator.clipboard.writeText(text).then(() => {
        toast.textContent = `${label} copied to clipboard`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2400);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}

/**
 * Interactive Contact Modal
 */
function initContactModal() {
  const openBtns = document.querySelectorAll('[data-open-contact]');
  const closeBtn = document.getElementById('close-contact-modal');
  const backdrop = document.getElementById('contact-modal-backdrop');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('contact-form-success');

  if (!backdrop) return;

  const openModal = () => {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (formSuccess) formSuccess.style.display = 'none';
    if (contactForm) {
      contactForm.style.display = 'block';
      contactForm.reset();
    }
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Form simulation
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    });
  }
}

/**
 * Interactive CSS Floating Bubbles Engine
 * - Controls DOM-based glass bubbles animated via GPU-accelerated CSS keyframes (upward drift + sinusoidal sway).
 * - Interactive click-to-pop effect with radial micro-particles and scale-fade animation.
 * - Continuous auto-respawn cycle from the bottom maintaining 12-15 active bubbles site-wide.
 * - Safe z-index layering ensuring all interactive cards, links, and buttons remain 100% accessible.
 */
function initFloatingBubbles() {
  const container = document.getElementById('bubbles-ambient-layer');
  if (!container) return;

  const tints = ['bubble-blue', 'bubble-cyan', 'bubble-frost'];
  const anims = ['bubbleFloat1', 'bubbleFloat2', 'bubbleFloat3', 'bubbleFloat4', 'bubbleFloat5'];

  // Vibrant Holi color palette for the rain shower effect
  const holiRainPalette = [
    { name: 'pink', hex: '#ff4d8d', deep: '#d91a5f', glow: 'rgba(255, 77, 141, 0.45)' },
    { name: 'yellow', hex: '#ffd23f', deep: '#d9a700', glow: 'rgba(255, 210, 63, 0.50)' },
    { name: 'green', hex: '#4dff88', deep: '#12cc52', glow: 'rgba(77, 255, 136, 0.45)' },
    { name: 'blue', hex: '#4d9fff', deep: '#1273d9', glow: 'rgba(77, 159, 255, 0.45)' },
    { name: 'orange', hex: '#ff8c4d', deep: '#d95312', glow: 'rgba(255, 140, 77, 0.45)' }
  ];

  function createColorRain(x, y, primaryColorItem) {
    const rainLayer = document.getElementById('color-rain-layer') || document.getElementById('splash-layer') || document.body;
    
    const rainContainer = document.createElement('div');
    rainContainer.className = 'color-rain-container';
    rainContainer.style.left = `${x}px`;
    rainContainer.style.top = `${y}px`;

    // Central momentary pop flash in the primary burst color
    const flash = document.createElement('div');
    flash.className = 'color-rain-flash';
    flash.style.setProperty('--burst-color', primaryColorItem.hex);
    flash.style.setProperty('--burst-glow', primaryColorItem.glow);
    rainContainer.appendChild(flash);

    // Spawn 20 small colored droplets that fall downward under gravity
    // Each droplet receives a vibrant color from the Holi palette (pink, yellow, green, blue, orange)
    const dropletCount = 20;
    for (let i = 0; i < dropletCount; i++) {
      const droplet = document.createElement('div');
      droplet.className = 'color-rain-droplet';
      
      // Distribute vibrant colors evenly across the falling shower
      const colorItem = holiRainPalette[i % holiRainPalette.length];
      
      // Trajectory physics:
      // dx: horizontal drift (-42px to +42px)
      // peakY: initial slight upward fountain arc (-12px to -26px)
      // fallDist: downward gravity fall (110px to 210px)
      const angle = (Math.PI * 2 / dropletCount) * i + (Math.random() - 0.5) * 0.4;
      const spreadX = Math.cos(angle) * (20 + Math.random() * 28);
      const peakY = -12 - Math.random() * 16;
      const fallDist = 110 + Math.random() * 100;
      
      const width = 4.5 + Math.random() * 2.0; // 4.5px - 6.5px
      const height = 9.0 + Math.random() * 5.0; // 9px - 14px (teardrop aspect)
      const duration = (0.80 + Math.random() * 0.35).toFixed(2); // 0.8s - 1.15s
      const delay = (Math.random() * 0.08).toFixed(2); // 0s - 0.08s
      
      droplet.style.setProperty('--drop-color', colorItem.hex);
      droplet.style.setProperty('--drop-glow', colorItem.glow);
      droplet.style.setProperty('--drop-w', `${width.toFixed(1)}px`);
      droplet.style.setProperty('--drop-h', `${height.toFixed(1)}px`);
      droplet.style.setProperty('--dx', `${spreadX.toFixed(1)}px`);
      droplet.style.setProperty('--peak-y', `${peakY.toFixed(1)}px`);
      droplet.style.setProperty('--fall-dist', `${fallDist.toFixed(1)}px`);
      droplet.style.setProperty('--fall-dur', `${duration}s`);
      droplet.style.setProperty('--fall-delay', `${delay}s`);

      rainContainer.appendChild(droplet);
    }

    rainLayer.appendChild(rainContainer);

    // Auto-remove completely after falling shower completes (1.25s)
    setTimeout(() => {
      rainContainer.remove();
    }, 1250);
  }

  function popBubble(bubble, clientX, clientY) {
    if (!bubble || bubble.classList.contains('bubble-popping')) return;
    bubble.classList.add('bubble-popping');

    const rect = bubble.getBoundingClientRect();
    const cx = (clientX !== undefined && clientX > 0) ? clientX : (rect.left + rect.width / 2);
    const cy = (clientY !== undefined && clientY > 0) ? clientY : (rect.top + rect.height / 2);

    // 1. The bubble itself changes into a vivid Holi color!
    const burstColorItem = holiRainPalette[Math.floor(Math.random() * holiRainPalette.length)];
    bubble.style.background = `radial-gradient(circle at 35% 30%, #ffffff 0%, ${burstColorItem.hex} 55%, ${burstColorItem.deep} 100%)`;
    bubble.style.boxShadow = `0 0 24px ${burstColorItem.hex}, inset 0 0 10px #ffffff`;
    bubble.style.opacity = '1';
    bubble.classList.add('bubble-color-burst');

    // 2. Trigger the "rain of color" effect: multiple small colored droplets falling downward
    createColorRain(cx, cy, burstColorItem);

    // Remove the popped bubble after its burst animation
    setTimeout(() => {
      bubble.remove();
      // Auto-respawn a fresh bubble from the bottom
      setTimeout(() => {
        spawnNewBubble();
      }, 700 + Math.random() * 700);
    }, 240);
  }

  function spawnNewBubble() {
    if (!container) return;
    const bubble = document.createElement('div');
    const tint = tints[Math.floor(Math.random() * tints.length)];
    const anim = anims[Math.floor(Math.random() * anims.length)];
    const size = 34 + Math.floor(Math.random() * 30); // 34px - 64px
    const opacity = (0.32 + Math.random() * 0.06).toFixed(2); // 32% - 38% noticeable opacity
    const left = (4 + Math.random() * 90).toFixed(1); // 4% - 94%
    const duration = (9.5 + Math.random() * 5.0).toFixed(1); // 9.5s - 14.5s

    bubble.className = `floating-bubble ${tint}`;
    bubble.title = 'Click to pop!';
    bubble.style.left = `${left}%`;
    bubble.style.setProperty('--bubble-size', `${size}px`);
    bubble.style.setProperty('--bubble-opacity', opacity);
    bubble.style.animation = `${anim} ${duration}s linear 0s infinite`;

    attachBubbleEvents(bubble);
    container.appendChild(bubble);
  }

  function attachBubbleEvents(bubble) {
    const handlePop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      popBubble(bubble, e.clientX, e.clientY);
    };

    bubble.addEventListener('pointerdown', handlePop);
    bubble.addEventListener('click', handlePop);
  }

  // Attach pop handlers to initial HTML-rendered bubbles
  const initialBubbles = container.querySelectorAll('.floating-bubble');
  initialBubbles.forEach(attachBubbleEvents);

  // Global delegating handler: guarantees 100% fail-safe click-to-pop anywhere
  document.addEventListener('pointerdown', (e) => {
    const bubble = e.target.closest('.floating-bubble');
    if (bubble && !bubble.classList.contains('bubble-popping')) {
      e.preventDefault();
      e.stopPropagation();
      popBubble(bubble, e.clientX, e.clientY);
    }
  }, { passive: false });

  // Verification & review hook: trigger a pop when pop_demo=true
  if (window.location.search.includes('pop_demo=true') || window.location.search.includes('color_rain')) {
    setTimeout(() => {
      const demoBubble = container.querySelectorAll('.floating-bubble')[2] || container.querySelector('.floating-bubble');
      if (demoBubble) popBubble(demoBubble);
    }, 450);
  }
}

/**
 * Lightweight GPU-Accelerated Water Ripple Engine
 * Renders ambient water wave ripples on empty-space clicks and subtle pointer moves.
 */
function initWaterRipple() {
  const canvas = document.getElementById('water-ripple-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let ripples = [];
  let lastMoveTime = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Ripple {
    constructor(x, y, maxRadius, maxAlpha, color, speed = 1.8, delay = 0) {
      this.x = x;
      this.y = y;
      this.radius = 2;
      this.maxRadius = maxRadius;
      this.maxAlpha = maxAlpha;
      this.alpha = maxAlpha;
      this.color = color;
      this.speed = speed;
      this.delay = delay;
      this.lineWidth = 1.5;
    }

    update() {
      if (this.delay > 0) {
        this.delay--;
        return true;
      }
      const remaining = this.maxRadius - this.radius;
      this.radius += Math.max(0.6, remaining * 0.05 * this.speed);
      const progress = this.radius / this.maxRadius;
      this.alpha = this.maxAlpha * (1 - progress);
      this.lineWidth = Math.max(0.7, 1.6 * (1 - progress * 0.5));
      return this.alpha > 0.005 && this.radius < this.maxRadius;
    }

    draw(context) {
      if (this.delay > 0 || this.alpha <= 0) return;
      context.save();
      context.beginPath();
      context.arc(this.x, this.y, Math.max(0, this.radius), 0, Math.PI * 2);
      context.strokeStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.alpha})`;
      context.lineWidth = this.lineWidth;
      context.stroke();
      context.restore();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    ripples = ripples.filter(ripple => {
      const active = ripple.update();
      if (active) ripple.draw(ctx);
      return active;
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  function isInteractiveElement(target) {
    if (!target || !(target instanceof Element)) return false;
    return Boolean(target.closest(
      'a, button, input, textarea, select, .display-tab, .nexus-mode-btn, .ksrtc-role-btn, .skill-filter-btn, .quick-pill, .skill-card, .service-card, .edu-timeline-card, .timeline-block, .floating-bubble, [data-copy], [data-open-contact]'
    ));
  }

  window.addEventListener('pointerdown', (e) => {
    if (isInteractiveElement(e.target)) return;
    const x = e.clientX;
    const y = e.clientY;
    ripples.push(new Ripple(x, y, 95, 0.28, [0, 113, 227], 1.6, 0));
    ripples.push(new Ripple(x, y, 140, 0.18, [41, 151, 255], 1.4, 6));
  }, { passive: true });

  window.addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (now - lastMoveTime < 80) return;
    lastMoveTime = now;
    if (isInteractiveElement(e.target)) return;
    const x = e.clientX;
    const y = e.clientY;
    ripples.push(new Ripple(x, y, 30, 0.08, [41, 151, 255], 2.2, 0));
  }, { passive: true });
}

/**
 * Interactive Vertical Connected Education Timeline
 * Handles expand/collapse transitions for academic milestone cards.
 */
function initEducationCards() {
  const cards = document.querySelectorAll('[data-edu-card]');
  if (!cards.length) return;

  cards.forEach(card => {
    function toggleCard(e) {
      if (e.target.closest('a')) return;

      const isExpanded = card.classList.toggle('is-expanded');
      card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      const triggerLabel = card.querySelector('.edu-trigger-label');
      if (triggerLabel) {
        triggerLabel.textContent = isExpanded ? 'Hide Details' : 'View Details';
      }
    }

    card.addEventListener('click', toggleCard);

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(e);
      }
    });
  });

  // URL query hook for visual verification / automated testing: ?expand_edu=1, ?expand_edu=0, or ?expand_edu=all
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('expand_edu')) {
    const val = urlParams.get('expand_edu');
    const targetIdx = parseInt(val, 10);
    if (val === 'all') {
      cards.forEach(card => {
        card.classList.add('is-expanded');
        card.setAttribute('aria-expanded', 'true');
        const label = card.querySelector('.edu-trigger-label');
        if (label) label.textContent = 'Hide Details';
      });
    } else if (!isNaN(targetIdx) && cards[targetIdx]) {
      cards[targetIdx].classList.add('is-expanded');
      cards[targetIdx].setAttribute('aria-expanded', 'true');
      const label = cards[targetIdx].querySelector('.edu-trigger-label');
      if (label) label.textContent = 'Hide Details';
    } else {
      cards[0].classList.add('is-expanded');
      cards[0].setAttribute('aria-expanded', 'true');
      const label = cards[0].querySelector('.edu-trigger-label');
      if (label) label.textContent = 'Hide Details';
    }
  }
}

