// Page complète du projet KrampusEngine (FR + EN). Chargé avant content.js, qui utilise KRAMPUS_BODY.

// ---------- Images et vidéos de la page ----------
// Laisse "" tant que tu n'as pas le fichier : la page affiche un emplacement réservé (rayé, « Capture à venir »).
// Mets le chemin d'un fichier de assets/img/ : l'image (.png, .jpg, .gif) ou la vidéo (.mp4, .webm) s'affiche à la place.
const KRAMPUS_MEDIA = {
  editor: "assets/img/Editor.png",
  editorTour: "",   // vidéo : placer un acteur, le gizmo, l'inspecteur, Play puis Stop
  hotReload: "",    // vidéo : modifier un script C++, F7, la scène revient telle quelle
  input: "assets/img/Input.gif",
  events: "",       // capture : inspecteur, liste d'événements d'un bouton (cible, composant, fonction)
  player: "",       // GIF : PlayerMovementComponent (pentes, marches, saut mural, dash)
  projectile: "",   // GIF : projectiles qui rebondissent + trajectoire prédite (useDebug)
  vehicle: "",      // GIF : véhicule vue de côté sur des bosses, suspensions visibles
  navigation: "",   // capture : navmesh affiché (touche P) + chemin d'un agent
  lights: "",       // capture : lumières 2D et ombres
  postfx: "",       // capture : effets de post-process (CRT, vignette...)
  network: "",      // vidéo : deux fenêtres connectées, acteurs répliqués
  animEditor: "",   // capture : éditeur d'animation (planche, timeline)
  package: "",      // capture : dossier exporté + le jeu lancé
  console: "assets/img/ConsoleLog.png",
  crash: "",        // capture : fenêtre du rapport de crash
};

// Une carte : le média (le fichier s'il est renseigné, sinon l'emplacement réservé) + un titre + une phrase.
const KRAMPUS_CARD = ([key, title, text, alt], soon) => {
  const src = KRAMPUS_MEDIA[key];
  let media;
  if (!src) media = `<div class="ph mono" role="img" aria-label="${alt}"><b>${soon}</b><span>${alt}</span></div>`;
  else if (/\.(mp4|webm)$/i.test(src)) media = `<video controls muted loop playsinline preload="metadata" src="${src}" aria-label="${alt}"></video>`;
  else media = `<img src="${src}" alt="${alt}" loading="lazy">`;
  return `<figure class="card">${media}<figcaption><b class="card__t">${title}</b><span>${text}</span></figcaption></figure>`;
};

// Les cartes visibles d'emblée : [média, titre, une phrase, description du média]
const KRAMPUS_CARDS = {
  fr: [
    ["editorTour", "Construire une scène", "Placer, régler, Play. Stop remet la scène exactement comme avant.", "Vidéo : placer un acteur, le déplacer au gizmo, régler l'inspecteur, puis Play et Stop"],
    ["hotReload", "Rechargement à chaud", "Modifier le C++, appuyer sur F7&nbsp;: le code est rechargé, la scène reste ouverte.", "Vidéo : modifier un script C++, appuyer sur F7, la scène revient avec le nouveau comportement"],
    ["animEditor", "Éditeur d'animation", "Choisir les images d'une planche à la souris, aperçu en direct.", "Capture : l'éditeur d'animation, avec la planche de sprites et la timeline"],
    ["input", "Entrées sans code", "Clavier, souris et manette branchés depuis l'inspecteur.", "Démo du système d'entrées : déplacement ZQSD et tir à la souris"],
    ["events", "Listes d'événements", "Un clic ou une collision appelle la fonction choisie, sur l'acteur choisi.", "Capture : l'inspecteur d'un bouton, avec sa liste d'événements (cible, composant, fonction, argument)"],
    ["player", "Personnage", "Pentes, marches, saut mural, dash&nbsp;: le CharacterMovement d'Unreal en 2D.", "GIF : un personnage qui monte des pentes et des marches, saute contre un mur et fait un dash"],
    ["projectile", "Projectiles", "Rebonds, tête chercheuse, trajectoire prédite.", "GIF : des projectiles qui rebondissent, avec leur trajectoire prédite affichée"],
    ["vehicle", "Véhicules", "Suspensions, boîte automatique, ABS, en vue de côté ou de dessus.", "GIF : un véhicule vu de côté qui roule sur des bosses, suspensions visibles"],
    ["navigation", "Navigation", "Maillage de navigation fait maison&nbsp;: les agents contournent les obstacles.", "Capture : le maillage de navigation affiché dans l'éditeur, avec le chemin d'un agent autour des obstacles"],
    ["lights", "Lumières 2D", "Spots et lumières ponctuelles, avec ombres projetées.", "Capture : une scène sombre éclairée par des lumières 2D, avec des ombres projetées"],
    ["postfx", "Post-process", "CRT, vignette, flou… placés avec un volume, comme dans Unreal.", "Capture : la même scène avec des effets de post-process (CRT, vignette, aberration chromatique)"],
    ["network", "Multijoueur", "LAN et Steam. Un composant suffit pour répliquer un acteur.", "Vidéo : deux fenêtres du jeu connectées, les acteurs se déplacent dans les deux"],
    ["package", "Export", "Une commande donne un dossier qui tourne sur n'importe quel PC.", "Capture : le dossier exporté (lanceur, Binaries, Content avec le .pak) et le jeu lancé"],
    ["console", "Console", "Logs filtrés par catégorie et par niveau.", "Console de l'éditeur avec filtres de verbosité"],
    ["crash", "Rapport de crash", "Pile d'appels, minidump, et la scène en cours sauvegardée.", "Capture : la fenêtre du rapport de crash (ouvrir le dossier, redémarrer, fermer)"],
  ],
  en: [
    ["editorTour", "Build a scene", "Place, tweak, Play. Stop puts the scene back exactly as it was.", "Video: place an actor, move it with the gizmo, tweak the inspector, then Play and Stop"],
    ["hotReload", "Hot reload", "Edit the C++, press F7: the code reloads, the scene stays open.", "Video: edit a C++ script, press F7, the scene comes back with the new behavior"],
    ["animEditor", "Animation editor", "Pick the frames of a sprite sheet with the mouse, live preview.", "Screenshot: the animation editor, with the sprite sheet and the timeline"],
    ["input", "Inputs without code", "Keyboard, mouse and gamepad bound from the inspector.", "Input system demo: WASD movement and mouse shooting"],
    ["events", "Event lists", "A click or a collision calls the chosen function on the chosen actor.", "Screenshot: a button's inspector, with its event list (target, component, function, argument)"],
    ["player", "Character", "Slopes, steps, wall jump, dash: Unreal's CharacterMovement in 2D.", "GIF: a character climbing slopes and steps, wall jumping and dashing"],
    ["projectile", "Projectiles", "Bounces, homing, predicted path.", "GIF: bouncing projectiles, with their predicted path drawn"],
    ["vehicle", "Vehicles", "Suspensions, automatic gearbox, ABS, side or top-down view.", "GIF: a side-view vehicle driving over bumps, suspensions visible"],
    ["navigation", "Navigation", "Home-made navigation mesh: agents walk around obstacles.", "Screenshot: the navigation mesh shown in the editor, with an agent's path around obstacles"],
    ["lights", "2D lights", "Spotlights and point lights, with cast shadows.", "Screenshot: a dark scene lit by 2D lights, with cast shadows"],
    ["postfx", "Post-process", "CRT, vignette, blur… placed with a volume, like in Unreal.", "Screenshot: the same scene with post-process effects (CRT, vignette, chromatic aberration)"],
    ["network", "Multiplayer", "LAN and Steam. One component replicates an actor.", "Video: two game windows connected, actors moving in both"],
    ["package", "Export", "One command gives a folder that runs on any PC.", "Screenshot: the exported folder (launcher, Binaries, Content with the .pak) and the game running"],
    ["console", "Console", "Logs filtered by category and level.", "Editor console with verbosity filters"],
    ["crash", "Crash report", "Call stack, minidump, and the current scene saved.", "Screenshot: the crash report window (open folder, restart, close)"],
  ],
};

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

