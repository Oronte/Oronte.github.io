// Rendu du site : langue (FR / EN), liste de projets, aperçu au survol, pages projet.
// Les textes sont dans content.js.
(() => {
  const SECTIONS = ["projets", "parcours", "contact"];
  const app = document.getElementById("app");
  const previewEl = document.getElementById("preview");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  // ---------------------------------------------------------------- langue
  const store = {
    get() { try { return localStorage.getItem("lang"); } catch { return null; } },
    set(v) { try { localStorage.setItem("lang", v); } catch { /* stockage indisponible */ } },
  };

  let lang = store.get();
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  const ui = () => SITE.ui[lang];

  function applyStatic() {
    const u = ui();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = u[el.dataset.i18n]; });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    const group = document.querySelector(".lang");
    if (group) group.setAttribute("aria-label", u.langLabel);
    document.querySelector('meta[name="description"]').setAttribute("content", u.docDesc);
  }

  // ---------------------------------------------------------------- rendu
  function renderHome() {
    const u = ui();
    const items = SITE.projects.map((p) => {
      const d = p[lang];
      return `<li><a href="#/p/${p.id}" data-preview="${p.id}">
        <span class="index__n mono">${p.n}</span>
        <span class="index__t">${p.title}</span>
        <span class="index__d">${d.list}</span>
        <span class="index__s mono">${p.stack}</span>
        <span class="index__y mono">${p.year[lang]}</span>
      </a></li>`;
    }).join("");

    const path = SITE.path[lang].map((e) => `<li>
        <span class="cv__y mono">${e.y}</span>
        <div>
          <p class="cv__t">${e.t}</p>
          <p class="muted">${e.s}</p>
        </div>
      </li>`).join("");

    const sheet = u.sheet.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

    const cvBtn = `<a class="cv-btn mono" href="assets/cv-oronte-soler.pdf" download="${u.cvFile}"><span>${u.cv}</span><small>${u.cvMeta}</small></a>`;

    const f = SITE.flagship;
    const fd = f[lang];
    const flagship = `
  <section class="flagship wrap" aria-labelledby="flagship-title">
    <div class="flagship__label mono"><span>01</span> ${fd.label}</div>
    <div class="flagship__card">
      <img class="flagship__bg" src="${f.img}" alt="${fd.alt}" width="1600" height="900" loading="lazy">
      <span class="flagship__badge mono">${fd.badge}</span>
      <div class="flagship__main">
        <p class="flagship__kicker mono">${fd.kicker}</p>
        <h2 class="flagship__title" id="flagship-title">${fd.title.join("<br>")}</h2>
        <p class="flagship__sub">${fd.sub}</p>
        <div class="flagship__actions mono">
          <a class="flagship__cta" href="#/p/${f.id}">${fd.cta}</a>
          <a class="flagship__btn" href="${f.github}">${fd.github}</a>
        </div>
      </div>
      <div class="flagship__side">
        <p class="flagship__side-t mono">${fd.sideTitle}</p>
        ${fd.side.map((s) => `<p>${s}</p>`).join("")}
      </div>
    </div>
  </section>
`;

    app.innerHTML = `
  <section class="intro wrap">
    <p class="mono kicker">${u.kicker}</p>
    <h1 class="intro__title">${u.introTitle}</h1>
    <div class="intro__grid">
      <div>
        <p class="intro__lede">${u.lede}</p>
        <p class="intro__cv">${cvBtn}</p>
      </div>
      <dl class="sheet mono">${sheet}</dl>
    </div>
  </section>
${flagship}
  <section id="projets" class="wrap">
    <div class="sect-head">
      <h2 class="sect-title">${u.projectsTitle}</h2>
      <span class="mono muted">${u.projectsCount(SITE.projects.length)}</span>
    </div>
    <ol class="index">${items}</ol>
  </section>

  <section id="parcours" class="wrap">
    <div class="sect-head">
      <h2 class="sect-title">${u.pathTitle}</h2>
    </div>
    <ol class="cv">${path}</ol>
  </section>

  <section id="contact" class="contact wrap">
    <p class="mono kicker">${u.contactKicker}</p>
    <p class="contact__line">${u.contactLine}</p>
    <div class="contact__links">
      <a class="contact__mail" href="mailto:rontou06@gmail.com" data-copy="rontou06@gmail.com" data-copied-label="${u.copied}">rontou06@gmail.com</a>
      <a class="mono" href="https://github.com/Oronte">GitHub ↗</a>
      ${cvBtn}
    </div>
  </section>`;
  }

  function renderProject(p) {
    const u = ui();
    const d = p[lang];
    const next = SITE.projects[(SITE.projects.indexOf(p) + 1) % SITE.projects.length];
    const meta = d.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

    app.innerHTML = `
  <article class="case wrap">
    <a class="back mono" href="#/projets">← ${u.back}</a>
    <header class="case__head">
      <span class="case__n">${p.n}</span>
      <div>
        <h1 class="case__title">${p.title}</h1>
        <p class="case__sub">${d.sub}</p>
      </div>
      <dl class="case__meta mono">${meta}</dl>
    </header>
    ${d.body}
    <nav class="case__next">
      <a href="#/p/${next.id}">
        <span class="mono muted">${u.next} →</span>
        <span class="case__next-t">${next.title}</span>
      </a>
    </nav>
  </article>`;
  }

  // ---------------------------------------------------------------- aperçu au survol
  let activeLink = null;

  function fillPreview(id) {
    const p = SITE.projects.find((x) => x.id === id);
    const d = p[lang];
    const img = p.img ? `<img src="${p.img}" alt="">` : "";
    previewEl.innerHTML = `${img}
      <div class="preview__txt">
        <p class="preview__n mono">${p.n} · ${p.year[lang]}</p>
        <p>${d.preview}</p>
        <p class="preview__s mono">${p.stack}</p>
      </div>`;
  }

  function placePreview(x, y) {
    const w = previewEl.offsetWidth;
    const h = previewEl.offsetHeight;
    let left = x + 24;
    let top = y + 20;
    if (left + w > window.innerWidth - 12) left = x - w - 24;
    if (top + h > window.innerHeight - 12) top = window.innerHeight - h - 12;
    left = Math.max(12, left);
    top = Math.max(12, top);
    previewEl.style.transform = `translate(${left}px, ${top}px)`;
  }

  function showPreview(link, x, y) {
    activeLink = link;
    fillPreview(link.dataset.preview);
    previewEl.classList.add("is-on");
    placePreview(x, y);
    // une image qui finit de charger change la hauteur : on replace
    const img = previewEl.querySelector("img");
    if (img && !img.complete) img.addEventListener("load", () => activeLink && placePreview(x, y), { once: true });
  }

  function hidePreview() {
    activeLink = null;
    previewEl.classList.remove("is-on");
  }

  const linkOf = (e) => (e.target.closest ? e.target.closest("a[data-preview]") : null);

  app.addEventListener("pointerover", (e) => {
    if (e.pointerType !== "mouse" || !canHover.matches) return;
    const link = linkOf(e);
    if (link && link !== activeLink) showPreview(link, e.clientX, e.clientY);
  });
  app.addEventListener("pointermove", (e) => {
    if (activeLink && e.pointerType === "mouse") placePreview(e.clientX, e.clientY);
  });
  app.addEventListener("pointerout", (e) => {
    const link = linkOf(e);
    if (link && !link.contains(e.relatedTarget)) hidePreview();
  });
  // navigation au clavier : la carte s'affiche sous la ligne qui a le focus
  app.addEventListener("focusin", (e) => {
    const link = linkOf(e);
    if (!link || !e.target.matches(":focus-visible")) return;
    const r = link.getBoundingClientRect();
    showPreview(link, r.left + 60, r.bottom - 10);
  });
  app.addEventListener("focusout", (e) => { if (linkOf(e)) hidePreview(); });
  window.addEventListener("scroll", () => { if (activeLink && !activeLink.matches(":hover")) hidePreview(); }, { passive: true });

  // ---------------------------------------------------------------- routeur (hash)
  //   #/                 accueil
  //   #/projets|parcours|contact   accueil + défilement vers la section
  //   #/p/<id>           page d'un projet
  let view = null;
  let homeY = 0;

  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    if (h.startsWith("p/")) {
      const p = SITE.projects.find((x) => x.id === h.slice(2));
      if (p) return { view: "project", p };
    }
    return { view: "home", section: SECTIONS.includes(h) ? h : null };
  }

  function scrollToSection(section, behavior) {
    if (!section) { window.scrollTo({ top: 0, behavior }); return; }
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior });
  }

  function route({ force = false } = {}) {
    const r = parse();
    hidePreview();

    // déjà sur l'accueil : on fait seulement défiler
    if (r.view === "home" && view === "home" && !force) {
      scrollToSection(r.section, "smooth");
      return;
    }

    const prev = view;
    const keepY = window.scrollY;
    if (prev === "home" && r.view === "project") homeY = keepY;

    if (r.view === "home") {
      renderHome();
      if (force) window.scrollTo({ top: keepY, behavior: "instant" });
      else if (r.section) scrollToSection(r.section, "instant");
      else window.scrollTo({ top: prev === "project" ? homeY : 0, behavior: "instant" });
      document.title = ui().docTitle;
    } else {
      renderProject(r.p);
      if (!force) window.scrollTo({ top: 0, behavior: "instant" });
      document.title = `${r.p.title} — Oronte Soler`;
    }
    view = r.view;
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    store.set(lang);
    applyStatic();
    route({ force: true });
  }

  // ---------------------------------------------------------------- événements globaux
  document.addEventListener("click", async (e) => {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) { setLang(langBtn.dataset.lang); return; }

    // lien interne vers la page où l'on est déjà : le hash ne change pas, on relance quand même le défilement
    const link = e.target.closest('a[href^="#/"]');
    if (link && link.hash === location.hash) { e.preventDefault(); route(); return; }

    // clic sur l'adresse : copie dans le presse-papiers, le mailto reste en secours
    const mail = e.target.closest("[data-copy]");
    if (mail && navigator.clipboard) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(mail.dataset.copy);
        mail.setAttribute("data-copied", "");
        setTimeout(() => mail.removeAttribute("data-copied"), 1600);
      } catch {
        window.location.href = mail.href;
      }
    }
  });

  window.addEventListener("hashchange", () => route());

  applyStatic();
  route();
})();
