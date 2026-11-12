/* ===== QUICK EDIT SETTINGS =====
  Your email and LinkedIn link are in index.html.
  Add your personal GitHub profile below when you have one.
  Leave it empty to hide the GitHub button instead of showing a broken link.
*/
const SITE_CONFIG = { githubProfile: "" };

const projects = {
  "stafit": {
    title: "IoT-based Balance and Tremor Exercise Board for Parkinson's with Blood Pressure Monitoring and Android Application",
    summary: "An undergraduate thesis concept for a home-use balance exercise system intended for people living with Parkinson's disease.",
    context: "A completed undergraduate thesis project that developed a home-use balance platform featuring real-time sensor-based movement feedback, supported handrails, and a companion Android application for tracking exercise progress. The study has been fully completed, successfully defended, hardbound, and published.",
    role: "Served as a core member of the student research and development team. Contributed to concept development, IoT hardware implementation, sensor integration, and complete thesis documentation from initial research to final publication.",
    challenge: "Translate rehabilitation-oriented requirements into a working sensor-based prototype while coordinating the hardware, feedback system, Android tracking, and thesis documentation.",
    result: "Completed, defended, hardbound, and published the undergraduate thesis with a working prototype concept and companion Android application.",
    tools: ["IoT", "Raspberry Pi", "Sensors", "Balance feedback", "Android application", "Prototype design"],
    caveat: "STATUS: COMPLETED & PUBLISHED · Hardbound and finalized thesis project. Not a clinically validated medical device.",
    videoUrl: "assets/stafit/stafitvideo.mp4",
    resources: [
      {label: "Read the IEEE publication", href: "assets/stafit/obscura_ieee.pdf", kind: "PDF"}
    ]
  },
  "thesis-library": {
    title: "Thesis Library System",
    summary: "A web-based project designed to support organized access to Computer Engineering thesis materials.",
    context: "The project aims to make academic thesis information easier to organize and locate through an online interface for student research resources.",
    role: "Contributed to website development and technical documentation. Add screenshots, a repository link, and the exact technologies once available.",
    challenge: "Organize academic thesis resources into a clearer online experience that is easier for students to browse and locate.",
    result: "Completed an academic web project focused on improving access to organized Computer Engineering thesis materials.",
    tools: ["Website development", "Information organization", "Technical documentation"],
    caveat: "This is completed academic work, but it is not a public-facing service or a commercial product."
  },
  "sumobot": {
    title: "Sumobot",
    summary: "A sensor-based robot developed as an academic competition project.",
    context: "The project combines electronic components, sensors, and microcontroller logic to create a compact robot for a class sumobot competition.",
    role: "Supported project documentation and team coordination. The robot earned first place in the class competition.",
    challenge: "Tune sensor-based movement, robot behavior, and team coordination within the limits of a class competition build.",
    result: "Completed the class competition robot and earned first place in the class competition.",
    tools: ["Robotics", "Microcontroller systems", "Sensors", "Team collaboration"],
    caveat: "ACHIEVEMENT: First place in a class-level competition, not a claim of a national or university-wide award."
  },
  "arduino-kit": {
    title: "Arduino Learning Kit",
    summary: "A component-based learning setup for understanding electronics and microcontroller interaction.",
    context: "The kit brings together an Arduino Uno and electronics learning components such as sensors, input interfaces, a display, and motor-control elements for hands-on exercises.",
    role: "Worked on selecting and exploring components and developing Arduino-based learning activities. Replace this with your precise contributions and photos.",
    challenge: "Connect different electronics components into a practical learning setup that supports repeatable hands-on experiments.",
    result: "Built a component-based Arduino learning kit for exploring sensors, interfaces, displays, and motor-control activities.",
    tools: ["Arduino Uno", "Ultrasonic sensors", "IR sensors", "RFID", "Keypad", "LCD", "Motor driver"],
    caveat: "This is a learning kit concept for educational purposes, not a commercial product or a finished application."
  },
  "computer-architecture": {
    title: "Computer Architecture and Organization",
    summary: "Academic work exploring how computer components are structured and operate together as a complete system.",
    context: "This coursework focused on the relationship between processor components, memory, data movement, and the organization of a computer system.",
    role: "Completed academic work for the Computer Architecture and Organization course. Add the specific activities, diagrams, simulations, or implementation details when you are ready to document them.",
    challenge: "Explain low-level computer components and data movement as one connected system rather than as isolated topics.",
    result: "Completed coursework exploring processor structure, memory organization, and system-level computer architecture.",
    tools: ["CPU systems", "Memory organization", "Computer architecture", "Systems thinking"],
    caveat: "This project already done and submitted for academic purposes.",
    // Add the public video URL and resource links here when those files are available.
    videoUrl: "",
    resources: []
  },
  "academand": {
    title: "AcaDemand",
    summary: "A Technopreneurship project developed as a business and innovation proposal.",
    context: "AcaDemand is documented in the team’s Technopreneurship project proposal, bringing together the project idea, value proposition, business direction, and supporting innovation work.",
    role: "Contributed to the collaborative Technopreneurship project and its proposal documentation. The complete project document is available below.",
    challenge: "Turn an initial idea into a structured proposal with a clear value proposition, business direction, and supporting innovation work.",
    result: "Produced a collaborative Technopreneurship proposal documenting the AcaDemand concept and its intended impact.",
    tools: ["Technopreneurship", "Innovation planning", "Business proposal", "Team collaboration"],
    caveat: "Project details and claims should be read together with the supplied proposal document.",
    videoUrl: "assets/Academand/ForSubmission.mp4",
    resources: [
      {label: "View AcaDemand project document (PDF)", href: "assets/Academand/AcaDemand-Innoventyurmerged.pdf", kind: "PDF"}
    ]
  },
  "data-digital-communications": {
    title: "Data and Digital Communications",
    summary: "A Python human-to-human chatroom application built with Tkinter for the interface and sockets for client-server communication.",
    context: "The project demonstrates real-time digital communication between users through a desktop chatroom. It combines a user-friendly interface, emoji support, typing indicators, message timestamps, and threaded message handling for a smoother chat experience.",
    role: "Contributed to message formatting and presentation, including chat bubbles, alignment, timestamps, and handling messages from multiple users.",
    challenge: "Coordinate client-server messaging, interface updates, and threaded communication while keeping the chat experience clear for multiple users.",
    result: "Completed a collaborative Python chatroom prototype with a Tkinter interface, socket communication, and real-time messaging features.",
    tools: ["Python", "Tkinter", "Sockets", "Client-server communication", "Threading", "Real-time messaging"],
    caveat: "ACADEMIC PROJECT · Built for the Data and Digital Communications course as a collaborative team application.",
    resources: [
      {label: "View project presentation (PDF)", href: "assets/Data and Digital Communications/Group_7_CpeC303_PT6-1.pdf", kind: "PDF"},
      {label: "View project documentation (PDF)", href: "assets/Data and Digital Communications/GRP7_PROJ%233_CPEC303_301G.pdf", kind: "PDF"}
    ]
  },
  "obstacle-robot": {
    title: "Obstacle-Avoiding Robot",
    summary: "An embedded systems academic project from 2025 focused on obstacle detection.",
    context: "A mobile robot concept that uses distance sensing and microcontroller instructions to detect nearby objects and adjust movement.",
    role: "Team academic project. Your older resume lists this project but does not specify your individual contribution; add that before publishing.",
    challenge: "Detect nearby obstacles reliably and translate sensor readings into appropriate movement decisions for the robot.",
    result: "Developed an academic obstacle-avoidance robot concept focused on distance sensing and microcontroller-based movement control.",
    tools: ["Embedded systems", "Robotics", "Obstacle detection", "Sensors"],
    caveat: "YEAR: 2025 · Hardware and algorithm details should match your actual project build."
  },
  "breedify": {
    title: "Breedify",
    summary: "A web-based project that analyzes an uploaded image to help identify the likely dog breed.",
    context: "Breedify explores image-based dog-breed analysis through a web interface and a Siamese-model approach for comparing visual features between an uploaded dog image and reference data.",
    role: "Collaborative academic project. Contributed to the project documentation, web-based presentation, and exploration of image-comparison concepts for dog-breed analysis.",
    challenge: "Explore how image similarity can support dog-breed analysis while keeping the project understandable as an academic prototype.",
    result: "Completed an academic web prototype and supporting documentation for image comparison and dog-breed analysis concepts.",
    tools: ["Web development", "Siamese model concept", "Image comparison", "Dog-breed analysis"],
    caveat: "The project is an academic prototype and should not be presented as a guaranteed or veterinary-grade breed identification service.",
    // Paste the public YouTube, Google Drive, or other hosted demo URL here.
    videoUrl: "https://drive.google.com/file/d/1nPElB-hgF9l0OtsFn88EQu_uwdwkQc03/view?usp=drive_link",
    resources: [
      {label: "View project documentation (PDF)", href: "assets/breedify/CPE C314- P3. Project Documentation - SplashIsland.pdf", kind: "PDF"},
      {label: "View source notebook", href: "assets/breedify/AI_project.ipynb", kind: "CODE"}
    ]
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
    document.getElementById('dialog-challenge').textContent = data.challenge;
    document.getElementById('dialog-result').textContent = data.result;
    document.getElementById('dialog-caveat').textContent = data.caveat;
    const techContainer = document.getElementById('dialog-tools');
    techContainer.replaceChildren();
    data.tools.forEach(tool => {
      const tag = document.createElement('span');
      tag.textContent = tool;
      techContainer.append(tag);
    });
    const resourcesPanel = document.getElementById('dialog-resources');
    const resourceLinks = document.getElementById('dialog-resource-links');
    resourceLinks.replaceChildren();
    const resources = [...(data.resources || [])];
    if (data.videoUrl?.trim()) {
      resources.push({label: 'Watch video demonstration', href: data.videoUrl.trim(), kind: 'VIDEO'});
    }
    if (resources.length) {
      resources.forEach(resource => {
        const link = document.createElement('a');
        link.className = 'dialog-resource-link';
        link.href = resource.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<span>${resource.kind}</span>${resource.label} <b aria-hidden="true">↗</b>`;
        resourceLinks.append(link);
      });
      resourcesPanel.hidden = false;
    } else {
      resourcesPanel.hidden = true;
    }
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

// Keep dated credentials in newest-to-oldest order while leaving undated certificates grouped separately.
document.querySelectorAll('.credential-grid').forEach(grid => {
  [...grid.querySelectorAll('.credential-card[data-date-sort]')]
    .sort((a, b) => b.dataset.dateSort.localeCompare(a.dataset.dateSort))
    .forEach(card => grid.append(card));
});

// Allow the credentials section to collapse like organization positions.
const credentialsToggle = document.querySelector('.credentials-toggle');
const credentialsList = document.getElementById('credentials-list');
if (credentialsToggle && credentialsList) {
  credentialsToggle.addEventListener('click', () => {
    const expanded = credentialsToggle.getAttribute('aria-expanded') === 'true';
    credentialsToggle.setAttribute('aria-expanded', String(!expanded));
    credentialsList.hidden = expanded;
    credentialsToggle.innerHTML = expanded
      ? 'View badges <span class="toggle-symbol" aria-hidden="true">+</span>'
      : 'Hide badges <span class="toggle-symbol" aria-hidden="true">−</span>';
  });
}

// Open certification images in a full-size, keyboard-accessible viewer.
const credentialLightbox = document.getElementById('credential-lightbox');
const credentialLightboxImage = document.getElementById('credential-lightbox-image');
const credentialLightboxCaption = document.getElementById('credential-lightbox-caption');
const credentialLightboxClose = document.getElementById('credential-lightbox-close');
const credentialImageButtons = document.querySelectorAll('.credential-image-button');
credentialImageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    if (!image) return;
    credentialLightboxImage.src = image.src;
    credentialLightboxImage.alt = image.alt;
    credentialLightboxCaption.textContent = image.alt;
    credentialLightbox.showModal();
    credentialLightboxClose.focus();
  });
});
function closeCredentialLightbox() {
  if (credentialLightbox?.open) credentialLightbox.close();
}
credentialLightboxClose?.addEventListener('click', closeCredentialLightbox);
credentialLightbox?.addEventListener('click', event => {
  if (event.target === credentialLightbox) closeCredentialLightbox();
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
  'breedify': 'breedify',
  'computer-architecture': 'Computer Architecture'
};

// Optional: customize the order, filenames, and captions for individual projects.
// Example after uploading a PNG:
// 'sumobot': [{src:'assets/projects/sumobot/robot-front.png', caption:'Front view of our robot'}]
const PHOTO_OVERRIDES = {
  'academand': [
    {src: 'assets/Academand/academand1.png', caption: 'AcaDemand — project presentation'}
  ],
  'stafit': [
    {src: 'assets/stafit/stafit1.png', caption: 'STAFit — balance platform prototype'},
    {src: 'assets/stafit/stafit2.png', caption: 'STAFit — prototype detail and sensor setup'},
    {src: 'assets/stafit/stafit3.png', caption: 'STAFit — connected hardware and feedback components'},
    {src: 'assets/stafit/stafit4.png', caption: 'STAFit — completed prototype presentation'}
  ],
  'sumobot': [
    {src: 'assets/sumobot/eltorolook1.jpg', caption: 'El Toro Sumobot — side view and front wedge'},
    {src: 'assets/sumobot/eltorolook2.jpg', caption: 'El Toro Sumobot — front three-quarter view'},
    {src: 'assets/sumobot/eltorolook3.jpg', caption: 'El Toro Sumobot — rear electronics and wiring'},
    {src: 'assets/sumobot/eltorolook4.jpg', caption: 'El Toro Sumobot — top view of the assembled robot'},
    {src: 'assets/sumobot/eltorolook5.jpg', caption: 'El Toro Sumobot — competition-ready build'},
    {src: 'assets/sumobot/eltorolook6.jpg', caption: 'El Toro Sumobot — detail view of the drive system'}
  ],
  'arduino-kit': [
    {src: 'assets/arduino-kit/Arduinokitproh.jpg', caption: 'Arduino Learning Kit — project setup'},
    {src: 'assets/arduino-kit/Arduinokitproj.jpg', caption: 'Arduino Learning Kit — component project'}
  ],
  'breedify': [
    {src: 'assets/breedify/Breederifyweb.png', caption: 'Breedify web-based dog-breed analysis interface'}
  ],
  'computer-architecture': [
    {src: 'assets/assets/projects/Computer Architecture/Arch.jpg', caption: 'Computer Architecture and Organization — architecture work'},
    {src: 'assets/assets/projects/Computer Architecture/Architec.jpg', caption: 'Computer Architecture and Organization — project work'},
    {src: 'assets/assets/projects/Computer Architecture/Architecturepro.jpg', caption: 'Computer Architecture and Organization — project output'}
  ],
  'computer-architecture': [
    {src: 'assets/Computer Architecture/Arch.jpg', caption: 'Computer Architecture and Organization — architecture work'},
    {src: 'assets/Computer Architecture/Architec.jpg', caption: 'Computer Architecture and Organization — project work'},
    {src: 'assets/Computer Architecture/Architecturepro.jpg', caption: 'Computer Architecture and Organization — project output'}
  ],
  'data-digital-communications': [
    {src: 'assets/Data and Digital Communications/ddc1.png', caption: 'Data and Digital Communications — project presentation'},
    {src: 'assets/Data and Digital Communications/ddc2.png', caption: 'Data and Digital Communications — Rizalian Chatroom interface'}
  ]
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

function toggleProjectSchematic(projectId) {
  const schematic = document.getElementById('project-schematic');
  const fullLink = document.getElementById('schematic-full');
  const isSumobot = projectId === 'sumobot';
  schematic.hidden = !isSumobot;
  if (isSumobot) fullLink.href = 'assets/sumobot/eltoroSchematic.jpg';
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
  toggleProjectSchematic(projectId);
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