const GITHUB_KRAMPUS = "https://github.com/Oronte/KrampusEngine";

// Le haut de la page (court), puis l'ouverture du bloc « En savoir plus » refermé à la fin de KRAMPUS_BODY.
const KRAMPUS_TOP = {
  fr: `
    <div class="pitch">
      <p>Un moteur de jeu 2D en C++ avec son éditeur, sur le modèle d'Unreal&nbsp;: on construit le niveau dans l'éditeur,
      on écrit le gameplay en C++, on recharge à chaud avec <kbd>F7</kbd>, et on exporte un jeu qui tourne sur n'importe quel PC.</p>
      <a class="btn mono" href="${GITHUB_KRAMPUS}" rel="noopener"><span>Voir sur GitHub</span><small>C++20</small></a>
    </div>

    <div class="gallery">
      ${KRAMPUS_CARDS.fr.map((c) => KRAMPUS_CARD(c, "Capture à venir")).join("\n      ")}
    </div>

    <details class="more">
      <summary class="btn mono"><span class="more__open">En savoir plus</span><span class="more__close">Réduire</span><small>architecture, 9 parties, problèmes rencontrés</small></summary>
      <div class="more__body">`,
  en: `
    <div class="pitch">
      <p>A 2D game engine in C++ with its editor, modeled on Unreal: build the level in the editor, write gameplay in C++,
      hot reload with <kbd>F7</kbd>, and export a game that runs on any PC.</p>
      <a class="btn mono" href="${GITHUB_KRAMPUS}" rel="noopener"><span>View on GitHub</span><small>C++20</small></a>
    </div>

    <div class="gallery">
      ${KRAMPUS_CARDS.en.map((c) => KRAMPUS_CARD(c, "Capture coming soon")).join("\n      ")}
    </div>

    <details class="more">
      <summary class="btn mono"><span class="more__open">Learn more</span><span class="more__close">Show less</span><small>architecture, 9 parts, problems I ran into</small></summary>
      <div class="more__body">`,
};

