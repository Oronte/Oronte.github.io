/**
 * ====================================================================
 * PROJETS DU PORTFOLIO - ORONTE SOLER
 * ====================================================================
 * Projets réels issus du profil GitHub : https://github.com/Oronte
 * et du CV (Objectif3D, KrampusEngine, Serious Game La Poste, etc.)
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: "krampus-engine",
    title: "KrampusEngine",
    category: "native",
    categoryLabel: "C++20 & Moteur 2D",
    engine: "Moteur Maison (Static Library)",
    languages: ["C++20", "SFML 3.0.0"],
    role: "Créateur & Lead Engine Programmer",
    year: "2026",
    pinned: true,
    
    // Vignette animée directement avec l'un des GIFs réels du projet
    thumbnail: "assets/images/projects/krampus-physics.gif",
    
    mainMedia: {
      type: "gif",
      url: "assets/images/projects/krampus-physics.gif",
      caption: "Moteur physique 2D avec forces, gravité et amortissement dans KrampusEngine"
    },

    shortDescription: "Moteur de jeu 2D moderne développé en C++20 et SFML 3.0. Architecture hybride Acteur / Composant, moteur physique sur-mesure et système de collisions.",
    
    fullDescription: `
      <p><strong>KrampusEngine</strong> est un moteur de jeu 2D expérimental écrit en <strong>C++20 moderne</strong> et reposant sur <strong>SFML 3.0.0</strong>.</p>
      <p>Conçu sous forme de <strong>bibliothèque statique (.lib)</strong>, il applique une séparation stricte entre le moteur d'exécution (runtime) et la logique de jeu. Les jeux sont développés comme des exécutables distincts liés au moteur.</p>
      <p>Ce projet met l'accent sur la rigueur architecturale, la lisibilité et la modularité des sous-systèmes : modèle Acteur / Composant, intégration de la physique, gestion des collisions géométriques, système d'animation par spritesheet et journalisation des événements.</p>
    `,

    technicalHighlights: [
      "Architecture hybride Acteur / Composant : acteurs responsables de la logique de haut niveau, composants modulaires (Transform, Sprite, Collider, Rigidbody)",
      "Système de collisions 2D custom : détection AABB (Axis-Aligned Bounding Box) et collisions Cercle contre Rectangle",
      "Moteur physique 2D avec intégration linéaire et angulaire basée sur forces et impulsions, gravité, amortissement et velocity clamping",
      "Système d'animation 2D par spritesheets avec découpage par frames et synchronisation du framerate",
      "Gestionnaire d'entrées (Input System) réactif et sous-système de logging (Console & TxtLog)",
      "Compilation en bibliothèque statique propre et réutilisable pour de futurs jeux"
    ],

    gallery: [
      { type: "gif", url: "assets/images/projects/krampus-collision.gif", caption: "Système de collisions AABB et cercles en action" },
      { type: "gif", url: "assets/images/projects/krampus-input.gif", caption: "Input System et réactivité des contrôles" },
      { type: "gif", url: "assets/images/projects/krampus-anim.gif", caption: "Gestion des animations par spritesheet" },
      { type: "image", url: "assets/images/projects/krampus-console.png", caption: "Système de logging en console et fichier texte" }
    ],

    links: {
      github: "https://github.com/Oronte/KrampusEngine"
    }
  },

  {
    id: "serious-game-la-poste",
    title: "Serious Game VR - La Poste",
    category: "unity",
    categoryLabel: "VR & Serious Game",
    engine: "Moteur 3D / Réalité Virtuelle",
    languages: ["C#", "C++", "VR 6DoF"],
    role: "Programmeur Gameplay & VR (Équipe Pluridisciplinaire)",
    year: "2026",
    pinned: true,
    thumbnail: "assets/images/projects/serious-game-la-poste.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/serious-game-la-poste.svg",
      caption: "Simulation de formation professionnelle en réalité virtuelle pour La Poste"
    },

    shortDescription: "Environnement de réalité virtuelle immersif développé pour former les employés de La Poste : conduite de transpalette, tri du matériel et prévention des risques.",
    
    fullDescription: `
      <p>Développé dans le cadre d'un partenariat concret avec l'entreprise <strong>La Poste</strong>, ce projet de réalité virtuelle vise à former et sensibiliser les nouveaux employés aux enjeux de sécurité et aux tâches des centres logistiques.</p>
      <p>Conçu au sein d'une <strong>équipe collaborative regroupant programmeurs et graphistes 3D</strong>, j'ai pris en charge le développement des mécaniques interactives et de la simulation de conduite à l'échelle 1:1.</p>
    `,

    technicalHighlights: [
      "Conception et programmation des mécaniques de manipulation d'objets en VR (saisie, tri et empilement de colis)",
      "Simulation physique de la conduite d'un chariot transpalette avec gestion des collisions et inertie réaliste",
      "Mise en place de scénarios de validation des règles de sécurité et détection d'erreurs d'utilisation",
      "Collaboration étroite en équipe agile avec les artistes 3D et retours directs des responsables de La Poste"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/serious-game-la-poste.svg", caption: "Environnement logistique et poste de conduite simulé" }
    ],

    links: {
      github: "https://github.com/Oronte"
    }
  },

  {
    id: "visual-studio-launcher",
    title: "VisualStudioLauncher",
    category: "tools",
    categoryLabel: "Outil de Productivité",
    engine: "Outil Externe",
    languages: ["C#", "C++", "Automation"],
    role: "Développeur de l'outil",
    year: "2025 - 2026",
    pinned: false,
    thumbnail: "assets/images/projects/visual-studio-launcher.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/visual-studio-launcher.svg",
      caption: "Automatisation du lancement et paramétrage de solutions Visual Studio"
    },

    shortDescription: "Utilitaire conçu pour accélérer et fluidifier le lancement, la configuration et le workflow de projets complexes sous Visual Studio.",
    
    fullDescription: `
      <p><strong>VisualStudioLauncher</strong> est un outil développé pour optimiser le temps des développeurs lors de la manipulation quotidienne de solutions multi-projets sous Visual Studio.</p>
      <p>Il permet de préconfigurer les environnements de compilation, d'ouvrir automatiquement les projets cibles et d'éviter les manipulations répétitives.</p>
    `,

    technicalHighlights: [
      "Gain de temps et automatisation des workflows de développement quotidiens",
      "Gestion des arguments de lancement et des configurations de solutions",
      "Projet disponible en open source sur GitHub"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/visual-studio-launcher.svg", caption: "Interface et exécution rapide" }
    ],

    links: {
      github: "https://github.com/Oronte/VisualStudioLauncher"
    }
  },

  {
    id: "objectif3d-gameplay",
    title: "Projets Moteurs & Gameplay (Objectif3D)",
    category: "unreal",
    categoryLabel: "Unreal Engine & Unity",
    engine: "Unreal Engine 5 / Unity",
    languages: ["C++", "C#", "Blueprints"],
    role: "Étudiant Programmeur",
    year: "2025 - 2026",
    pinned: false,
    thumbnail: "assets/images/projects/ue5-action-rpg.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/ue5-action-rpg.svg",
      caption: "Prototypes de gameplay et architectures modulaires étudiés à Objectif3D"
    },

    shortDescription: "Réalisations et prototypes techniques développés durant le cursus intensif de programmation à l'école Objectif3D (C++ sous UE5 et C# sous Unity).",
    
    fullDescription: `
      <p>Au cours de ma formation à <strong>Objectif3D</strong>, j'approfondis les méthodologies de développement de jeux modernes : programmation de mécaniques en C++, architectures orientées composants, gestion des caméras, inputs et optimisation des ressources.</p>
      <p>Ces projets d'études permettent de consolider la pratique conjointe d'<strong>Unreal Engine</strong> (C++ / Blueprints) et d'<strong>Unity</strong> (C#).</p>
    `,

    technicalHighlights: [
      "Création de Character Controllers réactifs et systèmes de déplacement",
      "Pratique rigoureuse des standards de code C++ et architectures logicielles de jeux vidéo",
      "Gestion des cycles de vie d'objets, mathématiques 3D (vecteurs, matrices, quaternions)",
      "Projets réalisés sous contraintes de temps et présentations techniques"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/ue5-action-rpg.svg", caption: "Mise en situation de gameplay 3D" }
    ],

    links: {
      github: "https://github.com/Oronte"
    }
  }
];
