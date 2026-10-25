/* ===== QUICK EDIT SETTINGS =====
  Your email and LinkedIn link are in index.html.
  Add your personal GitHub profile below when you have one.
  Leave it empty to hide the GitHub button instead of showing a broken link.
*/
const SITE_CONFIG = { githubProfile: "" };

const projects = {
  "stafit": {
    title: "STAFit — IoT-Based Balance Exercise Platform",
    summary: "An undergraduate thesis concept for a home-use balance exercise system intended for people living with Parkinson's disease.",
    context: "A completed undergraduate thesis project that developed a home-use balance platform featuring real-time sensor-based movement feedback, supported handrails, and a companion Android application for tracking exercise progress. The study has been fully completed, successfully defended, hardbound, and published.",
    role: "Served as a core member of the student research and development team. Contributed to concept development, IoT hardware implementation, sensor integration, and complete thesis documentation from initial research to final publication.",
    tools: ["IoT", "Raspberry Pi", "Sensors", "Balance feedback", "Android application", "Prototype design"],
    caveat: "STATUS: COMPLETED & PUBLISHED · Hardbound and finalized thesis project. Not a clinically validated medical device."
  },
  "thesis-library": {
    title: "Thesis Library System",
    summary: "A web-based project designed to support organized access to Computer Engineering thesis materials.",
    context: "The project aims to make academic thesis information easier to organize and locate through an online interface for student research resources.",
    role: "Contributed to website development and technical documentation. Add screenshots, a repository link, and the exact technologies once available.",
    tools: ["Website development", "Information organization", "Technical documentation"],
    caveat: "This is completed academic work, but it is not a public-facing service or a commercial product."
  },
  "sumobot": {
    title: "Sumobot",
    summary: "A sensor-based robot developed as an academic competition project.",
    context: "The project combines electronic components, sensors, and microcontroller logic to create a compact robot for a class sumobot competition.",
    role: "Supported project documentation and team coordination. The robot earned first place in the class competition (confirm the competition label and date for the public website).",
    tools: ["Robotics", "Microcontroller systems", "Sensors", "Team collaboration"],
    caveat: "ACHIEVEMENT: First place in a class-level competition, not a claim of a national or university-wide award."
  },
  "arduino-kit": {
    title: "Arduino Learning Kit",
    summary: "A component-based learning setup for understanding electronics and microcontroller interaction.",
    context: "The kit brings together an Arduino Uno and electronics learning components such as sensors, input interfaces, a display, and motor-control elements for hands-on exercises.",
    role: "Worked on selecting and exploring components and developing Arduino-based learning activities. Replace this with your precise contributions and photos.",
    tools: ["Arduino Uno", "Ultrasonic sensors", "IR sensors", "RFID", "Keypad", "LCD", "Motor driver"],
    caveat: "This is a learning kit concept for educational purposes, not a commercial product or a finished application."
  },
  "obstacle-robot": {
    title: "Obstacle-Avoiding Robot",
    summary: "An embedded systems academic project from 2025 focused on obstacle detection.",
    context: "A mobile robot concept that uses distance sensing and microcontroller instructions to detect nearby objects and adjust movement.",
    role: "Team academic project. Your older resume lists this project but does not specify your individual contribution; add that before publishing.",
    tools: ["Embedded systems", "Robotics", "Obstacle detection", "Sensors"],
    caveat: "YEAR: 2025 · Hardware and algorithm details should match your actual project build."
  },
  "breedify": {
    title: "Breedify",
    summary: "A dog breed identification project using a Siamese AI model approach.",
    context: "An academic software concept exploring visual feature comparison and how image similarity models may support breed identification.",
    role: "Collaborative academic project. Add the exact implementation, dataset, responsibilities, and evaluation results when confirmed.",
    tools: ["AI project", "Siamese model concept", "Image comparison", "Software development"],
    caveat: "Avoid publishing performance statistics or calling it a finished application until those details are verified."
  }
};

const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const filterStatus = document.getElementById('filter-status');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(item => {
    const isActive = item === button;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  let visible = 0;
  projectCards.forEach(card => {
    const show = selected === 'all' || card.dataset.categories.split(' ').includes(selected);
    card.hidden = !show;
    if (show) visible++;
  });
  filterStatus.textContent = `${visible} projects shown`;
}));

const dialog = document.getElementById('project-dialog');
const closeDialogButton = document.getElementById('dialog-close');
let lastTrigger = null;
projectCards.forEach(card => {
  const trigger = card.querySelector('.project-open');
  trigger.addEventListener('click', () => {
    const data = projects[card.dataset.project];
    if (!data) return;
    lastTrigger = trigger;
    document.getElementById('dialog-title').textContent = data.title;
    document.getElementById('dialog-summary').textContent = data.summary;
    document.getElementById('dialog-context').textContent = data.context;
    document.getElementById('dialog-role').textContent = data.role;
    document.getElementById('dialog-caveat').textContent = data.caveat;
    const techContainer = document.getElementById('dialog-tools');
    techContainer.replaceChildren();
    data.tools.forEach(tool => {
      const tag = document.createElement('span');
      tag.textContent = tool;
      techContainer.append(tag);
    });
    dialog.showModal();
    dialog.querySelector('.dialog-inner').scrollTop = 0;
    openProjectGallery(card.dataset.project);
    document.body.classList.add('dialog-open');
    closeDialogButton.focus();
  });
});
function closeDialog() { dialog.close(); }
closeDialogButton.addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  lastTrigger?.focus();
});