const KRAMPUS_BODY = {
  // ====================================================================== FR
  fr: `
    <figure class="shot">
      <img src="${KRAMPUS_MEDIA.editor}" alt="L'éditeur de KrampusEngine : hiérarchie, viewport, explorateur de contenu et console" width="1600" height="900">
      <figcaption class="mono">L'éditeur. Viewport, hiérarchie, inspecteur, contenu, console. Tout est fait avec Dear ImGui.</figcaption>
    </figure>

    <dl class="stats">
      <div><dt>~51&nbsp;000</dt><dd>lignes de C++ (38&nbsp;k moteur, 13&nbsp;k éditeur)</dd></div>
      <div><dt>146</dt><dd>commits depuis novembre&nbsp;2025</dd></div>
      <div><dt>0</dt><dd>ligne de code générée&nbsp;: réflexion par macros</dd></div>
      <div><dt>1</dt><dd>commande pour exporter un jeu jouable partout</dd></div>
    </dl>

${KRAMPUS_TOP.fr}

    <div class="case__body">
      <div class="prose">
        <p>
          Je voulais comprendre ce qu'il y a sous un moteur commercial. Alors j'en ai écrit un, couche par couche&nbsp;:
          boucle de jeu, acteurs et composants, réflexion, format de scène, physique, rendu, réseau, et l'éditeur par-dessus.
        </p>
        <p>
          Mon modèle, c'est <strong>Unreal Engine</strong>. J'en reprends les idées qui m'ont le plus servi en cours
          (acteurs et composants, composants de déplacement, gameplay tags, rechargement à chaud du C++) et je les ramène
          en 2D. Le but&nbsp;: qu'un game designer puisse construire et régler un niveau dans l'éditeur, et que le programmeur
          n'écrive que le gameplay.
        </p>
        <p>
          Le flux de travail&nbsp;: on place les acteurs dans l'éditeur, on écrit le gameplay en C++, on appuie sur <kbd>F7</kbd>.
          Le module de jeu est recompilé et rechargé sans perdre la scène en cours. <em>Play</em> lance la scène,
          <em>Stop</em> la remet exactement comme avant. Quand le jeu est prêt, une commande produit un dossier qui tourne
          sur n'importe quel PC Windows.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Technologies</h4>
        <ul class="notes__list">
          <li>C++20, Visual Studio 2026, CMake</li>
          <li>SFML&nbsp;3 (fenêtre, rendu, audio, sockets)</li>
          <li>box2d&nbsp;3.1 (physique)</li>
          <li>Dear ImGui, mode docking (éditeur)</li>
          <li>Steamworks (multijoueur en ligne)</li>
        </ul>
      </aside>
    </div>

    <figure class="diagram">
      <div class="arch mono" role="img" aria-label="Architecture : l'éditeur est un exécutable hôte qui charge EditorModule.dll ; le jeu exporté est KrampusGame.exe avec un fichier .pak ; les deux contiennent la bibliothèque Engine et le code de jeu Game">
        <p class="arch__l">Éditeur</p>
        <div class="arch__c"><b>Krampus Engine.exe</b><span>hôte&nbsp;: fenêtre, boucle, charge la DLL</span></div>
        <div class="arch__c arch__c--hot"><b>EditorModule.dll</b><span>Engine + Game + outils ImGui · rechargée à chaud</span></div>
        <p class="arch__l">Jeu exporté</p>
        <div class="arch__c"><b>KrampusGame.exe</b><span>Engine + Game, SFML statique, sans éditeur</span></div>
        <div class="arch__c"><b>&lt;Jeu&gt;.pak</b><span>tout le contenu et les réglages dans un fichier</span></div>
        <p class="arch__l">Code commun</p>
        <div class="arch__c arch__c--ink"><b>Engine</b><span>bibliothèque statique · aucune ligne d'éditeur ni d'ImGui</span></div>
        <div class="arch__c arch__c--ink"><b>Game</b><span>les scripts du jeu, liés dans les deux exécutables</span></div>
      </div>
      <figcaption class="mono">Le même moteur et le même code de jeu, chargés par l'éditeur (en DLL rechargeable) ou par le jeu exporté.</figcaption>
    </figure>

    <!-- ------------------------------------------------------------ 01 éditeur -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">01</span><h2 class="part__t">L'éditeur</h2><span class="part__k mono">Dear ImGui · docking</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            L'éditeur est une couche posée sur le moteur&nbsp;: le moteur ne sait pas qu'il existe. On y retrouve ce qu'on attend
            d'un éditeur de moteur&nbsp;: hiérarchie des acteurs et des widgets du HUD (glisser une ligne sur une autre pour
            attacher), inspecteur des propriétés réfléchies, viewport avec gizmo (déplacement, rotation, échelle), explorateur
            de contenu avec miniatures, console filtrable.
          </p>
          <p>
            <strong>Play et Stop.</strong> Au moment du Play, la scène est sauvegardée dans un instantané&nbsp;; Stop le recharge.
            La scène revient exactement comme avant, quoi qu'aient fait les scripts.
          </p>
          <p>
            <strong>Annuler / rétablir.</strong> Avant chaque modification, la scène est sérialisée sur disque. Annuler, c'est
            recharger ce fichier. C'est moins fin qu'un système de commandes, mais aucune action ne peut être oubliée&nbsp;:
            tout ce qui modifie la scène est annulable, même un outil écrit plus tard.
          </p>
          <p>
            Les petits détails qui comptent au quotidien&nbsp;: palette de commandes (<kbd>Ctrl</kbd>+<kbd>K</kbd>),
            raccourcis reconfigurables, thème de couleurs éditable, et une info-bulle sur chaque valeur modifiable. Au démarrage,
            le moteur liste dans le log les propriétés qui n'en ont pas encore.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Outils dédiés</h4>
          <ul class="notes__list">
            <li>Éditeur d'animation&nbsp;: planche de sprites, timeline, aperçu</li>
            <li>Graphe de machine à états d'animation</li>
            <li>Éditeur de formes de collision</li>
            <li>Éditeur de shaders</li>
            <li>Gameplay tags hiérarchiques</li>
            <li>Profileur par image</li>
            <li>Panneau réseau</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 02 hot reload -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">02</span><h2 class="part__t">Rechargement à chaud du C++</h2><span class="part__k mono">DLL · Windows</span></header>
      <figure class="diagram">
        <ol class="pipe pipe--5 mono" aria-label="Étapes du rechargement à chaud">
          <li><b>F7</b><span>ou une compilation dans Visual Studio</span></li>
          <li><b>CMake + MSBuild</b><span>en tâche de fond, l'éditeur reste utilisable</span></li>
          <li><b>Sauvegarde</b><span>la scène ouverte, même non enregistrée</span></li>
          <li><b>Copie de la DLL</b><span>EditorModule_live_N.dll, PDB au nom unique</span></li>
          <li><b>Rechargement</b><span>nouveau module, la scène revient</span></li>
        </ol>
        <figcaption class="mono">Une modification de gameplay se teste en quelques secondes, sans fermer l'éditeur.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            Tout le code du moteur, du jeu et de l'éditeur vit dans une DLL. L'exécutable <code>Krampus Engine.exe</code> ne fait
            que créer la fenêtre et charger cette DLL&nbsp;: quand une nouvelle version apparaît, il sauvegarde la scène,
            décharge l'ancien module, charge le nouveau et rouvre la scène là où on en était.
          </p>
          <p>
            Les pièges étaient tous du côté de Windows. Une DLL chargée est verrouillée&nbsp;: l'hôte en charge donc une copie.
            Visual Studio verrouille aussi le fichier de symboles (PDB)&nbsp;: chaque édition de liens écrit un PDB au nom unique.
            Et un objet audio statique encore vivant au déchargement bloque le processus sur le <em>loader lock</em>&nbsp;:
            les ressources audio et GPU sont libérées avant.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Autour des scripts</h4>
          <ul class="notes__list">
            <li>Création d'un script depuis l'éditeur (modèle <code>.h</code> / <code>.cpp</code>)</li>
            <li>Solution Visual Studio régénérée quand un fichier est ajouté</li>
            <li>Double-clic sur un script&nbsp;: ouverture dans Visual Studio</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 03 réflexion -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">03</span><h2 class="part__t">Réflexion sans génération de code</h2><span class="part__k mono">macros · C++20</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            Unreal passe par un outil qui génère du code (UHT). Je voulais la même chose avec seulement le compilateur.
            Une propriété déclarée avec <code>KPROPERTY</code> apparaît dans l'inspecteur, avec son info-bulle, et se sauvegarde
            dans la scène. Une fonction marquée <code>KFUNCTION</code> devient appelable depuis l'éditeur.
          </p>

          ${CODE_KRAMPUS("inspecteur + sauvegarde", "branchable sur une entrée")}

          <p>
            <strong>Les listes d'événements</strong>, l'équivalent des <code>UnityEvent</code>&nbsp;: sur un bouton, une collision
            ou une touche, on choisit dans l'inspecteur un acteur cible, un composant, une fonction et un argument. La liste
            entière tient dans une chaîne sauvegardée avec la scène. Une cible peut aussi être un gameplay tag&nbsp;: la fonction
            est alors appelée sur tous les acteurs qui le portent.
          </p>
          <p>
            <strong>Les entrées</strong> utilisent le même mécanisme&nbsp;: un <code>InputComponent</code> associe un événement
            (environ 300&nbsp;: clavier, souris, manette, fenêtre) à une liste d'appels. Aucun code de liaison à écrire.
          </p>
          <p>
            Les classes du moteur sont décrites hors de leurs en-têtes, pour garder le code du moteur propre. L'ordre
            d'enregistrement donne l'ordre de chargement&nbsp;: la forme avant la taille, la texture avant son rectangle.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Types réfléchis</h4>
          <ul class="notes__list">
            <li><code>bool</code>, <code>int</code>, <code>float</code>, chaîne, vecteur&nbsp;2D, couleur</li>
            <li>Énumérations et drapeaux</li>
            <li>Textures, polices, sons, scènes (avec sélecteur et miniatures)</li>
            <li>Gameplay tags, conteneurs et requêtes de tags</li>
            <li>Listes d'événements, liaisons d'entrées</li>
            <li>Pointeurs d'acteurs, remis à nul à la destruction</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 04 déplacements -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">04</span><h2 class="part__t">Déplacements façon Unreal</h2><span class="part__k mono">shape casts · box2d</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            Trois composants reprennent ceux d'Unreal, en 2D, et se règlent entièrement dans l'inspecteur. Le personnage et
            le projectile ne laissent pas la physique pousser l'acteur&nbsp;: ils balayent leur forme dans le monde box2d
            (<em>shape cast</em>), trouvent le premier contact et glissent le long de la surface. C'est ce qui donne un contrôle précis.
          </p>
          <p>
            Le plus dur a été le véhicule. Une roue pèse environ mille fois moins que la voiture&nbsp;: un solveur itératif sur
            «&nbsp;la roue roule sans glisser&nbsp;» et «&nbsp;le frein bloque la roue&nbsp;» convergeait beaucoup trop lentement.
            Je résous ces deux contraintes exactement, puis j'applique le cercle de friction des pneus.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Règles apprises en testant</h4>
          <ul class="notes__list">
            <li>La vitesse se prend le long du sol, sinon on ralentit en pente</li>
            <li>Une glissade ne fait jamais monter sur une pente trop raide</li>
            <li>Un balayage commence hors de la forme&nbsp;: box2d rate ce dans quoi il démarre</li>
            <li>Les forces sont appliquées avant chaque pas de box2d, pas une fois par image</li>
          </ul>
        </aside>
      </div>
      <div class="lessons">
        <div class="lessons__grid">
          <div>
            <p class="lessons__q">PlayerMovementComponent</p>
            <p>Le CharacterMovement d'Unreal. Plateforme ou vue de dessus. Capsule avec collide-and-slide, marches, pentes,
            plateformes mobiles et à sens unique. Saut avec coyote time, tampon et hauteur variable, saut mural, accroupi, sprint, dash.</p>
          </div>
          <div>
            <p class="lessons__q">ProjectileMovementComponent</p>
            <p>Rebonds (élasticité, friction selon l'angle), glissade au sol, tête chercheuse vers un acteur ou un gameplay tag,
            flottaison dans l'eau, sous-pas pour des arcs précis. Fonctions pour prédire une trajectoire et viser une cible mobile.</p>
          </div>
          <div>
            <p class="lessons__q">VehicleMovementComponent</p>
            <p>Vue de côté (deux roues sur suspensions) ou de dessus (quatre roues, géométrie d'Ackermann). Moteur, boîte
            automatique, différentiel, freins avec ABS, antipatinage, frein à main.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 05 physique / navigation -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">05</span><h2 class="part__t">Physique et navigation</h2><span class="part__k mono">box2d 3.1 · A* · funnel</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>Physique.</strong> Un <code>PhysicsComponent</code> crée le corps box2d à partir des formes de l'acteur.
            box2d n'accepte que des polygones convexes d'au plus 8&nbsp;sommets&nbsp;: les formes concaves dessinées dans
            l'éditeur de formes sont découpées en morceaux convexes. Les contacts arrivent dans des listes d'événements
            (<code>onCollisionEnter</code>, <code>onCollisionExit</code>).
          </p>
          <p>
            <strong>Navigation.</strong> Faite maison. Un volume produit un maillage de navigation par tuiles à partir des corps
            statiques. Quand un obstacle bouge, seules les tuiles touchées sont reconstruites. Un chemin, c'est un A* sur les
            polygones, puis l'algorithme de l'entonnoir (<em>funnel</em>) pour le tendre. Il y a des zones à coût (la boue
            est évitée, la route préférée), des liens (sauts, échelles, téléporteurs) et un volume par taille d'agent.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">En pratique</h4>
          <ul class="notes__list">
            <li>Corps statiques, dynamiques, cinématiques</li>
            <li>Raycasts et shape casts depuis le gameplay</li>
            <li>Changer la gravité réveille les corps au repos</li>
            <li>Navmesh affiché dans l'éditeur (touche <kbd>P</kbd>)</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 06 rendu -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">06</span><h2 class="part__t">Lumières, shaders, particules</h2><span class="part__k mono">SFML 3 · GLSL</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>Lumières 2D.</strong> Lumière ambiante, lumières ponctuelles et spots en cône, avec ombres projetées&nbsp;:
            un <code>ShadowCasterComponent</code> suffit pour qu'un acteur bloque la lumière. Le HUD n'est jamais éclairé.
          </p>
          <p>
            <strong>Shaders.</strong> Les matériaux sont des shaders GLSL&nbsp;: 7&nbsp;effets intégrés (contour, dissolution,
            flash, pixelisation…) et 5&nbsp;effets de post-process (vignette, CRT, aberration chromatique, flou, étalonnage)
            placés avec un volume, comme dans Unreal. Un éditeur de shaders est intégré à l'éditeur.
          </p>
          <p>
            <strong>Particules.</strong> Stockées dans un pool, chaque émetteur se dessine en un seul appel de rendu&nbsp;:
            10&nbsp;000&nbsp;particules coûtent environ 0,2&nbsp;ms de CPU en Release.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">En chiffres</h4>
          <dl class="figures">
            <div><dt>0,2&nbsp;ms</dt><dd>CPU pour 10&nbsp;000 particules en Release</dd></div>
            <div><dt>12</dt><dd>shaders livrés avec le moteur</dd></div>
            <div><dt>1</dt><dd>appel de rendu par émetteur de particules</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 07 réseau -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">07</span><h2 class="part__t">Réseau&nbsp;: LAN et Steam</h2><span class="part__k mono">TCP · UDP · Steam P2P</span></header>
      <figure class="diagram">
        <ol class="pipe mono" aria-label="Trajet d'un message réseau">
          <li><b>Appel</b><span>une fonction réfléchie ou SendMessage</span></li>
          <li><b>NetMessage</b><span>nom + arguments typés · fiable ou non</span></li>
          <li><b>Hôte (id&nbsp;0)</b><span>relaie vers tous, les autres ou l'hôte</span></li>
          <li><b>Clients 1…N</b><span>les abonnés exécutent</span></li>
        </ol>
        <figcaption class="mono">Le trajet d'un message&nbsp;: l'hôte reçoit tout et relaie.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            Le réseau est écrit sur les sockets de SFML&nbsp;: TCP pour ce qui doit arriver (messages, apparitions d'acteurs),
            UDP pour ce qui peut se perdre (positions). Toutes les sockets sont non bloquantes et lues au début de chaque image.
            La découverte LAN trouve les parties sur le réseau local.
          </p>
          <p>
            Pour répliquer un acteur, il n'y a rien à écrire&nbsp;: un <code>NetworkSyncComponent</code> envoie sa position et ses
            propriétés au rythme choisi, un <code>NetworkEventsComponent</code> branche des messages sur des listes d'événements.
            Le solo et le multijoueur passent par le même code&nbsp;: hors ligne, <code>Spawn</code> crée simplement l'acteur en local.
          </p>
          <p>
            <strong>Steam.</strong> Le même code tourne sur Steam Networking Sockets (pair à pair relayé), derrière une interface
            <code>NetSocket</code> commune à TCP et à Steam. Lobbies, liste d'amis, invitations, et une invitation acceptée
            depuis l'overlay rejoint la partie toute seule.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Ce qui est en place</h4>
          <ul class="notes__list">
            <li>Hôte / clients, découverte LAN</li>
            <li>Réplication&nbsp;: apparition, synchronisation, destruction</li>
            <li>Messages et RPC avec arguments typés</li>
            <li>Steam&nbsp;: lobbies, amis, invitations</li>
            <li><code>--host</code> / <code>--join</code> pour tester à plusieurs fenêtres</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 08 export -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">08</span><h2 class="part__t">Export du jeu</h2><span class="part__k mono">CMake · PackTool</span></header>
      <figure class="diagram">
        <ol class="pipe pipe--5 mono" aria-label="Étapes de l'export du jeu">
          <li><b>Package Game</b><span>menu File, ou une cible CMake</span></li>
          <li><b>Build Ship</b><span>SFML statique, sans log ni console</span></li>
          <li><b>PackTool</b><span>tout le contenu dans un .pak, icône de l'exe</span></li>
          <li><b>Lanceur</b><span>+ DLL Visual C++ copiées à côté du jeu</span></li>
          <li><b>Dossier</b><span>se lance sur n'importe quel PC Windows</span></li>
        </ol>
        <figcaption class="mono">De l'éditeur à un dossier qu'on peut envoyer à quelqu'un, sans rien installer.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            Le jeu exporté ne contient ni éditeur ni log. Ses fichiers sont lus en priorité dans le <code>.pak</code>, puis sur le
            disque&nbsp;: le même code sert pendant le développement et dans le jeu final. Un petit lanceur au nom du jeu démarre
            le vrai exécutable, rangé dans <code>Binaries/</code> avec les DLL dont il a besoin.
          </p>
          <p>
            PackTool écrit aussi l'icône de l'exécutable à partir d'une image&nbsp;: PNG pour 256&nbsp;px, bitmap 32&nbsp;bits pour
            les plus petites tailles (le seul format que l'Explorateur affiche partout).
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Réglages d'export</h4>
          <ul class="notes__list">
            <li>Nom du jeu, icône, dossier de sortie</li>
            <li>Scène de départ, titre et mode de la fenêtre</li>
            <li>Écran de démarrage facultatif</li>
            <li>Un dossier n'est vidé que s'il vient d'un export précédent</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 09 fiabilité -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">09</span><h2 class="part__t">Quand ça plante</h2><span class="part__k mono">crash · logs · profileur</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>Rapport de crash.</strong> Les exceptions non gérées, <code>terminate</code>, <code>abort</code> et les
            paramètres invalides sont interceptés. Un thread séparé écrit un dossier avec la pile d'appels, un minidump, le log
            et le dernier instantané d'annulation&nbsp;: la scène n'est jamais perdue. L'éditeur se relance ensuite en mode
            rapport&nbsp;: ouvrir le dossier, redémarrer, fermer.
          </p>
          <p>
            <strong>Logs.</strong> Six niveaux de verbosité, avec une règle pour chacun&nbsp;: ce que l'utilisateur doit voir,
            le contexte utile, le détail répété… La console de l'éditeur filtre par catégorie et par niveau.
          </p>
          <p>
            <strong>Profileur.</strong> Le temps de chaque partie de l'image (macros <code>PROFILE_SCOPE</code>), en moyenne et
            en pic sur les dernières images, avec un graphe de l'image entière.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Dans le dossier de crash</h4>
          <ul class="notes__list">
            <li>CrashReport.txt, pile d'appels lisible</li>
            <li>Editor.dmp, à ouvrir dans Visual Studio</li>
            <li>log.txt de la session</li>
            <li>LastUndoSnapshot.ka7, la scène en cours</li>
          </ul>
        </aside>
      </div>
    </section>

    <div class="lessons">
      <h4 class="mono notes__h">Problèmes rencontrés</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q">Le rechargement à chaud échouait une fois sur deux.</p>
          <p>Visual Studio gardait le PDB verrouillé tant que la DLL était chargée. L'éditeur charge maintenant une copie de la
          DLL, et chaque édition de liens produit un PDB au nom unique.</p>
        </div>
        <div>
          <p class="lessons__q">Crash quand un projectile détruisait sa cible.</p>
          <p>L'acteur était détruit à l'intérieur du callback de collision de box2d. Les destructions sont maintenant notées
          pendant le callback et faites au <code>Tick</code> suivant.</p>
        </div>
        <div>
          <p class="lessons__q">Le jeu se figeait en multijoueur.</p>
          <p>Une réception UDP bloquante attendait un paquet qui n'arrivait jamais. Toutes les sockets sont maintenant non bloquantes.</p>
        </div>
        <div>
          <p class="lessons__q">Les projectiles traversaient le sol.</p>
          <p>Un balayage box2d ne voit pas une forme dans laquelle il commence. Le projectile garde une marge d'un pixel
          (plus que la tolérance de box2d) après chaque contact, et se dégage d'abord s'il est entré dans un mur.</p>
        </div>
        <div>
          <p class="lessons__q">Une voiture garée glissait dans les pentes.</p>
          <p>Le calcul de l'adhérence comptait la rotation du châssis&nbsp;: chaque pneu ne retenait que la moitié de ce qu'il
          fallait. Seule la masse de la voiture entre maintenant dans ce calcul.</p>
        </div>
        <div>
          <p class="lessons__q">L'éditeur se figeait sur «&nbsp;Package Game&nbsp;».</p>
          <p>La fenêtre de choix de dossier de Windows demande un thread COM particulier (STA), ce que n'est pas la boucle
          principale. Elle s'ouvre maintenant sur son propre thread, et l'éditeur récupère la réponse.</p>
        </div>
      </div>
    </div>
    </div></details>`,

  // ====================================================================== EN
  en: `
    <figure class="shot">
      <img src="${KRAMPUS_MEDIA.editor}" alt="The KrampusEngine editor: hierarchy, viewport, content browser and console" width="1600" height="900">
      <figcaption class="mono">The editor. Viewport, hierarchy, inspector, content, console. All built with Dear ImGui.</figcaption>
    </figure>

    <dl class="stats">
      <div><dt>~51,000</dt><dd>lines of C++ (38k engine, 13k editor)</dd></div>
      <div><dt>146</dt><dd>commits since November 2025</dd></div>
      <div><dt>0</dt><dd>lines of generated code: reflection through macros</dd></div>
      <div><dt>1</dt><dd>command to export a game that runs anywhere</dd></div>
    </dl>

${KRAMPUS_TOP.en}

    <div class="case__body">
      <div class="prose">
        <p>
          I wanted to understand what sits under a commercial engine. So I wrote one, layer by layer:
          game loop, actors and components, reflection, scene format, physics, rendering, networking, and the editor on top.
        </p>
        <p>
          My model is <strong>Unreal Engine</strong>. I take the ideas that helped me most at school
          (actors and components, movement components, gameplay tags, C++ hot reload) and bring them
          to 2D. The goal: a game designer can build and tune a level in the editor, and the programmer
          only writes gameplay.
        </p>
        <p>
          The workflow: place actors in the editor, write gameplay in C++, press <kbd>F7</kbd>.
          The game module is rebuilt and reloaded without losing the current scene. <em>Play</em> runs the scene,
          <em>Stop</em> puts it back exactly as it was. When the game is ready, one command produces a folder that runs
          on any Windows PC.
        </p>
      </div>

      <aside class="notes">
        <h4 class="mono notes__h">Tech</h4>
        <ul class="notes__list">
          <li>C++20, Visual Studio 2026, CMake</li>
          <li>SFML&nbsp;3 (window, rendering, audio, sockets)</li>
          <li>box2d&nbsp;3.1 (physics)</li>
          <li>Dear ImGui, docking branch (editor)</li>
          <li>Steamworks (online multiplayer)</li>
        </ul>
      </aside>
    </div>

    <figure class="diagram">
      <div class="arch mono" role="img" aria-label="Architecture: the editor is a host executable that loads EditorModule.dll; the exported game is KrampusGame.exe with a .pak file; both contain the Engine library and the Game code">
        <p class="arch__l">Editor</p>
        <div class="arch__c"><b>Krampus Engine.exe</b><span>host: window, loop, loads the DLL</span></div>
        <div class="arch__c arch__c--hot"><b>EditorModule.dll</b><span>Engine + Game + ImGui tools · hot reloaded</span></div>
        <p class="arch__l">Exported game</p>
        <div class="arch__c"><b>KrampusGame.exe</b><span>Engine + Game, static SFML, no editor</span></div>
        <div class="arch__c"><b>&lt;Game&gt;.pak</b><span>all content and settings in one file</span></div>
        <p class="arch__l">Shared code</p>
        <div class="arch__c arch__c--ink"><b>Engine</b><span>static library · not one line of editor or ImGui</span></div>
        <div class="arch__c arch__c--ink"><b>Game</b><span>the game's scripts, linked into both executables</span></div>
      </div>
      <figcaption class="mono">The same engine and game code, loaded by the editor (as a reloadable DLL) or by the exported game.</figcaption>
    </figure>

    <!-- ------------------------------------------------------------ 01 editor -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">01</span><h2 class="part__t">The editor</h2><span class="part__k mono">Dear ImGui · docking</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            The editor is a layer on top of the engine: the engine doesn't know it exists. It has what you expect from an
            engine editor: a hierarchy of actors and HUD widgets (drag a row onto another to attach it), an inspector for
            reflected properties, a viewport with a gizmo (move, rotate, scale), a content browser with thumbnails, a
            filterable console.
          </p>
          <p>
            <strong>Play and Stop.</strong> On Play, the scene is saved to a snapshot; Stop reloads it.
            The scene comes back exactly as it was, whatever the scripts did.
          </p>
          <p>
            <strong>Undo / redo.</strong> Before every change, the scene is serialized to disk. Undo reloads that file.
            It's coarser than a command system, but no action can be forgotten: anything that changes the scene can be
            undone, even a tool written later.
          </p>
          <p>
            The small things that matter every day: a command palette (<kbd>Ctrl</kbd>+<kbd>K</kbd>), rebindable shortcuts,
            an editable color theme, and a tooltip on every editable value. At startup, the engine logs the properties
            that don't have one yet.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Dedicated tools</h4>
          <ul class="notes__list">
            <li>Animation editor: sprite sheet, timeline, preview</li>
            <li>Animation state machine graph</li>
            <li>Collision shape editor</li>
            <li>Shader editor</li>
            <li>Hierarchical gameplay tags</li>
            <li>Per-frame profiler</li>
            <li>Network panel</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 02 hot reload -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">02</span><h2 class="part__t">C++ hot reload</h2><span class="part__k mono">DLL · Windows</span></header>
      <figure class="diagram">
        <ol class="pipe pipe--5 mono" aria-label="Hot reload steps">
          <li><b>F7</b><span>or a build in Visual Studio</span></li>
          <li><b>CMake + MSBuild</b><span>in the background, the editor stays usable</span></li>
          <li><b>Save</b><span>the open scene, even unsaved</span></li>
          <li><b>Copy the DLL</b><span>EditorModule_live_N.dll, uniquely named PDB</span></li>
          <li><b>Reload</b><span>new module, the scene comes back</span></li>
        </ol>
        <figcaption class="mono">A gameplay change is tested in seconds, without closing the editor.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            All the engine, game and editor code lives in a DLL. The <code>Krampus Engine.exe</code> executable only creates
            the window and loads that DLL: when a new build shows up, it saves the scene, unloads the old module, loads the
            new one and reopens the scene where you left it.
          </p>
          <p>
            The traps were all on the Windows side. A loaded DLL is locked, so the host loads a copy.
            Visual Studio also locks the symbol file (PDB), so every link step writes a uniquely named PDB.
            And a static audio object still alive at unload time hangs the process on the <em>loader lock</em>, so audio and
            GPU resources are released first.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Around scripts</h4>
          <ul class="notes__list">
            <li>Create a script from the editor (<code>.h</code> / <code>.cpp</code> template)</li>
            <li>Visual Studio solution regenerated when a file is added</li>
            <li>Double-click a script: opens in Visual Studio</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 03 reflection -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">03</span><h2 class="part__t">Reflection without code generation</h2><span class="part__k mono">macros · C++20</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            Unreal relies on a tool that generates code (UHT). I wanted the same with the compiler alone.
            A property declared with <code>KPROPERTY</code> shows up in the inspector, with its tooltip, and is saved in the
            scene. A function marked <code>KFUNCTION</code> can be called from the editor.
          </p>

          ${CODE_KRAMPUS("inspector + save", "bindable to an input")}

          <p>
            <strong>Event lists</strong>, the equivalent of <code>UnityEvent</code>: on a button, a collision or a key, you
            pick in the inspector a target actor, a component, a function and an argument. The whole list fits in one string
            saved with the scene. A target can also be a gameplay tag: the function is then called on every actor that has it.
          </p>
          <p>
            <strong>Inputs</strong> use the same mechanism: an <code>InputComponent</code> maps an event (about 300: keyboard,
            mouse, gamepad, window) to a list of calls. No binding code to write.
          </p>
          <p>
            Engine classes are described outside their headers, to keep the engine code clean. Registration order is load
            order: the shape before the size, the texture before its rectangle.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Reflected types</h4>
          <ul class="notes__list">
            <li><code>bool</code>, <code>int</code>, <code>float</code>, string, 2D vector, color</li>
            <li>Enums and flags</li>
            <li>Textures, fonts, sounds, scenes (with pickers and thumbnails)</li>
            <li>Gameplay tags, tag containers and queries</li>
            <li>Event lists, input bindings</li>
            <li>Actor pointers, nulled when the actor is destroyed</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 04 movement -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">04</span><h2 class="part__t">Unreal-style movement</h2><span class="part__k mono">shape casts · box2d</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            Three components follow Unreal's, in 2D, and are tuned entirely in the inspector. The character and the projectile
            don't let physics push the actor: they sweep their shape through the box2d world (<em>shape cast</em>), find the
            first contact and slide along the surface. That's what gives precise control.
          </p>
          <p>
            The vehicle was the hardest. A wheel weighs about a thousand times less than the car: an iterative solver on
            "the wheel rolls without slipping" and "the brake holds the wheel" converged far too slowly. I solve those two
            constraints exactly, then apply the tire friction circle.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Rules learnt by testing</h4>
          <ul class="notes__list">
            <li>Speed is taken along the floor, or you slow down on slopes</li>
            <li>A slide never climbs a slope that is too steep</li>
            <li>A sweep starts outside the shape: box2d misses what it starts in</li>
            <li>Forces are applied before every box2d step, not once per frame</li>
          </ul>
        </aside>
      </div>
      <div class="lessons">
        <div class="lessons__grid">
          <div>
            <p class="lessons__q">PlayerMovementComponent</p>
            <p>Unreal's CharacterMovement. Platformer or top-down. Capsule with collide-and-slide, steps, slopes, moving and
            one-way platforms. Jump with coyote time, buffering and variable height, wall jump, crouch, sprint, dash.</p>
          </div>
          <div>
            <p class="lessons__q">ProjectileMovementComponent</p>
            <p>Bounces (bounciness, angle-dependent friction), sliding on the floor, homing toward an actor or a gameplay tag,
            buoyancy in water, sub-stepping for precise arcs. Functions to predict a path and aim at a moving target.</p>
          </div>
          <div>
            <p class="lessons__q">VehicleMovementComponent</p>
            <p>Side view (two wheels on suspensions) or top-down (four wheels, Ackermann steering). Engine, automatic gearbox,
            differential, brakes with ABS, traction control, handbrake.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 05 physics / navigation -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">05</span><h2 class="part__t">Physics and navigation</h2><span class="part__k mono">box2d 3.1 · A* · funnel</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>Physics.</strong> A <code>PhysicsComponent</code> builds the box2d body from the actor's shapes.
            box2d only takes convex polygons of at most 8 vertices: concave shapes drawn in the shape editor are split into
            convex pieces. Contacts arrive in event lists (<code>onCollisionEnter</code>, <code>onCollisionExit</code>).
          </p>
          <p>
            <strong>Navigation.</strong> Home-made. A volume builds a tiled navigation mesh from the static bodies. When an
            obstacle moves, only the tiles it touches are rebuilt. A path is an A* over the polygons, then the funnel
            algorithm to pull it tight. There are cost areas (mud avoided, roads preferred), links (jumps, ladders,
            teleporters) and one volume per agent size.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">In practice</h4>
          <ul class="notes__list">
            <li>Static, dynamic and kinematic bodies</li>
            <li>Raycasts and shape casts from gameplay code</li>
            <li>Changing gravity wakes bodies at rest</li>
            <li>Navmesh shown in the editor (<kbd>P</kbd> key)</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 06 rendering -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">06</span><h2 class="part__t">Lights, shaders, particles</h2><span class="part__k mono">SFML 3 · GLSL</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>2D lights.</strong> Ambient light, point lights and cone spotlights, with cast shadows: a
            <code>ShadowCasterComponent</code> is all it takes for an actor to block light. The HUD is never lit.
          </p>
          <p>
            <strong>Shaders.</strong> Materials are GLSL shaders: 7 built-in effects (outline, dissolve, flash, pixelate…)
            and 5 post-process effects (vignette, CRT, chromatic aberration, blur, color grading) placed with a volume, like in
            Unreal. A shader editor is built into the editor.
          </p>
          <p>
            <strong>Particles.</strong> Stored in a pool, each emitter draws in a single draw call: 10,000 particles cost
            about 0.2&nbsp;ms of CPU in Release.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">In numbers</h4>
          <dl class="figures">
            <div><dt>0.2&nbsp;ms</dt><dd>CPU for 10,000 particles in Release</dd></div>
            <div><dt>12</dt><dd>shaders shipped with the engine</dd></div>
            <div><dt>1</dt><dd>draw call per particle emitter</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 07 networking -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">07</span><h2 class="part__t">Networking: LAN and Steam</h2><span class="part__k mono">TCP · UDP · Steam P2P</span></header>
      <figure class="diagram">
        <ol class="pipe mono" aria-label="Path of a network message">
          <li><b>Call</b><span>a reflected function or SendMessage</span></li>
          <li><b>NetMessage</b><span>name + typed arguments · reliable or not</span></li>
          <li><b>Host (id&nbsp;0)</b><span>relays to all, others or host</span></li>
          <li><b>Clients 1…N</b><span>subscribers run it</span></li>
        </ol>
        <figcaption class="mono">The path of a message: the host receives everything and relays it.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            Networking is written on SFML sockets: TCP for what must arrive (messages, actor spawns), UDP for what can be lost
            (positions). Every socket is non-blocking and read at the start of each frame. LAN discovery finds games on the
            local network.
          </p>
          <p>
            Replicating an actor takes no code: a <code>NetworkSyncComponent</code> sends its position and properties at the
            chosen rate, a <code>NetworkEventsComponent</code> binds messages to event lists. Solo and multiplayer go through
            the same code: offline, <code>Spawn</code> simply creates the actor locally.
          </p>
          <p>
            <strong>Steam.</strong> The same code runs on Steam Networking Sockets (relayed peer-to-peer), behind a
            <code>NetSocket</code> interface shared by TCP and Steam. Lobbies, friends list, invites, and an invite accepted
            from the overlay joins the game on its own.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">What's in place</h4>
          <ul class="notes__list">
            <li>Host / clients, LAN discovery</li>
            <li>Replication: spawn, sync, despawn</li>
            <li>Messages and RPCs with typed arguments</li>
            <li>Steam: lobbies, friends, invites</li>
            <li><code>--host</code> / <code>--join</code> to test with several windows</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 08 export -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">08</span><h2 class="part__t">Game export</h2><span class="part__k mono">CMake · PackTool</span></header>
      <figure class="diagram">
        <ol class="pipe pipe--5 mono" aria-label="Game export steps">
          <li><b>Package Game</b><span>File menu, or a CMake target</span></li>
          <li><b>Ship build</b><span>static SFML, no logs, no console</span></li>
          <li><b>PackTool</b><span>all content in one .pak, exe icon</span></li>
          <li><b>Launcher</b><span>+ Visual C++ DLLs copied next to the game</span></li>
          <li><b>Folder</b><span>runs on any Windows PC</span></li>
        </ol>
        <figcaption class="mono">From the editor to a folder you can send to someone, nothing to install.</figcaption>
      </figure>
      <div class="case__body">
        <div class="prose">
          <p>
            The exported game has no editor and no logs. Its files are read from the <code>.pak</code> first, then from disk:
            the same code serves during development and in the final game. A small launcher named after the game starts the
            real executable, stored in <code>Binaries/</code> with the DLLs it needs.
          </p>
          <p>
            PackTool also writes the executable's icon from a picture: PNG for 256&nbsp;px, 32-bit bitmaps for the smaller sizes
            (the only format Explorer shows everywhere).
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">Export settings</h4>
          <ul class="notes__list">
            <li>Game name, icon, output folder</li>
            <li>Start scene, window title and mode</li>
            <li>Optional splash screen</li>
            <li>A folder is only wiped if it comes from a previous export</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- ------------------------------------------------------------ 09 reliability -->
    <section class="part">
      <header class="part__head"><span class="part__n mono">09</span><h2 class="part__t">When it crashes</h2><span class="part__k mono">crash · logs · profiler</span></header>
      <div class="case__body">
        <div class="prose">
          <p>
            <strong>Crash report.</strong> Unhandled exceptions, <code>terminate</code>, <code>abort</code> and invalid
            parameters are caught. A separate thread writes a folder with the call stack, a minidump, the log and the last
            undo snapshot: the scene is never lost. The editor then restarts in report mode: open the folder, restart, close.
          </p>
          <p>
            <strong>Logs.</strong> Six verbosity levels, with a rule for each: what the user must see, useful context,
            repeated detail… The editor console filters by category and level.
          </p>
          <p>
            <strong>Profiler.</strong> The time of each part of the frame (<code>PROFILE_SCOPE</code> macros), average and peak
            over the last frames, with a graph of the whole frame.
          </p>
        </div>
        <aside class="notes">
          <h4 class="mono notes__h">In the crash folder</h4>
          <ul class="notes__list">
            <li>CrashReport.txt, readable call stack</li>
            <li>Editor.dmp, to open in Visual Studio</li>
            <li>log.txt of the session</li>
            <li>LastUndoSnapshot.ka7, the current scene</li>
          </ul>
        </aside>
      </div>
    </section>

    <div class="lessons">
      <h4 class="mono notes__h">Problems I ran into</h4>
      <div class="lessons__grid">
        <div>
          <p class="lessons__q">Hot reload failed one time out of two.</p>
          <p>Visual Studio kept the PDB locked as long as the DLL was loaded. The editor now loads a copy of the DLL, and every
          link step produces a uniquely named PDB.</p>
        </div>
        <div>
          <p class="lessons__q">Crash when a projectile destroyed its target.</p>
          <p>The actor was destroyed inside box2d's collision callback. Destructions are now recorded during the callback and
          carried out on the next <code>Tick</code>.</p>
        </div>
        <div>
          <p class="lessons__q">The game froze in multiplayer.</p>
          <p>A blocking UDP receive was waiting for a packet that never came. Every socket is now non-blocking.</p>
        </div>
        <div>
          <p class="lessons__q">Projectiles went through the floor.</p>
          <p>A box2d sweep doesn't see a shape it starts inside. The projectile keeps a one-pixel gap (more than box2d's
          tolerance) after each contact, and pushes itself out first if it ended up inside a wall.</p>
        </div>
        <div>
          <p class="lessons__q">A parked car slid down slopes.</p>
          <p>The grip computation included the chassis rotation, so each tire held only half of what it should. Only the car's
          mass goes into that computation now.</p>
        </div>
        <div>
          <p class="lessons__q">The editor froze on "Package Game".</p>
          <p>The Windows folder picker needs a specific COM thread (STA), which the main loop isn't. It now opens on its own
          thread, and the editor collects the answer.</p>
        </div>
      </div>
    </div>
    </div></details>`,
};
