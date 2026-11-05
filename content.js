// Tous les textes du site, en français (fr) et en anglais (en).
// Pour modifier un texte : change-le ici, main.js s'occupe du reste.

// ---------- Blocs de code partagés entre les deux langues ----------
const CODE_KRAMPUS = (comment1, comment2) => `<pre class="code"><code><span class="c">// MovementComponent.h</span>
<span class="k">class</span> MovementComponent : <span class="k">public</span> Component
{
    KCOMPONENT(MovementComponent, Component)

<span class="k">public</span>:
    MovementComponent(Actor* _owner);

    KPROPERTY(Float, moveSpeed) = <span class="n">1.f</span>;  <span class="c">// ${comment1}</span>

    KFUNCTION(MoveLeft)                 <span class="c">// ${comment2}</span>
    <span class="k">void</span> MoveLeft();
};</code></pre>`;

const CODE_ADHAFERA = (comment1, comment2) => `<pre class="code"><code><span class="k">struct</span> FADF_ShotPlan
{
    TArray&lt;FADF_BoneHit&gt; targets;
    int32  tileCount;
    <span class="k">float</span>  hitChance;      <span class="c">// ${comment1}</span>
    FVector impactPoint;
    <span class="k">bool</span>   requiresRoll;   <span class="c">// ${comment2}</span>
    <span class="k">float</span>  expectedDamage;
};

<span class="k">static</span> FADF_ShotResult Roll(<span class="k">const</span> FADF_ShotPlan&amp;,
                            <span class="k">const</span> FADF_ResolvedStats&amp;,
                            FRandomStream&amp;);</code></pre>`;

