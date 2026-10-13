/**
 * ====================================================================
 * LOGIQUE PRINCIPALE DU PORTFOLIO (MAIN.JS)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  renderProfileAndConfig();
  renderSkills();
  renderTimeline();
  renderProjects();
  initProjectsFilterAndSearch();
  initModalListeners();
  initNavigation();
  initEmailCopy();
  initContactForm();
});

/* ====================================================================
   1. PARTICLES & CYBER CANVAS (BACKGROUND HERO)
   ==================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 22), 65);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, ' : 'rgba(99, 102, 241, '
    });
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connecter les points proches
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.18 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* ====================================================================
   2. RENDU DU PROFIL & CONFIGURATION (DEPUIS CONFIG.JS)
   ==================================================================== */
function renderProfileAndConfig() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  const { profile, socials, about } = config;

  // Header & Brand
  const brandName = document.getElementById('brand-name');
  if (brandName) brandName.textContent = profile.name;

  // Hero Section
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = profile.name;

  const heroRole = document.getElementById('hero-role');
  if (heroRole) heroRole.textContent = profile.role;

  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) heroTagline.textContent = profile.tagline;

  const statusBadge = document.getElementById('hero-status-text');
  if (statusBadge) statusBadge.textContent = profile.statusText;

  // Avatar Card
  const avatarImg = document.getElementById('avatar-img');
  if (avatarImg && profile.avatar) avatarImg.src = profile.avatar;

  const avatarName = document.getElementById('avatar-name');
  if (avatarName) avatarName.textContent = profile.name;

  const avatarRole = document.getElementById('avatar-role');
  if (avatarRole) avatarRole.textContent = profile.role;

  // CV Links
  const resumeBtns = document.querySelectorAll('.btn-resume');
  resumeBtns.forEach(btn => {
    if (profile.resumeUrl) {
      btn.href = profile.resumeUrl;
      btn.setAttribute('download', 'CV_' + profile.name.replace(/\s+/g, '_') + '.pdf');
    }
  });

  // Socials dans le Hero
  renderSocialLinks(socials, 'hero-socials');
  renderSocialLinks(socials, 'footer-socials');

  // Liens de contact directs
  const contactEmailText = document.getElementById('contact-email-text');
  if (contactEmailText) contactEmailText.textContent = profile.email;

  const contactGithubLink = document.getElementById('contact-github-link');
  if (contactGithubLink && socials.github) contactGithubLink.href = socials.github;

  const contactLinkedinLink = document.getElementById('contact-linkedin-link');
  if (contactLinkedinLink && socials.linkedin) contactLinkedinLink.href = socials.linkedin;

  const contactItchioLink = document.getElementById('contact-itchio-link');
  if (contactItchioLink && socials.itchio) {
    contactItchioLink.href = socials.itchio;
    contactItchioLink.style.display = 'flex';
  } else if (contactItchioLink) {
    contactItchioLink.style.display = 'none';
  }

  // Section À Propos
  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle && about.title) aboutTitle.textContent = about.title;

  const aboutContainer = document.getElementById('about-paragraphs');
  if (aboutContainer && about.paragraphs) {
    aboutContainer.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  const statsContainer = document.getElementById('about-stats');
  if (statsContainer && about.stats) {
    statsContainer.innerHTML = about.stats.map(s => `
      <div class="stat-box">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }
}

function renderSocialLinks(socials, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !socials) return;

  const icons = {
    github: { icon: 'fa-brands fa-github', title: 'GitHub' },
    linkedin: { icon: 'fa-brands fa-linkedin-in', title: 'LinkedIn' },
    itchio: { icon: 'fa-brands fa-itch-io', title: 'Itch.io' },
    youtube: { icon: 'fa-brands fa-youtube', title: 'YouTube' },
    twitter: { icon: 'fa-brands fa-x-twitter', title: 'X / Twitter' },
    artstation: { icon: 'fa-brands fa-artstation', title: 'ArtStation' },
    steam: { icon: 'fa-brands fa-steam', title: 'Steam' }
  };

  container.innerHTML = Object.entries(socials)
    .filter(([_, url]) => url && url.trim() !== '')
    .map(([key, url]) => {
      const info = icons[key] || { icon: 'fa-solid fa-link', title: key };
      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="${info.title}">
          <i class="${info.icon}"></i>
        </a>
      `;
    })
    .join('');
}

/* ====================================================================
   3. RENDU DES COMPÉTENCES (SKILLS)
   ==================================================================== */
