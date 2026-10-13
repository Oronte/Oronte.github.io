/**
 * ====================================================================
 * CONFIGURATION DU PORTFOLIO - ORONTE SOLER
 * ====================================================================
 * Informations extraites du CV et du profil GitHub : https://github.com/Oronte
 */

window.PORTFOLIO_CONFIG = {
  // Informations Personnelles
  profile: {
    name: "Oronte Soler",
    role: "Étudiant en Programmation Informatique & Game Development",
    tagline: "En 2ème année à Objectif3D (Montpellier), passionné par le C++, C#, Unreal Engine, Unity et le développement de moteurs 2D/3D. À la recherche d'une alternance.",
    location: "Castelnau-le-Lez / Montpellier (34)",
    statusText: "Recherche active d'une alternance (2025 - 2026)",
    statusAvailable: true,
    avatar: "assets/images/oronte.png",
    resumeUrl: "assets/resume.pdf",
    email: "orontesoler06@gmail.com",
    phone: "07 83 87 01 25"
  },

  // Liens Réseaux Sociaux & Plateformes
  socials: {
    github: "https://github.com/Oronte",
    linkedin: "", // Ajoutez votre URL LinkedIn ici dès que vous en avez une
    itchio: "",
    youtube: "",
    artstation: "",
    twitter: "",
    steam: ""
  },

  // À propos de vous
  about: {
    title: "Étudiant à Objectif3D & Créateur de KrampusEngine",
    paragraphs: [
      "Actuellement en <strong>deuxième année de programmation à l'école Objectif3D</strong> à Montpellier, je développe des compétences solides en <strong>C++</strong> et <strong>C#</strong>, ainsi qu'en utilisation de moteurs de référence de l'industrie tels qu'<strong>Unreal Engine</strong> et <strong>Unity</strong>.",
      "Passionné par l'architecture logicielle et le fonctionnement interne des moteurs, j'ai notamment conçu en totale autonomie <strong>KrampusEngine</strong>, un moteur de jeu 2D moderne en C++20 avec SFML 3.0 intégrant un modèle Acteur/Composant, un moteur physique et un système de collisions.",
      "J'ai également eu l'opportunité de développer un <strong>Serious Game en Réalité Virtuelle pour l'entreprise La Poste</strong>, au sein d'une équipe pluridisciplinaire (programmeurs et graphistes 3D), destiné à la formation des employés (conduite de transpalette, tri du matériel et prévention des risques).",
      "Je souhaite aujourd'hui mettre mon autonomie, ma rigueur et ma passion de la programmation au service d'une entreprise pour participer à des projets concrets et approfondir ma pratique dans le cadre d'une <strong>alternance</strong>."
    ],
    stats: [
      { number: "2ème", label: "Année à Objectif3D" },
      { number: "C++ / C#", label: "Langages de prédilection" },
      { number: "UE5 & Unity", label: "Moteurs 3D pratiqués" },
      { number: "100%", label: "Motivation pour l'alternance" }
    ]
  },

  // Compétences techniques
  skillsCategories: [
    {
      name: "Langages de programmation",
      icon: "fa-code",
      skills: [
        { name: "C++ (C++20)", level: "Avancé", details: "Programmation orientée objet, gestion de la mémoire, pointeurs, structures de données, SFML 3.0" },
        { name: "C# (.NET)", level: "Avancé", details: "Architecture modulaire, C# pour Unity, ScriptableObjects, structures de contrôle" },
        { name: "Python", level: "Intermédiaire", details: "Bases d'algorithmique, scripts d'automatisation et traitement de données (Spécialité NSI)" }
      ]
    },
    {
      name: "Moteurs & Frameworks",
      icon: "fa-gamepad",
      skills: [
        { name: "Unreal Engine", level: "En formation", details: "C++ & Blueprints, Game Framework, apprentissage approfondi à Objectif3D" },
        { name: "Unity", level: "En formation", details: "Développement en C#, physique 2D/3D, gestion de scènes et composants" },
        { name: "C++ Natif & SFML 3.0", level: "Avancé", details: "Création autonome de KrampusEngine : boucle de jeu, rendu 2D, bibliothèque statique" },
        { name: "Réalité Virtuelle (VR)", level: "Pratiqué", details: "Développement du Serious Game La Poste, immersion et interactions physiques 6DoF" }
      ]
    },
    {
      name: "Architecture & Spécialités",
      icon: "fa-microchip",
      skills: [
        { name: "Architecture Moteur", level: "Pratiqué", details: "Modèle Actor / Component, séparation stricte entre moteur runtime et logique de jeu" },
        { name: "Physique 2D & Collisions", level: "Pratiqué", details: "Boîtes AABB, Cercle-Rectangle, impulsions, gravité, amortissement et velocity clamping" },
        { name: "Animation & Entrées", level: "Pratiqué", details: "Gestion des spritesheets par frames, Input System clavier/souris réactif" },
        { name: "Mathématiques & Algorithmique", level: "Avancé", details: "Spécialités NSI et Mathématiques au Baccalauréat (Mention Assez Bien)" }
      ]
    },
    {
      name: "Outils & Workflow",
      icon: "fa-screwdriver-wrench",
      skills: [
        { name: "Visual Studio & VS Code", level: "Quotidien", details: "Environnement principal de développement C++/C#, compilation et débogage" },
        { name: "Git & GitHub", level: "Quotidien", details: "Contrôle de version, gestion des dépôts, branches, GitHub Pages" },
        { name: "Outils Internes", level: "Régulier", details: "Création d'utilitaires dédiés tels que VisualStudioLauncher" },
        { name: "Travail d'équipe & Communication", level: "Solide", details: "Collaboration pluridisciplinaire avec graphistes 3D, relation avec La Poste, BAFA" }
      ]
    }
  ],

  // Parcours / Expérience & Formation
  timeline: [
    {
      period: "2025 - 2026",
      title: "2ème Année de Programmation Informatique",
      company: "Objectif3D - École des arts numériques (Montpellier)",
      description: "Formation intensive dédiée à la programmation de jeux vidéo : C++, C#, Unreal Engine, Unity, mathématiques appliquées et architectures logicielles."
    },
    {
      period: "2026",
      title: "Développeur Serious Game VR - Entreprise La Poste",
      company: "Projet Professionnel en Équipe",
      description: "Développement d'un environnement de réalité virtuelle pour la formation des employés de La Poste (conduite de transpalette, tri du matériel, sensibilisation aux risques). Travail conjoint entre programmeurs et graphistes 3D."
    },
    {
      period: "2026",
      title: "Conception de KrampusEngine (Moteur 2D C++20)",
      company: "Projet Personnel & Open Source",
      description: "Création autonome d'un moteur de jeu 2D en C++20 sous forme de bibliothèque statique avec SFML 3.0 : architecture Acteur/Composant, moteur physique, collisions AABB et animations."
    },
    {
      period: "2024",
      title: "Baccalauréat Général - Mention Assez Bien",
      company: "Spécialités NSI (Numérique et Sciences Informatiques) & Mathématiques",
      description: "Acquisition de bases solides en algorithmique, programmation Python et mathématiques."
    },
    {
      period: "2024",
      title: "Obtention du BAFA (Spécialité 6 - 12 ans)",
      company: "Animation & Pédagogie",
      description: "Développement de compétences relationnelles, sens des responsabilités, gestion de groupe et esprit d'équipe."
    },
    {
      period: "08/2023",
      title: "Stage d'observation en entreprise",
      company: "SMILE (Leader européen des solutions open source)",
      description: "Découverte du monde de l'ingénierie logicielle, des méthodologies agiles et de l'intégration de solutions ouvertes."
    },
    {
      period: "12/2022 & 08/2021",
      title: "Stages en Recherche & Bio-informatique",
      company: "Institut des Neurosciences de Montpellier (INM) & Institut de Génétique Moléculaire (IGMM)",
      description: "Immersion auprès d'équipes de chercheurs et de bio-informaticiens manipulant du code et des données scientifiques."
    }
  ]
};