const githubLink = document.getElementById('github-link');
if (SITE_CONFIG.githubProfile && /^https:\/\/github\.com\/[\w-]+\/?$/.test(SITE_CONFIG.githubProfile)) {
  githubLink.href = SITE_CONFIG.githubProfile;
  githubLink.hidden = false;
}
document.getElementById('year').textContent = new Date().getFullYear();


/* ===== V3: PRESENTATION + INTERACTIVE UTILITIES ===== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Animate progress along the page and show a convenient back-to-top button.
const progressBar = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');
let progressQueued = false;
function updateScrollUI() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  progressBar.style.transform = `scaleX(${progress})`;
  backToTop.classList.toggle('is-visible', window.scrollY > 520);
  progressQueued = false;
}
window.addEventListener('scroll', () => {
  if (!progressQueued) {
    progressQueued = true;
    window.requestAnimationFrame(updateScrollUI);
  }
}, { passive: true });
window.addEventListener('resize', updateScrollUI);
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: prefersReducedMotion.matches ? 'instant' : 'smooth'}));

// Rotate only broad, grounded focus areas; avoid implying unverified achievements.
const focusText = document.getElementById('focus-text');
const focusAreas = ['Hardware & Sensors', 'Web Development', 'IoT & Robotics', 'Engineering Projects'];
if (focusText && !prefersReducedMotion.matches) {
  let focusIndex = 0;
  window.setInterval(() => {
    if (document.hidden) return;
    focusIndex = (focusIndex + 1) % focusAreas.length;
    focusText.textContent = focusAreas[focusIndex];
  }, 2800);
}

// Allow roles to collapse per organization; keep them open initially, and
// visible without JavaScript so the portfolio remains readable.
document.querySelectorAll('.org-card').forEach(card => {
  const button = card.querySelector('.org-toggle');
  const roles = card.querySelector('.org-roles');
  if (!button || !roles) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    roles.hidden = expanded;
    button.innerHTML = expanded
      ? 'View positions <span class="toggle-symbol" aria-hidden="true">+</span>'
      : 'Hide positions <span class="toggle-symbol" aria-hidden="true">−</span>';
  });
});

// Copy the displayed email rather than requiring visitors to use a mail app.
const copyEmailButton = document.getElementById('copy-email');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyEmailButton.dataset.email);
      copyEmailButton.textContent = 'Email copied ✓';
    } catch (_) {
      copyEmailButton.textContent = 'Use the email link instead ↗';
    }
  });
}

// Reveal sections on scroll without breaking older browsers or reduced-motion users.
if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
  const revealTargets = document.querySelectorAll('.about-section .two-column-section, .about-stats, .projects-section .section-top, .projects-grid, .skills-section .section-top, .skills-grid, .experience-side, .organization-list > *, .recognition-grid, .contact-panel');
  revealTargets.forEach(target => target.classList.add('scroll-reveal'));
  document.body.classList.add('enhance-motion');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px 30px 0px' });
  revealTargets.forEach(target => revealObserver.observe(target));
}

// Update active navigation link as the reader explores each section.
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const navSections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${visible[0].target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .1, .5] });
  navSections.forEach(section => navObserver.observe(section));
}
/* ===== V6 / PROJECT PHOTO GALLERY =====
   NO JAVASCRIPT EDITING NEEDED FOR JPG PHOTOS.
   Put pictures in assets/projects/<folder>/ named 01.jpg, 02.jpg, 03.jpg, 04.jpg.
   The site detects files that exist; missing photos never appear as broken images.
   If your images are PNG or WebP, change the filename in PHOTO_OVERRIDES below.
*/
const PHOTO_FOLDER = {
  'stafit': 'stafit',
  'thesis-library': 'thesis-library',
  'sumobot': 'sumobot',
  'arduino-kit': 'arduino-kit',
  'obstacle-robot': 'obstacle-robot',
  'breedify': 'breedify'
};

// Optional: customize the order, filenames, and captions for individual projects.
// Example after uploading a PNG:
// 'sumobot': [{src:'assets/projects/sumobot/robot-front.png', caption:'Front view of our robot'}]
const PHOTO_OVERRIDES = {
  // Add a project ID here only if you want to use custom image filenames.
};