function renderSkills() {
  const config = window.PORTFOLIO_CONFIG;
  const container = document.getElementById('skills-grid');
  if (!container || !config || !config.skillsCategories) return;

  container.innerHTML = config.skillsCategories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <div class="skill-category-icon">
          <i class="fa-solid ${cat.icon || 'fa-code'}"></i>
        </div>
        <h3 class="skill-category-title">${cat.name}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <div class="skill-item-header">
              <span>${s.name}</span>
              <span class="skill-level-badge">${s.level}</span>
            </div>
            ${s.details ? `<div class="skill-item-details">${s.details}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ====================================================================
   4. RENDU DU PARCOURS (TIMELINE)
   ==================================================================== */
function renderTimeline() {
  const config = window.PORTFOLIO_CONFIG;
  const container = document.getElementById('timeline-list');
  if (!container || !config || !config.timeline) return;

  container.innerHTML = config.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${item.period}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ====================================================================
   5. RENDU ET FILTRAGE DES PROJETS
   ==================================================================== */
let currentCategory = 'all';
let currentSearch = '';

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const projects = window.PORTFOLIO_PROJECTS || [];

  const filtered = projects.filter(p => {
    const matchCategory = (currentCategory === 'all') || (p.category === currentCategory);
    const searchLow = currentSearch.toLowerCase().trim();
    const matchSearch = !searchLow || (
      p.title.toLowerCase().includes(searchLow) ||
      p.shortDescription.toLowerCase().includes(searchLow) ||
      p.categoryLabel.toLowerCase().includes(searchLow) ||
      p.engine.toLowerCase().includes(searchLow) ||
      p.languages.some(lang => lang.toLowerCase().includes(searchLow))
    );
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <i class="fa-solid fa-gamepad" style="font-size: 3rem; margin-bottom: 1rem; color: var(--cyan); opacity: 0.5;"></i>
        <h3>Aucun projet trouvé</h3>
        <p>Essayez avec d'autres mots-clés ou réinitialisez le filtre de catégorie.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const tagClass = `tag-${p.category}`;
    return `
      <article class="project-card" data-project-id="${p.id}">
        <div class="project-thumb-wrapper" onclick="openProjectModal('${p.id}')" style="cursor: pointer;">
          <img src="${p.thumbnail}" alt="${p.title}" class="project-thumb" loading="lazy">
          ${p.pinned ? `<div class="project-featured-badge"><i class="fa-solid fa-star"></i> Featured</div>` : ''}
          <div class="project-category-badge">
            <span class="tag ${tagClass}">${p.categoryLabel}</span>
          </div>
        </div>
        
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">${p.title}</h3>
            <span class="project-year">${p.year}</span>
          </div>
          
          <div class="project-role">${p.role}</div>
          <p class="project-desc">${p.shortDescription}</p>

          <div class="project-languages">
            ${p.languages.map(l => `<span class="tag">${l}</span>`).join('')}
          </div>

          <div class="project-actions">
            <button class="btn btn-sm btn-primary" onclick="openProjectModal('${p.id}')">
              <i class="fa-solid fa-circle-info"></i> Détails &amp; Démo
            </button>
            <div class="project-links">
              ${p.links?.github ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Code Source GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
              ${p.links?.itch ? `<a href="${p.links.itch}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Jouer sur Itch.io"><i class="fa-brands fa-itch-io"></i></a>` : ''}
              ${p.links?.steam ? `<a href="${p.links.steam}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Page Steam"><i class="fa-brands fa-steam"></i></a>` : ''}
              ${p.links?.video ? `<a href="${p.links.video}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Vidéo Gameplay"><i class="fa-brands fa-youtube"></i></a>` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initProjectsFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProjects();
    });
  }
}

/* ====================================================================
   6. MODALE DÉTAILLÉE DE PROJET (LIGHTBOX, VIDÉO, GALERIE)
   ==================================================================== */
