# 🎮 Game Developer Portfolio Template

Un template de portfolio moderne, percutant et ultra-léger spécialement conçu pour les **Game Developers** (C++, C#, Python, Unreal Engine, Unity, Moteurs Natifs).

Ce template est conçu pour être hébergé directement sur **GitHub Pages** en **zéro configuration** (aucun outil de build comme npm/vite/webpack requis, aucune dépendance complexe).

---

## 🚀 Fonctionnalités Clés

- **Esthétique Gaming & Tech Sombre** : Design sombre moderne avec accents néon (cyan, indigo, émeraude), typographie code (*JetBrains Mono*) et animation interactive de particules/constellation en arrière-plan.
- **Support Multimédia Complet** :
  - Images (`.png`, `.jpg`, `.svg`, `.webp`)
  - GIFs animés pour montrer du gameplay dynamique
  - Vidéos YouTube ou Vimeo intégrées automatiquement
  - Fichiers vidéos locaux (`.mp4`, `.webm`)
- **Filtres par Catégorie & Recherche en Direct** :
  - Onglets : *Tous*, *Unreal Engine*, *Unity*, *C++ Natif & Moteur*, *Outils & Python*
  - Barre de recherche temps réel (par mot-clé, techno, mécanique, etc.)
- **Fiches Projets Détaillées (Lightbox / Modale)** :
  - Description approfondie
  - **Points clés & défis techniques** (architecture, multithreading, optimisation de draw calls, ECS, mathématiques 3D)
  - Galerie de captures d'écran et vidéos
  - Boutons de liens directs : GitHub, Itch.io, Steam, Vidéo YouTube, Démo jouable
- **Section Compétences Structurée** :
  - Catégories dédiées : Langages (C++, C#, Python, Shaders), Moteurs (UE5, Unity, Natif), Spécialités (Gameplay, Physique, IA, Réseau) et Outils (Git, Perforce, RenderDoc, Visual Studio, CMake).
- **Réseaux & Contact** :
  - Bouton "Copier l'email" en 1 clic avec notification Toast
  - Liens GitHub, LinkedIn, Itch.io, YouTube, ArtStation, Steam, Twitter/X
  - Bouton de téléchargement du CV au format PDF
- **Compatible GitHub Pages à 100%** : Fonctionne directement dès que le dépôt est poussé sur GitHub.

---

## 📁 Structure des Fichiers

```text
Portfolio/
├── index.html                   # Page principale HTML
├── README.md                    # Ce guide
├── css/
│   └── style.css                # Styles, thème sombre, responsive & animations
├── js/
│   ├── config.js                # 👈 Vos informations personnelles, réseaux, compétences, bio
│   ├── projects.js              # 👈 Vos projets de jeux vidéo, vidéos, images, GIFs, liens
│   └── main.js                  # Logique d'affichage, filtres, recherche, modale & canvas
└── assets/
    ├── favicon.svg              # Icône manette & code
    ├── resume.pdf               # Votre CV (remplacez-le par le vôtre)
    └── images/
        ├── placeholder-avatar.svg
        └── projects/            # Vos captures de projets, GIFs, etc.
```

---

## ✏️ Guide de Personnalisation Rapide

Vous n'avez pas besoin de toucher à `index.html` pour la plupart des changements ! Tout se configure facilement dans deux fichiers JavaScript très clairs et commentés.

### 1. Vos Informations Personnelles : `js/config.js`

Ouvrez `js/config.js` dans votre éditeur de code (VS Code, Notepad++, etc.) :

1. **Profil** :
   ```javascript
   profile: {
     name: "Votre Nom",
     role: "Gameplay & Engine Programmer",
     tagline: "Spécialisé en C++, Unreal Engine, Unity et programmation bas niveau.",
     location: "Paris, France & Remote",
     statusText: "Disponible pour opportunités",
     avatar: "assets/images/mon-avatar.png", // ou .svg, .jpg
     resumeUrl: "assets/resume.pdf",
     email: "mon.adresse@gmail.com"
   }
   ```
2. **Réseaux sociaux** :
   ```javascript
   socials: {
     github: "https://github.com/votre-compte",
     linkedin: "https://linkedin.com/in/votre-profil",
     itchio: "https://votre-compte.itch.io",
     youtube: "https://youtube.com/@votre-chaine",
     artstation: "https://artstation.com/votre-profil", // laissez "" si non utilisé
     twitter: "https://x.com/votre-compte"
   }
   ```
3. **Compétences & Expériences** : Ajustez les listes de compétences et la timeline selon votre parcours.

---

### 2. Vos Projets : `js/projects.js`

Pour chaque projet, ajoutez un objet dans le tableau `window.PORTFOLIO_PROJECTS` :

```javascript
{
  id: "mon-super-jeu",
  title: "Titre du Jeu",
  category: "unreal", // Options : "unreal", "unity", "native", "tools"
  categoryLabel: "Unreal Engine 5 & C++",
  engine: "Unreal Engine 5.3",
  languages: ["C++", "HLSL"],
  role: "Gameplay Programmer",
  year: "2024",
  pinned: true, // Affiche le badge "Featured"
  
  // Vignette principale pour la carte (Image ou GIF)
  thumbnail: "assets/images/projects/mon-jeu-thumb.png",
  
  // Média principal dans la modale :
  // Option A : Vidéo YouTube
  mainMedia: {
    type: "youtube",
    url: "https://www.youtube.com/embed/VOTRE_ID_VIDEO"
  },
  // Option B : Vidéo locale MP4
  // mainMedia: { type: "video", url: "assets/videos/gameplay.mp4" },
  // Option C : Image ou GIF animé
  // mainMedia: { type: "gif", url: "assets/images/projects/gameplay.gif" },

  shortDescription: "Description courte affichée sur la carte.",
  
  fullDescription: `
    <p>Description détaillée affichée dans la modale quand on clique sur le projet.</p>
  `,

  technicalHighlights: [
    "Système de combat basé sur le Gameplay Ability System (GAS)",
    "Calcul de trajectoires physiques optimisé en multithread",
    "Génération procédurale de maillages à l'exécution"
  ],

  // Galerie supplémentaire
  gallery: [
    { type: "image", url: "assets/images/projects/capture1.png", caption: "Capture d'écran 1" },
    { type: "image", url: "assets/images/projects/gameplay.gif", caption: "GIF de combat" }
  ],

  // Liens externes (laissez vide "" si vous n'en avez pas)
  links: {
    github: "https://github.com/votre-compte/mon-projet",
    itch: "https://votre-compte.itch.io/mon-jeu",
    steam: "",
    video: "https://youtube.com/watch?v=..."
  }
}
```

---

## 🖼️ Comment Ajouter des Images, GIFs et Vidéos

1. **Images & GIFs** :
   - Déposez vos fichiers dans le dossier `assets/images/projects/`.
   - Formats recommandés : `.webp`, `.png`, `.jpg` ou `.gif`.
   - Indiquez le chemin relatif dans `js/projects.js` : `"assets/images/projects/mon-fichier.gif"`.

2. **Vidéos YouTube** :
   - Obtenez le lien `embed` de votre vidéo (ex : `https://www.youtube.com/embed/dQw4w9WgXcQ`).
   - Mettez `type: "youtube"` et collez l'URL dans `url`.

3. **Vidéos Locales (.mp4 / .webm)** :
   - Créez un dossier `assets/videos/` et déposez votre vidéo (taille recommandée : < 25 Mo pour respecter les limites GitHub).
   - Mettez `type: "video"` et indiquez `url: "assets/videos/demo.mp4"`.

---

## 💻 Tester en Local

Aucune commande complexe n'est obligatoire ! Vous avez le choix :

### Méthode 1 (Le plus simple)
Double-cliquez directement sur `index.html` pour l'ouvrir dans Google Chrome, Firefox, Edge ou Brave.

### Méthode 2 (Avec un serveur local léger)
Si vous utilisez VS Code :
- Installez l'extension **Live Server**.
- Faites un clic droit sur `index.html` > **Open with Live Server**.

Ou via le terminal (si vous avez Python ou Node.js) :
```bash
# Avec Python :
python -m http.server 8000

# Ou avec Node.js :
npx serve .
```
Rendez-vous ensuite sur `http://localhost:8000`.

---

## 🌐 Déploiement sur GitHub Pages pour Oronte

Vous possédez déjà le dépôt **`Oronte.github.io`** sur votre compte GitHub ! C'est le format officiel de GitHub pour avoir une URL directe et prestigieuse :
👉 **`https://oronte.github.io`**

### Commandes pour mettre en ligne :

Dans votre terminal PowerShell (dans ce dossier `Portfolio`) :

```bash
# 1. Ajouter tous les fichiers
git add .

# 2. Créer le commit
git commit -m "Portfolio Oronte Soler - Game Developer & Objectif3D"

# 3. Définir la branche principale
git branch -M main

# 4. Lier votre dépôt GitHub existant
git remote add origin https://github.com/Oronte/Oronte.github.io.git

# 5. Pousser vers GitHub
git push -u origin main
```

*(Si le dépôt distant contenait déjà des fichiers, faites `git pull --rebase origin main` ou `git push -u origin main --force` selon vos préférences).*

### Activer GitHub Pages (si ce n'est pas déjà fait) :
1. Allez sur votre dépôt : `https://github.com/Oronte/Oronte.github.io` > **Settings** > **Pages**.
2. Sous **Build and deployment**, vérifiez que la source est **Deploy from a branch**, branche **main**, dossier **/(root)**.
3. Votre site sera instantanément en ligne sur **`https://oronte.github.io`** !

Votre portfolio est en ligne ! Dès que vous ferez un nouveau `git commit` et `git push`, le site se mettra automatiquement à jour.

---

## 📄 Licence & Crédits
Ce template est libre d'utilisation et de modification pour vos besoins personnels et professionnels.
Icons par [Font Awesome](https://fontawesome.com).
Polices par [Google Fonts](https://fonts.google.com).