const gallery = {
  placeholder: document.getElementById('gallery-placeholder'),
  placeholderTitle: document.getElementById('gallery-placeholder-title'),
  placeholderText: document.getElementById('gallery-placeholder-text'),
  main: document.getElementById('gallery-main-image'),
  prev: document.getElementById('gallery-prev'),
  next: document.getElementById('gallery-next'),
  count: document.getElementById('gallery-count'),
  bottom: document.getElementById('gallery-bottom'),
  caption: document.getElementById('gallery-caption'),
  full: document.getElementById('gallery-full'),
  thumbs: document.getElementById('gallery-thumbnails'),
};
let currentProjectPhotos = [];
let activePhotoIndex = 0;
let photoRequest = 0;
const projectPhotoCache = new Map();

function checkPhoto(photo) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(photo);
    img.onerror = () => resolve(null);
    img.src = photo.src;
  });
}

function imagesForProject(projectId) {
  if (Object.prototype.hasOwnProperty.call(PHOTO_OVERRIDES, projectId)) {
    return PHOTO_OVERRIDES[projectId];
  }
  const folder = PHOTO_FOLDER[projectId];
  if (!folder) return [];
  return [1, 2, 3, 4].map(n => ({
    src: `assets/projects/${folder}/${String(n).padStart(2, '0')}.jpg`,
    caption: `${projects[projectId]?.title || 'Project'} — photo ${String(n).padStart(2, '0')}`
  }));
}

function renderGalleryPhoto(index) {
  if (!currentProjectPhotos.length) return;
  activePhotoIndex = (index + currentProjectPhotos.length) % currentProjectPhotos.length;
  const photo = currentProjectPhotos[activePhotoIndex];
  gallery.main.src = photo.src;
  gallery.main.alt = photo.alt || `${photo.caption || 'Project photograph'}, image ${activePhotoIndex + 1} of ${currentProjectPhotos.length}`;
  gallery.caption.textContent = photo.caption || `Project photo ${activePhotoIndex + 1}`;
  gallery.count.textContent = `${activePhotoIndex + 1} / ${currentProjectPhotos.length} PHOTOS`;
  gallery.full.href = photo.src;
  [...gallery.thumbs.children].forEach((btn, i) => {
    const active = i === activePhotoIndex;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
    btn.setAttribute('aria-label', `Show photo ${i + 1}${active ? ', selected' : ''}`);
  });
}

function resetGallery() {
  currentProjectPhotos = [];
  activePhotoIndex = 0;
  gallery.main.removeAttribute('src');
  gallery.main.hidden = true;
  gallery.placeholder.hidden = false;
  gallery.placeholderTitle.textContent = 'Loading project gallery…';
  gallery.placeholderText.textContent = 'Checking for uploaded project photographs.';
  gallery.count.textContent = 'CHECKING PHOTOS';
  gallery.bottom.hidden = true;
  gallery.thumbs.hidden = true;
  gallery.thumbs.replaceChildren();
  gallery.prev.hidden = true;
  gallery.next.hidden = true;
}

function populateGallery(photos) {
  currentProjectPhotos = photos;
  gallery.placeholder.hidden = photos.length > 0;
  gallery.main.hidden = photos.length === 0;
  gallery.bottom.hidden = photos.length === 0;
  gallery.thumbs.hidden = photos.length <= 1;
  gallery.prev.hidden = photos.length <= 1;
  gallery.next.hidden = photos.length <= 1;
  gallery.thumbs.replaceChildren();
  if (!photos.length) {
    gallery.count.textContent = '0 PHOTOS';
    gallery.placeholderTitle.textContent = 'Photos coming soon';
    gallery.placeholderText.textContent = 'Original project photos and screenshots will appear here when added.';
    return;
  }
  photos.forEach((photo, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'gallery-thumb';
    const preview = document.createElement('img');
    preview.src = photo.src;
    preview.alt = '';
    preview.loading = 'lazy';
    thumb.append(preview);
    thumb.addEventListener('click', () => renderGalleryPhoto(index));
    gallery.thumbs.append(thumb);
  });
  renderGalleryPhoto(0);
}

async function openProjectGallery(projectId) {
  const ticket = ++photoRequest;
  resetGallery();
  if (projectPhotoCache.has(projectId)) {
    populateGallery(projectPhotoCache.get(projectId));
    return;
  }
  const entries = imagesForProject(projectId);
  const responses = await Promise.all(entries.map(checkPhoto));
  if (ticket !== photoRequest || !dialog.open) return;  // Ignore stale requests.
  const goodPhotos = responses.filter(Boolean);
  projectPhotoCache.set(projectId, goodPhotos);
  populateGallery(goodPhotos);
}

gallery.prev.addEventListener('click', () => renderGalleryPhoto(activePhotoIndex - 1));
gallery.next.addEventListener('click', () => renderGalleryPhoto(activePhotoIndex + 1));
dialog.addEventListener('keydown', event => {
  if (!dialog.open || currentProjectPhotos.length <= 1) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); renderGalleryPhoto(activePhotoIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); renderGalleryPhoto(activePhotoIndex + 1); }
});
dialog.addEventListener('close', () => { photoRequest++; currentProjectPhotos = []; });