const SITE = {
  // ======================================================================
  //  Interface
  // ======================================================================
  ui: {
    fr: {
      docTitle: "Oronte Soler — Programmation gameplay & outils",
      docDesc: "Oronte Soler, étudiant en programmation jeu vidéo. Moteur 2D en C++20, gameplay Unreal Engine 5, jeu de musée sous Unity.",
      navProjects: "Projets",
      navPath: "Parcours",
      navContact: "Contact",
      langLabel: "Langue",
      kicker: "Étudiant · programmation appliquée au jeu vidéo · Montpellier",
      introTitle: "Je programme des jeux,<br>et les outils qui servent<br>à les fabriquer.",
      lede: "Mon projet principal est un moteur 2D écrit en C++ depuis zéro, avec son propre éditeur. À l'école, je travaille sur du gameplay et de l'IA dans Unreal Engine 5, et sur un jeu commandé par un musée sous Unity. Ce qui m'intéresse&nbsp;: les systèmes qu'on peut tester, les données qu'un game designer peut régler sans moi, et le code qu'on relit sans souffrir.",
      sheet: [
        ["Langages", "C++20, C#, Python"],
        ["Moteurs", "Unreal Engine 5, Unity, moteur maison (SFML)"],
        ["Outils", "Visual Studio, Rider, CMake, Perforce, Git"],
        ["Libs", "Dear ImGui, box2d, SFML"],
      ],
      cv: "Télécharger mon CV",
      cvMeta: "PDF",
      cvFile: "CV Oronte Soler.pdf",
      projectsTitle: "Projets",
      projectsCount: (n) => `${n} entrées`,
      projectsHint: "Clique sur un projet pour voir sa page complète.",
      pathTitle: "Parcours",
      back: "Projets",
      next: "Projet suivant",
      contactKicker: "Contact",
      contactLine: "Je cherche un stage en programmation gameplay ou outils.<br>Le plus simple, c'est un mail.",
      copied: "copié",
      footL: "Oronte Soler, 2026",
      footR: "Mis à jour en novembre 2026",
      noscript: "Ce site a besoin de JavaScript pour s'afficher.",
    },
    en: {
      docTitle: "Oronte Soler — Gameplay & tools programming",
      docDesc: "Oronte Soler, game programming student. 2D engine in C++20, Unreal Engine 5 gameplay, museum game in Unity.",
      navProjects: "Projects",
      navPath: "Background",
      navContact: "Contact",
      langLabel: "Language",
      kicker: "Student · applied game programming · Montpellier, France",
      introTitle: "I program games,<br>and the tools used<br>to make them.",
      lede: "My main project is a 2D engine written in C++ from scratch, with its own editor. At school, I work on gameplay and AI in Unreal Engine 5, and on a game commissioned by a museum in Unity. What interests me: systems you can test, data a game designer can tune without me, and code you can read without suffering.",
      sheet: [
        ["Languages", "C++20, C#, Python"],
        ["Engines", "Unreal Engine 5, Unity, in-house engine (SFML)"],
        ["Tools", "Visual Studio, Rider, CMake, Perforce, Git"],
        ["Libs", "Dear ImGui, box2d, SFML"],
      ],
      cv: "Download my résumé",
      cvMeta: "PDF · in French",
      cvFile: "Oronte Soler - Resume.pdf",
      projectsTitle: "Projects",
      projectsCount: (n) => `${n} entries`,
      projectsHint: "Click a project to open its full page.",
      pathTitle: "Background",
      back: "Projects",
      next: "Next project",
      contactKicker: "Contact",
      contactLine: "I'm looking for an internship in gameplay or tools programming.<br>The easiest way is an email.",
      copied: "copied",
      footL: "Oronte Soler, 2026",
      footR: "Updated November 2026",
      noscript: "This site needs JavaScript to display.",
    },
  },

  // ======================================================================
  //  Parcours
  // ======================================================================
  path: {
    fr: [
      // À VÉRIFIER : nom de l'école et année d'entrée
      { y: "2024 –", t: "Programmation appliquée au jeu vidéo", s: "Objectif 3D, Montpellier" },
      { y: "Stage", t: "Développeur Python, migration d'outils scientifiques", s: "IGMM, CNRS · Montpellier" },
    ],
    en: [
      // À VÉRIFIER : nom de l'école et année d'entrée
      { y: "2024 –", t: "Applied game programming", s: "Objectif 3D, Montpellier" },
      { y: "Internship", t: "Python developer, scientific tools migration", s: "IGMM, CNRS · Montpellier" },
    ],
  },

  // ======================================================================
  //  Projet phare (bandeau avant la liste des projets)
  //  id : projet affiché, il doit exister dans `projects` plus bas
  // ======================================================================
  flagship: {
    id: "krampus",
    img: "assets/img/Editor.png",
    github: "https://github.com/Oronte/KrampusEngine",
    fr: {
      label: "Projet phare",
      badge: "Projet personnel · en cours",
      kicker: "C++20 · ImGui · box2d · Seul",
      title: ["Krampus", "Engine"],
      sub: "Moteur 2D et éditeur, écrits de zéro",
      cta: "Voir l'étude technique",
      github: "Voir sur GitHub",
      sideTitle: "Ce que j'ai fait",
      side: ["Éditeur · Rechargement à chaud", "Réseau · Physique · Réflexion"],
      alt: "L'éditeur de KrampusEngine",
    },
    en: {
      label: "Flagship project",
      badge: "Personal project · ongoing",
      kicker: "C++20 · ImGui · box2d · Solo",
      title: ["Krampus", "Engine"],
      sub: "2D engine and editor, written from scratch",
      cta: "Read the technical study",
      github: "View on GitHub",
      sideTitle: "What I built",
      side: ["Editor · Hot reload", "Networking · Physics · Reflection"],
      alt: "The KrampusEngine editor",
    },
  },

  // ======================================================================
  //  Projets
  //  list    : ligne dans la liste
  //  preview : texte de la carte au survol
  //  sub/meta/body : page complète
  // ======================================================================
  projects: [
    // ---------------------------------------------------------------- 01
    {
      id: "krampus",
      n: "01",
      title: "KrampusEngine",
      stack: "C++20 · ImGui · box2d",
      year: { fr: "2025 –", en: "2025 –" },
      img: "assets/img/Editor.png",
      fr: {
        list: "Moteur 2D et éditeur",
        preview: "Un moteur 2D écrit de zéro, avec son éditeur, le rechargement à chaud du C++ et l'export du jeu en une commande.",
        sub: "Un moteur 2D complet, avec éditeur, rechargement à chaud du C++ et export du jeu en une commande.",
        meta: [
          ["Cadre", "Projet personnel"],
          ["Équipe", "Seul"],
          ["Depuis", "Nov. 2025"],
          ["Code", '<a href="https://github.com/Oronte/KrampusEngine">github.com/Oronte/KrampusEngine</a>'],
        ],
        body: `
    <figure class="shot">
      <img src="assets/img/Editor.png" alt="L'éditeur de KrampusEngine : hiérarchie, viewport, explorateur de contenu et console" width="1600" height="900">
      <figcaption class="mono">L'éditeur. Viewport, hiérarchie, contenu, console. Tout est fait avec Dear ImGui.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <p>
          Je voulais comprendre ce qu'il y a sous un moteur commercial. Alors j'en ai écrit un, couche par couche&nbsp;:
          boucle de jeu, acteurs et composants, système de réflexion, format de scène, physique, réseau, et
          l'éditeur par-dessus.
        </p>
        <p>
          Le flux de travail ressemble à celui d'Unreal. On place les acteurs dans l'éditeur, on écrit le gameplay en C++,
          on appuie sur <kbd>F7</kbd>&nbsp;: le module de jeu est recompilé en tâche de fond et rechargé, sans perdre la scène
          en cours, même non sauvegardée. Un bouton <em>Play</em> lance la scène&nbsp;; <em>Stop</em> la remet exactement comme avant.
        </p>
        <p>
          La réflexion tient en quelques macros, sans génération de code. Une propriété déclarée avec
          <code>KPROPERTY</code> apparaît dans l'inspecteur et se sauvegarde dans la scène. Une fonction marquée
          <code>KFUNCTION</code> peut être branchée sur une touche, un bouton ou un message réseau depuis l'éditeur.
        </p>

        ${CODE_KRAMPUS("inspecteur + sauvegarde", "branchable sur une entrée")}

        <p>
          Pour tester le moteur sur un vrai jeu, j'ai fait <strong>Krampus Night</strong>&nbsp;: un shooter en arène,
          vagues de démons, jouable seul ou en coopération. Le mode solo et le mode coop passent par le même code&nbsp;:
          hors ligne, le spawn réseau crée simplement l'acteur en local.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Ce qu'il contient</h4>
        <ul class="notes__list">
          <li>Éditeur&nbsp;: viewport, hiérarchie, inspecteur, contenu, console, undo / redo, gizmo</li>
          <li>Éditeurs dédiés&nbsp;: animation, machine à états, formes de collision</li>
          <li>Physique box2d 3.1, polygones concaves découpés en convexes</li>
          <li>Réseau TCP + UDP&nbsp;: hôte, découverte LAN, acteurs répliqués, RPC</li>
          <li>Particules en pool, un draw call par émetteur</li>
          <li>Lumières 2D et ombres, gameplay tags hiérarchiques</li>
          <li>Rapport de crash avec minidump et pile d'appels</li>
          <li>Export&nbsp;: un exe, un <code>.pak</code>, les DLL runtime</li>
        </ul>

        <h4 class="mono notes__h">En chiffres</h4>
        <dl class="figures">
          <div><dt>~45&nbsp;000</dt><dd>lignes de C++ (moteur + éditeur)</dd></div>
          <div><dt>0,2&nbsp;ms</dt><dd>CPU pour 10&nbsp;000 particules en Release</dd></div>
          <div><dt>143</dt><dd>commits</dd></div>
        </dl>
      </aside>
    </div>

    <div class="lessons">
      <h4 class="mono notes__h">Problèmes rencontrés</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q">Le rechargement à chaud échouait une fois sur deux.</p>
          <p>Visual Studio gardait le fichier PDB verrouillé tant que la DLL était chargée. L'éditeur copie maintenant la DLL
          sous un nom unique avant de la charger, et chaque édition de liens produit un PDB au nom horodaté.</p>
        </div>
        <div>
          <p class="lessons__q">Crash quand une balle tuait un démon.</p>
          <p>L'acteur était détruit à l'intérieur du callback de collision de box2d. Les destructions sont maintenant notées
          pendant le callback et faites au <code>Tick</code> suivant.</p>
        </div>
        <div>
          <p class="lessons__q">Le jeu se figeait en multijoueur.</p>
          <p>Une réception UDP bloquante attendait un paquet qui n'arrivait jamais. Toutes les sockets sont non bloquantes,
          et un test d'intégration lance un vrai hôte et un vrai client en boucle locale.</p>
        </div>
      </div>
    </div>

    <figure class="shot shot--duo">
      <img src="assets/img/Input.gif" alt="Démo du système d'entrées : déplacement ZQSD et tir à la souris" loading="lazy">
      <img src="assets/img/ConsoleLog.png" alt="Console de l'éditeur avec filtres de verbosité" loading="lazy">
      <figcaption class="mono">Entrées liées depuis l'inspecteur, sans code de liaison · Console filtrable par catégorie et verbosité.</figcaption>
    </figure>`,
      },
      en: {
        list: "2D engine and editor",
        preview: "A 2D engine written from scratch, with its editor, C++ hot reload and one-command game export.",
        sub: "A complete 2D engine, with an editor, C++ hot reload and one-command game export.",
        meta: [
          ["Context", "Personal project"],
          ["Team", "Solo"],
          ["Since", "Nov. 2025"],
          ["Code", '<a href="https://github.com/Oronte/KrampusEngine">github.com/Oronte/KrampusEngine</a>'],
        ],
        body: `
    <figure class="shot">
      <img src="assets/img/Editor.png" alt="The KrampusEngine editor: hierarchy, viewport, content browser and console" width="1600" height="900">
      <figcaption class="mono">The editor. Viewport, hierarchy, content, console. All built with Dear ImGui.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <p>
          I wanted to understand what sits under a commercial engine. So I wrote one, layer by layer:
          game loop, actors and components, reflection system, scene format, physics, networking, and
          the editor on top.
        </p>
        <p>
          The workflow looks like Unreal's. You place actors in the editor, write gameplay in C++,
          and press <kbd>F7</kbd>: the game module is rebuilt in the background and reloaded, without losing the current scene,
          even unsaved. A <em>Play</em> button runs the scene; <em>Stop</em> puts it back exactly as it was.
        </p>
        <p>
          Reflection fits in a few macros, with no code generation. A property declared with
          <code>KPROPERTY</code> shows up in the inspector and is saved in the scene. A function marked
          <code>KFUNCTION</code> can be bound to a key, a button or a network message from the editor.
        </p>

        ${CODE_KRAMPUS("inspector + save", "bindable to an input")}

        <p>
          To test the engine on a real game, I made <strong>Krampus Night</strong>: an arena shooter,
          waves of demons, playable solo or in co-op. Solo and co-op go through the same code:
          offline, the network spawn simply creates the actor locally.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">What it contains</h4>
        <ul class="notes__list">
          <li>Editor: viewport, hierarchy, inspector, content browser, console, undo / redo, gizmo</li>
          <li>Dedicated editors: animation, state machine, collision shapes</li>
          <li>box2d 3.1 physics, concave polygons split into convex ones</li>
          <li>TCP + UDP networking: host, LAN discovery, replicated actors, RPC</li>
          <li>Pooled particles, one draw call per emitter</li>
          <li>2D lights and shadows, hierarchical gameplay tags</li>
          <li>Crash report with minidump and call stack</li>
          <li>Export: one exe, one <code>.pak</code>, the runtime DLLs</li>
        </ul>

        <h4 class="mono notes__h">In numbers</h4>
        <dl class="figures">
          <div><dt>~45,000</dt><dd>lines of C++ (engine + editor)</dd></div>
          <div><dt>0.2&nbsp;ms</dt><dd>CPU for 10,000 particles in Release</dd></div>
          <div><dt>143</dt><dd>commits</dd></div>
        </dl>
      </aside>
    </div>

    <div class="lessons">
      <h4 class="mono notes__h">Problems I ran into</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q">Hot reload failed one time out of two.</p>
          <p>Visual Studio kept the PDB file locked as long as the DLL was loaded. The editor now copies the DLL
          under a unique name before loading it, and every link step produces a timestamped PDB.</p>
        </div>
        <div>
          <p class="lessons__q">Crash when a bullet killed a demon.</p>
          <p>The actor was destroyed inside box2d's collision callback. Destructions are now recorded
          during the callback and carried out on the next <code>Tick</code>.</p>
        </div>
        <div>
          <p class="lessons__q">The game froze in multiplayer.</p>
          <p>A blocking UDP receive was waiting for a packet that never came. All sockets are now non-blocking,
          and an integration test runs a real host and a real client over loopback.</p>
        </div>
      </div>
    </div>

    <figure class="shot shot--duo">
      <img src="assets/img/Input.gif" alt="Input system demo: WASD movement and mouse shooting" loading="lazy">
      <img src="assets/img/ConsoleLog.png" alt="Editor console with verbosity filters" loading="lazy">
      <figcaption class="mono">Inputs bound from the inspector, no binding code · Console filterable by category and verbosity.</figcaption>
    </figure>`,
      },
    },

    // ---------------------------------------------------------------- 02
    {
      id: "adhafera",
      n: "02",
      title: "Adhafera",
      stack: "UE 5.8 · C++",
      year: { fr: "2026 –", en: "2026 –" },
      img: null,
      fr: {
        list: "Tactique au tour par tour, mechas",
        preview: "Tactique au tour par tour sur grille, avec des mechas. Je refonds le système de tir pour que la prédiction et le tir réel passent par le même code.",
        sub: "Jeu de tactique au tour par tour sur grille, avec des mechas. Projet d'école, en équipe.",
        meta: [
          ["Cadre", "Projet de fin d'année"],
          ["Moteur", "Unreal Engine 5.8"],
          ["Langage", "C++, Blueprints"],
          ["Versions", "Perforce"],
        ],
        body: `
    <div class="case__body">
      <div class="prose">
        <p>
          Chaque tour alterne une phase joueur, une phase ennemie et une phase neutre. Les unités se déplacent sur une grille,
          dépensent des points d'action et tirent avec des armes modulaires. Les dégâts sont répartis par os&nbsp;: on peut viser
          un bras ou une jambe d'un mecha.
        </p>
        <p>
          Le problème de départ était simple à décrire. Le pourcentage de toucher affiché au joueur et celui réellement tiré
          n'étaient pas calculés par le même code. Trois classes d'armes (hitscan, projectile, cône) dupliquaient la même logique.
        </p>
        <p>
          La refonte (en cours) remplace ces trois classes par une seule arme et des <em>comportements de tir</em>
          interchangeables, choisis dans la Data Asset de l'arme. Tous les tirs passent par le même chemin&nbsp;:
        </p>

        <ol class="pipe mono" aria-label="Pipeline de tir">
          <li><b>Plan</b><span>cibles, cases, % de toucher</span></li>
          <li><b>PlayShot</b><span>animation, FX</span></li>
          <li><b>Execute</b><span>projectile ou trace</span></li>
          <li><b>Resolve</b><span>jet, critique, dégâts par os</span></li>
        </ol>

        <p>
          La prédiction affichée et le tir réel lisent le même <code>FADF_ShotPlan</code>. Le jet de dés est une fonction pure
          qui reçoit un <code>FRandomStream</code>&nbsp;: avec une graine fixe, un tir est rejouable et couvert par des tests
          d'automatisation.
        </p>

        ${CODE_ADHAFERA("0-100, le même chiffre que l'UI", "false pour les tirs de zone")}

        <p>
          Au passage, le coup critique est devenu un second jet indépendant. Avant, il réutilisait le jet de toucher, donc
          une arme à 40&nbsp;% de toucher ne pouvait jamais dépasser 40&nbsp;% de critique, quelle que soit sa stat.
          C'est un changement d'équilibrage, donc il est écrit noir sur blanc dans le document de conception.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Systèmes</h4>
        <ul class="notes__list">
          <li>Gestionnaire de grille&nbsp;: topologie, occupation, cache de distances</li>
          <li>Armes modulaires&nbsp;: stats résolues à partir des modules équipés</li>
          <li>Santé segmentée par os</li>
          <li>IA en StateTree, missions par unité</li>
          <li>Générateur EQS sur les cases de la grille</li>
          <li>Points d'action, phases de tour, progression de niveau</li>
        </ul>

        <h4 class="mono notes__h">Méthode</h4>
        <p class="notes__p">
          Chaque refonte commence par un court document de conception&nbsp;: objectif, critères de réussite,
          décisions, ce qui est hors périmètre. On le relit en équipe, puis on code.
        </p>
      </aside>
    </div>`,
      },
      en: {
        list: "Turn-based tactics, mechas",
        preview: "Grid-based turn tactics with mechas. I'm reworking the shooting system so the prediction and the actual shot go through the same code.",
        sub: "Grid-based turn-based tactics game with mechas. School project, in a team.",
        meta: [
          ["Context", "End-of-year project"],
          ["Engine", "Unreal Engine 5.8"],
          ["Language", "C++, Blueprints"],
          ["Versioning", "Perforce"],
        ],
        body: `
    <div class="case__body">
      <div class="prose">
        <p>
          Each turn alternates a player phase, an enemy phase and a neutral phase. Units move on a grid,
          spend action points and fire modular weapons. Damage is distributed per bone: you can aim at
          a mecha's arm or leg.
        </p>
        <p>
          The starting problem was simple to describe. The hit chance shown to the player and the one actually rolled
          weren't computed by the same code. Three weapon classes (hitscan, projectile, cone) duplicated the same logic.
        </p>
        <p>
          The refactor (in progress) replaces those three classes with a single weapon and interchangeable
          <em>firing behaviors</em>, chosen in the weapon's Data Asset. Every shot goes through the same path:
        </p>

        <ol class="pipe mono" aria-label="Firing pipeline">
          <li><b>Plan</b><span>targets, tiles, hit %</span></li>
          <li><b>PlayShot</b><span>animation, FX</span></li>
          <li><b>Execute</b><span>projectile or trace</span></li>
          <li><b>Resolve</b><span>roll, crit, per-bone damage</span></li>
        </ol>

        <p>
          The displayed prediction and the actual shot read the same <code>FADF_ShotPlan</code>. The dice roll is a pure function
          that takes an <code>FRandomStream</code>: with a fixed seed, a shot is replayable and covered by automation tests.
        </p>

        ${CODE_ADHAFERA("0-100, same number as the UI", "false for area shots")}

        <p>
          While at it, the critical hit became a second, independent roll. Before, it reused the hit roll, so a weapon with
          40% hit chance could never exceed 40% crit chance, whatever its stat.
          That's a balance change, so it's spelled out in the design document.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Systems</h4>
        <ul class="notes__list">
          <li>Grid manager: topology, occupancy, distance cache</li>
          <li>Modular weapons: stats resolved from the equipped modules</li>
          <li>Per-bone segmented health</li>
          <li>StateTree AI, per-unit missions</li>
          <li>EQS generator over grid tiles</li>
          <li>Action points, turn phases, level progression</li>
        </ul>

        <h4 class="mono notes__h">Method</h4>
        <p class="notes__p">
          Every refactor starts with a short design document: goal, success criteria,
          decisions, what's out of scope. The team reads it, then we code.
        </p>
      </aside>
    </div>`,
      },
    },

    // ---------------------------------------------------------------- 03
    {
      id: "herodiade",
      n: "03",
      title: "Hérodiade",
      stack: "Unity · C#",
      year: { fr: "2026", en: "2026" },
      img: "assets/img/herodiade.jpg",
      fr: {
        list: "Jeu d'enquête pour le musée Fabre",
        preview: "Un jeu d'enquête sur borne autour d'un tableau de Simon Vouet, commandé par le musée Fabre de Montpellier.",
        sub: "Un jeu d'enquête autour d'un tableau de Simon Vouet, conçu pour le musée Fabre de Montpellier.",
        meta: [
          ["Cadre", "Projet d'école, commande"],
          ["Moteur", "Unity (URP)"],
          ["Langage", "C#"],
          ["Build", "30.10.2026"],
        ],
        body: `
    <div class="case__body case__body--img">
      <figure class="shot shot--portrait">
        <img src="assets/img/herodiade.jpg" alt="Simon Vouet, Hérodiade, huile sur toile, musée Fabre">
        <figcaption class="mono">Simon Vouet, <i>Hérodiade</i>. Musée Fabre, Montpellier.</figcaption>
      </figure>

      <div class="prose">
        <p>
          Le joueur remonte l'histoire du tableau&nbsp;: d'où il vient, comment il est arrivé au musée, ce qu'on apprend
          en l'étudiant en laboratoire. Le jeu tourne sur une borne, donc il doit tenir seul, sans personne à côté.
        </p>
        <p>
          Il est découpé en quatre niveaux&nbsp;: la bibliothèque, les archives, le laboratoire, puis le retour au tableau.
          Dans les archives, on manipule de vrais documents&nbsp;: une lettre de donation, l'inventaire du musée, un catalogue
          de vente, une note du conservateur. On les fait glisser, on les inspecte à la loupe.
        </p>
        <p>
          Côté code, j'ai mis en place&nbsp;:
        </p>
        <ul class="plain">
          <li>un <b>narrateur</b> piloté par événements&nbsp;: chaque réplique est un ScriptableObject lié à un type d'événement de jeu,
            les textes s'écrivent sans toucher au code&nbsp;;</li>
          <li>un <b>mode veille</b> pour la borne&nbsp;: sans interaction, le jeu affiche un écran d'attente et revient au menu&nbsp;;</li>
          <li>la <b>manipulation des documents</b> (glisser, inspecter, valider) et le menu de réglages.</li>
        </ul>
        <p>
          La contrainte qui a le plus compté&nbsp;: un visiteur de musée n'a jamais joué au jeu et reste quelques minutes.
          Chaque interaction devait se comprendre sans tutoriel.
        </p>
      </div>
    </div>`,
      },
      en: {
        list: "Investigation game for the Musée Fabre",
        preview: "A kiosk investigation game built around a painting by Simon Vouet, commissioned by the Musée Fabre in Montpellier.",
        sub: "An investigation game built around a painting by Simon Vouet, designed for the Musée Fabre in Montpellier.",
        meta: [
          ["Context", "School project, commission"],
          ["Engine", "Unity (URP)"],
          ["Language", "C#"],
          ["Build", "Oct 30, 2026"],
        ],
        body: `
    <div class="case__body case__body--img">
      <figure class="shot shot--portrait">
        <img src="assets/img/herodiade.jpg" alt="Simon Vouet, Herodias, oil on canvas, Musée Fabre">
        <figcaption class="mono">Simon Vouet, <i>Hérodiade</i>. Musée Fabre, Montpellier.</figcaption>
      </figure>

      <div class="prose">
        <p>
          The player traces the painting's history: where it came from, how it reached the museum, what we learn
          by studying it in the lab. The game runs on a kiosk, so it has to stand on its own, with nobody next to it.
        </p>
        <p>
          It is split into four levels: the library, the archives, the lab, then back to the painting.
          In the archives, you handle real documents: a donation letter, the museum's inventory, a sale catalogue,
          a curator's note. You drag them around and inspect them with a magnifying glass.
        </p>
        <p>
          On the code side, I built:
        </p>
        <ul class="plain">
          <li>an event-driven <b>narrator</b>: each line is a ScriptableObject tied to a game event type,
            so texts are written without touching the code;</li>
          <li>a kiosk <b>idle mode</b>: with no interaction, the game shows a waiting screen and returns to the menu;</li>
          <li><b>document handling</b> (drag, inspect, validate) and the settings menu.</li>
        </ul>
        <p>
          The constraint that mattered most: a museum visitor has never played the game and stays a few minutes.
          Every interaction had to be understandable without a tutorial.
        </p>
      </div>
    </div>`,
      },
    },

    // ---------------------------------------------------------------- 04
    {
      id: "cracalyze",
      n: "04",
      title: "Cracalyze",
      stack: "Python 3.11 · Conda · WSL",
      year: { fr: "Stage", en: "Internship" },
      img: null,
      fr: {
        list: "Stage, migration d'un pipeline scientifique",
        preview: "Migration d'un pipeline de bioinformatique de Python 2.7 vers 3.11, avec un correctif dans pyCRAC et des scripts de comparaison MD5 pour contrôler les résultats.",
        sub: "Stage à l'IGMM : migration d'un pipeline d'analyse de données de séquençage de Python 2.7 vers Python 3.11.",
        meta: [
          ["Cadre", "Stage, juin – juillet 2026"],
          ["Lieu", "IGMM, Institut de Génétique Moléculaire de Montpellier"],
          ["Langage", "Python 2.7 → 3.11"],
          ["Environnement", "WSL, Conda, VS Code"],
        ],
        body: `
    <figure class="diagram">
      <ol class="pipe pipe--5 mono" aria-label="Étapes du pipeline cracalyze">
        <li><b>FASTQ</b><span>lectures brutes du séquenceur</span></li>
        <li><b>Démultiplexage</b><span>un dossier par expérience</span></li>
        <li><b>Mapping</b><span>position sur le génome</span></li>
        <li><b>Normalisation</b><span>même nombre de lectures pour tous</span></li>
        <li><b>Peaks</b><span>sites de fixation des protéines</span></li>
      </ol>
      <figcaption class="mono">Ce que fait cracalyze&nbsp;: de millions de lectures brutes jusqu'aux endroits où une protéine s'est fixée sur l'ARN.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <p>
          Pas du jeu vidéo, mais le stage où j'ai le plus appris sur le code des autres. L'IGMM utilise un pipeline de
          bioinformatique, <code>cracalyze</code>, pour analyser des données issues de la technique CRAC, qui sert à repérer
          sur l'ARN les endroits précis où des protéines viennent se fixer. Il était écrit pour Python&nbsp;2.7, abandonné
          depuis janvier&nbsp;2020, et devenait de plus en plus difficile à faire tourner sur les machines actuelles.
          Ma mission&nbsp;: le migrer vers Python&nbsp;3.11.
        </p>
        <p>
          <strong>Ce que fait le pipeline.</strong> Le point de départ est un fichier FASTQ&nbsp;: des millions de courtes
          séquences de lettres, une par fragment d'ARN lu par le séquenceur. <code>cracalyze</code> les trie par expérience,
          les place sur le génome de référence, puis ramène chaque échantillon au même nombre de lectures (10&nbsp;millions
          par exemple) pour qu'on puisse les comparer. Enfin il cherche les <em>pics</em>&nbsp;: les endroits du génome où
          les lectures s'accumulent bien plus qu'ailleurs. C'est là qu'une protéine s'est fixée.
        </p>
        <p>
          <strong>Le tri repose sur une étiquette.</strong> Pour gagner du temps et de l'argent, plusieurs expériences passent
          ensemble dans le séquenceur. Chaque fragment porte donc une étiquette de 11&nbsp;lettres, lue au démultiplexage&nbsp;:
        </p>

        <figure class="diagram barcode">
          <div class="barcode__row mono" role="img" aria-label="Structure de l'étiquette : 5 lettres aléatoires, 3 lettres d'identification, AGC, puis le fragment d'ARN">
            <div class="bc bc--umi"><b>NNNNN</b><span>5 lettres aléatoires</span><em>repèrent les doublons de PCR</em></div>
            <div class="bc bc--id"><b>XXX</b><span>3 lettres</span><em>identifient l'expérience</em></div>
            <div class="bc bc--fix"><b>AGC</b><span>3 lettres fixes</span><em>accroche de l'adaptateur</em></div>
            <div class="bc bc--rest"><b>…</b><span>reste de la lecture</span><em>le fragment d'ARN</em></div>
          </div>
          <figcaption class="mono">Structure d'une lecture. L'adaptateur est un court brin synthétique qui rend le fragment lisible par le séquenceur.</figcaption>
        </figure>

        <p>
          C'est un tri postal&nbsp;: les 3 lettres d'identification disent dans quel dossier envoyer chaque lecture. Les 5 lettres
          aléatoires servent à ne pas compter dix fois un fragment qui a simplement été copié dix fois par la PCR, l'étape qui
          «&nbsp;photocopie&nbsp;» les fragments avant le séquençage.
        </p>
        <p>
          <strong>Le bug dans pyCRAC.</strong> <code>cracalyze</code> s'appuie sur <code>pyCRAC</code>, une bibliothèque utilisée
          par d'autres labos. Elle se disait compatible Python&nbsp;2.7 et 3.x, mais ne l'était qu'avec 2.7&nbsp;: elle mélangeait
          <code>bytes</code> et <code>str</code>, ce qui faisait apparaître des <code>b'…'</code> partout dans les fichiers de
          sortie, devenus illisibles. J'ai trouvé l'origine du problème, vérifié son effet sur les traitements, puis corrigé
          le code source pour le rendre compatible avec Python&nbsp;3.11. Sans ça, la seule solution était de rester sur Python&nbsp;2.7.
        </p>
        <p>
          <strong>Comment je vérifiais que rien ne cassait.</strong> Impossible de juger à l'œil des dossiers de résultats entiers.
          J'ai écrit deux scripts&nbsp;: l'un compare deux dossiers fichier par fichier, avec le détail pour chaque type de fichier&nbsp;;
          l'autre calcule la somme MD5 de chaque fichier pour savoir si deux dossiers sont identiques au bit près.
          (J'avais d'abord essayé de zipper chaque dossier pour ne comparer qu'un fichier. Mais le zip ajoute ses propres
          informations&nbsp;: il annonçait des différences qui n'existaient pas.) Le schéma en bas de la page résume le principe.
        </p>

        <p>
          <strong>Où ça en est.</strong> La pipeline tourne de bout en bout sous Python&nbsp;3.11. Avec Python&nbsp;2.7, les sorties sont
          identiques au bit près entre ma machine et le serveur du labo. Entre 2.7 et 3.11, elles sont très proches mais pas encore
          strictement identiques. On soupçonne la division, qui ne se comporte pas pareil dans les deux versions
          (<code>/</code> contre <code>//</code>), mais c'est à analyser. J'ai documenté les difficultés rencontrées et expliqué
          mes modifications au bioinformaticien qui reprend le projet.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Ce que j'ai fait</h4>
        <ul class="notes__list">
          <li>Environnement reconstruit sous WSL et Conda, avec VS Code</li>
          <li>Migration Python&nbsp;2.7 → 3.11&nbsp;: <code>print</code>, <code>bytes</code> / <code>str</code>, divisions</li>
          <li>Correctif de <code>pyCRAC</code> pour Python&nbsp;3.11</li>
          <li>Scripts de comparaison de résultats&nbsp;: fichier par fichier et MD5</li>
          <li>Tests sur un FASTQ réduit avec <code>seqtk</code></li>
          <li>Problèmes d'environnement&nbsp;: droits d'accès, dépendances, <code>wigToBigWig</code></li>
          <li>Documentation pour la reprise du projet</li>
        </ul>

        <h4 class="mono notes__h">En chiffres</h4>
        <dl class="figures">
          <div><dt>13&nbsp;Go</dt><dd>le plus petit FASTQ disponible, réduit pour que chaque test ne prenne pas des heures</dd></div>
          <div><dt>2.7 → 3.11</dt><dd>version de Python visée par la migration</dd></div>
          <div><dt>2</dt><dd>scripts de comparaison des résultats</dd></div>
        </dl>
      </aside>
    </div>

    <figure class="diagram">
          <div class="flow mono" role="img" aria-label="Même FASTQ passé dans cracalyze sous Python 2.7 et sous Python 3.11, puis comparaison des dossiers de sortie par MD5">
            <div class="flow__c flow__in"><b>FASTQ réduit</b><span>seqtk, mêmes proportions que l'original</span></div>
            <div class="flow__c flow__run27"><b>cracalyze</b><span>Python 2.7 (référence)</span></div>
            <div class="flow__c flow__out27"><b>Dossier de sortie</b><span>tous les fichiers produits</span></div>
            <div class="flow__c flow__run311"><b>cracalyze</b><span>Python 3.11 (migré)</span></div>
            <div class="flow__c flow__out311"><b>Dossier de sortie</b><span>tous les fichiers produits</span></div>
            <div class="flow__c flow__cmp"><b>Comparaison</b><span>MD5 de chaque fichier, détail par type de fichier</span></div>
          </div>
          <figcaption class="mono">Même entrée, deux versions de Python, puis comparaison des sorties fichier par fichier.</figcaption>
        </figure>

    <div class="lessons">
      <h4 class="mono notes__h">Problèmes rencontrés</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q">Des <code>b'…'</code> dans tous les fichiers.</p>
          <p>pyCRAC annonçait Python&nbsp;3 mais mélangeait <code>bytes</code> et <code>str</code>. J'ai corrigé son code source
          plutôt que de contourner le problème dans cracalyze.</p>
        </div>
        <div>
          <p class="lessons__q">Un environnement Conda impossible à cloner.</p>
          <p>Le fichier <code>.yml</code> ne listait pas ce qui avait été installé avec pip. J'ai donc déplacé tout le dossier
          de l'environnement vers ma machine, puis je l'ai placé avec <code>sudo</code> pour que cracalyze ait les droits nécessaires.</p>
        </div>
        <div>
          <p class="lessons__q">Une matinée perdue sur <code>wigToBigWig</code>.</p>
          <p>L'outil refusait de fonctionner. La cause&nbsp;: deux scripts manquaient à l'endroit attendu. Il a suffi de les copier
          au bon endroit, mais il m'a fallu la matinée pour le comprendre.</p>
        </div>
      </div>
    </div>`,
      },
      en: {
        list: "Internship, scientific pipeline migration",
        preview: "Migration of a bioinformatics pipeline from Python 2.7 to 3.11, with a fix in pyCRAC and MD5 comparison scripts to check the results.",
        sub: "Internship at the IGMM: migrating a sequencing-data analysis pipeline from Python 2.7 to Python 3.11.",
        meta: [
          ["Context", "Internship, June – July 2026"],
          ["Place", "IGMM, Montpellier Institute of Molecular Genetics"],
          ["Language", "Python 2.7 → 3.11"],
          ["Environment", "WSL, Conda, VS Code"],
        ],
        body: `
    <figure class="diagram">
      <ol class="pipe pipe--5 mono" aria-label="Steps of the cracalyze pipeline">
        <li><b>FASTQ</b><span>raw reads from the sequencer</span></li>
        <li><b>Demultiplexing</b><span>one folder per experiment</span></li>
        <li><b>Mapping</b><span>position on the genome</span></li>
        <li><b>Normalization</b><span>same number of reads for all</span></li>
        <li><b>Peaks</b><span>protein binding sites</span></li>
      </ol>
      <figcaption class="mono">What cracalyze does: from millions of raw reads to the places where a protein attached to the RNA.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <p>
          Not game development, but the internship where I learned the most about other people's code. The IGMM uses a
          bioinformatics pipeline, <code>cracalyze</code>, to analyze data from the CRAC technique, which finds the exact
          spots on RNA where proteins attach. It was written for Python&nbsp;2.7, unmaintained since January&nbsp;2020, and was
          getting harder and harder to run on current machines. My mission: migrate it to Python&nbsp;3.11.
        </p>
        <p>
          <strong>What the pipeline does.</strong> The starting point is a FASTQ file: millions of short sequences of letters,
          one per RNA fragment read by the sequencer. <code>cracalyze</code> sorts them by experiment, places them on the
          reference genome, then brings every sample down to the same number of reads (10&nbsp;million, for example) so they
          can be compared. Finally it looks for <em>peaks</em>: places on the genome where reads pile up far more than
          elsewhere. That's where a protein attached.
        </p>
        <p>
          <strong>Sorting relies on a tag.</strong> To save time and money, several experiments go through the sequencer
          together. Each fragment therefore carries an 11-letter tag, read during demultiplexing:
        </p>

        <figure class="diagram barcode">
          <div class="barcode__row mono" role="img" aria-label="Tag structure: 5 random letters, 3 identification letters, AGC, then the RNA fragment">
            <div class="bc bc--umi"><b>NNNNN</b><span>5 random letters</span><em>spot PCR duplicates</em></div>
            <div class="bc bc--id"><b>XXX</b><span>3 letters</span><em>identify the experiment</em></div>
            <div class="bc bc--fix"><b>AGC</b><span>3 fixed letters</span><em>adapter attachment point</em></div>
            <div class="bc bc--rest"><b>…</b><span>rest of the read</span><em>the RNA fragment</em></div>
          </div>
          <figcaption class="mono">Structure of a read. The adapter is a short synthetic strand that makes the fragment readable by the sequencer.</figcaption>
        </figure>

        <p>
          It works like mail sorting: the 3 identification letters say which folder each read goes to. The 5 random letters
          prevent counting a fragment ten times when it was simply copied ten times by PCR, the step that
          “photocopies” fragments before sequencing.
        </p>
        <p>
          <strong>The bug in pyCRAC.</strong> <code>cracalyze</code> relies on <code>pyCRAC</code>, a library used by other labs.
          It claimed to support Python&nbsp;2.7 and 3.x, but only worked with 2.7: it mixed <code>bytes</code> and
          <code>str</code>, which put <code>b'…'</code> all over the output files, making them unreadable. I found the
          origin of the problem, checked its effect on the processing, then fixed the source code to make it compatible with
          Python&nbsp;3.11. Without that, the only option was to stay on Python&nbsp;2.7.
        </p>
        <p>
          <strong>How I checked that nothing broke.</strong> You can't judge whole results folders by eye. I wrote two scripts:
          one compares two folders file by file, with details for each file type; the other computes the MD5 sum of every
          file to tell whether two folders are identical down to the bit. (I first tried zipping each folder to compare a single
          file. But zip adds its own information: it reported differences that didn't exist.) The diagram at the bottom of the page sums up the principle.
        </p>

        <p>
          <strong>Where it stands.</strong> The pipeline runs end to end under Python&nbsp;3.11. With Python&nbsp;2.7, outputs are
          identical down to the bit between my machine and the lab's server. Between 2.7 and 3.11, they are very close but
          not strictly identical yet. We suspect division, which doesn't behave the same in the two versions
          (<code>/</code> versus <code>//</code>), but that remains to be analyzed. I documented the difficulties I ran into
          and walked the bioinformatician taking over the project through my changes.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">What I did</h4>
        <ul class="notes__list">
          <li>Environment rebuilt under WSL and Conda, with VS Code</li>
          <li>Python&nbsp;2.7 → 3.11 migration: <code>print</code>, <code>bytes</code> / <code>str</code>, divisions</li>
          <li><code>pyCRAC</code> fix for Python&nbsp;3.11</li>
          <li>Result comparison scripts: file by file and MD5</li>
          <li>Tests on a reduced FASTQ with <code>seqtk</code></li>
          <li>Environment issues: permissions, dependencies, <code>wigToBigWig</code></li>
          <li>Documentation for the handover</li>
        </ul>

        <h4 class="mono notes__h">In numbers</h4>
        <dl class="figures">
          <div><dt>13&nbsp;GB</dt><dd>the smallest FASTQ available, reduced so each test doesn't take hours</dd></div>
          <div><dt>2.7 → 3.11</dt><dd>Python version targeted by the migration</dd></div>
          <div><dt>2</dt><dd>result comparison scripts</dd></div>
        </dl>
      </aside>
    </div>

    <figure class="diagram">
          <div class="flow mono" role="img" aria-label="The same FASTQ run through cracalyze under Python 2.7 and Python 3.11, then the output folders compared with MD5">
            <div class="flow__c flow__in"><b>Reduced FASTQ</b><span>seqtk, same proportions as the original</span></div>
            <div class="flow__c flow__run27"><b>cracalyze</b><span>Python 2.7 (reference)</span></div>
            <div class="flow__c flow__out27"><b>Output folder</b><span>every file produced</span></div>
            <div class="flow__c flow__run311"><b>cracalyze</b><span>Python 3.11 (migrated)</span></div>
            <div class="flow__c flow__out311"><b>Output folder</b><span>every file produced</span></div>
            <div class="flow__c flow__cmp"><b>Comparison</b><span>MD5 of each file, details per file type</span></div>
          </div>
          <figcaption class="mono">Same input, two Python versions, then the outputs compared file by file.</figcaption>
        </figure>

    <div class="lessons">
      <h4 class="mono notes__h">Problems I ran into</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q"><code>b'…'</code> in every file.</p>
          <p>pyCRAC advertised Python&nbsp;3 support but mixed <code>bytes</code> and <code>str</code>. I fixed its source code
          rather than working around the problem inside cracalyze.</p>
        </div>
        <div>
          <p class="lessons__q">A Conda environment that couldn't be cloned.</p>
          <p>The <code>.yml</code> file didn't list what had been installed with pip. So I moved the whole environment folder
          to my machine, then placed it using <code>sudo</code> so cracalyze had the permissions it needed.</p>
        </div>
        <div>
          <p class="lessons__q">A lost morning on <code>wigToBigWig</code>.</p>
          <p>The tool refused to work. The cause: two scripts were missing from the expected location. Copying them to the right
          place was enough, but it took me the whole morning to understand that.</p>
        </div>
      </div>
    </div>`,
      },
    },

    // ---------------------------------------------------------------- 05
    {
      id: "laposte",
      n: "05",
      title: "Serious Game La Poste",
      stack: "VR · Serious game",
      year: { fr: "2026", en: "2026" },
      img: "assets/img/presse-midi-libre.jpg",
      imgPos: "center top", // cadrage de l'image dans la carte d'aperçu
      fr: {
        list: "Formation en réalité virtuelle pour La Poste",
        preview: "Une formation en réalité virtuelle pour les agents de La Poste (Mauguio) : 24 étudiants, plus de cinq mois, deux modules immersifs.",
        sub: "Un outil de formation en réalité virtuelle pour les agents de la Plateforme industrielle courrier de Mauguio, réalisé avec l'école Objectif 3D.",
        meta: [
          ["Cadre", "Projet d'école, commande"],
          ["Client", "La Poste, plateforme courrier de Mauguio"],
          ["Équipe", "24 étudiants d'Objectif 3D"],
          ["Support", "Casque de réalité virtuelle"],
        ],
        body: `
    <figure class="shot">
      <video controls preload="metadata" playsinline src="assets/img/LaPosteSeriousGame.mp4#t=0.1">
        Votre navigateur ne peut pas lire cette vidéo. <a href="assets/img/LaPosteSeriousGame.mp4">Télécharger la vidéo</a>.
      </video>
      <figcaption class="mono">Extrait vidéo du serious game.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <!-- À COMPLÉTER : ton rôle, le moteur utilisé, ce que tu as programmé -->
        <p>
          La plateforme courrier de La Poste à Mauguio voulait compléter ses formations théoriques par des mises en situation
          plus concrètes. Pendant plus de cinq mois, 24 étudiants d'Objectif 3D ont créé pour elle deux modules immersifs
          destinés aux agents.
        </p>
        <p>
          Avec un casque de réalité virtuelle, l'utilisateur évolue dans une reproduction fidèle de son environnement de travail&nbsp;:
          machines de tri, véhicules, équipements et zones de circulation. Quiz, exercices et scénarios de sécurité permettent
          de se former de manière progressive et interactive, notamment sur les consignes de sécurité au travail.
        </p>
        <p>
          Le projet a été présenté à La Poste le 27&nbsp;mars&nbsp;2026 et relayé par Midi Libre. Cette première collaboration
          entre La Poste et l'école pourrait servir de modèle à d'autres plateformes courrier en France.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">En chiffres</h4>
        <dl class="figures">
          <div><dt>24</dt><dd>étudiants sur le projet</dd></div>
          <div><dt>5+&nbsp;mois</dt><dd>de développement</dd></div>
          <div><dt>2</dt><dd>modules immersifs</dd></div>
        </dl>

        <figure class="shot shot--press">
          <img src="assets/img/presse-midi-libre.jpg" alt="Article de Midi Libre : La Poste innove avec une formation en réalité virtuelle" loading="lazy">
          <figcaption class="mono">Midi Libre, «&nbsp;La Poste innove avec une formation en réalité virtuelle&nbsp;».</figcaption>
        </figure>
      </aside>
    </div>`,
      },
      en: {
        list: "Virtual reality training for La Poste",
        preview: "A virtual reality training tool for La Poste agents (Mauguio): 24 students, over five months, two immersive modules.",
        sub: "A virtual reality training tool for the agents of La Poste's Mauguio mail processing hub, built with the school Objectif 3D.",
        meta: [
          ["Context", "School project, commission"],
          ["Client", "La Poste, Mauguio mail hub"],
          ["Team", "24 Objectif 3D students"],
          ["Platform", "Virtual reality headset"],
        ],
        body: `
    <figure class="shot">
      <video controls preload="metadata" playsinline src="assets/img/LaPosteSeriousGame.mp4#t=0.1">
        Your browser can't play this video. <a href="assets/img/LaPosteSeriousGame.mp4">Download the video</a>.
      </video>
      <figcaption class="mono">Video excerpt of the serious game.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <!-- À COMPLÉTER : ton rôle, le moteur utilisé, ce que tu as programmé -->
        <p>
          La Poste's mail hub in Mauguio wanted to complement its theoretical training with more concrete, hands-on scenarios.
          For over five months, 24 students from Objectif 3D built two immersive modules for its agents.
        </p>
        <p>
          With a virtual reality headset, the user moves through a faithful reproduction of their workplace:
          sorting machines, vehicles, equipment and traffic areas. Quizzes, exercises and safety scenarios let them train
          progressively and interactively, especially on workplace safety rules.
        </p>
        <p>
          The project was presented to La Poste on March 27, 2026 and covered by the newspaper Midi Libre. This first collaboration
          between La Poste and the school could serve as a model for other mail hubs in France.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">In numbers</h4>
        <dl class="figures">
          <div><dt>24</dt><dd>students on the project</dd></div>
          <div><dt>5+&nbsp;months</dt><dd>of development</dd></div>
          <div><dt>2</dt><dd>immersive modules</dd></div>
        </dl>

        <figure class="shot shot--press">
          <img src="assets/img/presse-midi-libre.jpg" alt="Midi Libre newspaper article: La Poste innovates with virtual reality training" loading="lazy">
          <figcaption class="mono">Midi Libre, “La Poste innove avec une formation en réalité virtuelle” (in French).</figcaption>
        </figure>
      </aside>
    </div>`,
      },
    },

    // ---------------------------------------------------------------- 06
    {
      id: "bamphy",
      n: "06",
      title: "Bamphy",
      stack: "UE 5 · C++",
      year: { fr: "2025", en: "2025" },
      img: "assets/img/bamphy-preview.jpg",
      fr: {
        list: "Jeu de puzzles 3D, projet d'école",
        preview: "Un jeu de puzzles en 3D sous Unreal Engine 5, fait en équipe. J'y ai programmé des mécaniques de gameplay et des outils.",
        sub: "Jeu de puzzles en 3D sous Unreal Engine 5, où le joueur utilise des pouvoirs pour avancer. Projet d'école, en équipe.",
        meta: [
          ["Cadre", "Projet d'école"],
          ["Équipe", "5 à 10 personnes"],
          ["Moteur", "Unreal Engine 5"],
          ["Langage", "C++"],
        ],
        body: `
    <figure class="shot">
      <video controls preload="metadata" playsinline poster="assets/img/bamphy-poster.jpg" src="assets/img/bamphy.mp4">
        Votre navigateur ne peut pas lire cette vidéo. <a href="assets/img/bamphy.mp4">Télécharger la vidéo</a>.
      </video>
      <figcaption class="mono">Bande-annonce de Bamphy.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <!-- À COMPLÉTER : le principe du jeu, le détail des mécaniques et des outils que tu as programmés, lien éventuel -->
        <p>
          Bamphy est un jeu de puzzles en 3D, réalisé en équipe dans le cadre de l'école. Le joueur explore un monde de temples
          et résout plusieurs énigmes.
        </p>
        <p>
          Mon travail a porté sur les <strong>mécaniques de gameplay</strong> et sur des <strong>outils et systèmes</strong>
          en C++. Les mécaniques sont celles que montre la deuxième vidéo, en bas de page&nbsp;: le joueur choisit un pouvoir
          avec la molette de la souris, puis l'utilise avec le clic gauche, par exemple pour déplacer des objets à distance
          avec la télékinésie.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Mon rôle</h4>
        <ul class="notes__list">
          <li>Mécaniques de gameplay</li>
          <li>Outils et systèmes</li>
        </ul>

        <h4 class="mono notes__h">Pouvoirs visibles dans la vidéo</h4>
        <ul class="notes__list">
          <li>Télékinésie</li>
          <li>Téléportation</li>
          <li>Croissance</li>
        </ul>
      </aside>
    </div>

    <figure class="shot">
      <video controls preload="metadata" playsinline poster="assets/img/bamphy-mechanics-poster.jpg" src="assets/img/bamphy-mechanics.mp4">
        Votre navigateur ne peut pas lire cette vidéo. <a href="assets/img/bamphy-mechanics.mp4">Télécharger la vidéo</a>.
      </video>
      <figcaption class="mono">Les mécaniques en jeu&nbsp;: choix du pouvoir à la molette, utilisation au clic gauche.</figcaption>
    </figure>`,
      },
      en: {
        list: "3D puzzle game, school project",
        preview: "A 3D puzzle game in Unreal Engine 5, made in a team. I programmed gameplay mechanics and tools.",
        sub: "A 3D puzzle game in Unreal Engine 5, where the player uses powers to progress. School project, in a team.",
        meta: [
          ["Context", "School project"],
          ["Team", "5 to 10 people"],
          ["Engine", "Unreal Engine 5"],
          ["Language", "C++"],
        ],
        body: `
    <figure class="shot">
      <video controls preload="metadata" playsinline poster="assets/img/bamphy-poster.jpg" src="assets/img/bamphy.mp4">
        Your browser can't play this video. <a href="assets/img/bamphy.mp4">Download the video</a>.
      </video>
      <figcaption class="mono">Bamphy trailer.</figcaption>
    </figure>

    <div class="case__body">
      <div class="prose">
        <!-- À COMPLÉTER : le principe du jeu, le détail des mécaniques et des outils que tu as programmés, lien éventuel -->
        <p>
          Bamphy is a 3D puzzle game, made in a team as a school project. The player explores a world of temples
          and solves several puzzles.
        </p>
        <p>
          My work covered <strong>gameplay mechanics</strong> and <strong>tools and systems</strong> in C++.
          The mechanics are the ones shown in the second video, at the bottom of the page: the player picks a power
          with the mouse wheel, then uses it with the left mouse button, for example to move objects from a distance
          with telekinesis.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">My role</h4>
        <ul class="notes__list">
          <li>Gameplay mechanics</li>
          <li>Tools and systems</li>
        </ul>

        <h4 class="mono notes__h">Powers seen in the video</h4>
        <ul class="notes__list">
          <li>Telekinesis</li>
          <li>Teleport</li>
          <li>Growth</li>
        </ul>
      </aside>
    </div>

    <figure class="shot">
      <video controls preload="metadata" playsinline poster="assets/img/bamphy-mechanics-poster.jpg" src="assets/img/bamphy-mechanics.mp4">
        Your browser can't play this video. <a href="assets/img/bamphy-mechanics.mp4">Download the video</a>.
      </video>
      <figcaption class="mono">The mechanics in game: pick a power with the mouse wheel, use it with the left mouse button.</figcaption>
    </figure>`,
      },
    },
  ],
};
