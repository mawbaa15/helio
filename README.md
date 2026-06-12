# Studio Hélio — Landing Page

Ce projet est une landing page moderne, performante et hautement optimisée pour la conversion, réalisée pour le **Studio Hélio**, un studio de Pilates & mobilité haut de gamme à Bordeaux.

---

## 🛠️ Stack Technique & Choix

Pour ce projet, le choix s'est porté sur une stack **Vanilla HTML5, CSS3 et JavaScript Moderne** :
- **Performance & Conversion** : Une landing page doit charger instantanément. L'absence de framework lourd (comme React ou Vue) permet d'éliminer tout overhead de bundle, garantissant un temps de chargement ultra-rapide (idéal pour la conversion et le SEO).
- **Maintenance Facilitée** : Les responsabilités sont clairement séparées entre le balisage ([index.html](./index.html)), la présentation ([styles.css](./styles.css)) et le comportement dynamique ([script.js](./script.js)).
- **Tailwind CSS CLI v4 (Production ready)** : Le projet intègre Tailwind CSS v4 compilé localement par la CLI officielle. Les extensions de thème (couleurs de marque, typographies) sont configurées dans [src/input.css](./src/input.css) via la nouvelle directive `@theme`. Le fichier final [styles.css](./styles.css) est minifié à la volée, ce qui supprime tout le CSS inutilisé pour un chargement instantané.

---

## ⚙️ Compilation CSS pour la Production

Le projet utilise la CLI officielle de Tailwind CSS v4 pour compiler et minifier les styles.

### 1. Installer les dépendances
```bash
npm install
```

### 2. Compiler et minifier le CSS
```bash
npm run build:css
```
La compilation analyse les fichiers du projet (comme `./index.html`) pour générer uniquement le CSS nécessaire dans [styles.css](./styles.css).

## 📐 Décisions de Structure & Design

1. **Séparation Stricte des Préoccupations (Separation of Concerns)** :
   Le CSS et le JavaScript ont été extraits du fichier HTML principal afin d'obtenir des fichiers modulaires. Par exemple, le style inline de l'image de fond du sélecteur de créneau a été proprement migré sous forme de règle CSS (`#form-slot`) dans [styles.css](./styles.css).
2. **Design Sensoriel & Premium** :
   Respect strict de la charte graphique (fond crème `#F4EFE9`, texte profond `#2A2622` et couleur d'accent terracotta `#C66B4A`). Utilisation d'un pairing typographique élégant avec *Playfair Display* (sérif premium pour les titres) et *Inter* (sans-serif hautement lisible pour le texte courant).
3. **Optimisation de la Conversion & UX** :
   - Présence d'appels à l'action (CTA) clairs et contrastés qui guident naturellement l'utilisateur vers l'objectif principal : réserver le cours d'essai gratuit.
   - Validation en temps réel du formulaire de réservation côté client avec messages d'erreur ciblés et états visuels clairs (`input-error`).
4. **Accessibilité (A11y)** :
   - Ajout de styles personnalisés pour l'état `:focus-visible` afin de garantir une navigation claire au clavier.
   - Gestion des attributs ARIA (`aria-expanded`, `aria-controls`) sur le bouton de menu burger mobile.

---

## 🚀 Améliorations Futures (avec une semaine de plus)

Si nous disposions de plus de temps pour faire évoluer ce produit :
- **Intégration d'un vrai Backend** : Raccorder le formulaire à un service comme Netlify Forms, Formspree ou une API Serverless pour enregistrer les leads dans un CRM et envoyer un email automatique de confirmation au client.
- **Calendrier de Réservation Interactif** : Remplacer le sélecteur de créneau générique par un calendrier interactif (type Calendly ou Cal.com) pour permettre de réserver un créneau précis et réel directement.
- **Tests Automatisés** : Ajouter des tests de bout en bout (E2E) avec Playwright ou Cypress pour valider le comportement du formulaire, de l'accordéon FAQ et de la réactivité mobile.
- **Optimisation des Images** : Convertir et redimensionner dynamiquement les images au format moderne WebP/AVIF pour alléger encore plus le chargement de la page.

---

## 📚 Ressources Empruntées (Crédits)

- **Framework CSS** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Polices** : *Playfair Display* et *Inter* via le CDN Fontsource
- **Icônes** : Tracés SVG inspirés de la bibliothèque [Heroicons](https://heroicons.com/)
- **Images** : Images d'illustration haute résolution (sources libres de droits)
