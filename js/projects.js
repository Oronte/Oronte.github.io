/**
 * ====================================================================
 * LISTE DES PROJETS DU PORTFOLIO
 * ====================================================================
 * Ajoutez, modifiez ou supprimez vos projets ci-dessous.
 * Chaque projet peut avoir :
 * - Une image, un GIF ou une vidéo (locale .mp4/.webm ou YouTube/Vimeo)
 * - Une galerie d'images/vidéos additionnelles dans la pop-up de détails
 * - Des tags et catégories pour le filtrage
 * - Des points techniques détaillés (Architecture, Algorithmes, Outils)
 * - Des liens vers GitHub, Itch.io, Steam, Vidéo YouTube, etc.
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: "chrono-protocol",
    title: "Chrono Protocol",
    category: "unreal", // Valeurs possibles : "unreal", "unity", "native", "tools"
    categoryLabel: "Unreal Engine 5 & C++",
    engine: "Unreal Engine 5.3",
    languages: ["C++", "HLSL", "Blueprints"],
    role: "Lead Programmer & Tech Designer",
    year: "2024",
    pinned: true, // Met le projet en avant avec un badge "Featured"
    
    // Vignette principale (Image ou GIF)
    thumbnail: "assets/images/projects/ue5-action-rpg.svg",
    
    // Média principal pour la modale détaillée :
    // type : "youtube" | "video" | "image" | "gif"
    // Pour une vidéo YouTube : mettez l'URL "embed" ex: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    // Pour un fichier local : "assets/videos/chrono_gameplay.mp4"
    mainMedia: {
      type: "image", // Changez en "youtube" ou "video" selon votre contenu
      url: "assets/images/projects/ue5-action-rpg.svg",
      caption: "Aperçu du système de combat et des effets volumétriques sous UE5"
    },

    shortDescription: "Action-RPG à la troisième personne avec manipulation temporelle, combat dynamique au sabre et boss fights basés sur une IA comportementale.",
    
    fullDescription: `
      <p><strong>Chrono Protocol</strong> est un prototype d'Action-RPG nerveux développé sous Unreal Engine 5 en C++ natif avec l'intégration du <em>Gameplay Ability System (GAS)</em>.</p>
      <p>Le joueur dispose de capacités temporelles (ralentissement localisé, rembobinage de trajectoires de projectiles et dash dimensionnel). L'objectif technique principal était de maintenir 60 FPS constants tout en gérant un système de combos réactif et des particules Niagara intenses.</p>
      <p>Ce projet illustre une architecture solide séparant nettement la logique bas niveau en C++ et l'exposition d'événements modulaires aux designers via des Blueprints légers.</p>
    `,

    // Points techniques clés mis en avant dans la fiche
    technicalHighlights: [
      "Système de compétences robuste utilisant Unreal GAS (Gameplay Ability System) avec Attributs & Effects",
      "Character Controller custom avec animations synchronisées via Motion Matching et root motion",
      "IA d'ennemis complexe programmée avec Behavior Trees, EQS (Environment Query System) et Perception Component",
      "Système de ralentissement temporel affectant sélectivement les acteurs et les émetteurs Niagara",
      "Optimisation de la mémoire et gestion du chargement asynchrone des assets via Soft Object Pointers"
    ],

    // Galerie supplémentaire pour la vue détaillée (Images, GIFs, etc.)
    gallery: [
      { type: "image", url: "assets/images/projects/ue5-action-rpg.svg", caption: "Arène de combat et éclairage Lumen" },
      { type: "image", url: "assets/images/projects/native-engine.svg", caption: "Diagramme d'architecture des capacités C++" }
    ],

    // Liens vers les plateformes externes
    links: {
      github: "https://github.com/votre-nom/chrono-protocol",
      itch: "https://votre-nom.itch.io/chrono-protocol",
      steam: "",
      video: "https://youtube.com/watch?v=exemple",
      demo: ""
    }
  },

  {
    id: "dungeon-recursion",
    title: "Dungeon Recursion",
    category: "unity",
    categoryLabel: "Unity & C#",
    engine: "Unity 6 (URP)",
    languages: ["C#", "HLSL"],
    role: "Gameplay & Systems Programmer",
    year: "2023 - 2024",
    pinned: true,
    thumbnail: "assets/images/projects/unity-roguelike.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/unity-roguelike.svg",
      caption: "Génération procédurale de donjons et rendu en vue isométrique stylisée"
    },

    shortDescription: "Roguelike tactique avec génération procédurale infinie de donjons, architecture ECS/DOTS pour 500+ entités simultanées et pathfinding custom.",
    
    fullDescription: `
      <p><strong>Dungeon Recursion</strong> est un jeu d'exploration tactique en temps réel développé sous Unity. Chaque étage du donjon est généré selon un algorithme procédural combinant des automates cellulaires et la triangulation de Delaunay.</p>
      <p>Pour faire face aux goulets d'étranglement de performance causés par des centaines d'ennemis à l'écran, le système de déplacement et de détection a été réécrit avec Unity DOTS (Entities, C# Job System et le Burst Compiler).</p>
    `,

    technicalHighlights: [
      "Génération procédurale de salles et couloirs via Delaunay Triangulation + Spanning Tree (MST)",
      "Implémentation du C# Job System & Burst Compiler pour calculer le pathfinding de 500 monstres en &lt; 1.2ms",
      "Système d'inventaire découplé utilisant des ScriptableObjects et architecture événementielle",
      "Shaders personnalisés écrits en HLSL pour les effets de brouillard de guerre et de dissolution",
      "Sauvegarde binaire chiffrée avec sérialisation rapide sans allocation mémoire"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/unity-roguelike.svg", caption: "Génération procédurale des salles" }
    ],

    links: {
      github: "https://github.com/votre-nom/dungeon-recursion",
      itch: "https://votre-nom.itch.io/dungeon-recursion",
      video: ""
    }
  },

  {
    id: "aether-engine",
    title: "Aether 3D Engine",
    category: "native",
    categoryLabel: "C++ Natif & Moteur 3D",
    engine: "Moteur Maison (From Scratch)",
    languages: ["C++20", "OpenGL 4.5 / Vulkan", "GLSL"],
    role: "Engine Programmer",
    year: "2023",
    pinned: true,
    thumbnail: "assets/images/projects/native-engine.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/native-engine.svg",
      caption: "Pipeline de rendu PBR avec ombrage en cascade et profiler de mémoire"
    },

    shortDescription: "Moteur de jeu 3D développé en C++20 sans framework lourd. Rendu PBR (Physically Based Rendering), Job System multithreadé et système ECS.",
    
    fullDescription: `
      <p><strong>Aether Engine</strong> est un moteur de jeu 3D conçu à partir de zéro afin d'explorer en profondeur les fondations des moteurs modernes.</p>
      <p>Le moteur comprend son propre gestionnaire de mémoire à allocateurs personnalisés (Linear, Stack, Pool Allocators), un système d'entités-composants (ECS) orienté cache CPU (Data-Oriented Design) et un pipeline de rendu PBR complet.</p>
    `,

    technicalHighlights: [
      "Pipeline de rendu moderne : PBR métallique/rugosité, ombres dynamiques Shadow Mapping directionnel",
      "Multithreading : Job System basé sur une file lock-free et fibers pour répartir les calculs sur les cœurs CPU",
      "Gestion mémoire manuelle sans fuites : allocateurs par arène (Arena Allocator) et zéro allocations en runtime par frame",
      "Mathématiques 3D custom : bibliothèque Vector3/4, Matrix4x4 et Quaternion optimisée SIMD",
      "Intégration d'outils de debugging temps réel : Dear ImGui pour l'interface éditeur et Tracy Profiler"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/native-engine.svg", caption: "Éditeur ImGui et statistiques de draw calls" }
    ],

    links: {
      github: "https://github.com/votre-nom/aether-3d-engine",
      demo: "",
      video: ""
    }
  },

  {
    id: "pypipeline-tools",
    title: "PyCook & Asset Pipeline",
    category: "tools",
    categoryLabel: "Outils & Pipeline Python",
    engine: "Outil Externe / CLI & GUI",
    languages: ["Python 3.11", "PyQt6", "C++"],
    role: "Tools & Pipeline Developer",
    year: "2024",
    pinned: false,
    thumbnail: "assets/images/projects/python-tool.svg",
    
    mainMedia: {
      type: "image",
      url: "assets/images/projects/python-tool.svg",
      caption: "Interface PyQt6 pour l'automatisation de batch baking et validation d'assets"
    },

    shortDescription: "Suite d'outils d'automatisation en Python pour l'ingestion d'assets 3D, génération automatique de LODs, vérification de collision et export UE5 / Unity.",
    
    fullDescription: `
      <p>Conçu pour réduire les frictions des équipes créatives, <strong>PyCook</strong> est un outil d'automatisation de pipeline d'assets.</p>
      <p>Il surveille les répertoires sources, convertit et optimise automatiquement les maillages FBX/glTF, génère les niveaux de détails (LODs) via l'API sans interface de Blender et exporte les métadonnées prêtes à l'emploi pour Unreal Engine 5 et Unity.</p>
    `,

    technicalHighlights: [
      "Interface graphique moderne et réactive construite avec PyQt6 et thèmes sombres custom",
      "Traitement asynchrone multithreadé (QThreadPool) pour traiter des centaines d'assets en arrière-plan",
      "Intégration de l'API headless de Blender pour la décimation de polygones et le calcul de normales",
      "Scripts d'importation automatique en Python pour l'Unreal Editor (Unreal Python API)",
      "Vérification automatique des standards : collisions concaves/convexes, noms de textures et taille puissance de deux"
    ],

    gallery: [
      { type: "image", url: "assets/images/projects/python-tool.svg", caption: "Visualisation du graphe de dépendances d'assets" }
    ],

    links: {
      github: "https://github.com/votre-nom/pycook-asset-pipeline"
    }
  }
];