function openProjectModal(projectId) {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalMedia = document.getElementById('modal-media-content');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalMeta = document.getElementById('modal-meta');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlightsList = document.getElementById('modal-highlights-list');
  const modalGallery = document.getElementById('modal-gallery-container');
  const modalLinks = document.getElementById('modal-links-container');

  // Titre & Métas
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalCategory) {
    modalCategory.textContent = project.categoryLabel;
    modalCategory.className = `tag tag-${project.category}`;
  }
  if (modalMeta) {
    modalMeta.textContent = `${project.role} • ${project.engine} • ${project.year}`;
  }

  // Média Principal
  renderModalMedia(modalMedia, project.mainMedia || { type: 'image', url: project.thumbnail });

  // Description complète
  if (modalDesc) modalDesc.innerHTML = project.fullDescription || `<p>${project.shortDescription}</p>`;

  // Highlights techniques
  if (modalHighlightsList) {
    if (project.technicalHighlights && project.technicalHighlights.length > 0) {
      modalHighlightsList.innerHTML = project.technicalHighlights.map(h => `
        <li><i class="fa-solid fa-check"></i> <span>${h}</span></li>
      `).join('');
      document.getElementById('modal-highlights-section').style.display = 'block';
    } else {
      document.getElementById('modal-highlights-section').style.display = 'none';
    }
  }

  // Galerie additionnelle
  if (modalGallery) {
    if (project.gallery && project.gallery.length > 0) {
      modalGallery.innerHTML = project.gallery.map(item => `
        <div class="modal-gallery-item" onclick="switchModalMedia('${item.type}', '${item.url}')" title="${item.caption || 'Cliquer pour agrandir'}">
          <img src="${item.url}" alt="${item.caption || 'Aperçu'}">
        </div>
      `).join('');
      document.getElementById('modal-gallery-section').style.display = 'block';
    } else {
      document.getElementById('modal-gallery-section').style.display = 'none';
    }
  }

  // Boutons de liens
  if (modalLinks) {
    const l = project.links || {};
    let buttonsHtml = '';
    if (l.github) buttonsHtml += `<a href="${l.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-brands fa-github"></i> GitHub</a>`;
    if (l.itch) buttonsHtml += `<a href="${l.itch}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fa-brands fa-itch-io"></i> Jouer sur Itch.io</a>`;
    if (l.steam) buttonsHtml += `<a href="${l.steam}" target="_blank" rel="noopener noreferrer" class="btn btn-cyan"><i class="fa-brands fa-steam"></i> Voir sur Steam</a>`;
    if (l.video) buttonsHtml += `<a href="${l.video}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-brands fa-youtube"></i> Vidéo Gameplay</a>`;
    if (l.demo) buttonsHtml += `<a href="${l.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-solid fa-gamepad"></i> Démo Live</a>`;
    modalLinks.innerHTML = buttonsHtml;
  }

  // Ouvrir
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function renderModalMedia(container, media) {
  if (!container || !media) return;

  if (media.type === 'youtube') {
    container.innerHTML = `
      <iframe src="${media.url}" title="Vidéo Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  } else if (media.type === 'video') {
    container.innerHTML = `
      <video controls autoplay loop playsinline src="${media.url}"></video>
    `;
  } else {
    // Image ou GIF
    container.innerHTML = `
      <img src="${media.url}" alt="${media.caption || 'Capture de projet'}">
    `;
  }
}

function switchModalMedia(type, url) {
  const container = document.getElementById('modal-media-content');
  renderModalMedia(container, { type, url });
}

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalMedia = document.getElementById('modal-media-content');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  // Arrêter la vidéo en nettoyant le conteneur
  if (modalMedia) modalMedia.innerHTML = '';
}

function initModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('project-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Exposer pour les onclick inline
window.openProjectModal = openProjectModal;
window.switchModalMedia = switchModalMedia;

/* ====================================================================
   7. NAVIGATION MOBILE & SMOOTH SCROLL
   ==================================================================== */
function initNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

/* ====================================================================
   8. COPIE DE L'EMAIL & TOAST
   ==================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById('btn-copy-email');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const config = window.PORTFOLIO_CONFIG;
    const email = config?.profile?.email || 'contact@example.com';

    navigator.clipboard.writeText(email).then(() => {
      showToast('Adresse email copié dans le presse-papier !');
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${email}`;
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ====================================================================
   9. FORMULAIRE DE CONTACT (MAILTO OU SERVICE EXTERNE)
   ==================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const config = window.PORTFOLIO_CONFIG;
    const email = config?.profile?.email || 'contact@example.com';

    const name = document.getElementById('form-name')?.value || '';
    const sender = document.getElementById('form-email')?.value || '';
    const subject = document.getElementById('form-subject')?.value || 'Contact Portfolio';
    const message = document.getElementById('form-message')?.value || '';

    const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`[Portfolio] ${subject} - ${name}`)}&body=${encodeURIComponent(`De : ${name} (${sender})\n\nMessage :\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    showToast('Votre client mail a été ouvert avec le message !');
  });
}
