# Galerie Récap 2025 ❤️

Une magnifique galerie de type "Stories" créée avec React, TypeScript et Framer Motion, inspirée des stories Snapchat, pour partager vos plus beaux moments ensemble.

## ✨ Fonctionnalités

- 🎨 Design moderne type "Stories" avec animations fluides (Framer Motion)
- 📸 Support des photos et vidéos
- 💬 Citations romantiques personnalisées sur chaque story
- 📱 Design ultra-responsive (mobile, tablette, desktop)
- ⚡ Navigation intuitive (clic, clavier, swipe)
- 🎭 Animations et transitions magnifiques
- ⏱️ Barres de progression automatiques (comme Snapchat)
- ⏸️ Pause automatique au survol
- 🎯 Navigation par zones (gauche = précédent, droite = suivant)

## 🚀 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur à l'adresse affichée (généralement `http://localhost:5173`)

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 🎮 Utilisation

### Navigation dans les Stories

- **Clic gauche** : Story précédente
- **Clic droit** : Story suivante
- **Clic centre** : Pause/Reprendre
- **Flèche gauche** : Story précédente
- **Flèche droite** : Story suivante
- **Échap** : Fermer la story
- **Espace** : Pause/Reprendre
- **Survol souris** : Pause automatique

### Grille de Stories

- Cliquez sur n'importe quelle story pour l'ouvrir
- Les stories sont affichées dans une grille responsive
- Les vidéos se lancent automatiquement au survol

## 📁 Structure

- `public/` - Contient vos photos et vidéos
- `src/` - Code source de l'application
  - `components/` - Composants React
    - `StoryCard.tsx` - Carte de story dans la grille
    - `StoryViewer.tsx` - Lecteur de story plein écran
  - `data/` - Données
    - `quotes.ts` - Citations romantiques
  - `App.tsx` - Composant principal
  - `main.tsx` - Point d'entrée

## 🎨 Personnalisation

### Modifier les citations

Éditez le fichier `src/data/quotes.ts` pour ajouter ou modifier les citations qui apparaissent sur chaque story.

### Modifier les couleurs

Les couleurs peuvent être modifiées dans `src/index.css` via les variables CSS :
- `--primary-color` : Couleur principale (rose par défaut)
- `--secondary-color` : Couleur secondaire
- `--accent-color` : Couleur d'accentuation

### Ajouter des médias

Placez simplement vos photos et vidéos dans le dossier `public/` et mettez à jour la liste dans `src/App.tsx` (ou créez un système de chargement dynamique).

## 💝 Fonctionnalités Spéciales

- **Barres de progression** : Chaque story a une barre de progression qui se remplit automatiquement
- **Citations animées** : Chaque story affiche une citation romantique unique
- **Transitions fluides** : Animations douces entre les stories
- **Dégradé animé** : Fond avec dégradé qui change de couleur
- **Effets visuels** : Blur, ombres, et effets de lumière

## 🛠️ Technologies

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Framer Motion** - Animations fluides
- **Vite** - Build tool ultra-rapide
- **CSS3** - Styles modernes avec animations

Profitez de votre galerie de stories romantique ! ❤️
