/**
 * ====================================================================
 * CONFIGURATION DU PORTFOLIO - GAME DEVELOPER
 * ====================================================================
 * Modifiez les valeurs ci-dessous avec vos propres informations !
 * Ce fichier est conçu pour être facilement modifiable sans toucher au HTML.
 */

window.PORTFOLIO_CONFIG = {
  // Informations Personnelles
  profile: {
    name: "Alex Dev", // Remplacez par votre Nom et Prénom
    role: "Game Developer & Engine Programmer",
    tagline: "Passionné par l'architecture moteur, le gameplay fluide et les performances bas niveau.",
    location: "Paris, France & Remote",
    statusText: "Disponible pour opportunités (CDI / Freelance)",
    statusAvailable: true, // Affiche le point vert "disponible"
    avatar: "assets/images/placeholder-avatar.svg", // Chemin vers votre photo ou avatar
    resumeUrl: "assets/resume.pdf", // Mettez votre CV PDF dans le dossier assets/
    email: "contact.gamedev@example.com"
  },

  // Liens Réseaux Sociaux & Plateformes
  socials: {
    github: "https://github.com/votre-nom",
    linkedin: "https://linkedin.com/in/votre-nom",
    itchio: "https://votre-nom.itch.io",
    youtube: "https://youtube.com/@votre-chaine",
    artstation: "", // Laissez vide "" si vous n'en avez pas
    twitter: "https://x.com/votre-compte",
    steam: ""
  },

  // À propos de vous
  about: {
    title: "Créateur d'univers interactifs et de moteurs sur-mesure",
    paragraphs: [
      "Développeur de jeux vidéo polyvalent avec une forte sensibilité pour la technique, je conçois des systèmes de jeu réactifs et optimisés. Mon expertise s'étend de la programmation gameplay haut niveau sur Unreal Engine et Unity jusqu'à l'implémentation de pipelines de rendu natifs en C++.",
      "J'aime résoudre les défis complexes : simulation physique, intelligence artificielle d'ennemis, systèmes d'animation, architectures multithreadées et outils en Python pour accélérer la production d'équipe.",
      "Que ce soit pour un prototype rapide de Game Jam ou un projet ambitieux sur plusieurs années, je privilégie toujours un code propre, modulaire et documenté."
    ],
    stats: [
      { number: "5+", label: "Années de programmation" },
      { number: "12+", label: "Projets & Game Jams" },
      { number: "4", label: "Langages maîtrisés (C++, C#, Py, Shaders)" },
      { number: "100%", label: "Passion pour l'optimisation" }
    ]
  },

  // Compétences techniques classées par catégories
  skillsCategories: [
    {
      name: "Langages de programmation",
      icon: "fa-code",
      skills: [
        { name: "C++ (C++17/20)", level: "Avancé", details: "Mémoire manuelle, RAII, Smart Pointers, Multithreading, Templates, STL" },
        { name: "C# (.NET)", level: "Avancé", details: "Architecture modulaire, LINQ, Async/Await, Optimisation Garbage Collector" },
        { name: "Python", level: "Intermédiaire", details: "Scripts d'automatisation, Pipelines DCC (Blender), Scripts de build, Outils CLI" },
        { name: "Shaders (HLSL / GLSL)", level: "Intermédiaire", details: "Vertex & Pixel Shaders, PBR, Compute Shaders, Shader Graph" }
      ]
    },
    {
      name: "Moteurs de Jeu",
      icon: "fa-gamepad",
      skills: [
        { name: "Unreal Engine 5", level: "Avancé", details: "C++ & Blueprints, Gameplay Ability System (GAS), Niagara VFX, Enhanced Input, UMG" },
        { name: "Unity", level: "Avancé", details: "Architecture C#, Scriptable Objects, DOTS / ECS & Job System, UI Toolkit, Profiler" },
        { name: "Natif / Custom Engine", level: "Intermédiaire", details: "Création de mini-moteur from scratch : OpenGL 4.5, Vulkan (notions), DirectX 11/12, SDL2" }
      ]
    },
    {
      name: "Domaines & Spécialités",
      icon: "fa-microchip",
      skills: [
        { name: "Gameplay Programming", level: "Avancé", details: "Character Controllers, Caméras, State Machines (FSM), Systèmes de combat" },
        { name: "Mathématiques 3D & Physique", level: "Avancé", details: "Vecteurs, Matrices, Quaternions, Raycasting, Collisions spatiales (Octree/BVH)" },
        { name: "Intelligence Artificielle (IA)", level: "Intermédiaire", details: "Behavior Trees, Navigation Mesh, A* Pathfinding, Systèmes de perception" },
        { name: "Networking / Multijoueur", level: "Notions", details: "Client-Server, Réplication d'acteurs, Lag Compensation, Epic Online Services" }
      ]
    },
    {
      name: "Outils & Workflow",
      icon: "fa-screwdriver-wrench",
      skills: [
        { name: "Visual Studio & Rider", level: "Quotidien", details: "Debugging avancé, Memory Dumps, Profiling de performance" },
        { name: "RenderDoc & Profilers", level: "Régulier", details: "Analyse GPU, Draw calls, Tracy Profiler, Unreal Insights" },
        { name: "Versionning (Git / Perforce)", level: "Quotidien", details: "Git LFS, Branches, Perforce Helix Core, CI/CD basique" },
        { name: "CMake & Build Tools", level: "Régulier", details: "Configuration cross-platform, vcpkg, compilation native" }
      ]
    }
  ],

  // Parcours / Expérience & Formation
  timeline: [
    {
      period: "2023 - Présent",
      title: "Gameplay & Engine Programmer",
      company: "Studio Indépendant / Projets Personnels",
      description: "Conception de prototypes en C++ sous Unreal Engine 5 et développement d'un moteur 3D natif avec OpenGL. Création d'outils d'automatisation Python."
    },
    {
      period: "2022 - 2023",
      title: "Unity Developer (C#)",
      company: "Game Studio",
      description: "Développement des mécaniques de combat, intégration de shaders personnalisés et optimisation du frametime mobile et PC."
    },
    {
      period: "2020 - 2022",
      title: "Diplôme / Master en Informatique & Game Development",
      company: "École Supérieure d'Informatique / Jeux Vidéo",
      description: "Spécialisation en programmation 3D, mathématiques appliquées aux moteurs physiques et architectures logicielles C++."
    }
  ]
};
