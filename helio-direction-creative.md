# Studio Hélio — Direction Créative 2.0
> Document de référence design · Version 1.0

---

## 1. Positionnement visuel

**Concept directeur : "Le corps qui respire"**

L'identité visuelle de Hélio doit incarner ce que le Pilates fait ressentir — légèreté, force intérieure, espace. Pas un studio fitness. Pas un spa. Un espace entre les deux : exigeant et apaisant à la fois.

**Moodboard en 3 mots :** Organique · Éditorial · Sensoriel

---

## 2. Palette de couleurs

### Couleur signature
```
Vert Sauge Profond   #3D5A3E   → fond de sections hero, accents forts
```
Cette couleur ancre l'identité. Elle évoque la nature, le soin, la sérénité sans tomber dans le wellness cliché. Elle contraste avec la chaleur du blanc cassé.

### Palette complète

| Nom | Hex | Usage |
|---|---|---|
| Vert Sauge Profond | `#3D5A3E` | Hero background, sections alternées, CTA principal |
| Brume Calcaire | `#F5F2EC` | Fond général de page |
| Terre Chaude | `#C9A882` | Accents décoratifs, séparateurs, lignes |
| Ivoire Pur | `#FDFAF5` | Cartes, fond de formulaire |
| Anthracite Doux | `#2C2C2A` | Texte principal |
| Gris Sage | `#7A7A72` | Texte secondaire, légendes |
| Blanc Lumière | `#FFFFFF` | Texte sur fond sombre |

### Règles d'application
- Section hero : fond `#3D5A3E`, texte blanc
- Sections intermédiaires : alternance `#F5F2EC` et `#FDFAF5`
- Une section par page avec fond sombre (pas deux)
- La couleur Terre Chaude n'est jamais utilisée en fond — uniquement en détail

---

## 3. Typographie

### Système de fontes

| Rôle | Fonte | Style |
|---|---|---|
| Titres display (H1, H2 majeurs) | Cormorant Garamond | Italic, 400 |
| Titres de section (H2, H3) | DM Sans | Medium, 500 |
| Corps de texte | DM Sans | Regular, 400 |
| Labels, badges, nav | DM Sans | Medium, 500, letterspacing +0.06em |

> Les deux fontes sont gratuites sur Google Fonts.

### Hiérarchie de tailles (desktop)

```
H1 display    → 72–96px  · Cormorant Italic · line-height 1.05
H2 section    → 48px     · Cormorant Italic · line-height 1.1
H3 sous-titre → 22px     · DM Sans 500
Corps         → 17px     · DM Sans 400      · line-height 1.75
Label/nav     → 13px     · DM Sans 500      · uppercase, ls +0.08em
```

### Règle d'or typographique
Le H1 du hero doit être **massif et en italique** — au moins 80px. C'est le premier signal que ce n'est pas un site générique. La combinaison serif italique + sans-serif droite crée instantanément la tension éditoriale.

---

## 4. Section par section — Redesign

### 4.1 Navigation

**Actuelle :** liens texte + CTA bouton standard

**Nouvelle direction :**
- Fond transparent en haut, qui prend la couleur `#F5F2EC` avec backdrop-blur au scroll
- Logo en Cormorant Italic, taille 20px
- Liens en DM Sans 13px uppercase, lettre-spacing +0.08em, sans underline
- CTA "Réserver" : bouton minimaliste, border 1px `#3D5A3E`, fond transparent, texte `#3D5A3E` — il prend le fond vert au hover
- Transition douce 200ms sur tous les états

---

### 4.2 Hero

**Actuelle :** Titre + sous-titre + 2 boutons + image à droite + 3 stats

**Nouvelle direction :**

```
┌─────────────────────────────────────────────────┐
│  FOND : #3D5A3E                                 │
│                                                 │
│  [espace blanc 80px]                            │
│                                                 │
│  Pilates & Mobilité                             │
│  [label 13px uppercase, Terre Chaude]           │
│                                                 │
│  Renforce ton corps                             │
│  sans le casser.                                │
│  [96px · Cormorant Italic · Blanc]              │
│                                                 │
│  [séparateur ligne 1px Terre Chaude, 60px]      │
│                                                 │
│  Petits groupes (6 max), encadré, pour          │
│  gagner en force, souplesse et sérénité.        │
│  [17px · DM Sans · Blanc 80%]                  │
│                                                 │
│  [CTA] Réserver mon cours d'essai →             │
│  [fond blanc, texte vert, radius 4px]           │
│                                                 │
│  [Image pleine largeur qui déborde en bas]      │
│  [Photo réelle : studio, lumière naturelle]     │
│  [dépasse sur la section suivante de 80px]      │
└─────────────────────────────────────────────────┘
```

**Points clés :**
- Supprimer les 3 stats du hero → elles apparaîtront dans une bande défilante plus bas
- L'image doit être une vraie photo du studio (pas une IA)
- L'image déborde en bas sur fond blanc = effet de rupture de grille élégant
- Le bouton CTA en fond blanc sur fond vert = contraste fort, pas de CTA fantôme

---

### 4.3 Bande de preuve (nouvelle section)

Entre le hero et les piliers, ajouter une bande horizontale défilante en continu :

```
⬡ 6 élèves max   ·   ⬡ 3 coachs certifiés   ·   ⬡ +400h de formation   
·   ⬡ Bordeaux depuis 2022   ·   ⬡ 1er cours offert   ·   [répétition]
```

- Fond `#2C2C2A` (anthracite), texte blanc
- Animation CSS `marquee` en continu, 30s
- Texte DM Sans 13px uppercase
- Séparer les items avec un losange `⬡` en Terre Chaude
- Hauteur 48px

---

### 4.4 Section Piliers

**Actuelle :** 3 cards identiques, grid centrée

**Nouvelle direction — layout asymétrique :**

```
┌──────────────────────────────────────────────────────┐
│  [H2 Cormorant Italic 48px, aligné à gauche]         │
│  Trois piliers pour                                  │
│  ta transformation.                                  │
│                                                      │
│  ┌──────────────┐  ┌───────────────────────────────┐ │
│  │   01         │  │  02                           │ │
│  │              │  │                               │ │
│  │  Petits      │  │  Coachs diplômés              │ │
│  │  groupes     │  │                               │ │
│  │              │  │  [texte]                      │ │
│  │  [texte]     │  │                               │ │
│  │              │  └───────────────────────────────┘ │
│  │              │  ┌───────────────────────────────┐ │
│  │              │  │  03  Progrès mesurés  [texte] │ │
│  └──────────────┘  └───────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

- Card 1 (grand) : fond `#3D5A3E`, texte blanc, plus haute
- Cards 2 et 3 : fond `#FDFAF5`, bordure 0.5px `#C9A882`
- Numéros `01` `02` `03` en Cormorant Italic 64px, opacité 15%, décoratifs
- Pas de titre de section centré avec sous-titre — le H2 est aligné à gauche, brut

---

### 4.5 Section Méthode

**Actuelle :** 3 étapes numérotées + image à droite

**Nouvelle direction — timeline verticale avec image fullwidth :**

Image pleine largeur du studio en premier (vraie photo), puis :

```
  01 ────────────────────────────────────────────────
     Tu réserves ton cours d'essai gratuit
     [17px, corps texte]
     
  ↓
  
  02 ────────────────────────────────────────────────
     On fait ton bilan posture/mobilité
     [17px, corps texte]
     
  ↓
  
  03 ────────────────────────────────────────────────
     Tu rejoins un créneau qui te va
     [17px, corps texte]
```

- Numéros en Cormorant Italic 120px, couleur `#3D5A3E`, opacity 20%
- Ligne séparatrice 1px `#C9A882` pleine largeur
- CTA centré en bas : fond `#3D5A3E`, texte blanc, padding 16px 40px

---

### 4.6 Section Tarifs

**Actuelle :** 3 cards alignées, badge "Le plus choisi"

**Direction :** Garder la structure, améliorer l'exécution

- Fond de section : `#2C2C2A` (anthracite foncé)
- Cards : fond `#F5F2EC`, bordure subtile
- Card "plus populaire" : fond `#3D5A3E`, texte blanc — pas de badge, la couleur suffit
- Prix en Cormorant Italic 56px
- Retirer "valable 3 mois" de la ligne prix — mettre en note sous le CTA

---

### 4.7 Section Témoignages

**Actuelle :** 3 cards avec initiales

**Nouvelle direction — obligatoire :**

1. Obtenir des vraies photos des membres (avec permission)
2. Format : citation en grand, photo ronde à gauche, nom + durée à droite
3. La citation doit être en Cormorant Italic 32px — pas dans une card
4. Alternance gauche/droite sur les 3 témoignages
5. Si pas de photos disponibles : utiliser un format "chiffre fort + citation courte"

```
  "Mon mal de dos a disparu en 2 mois."
  [32px Cormorant Italic #2C2C2A]
  
  — Camille R., membre depuis 4 mois
  [13px DM Sans, Gris Sage]
```

---

### 4.8 FAQ

**Actuelle :** accordéon standard

**Direction :** Garder l'accordéon, améliorer la typographie

- Questions en DM Sans 17px 500
- Réponses en DM Sans 17px 400, line-height 1.75
- Séparateur `+` / `×` à droite, couleur `#3D5A3E`
- Fond de section `#F5F2EC`
- Pas de border-radius prononcé — lignes droites, épurées

---

### 4.9 Section Contact / CTA Final

**Actuelle :** formulaire + infos côte à côte

**Nouvelle direction :**

```
┌────────────────────────────────────────────────────┐
│  FOND : #3D5A3E                                    │
│                                                    │
│  Ton premier cours                                 │
│  est offert.                                       │
│  [72px Cormorant Italic Blanc]                     │
│                                                    │
│  [Formulaire sur fond blanc arrondi]               │
│  [Champs minimalistes, bordure bottom only]        │
│  [CTA fond blanc, texte vert]                      │
│                                                    │
│  Adresse · Horaires · Email · Téléphone            │
│  [13px uppercase, Blanc 60%]                       │
└────────────────────────────────────────────────────┘
```

- Le formulaire sur fond blanc flottant dans le fond vert = impact visuel fort
- Champs avec bordure bottom uniquement (pas de box), style éditorial
- Placeholder en italique

---

## 5. Animations & micro-interactions

### Au chargement
- Texte H1 : apparition par ligne, translateY(20px) → 0, durée 600ms, délai 100ms entre lignes
- Image hero : légère montée (scale 1.02 → 1) sur 800ms

### Au scroll
- Sections : fade-in + translateY(30px) → 0 sur 500ms dès qu'elles entrent dans le viewport
- Image hero : parallaxe légère (-0.2 × scrollY) en background-position
- Numéros décoratifs (01, 02...) : comptent de 0 au chiffre cible quand ils entrent dans le viewport

### Hover
- Liens nav : underline qui s'étend de gauche à droite, 200ms
- Boutons CTA : léger translateY(-2px) + transition couleur 150ms
- Cards tarifs : subtle shadow + translateY(-4px) sur 200ms

### Bande défilante
- CSS animation `marquee` : translateX(0) → translateX(-50%), 30s linear infinite
- Pause au hover

> Toutes les animations doivent respecter `prefers-reduced-motion: reduce` — les désactiver si ce media query est actif.

---

## 6. Photographie — brief

C'est **le chantier le plus urgent**. Les illustrations IA doivent être remplacées.

### Ce qu'il faut shooter

| Sujet | Usage | Indications |
|---|---|---|
| Vue du studio vide, lumière naturelle | Hero | Grand angle, tons chauds, matin |
| Coach + cliente en correction de posture | Section méthode | Proximité, contact humain visible |
| 3 membres (portraits individuels) | Témoignages | Sourire naturel, fond neutre |
| Reformers en perspective | Background décoration | Pas de personnes, composition géométrique |
| Détail : mains sur barre, pieds sur reformer | Accents visuels | Macro, texture, authenticité |

### Direction artistique photos
- Palette : tons crème, bois, lumière fenêtre (naturelle)
- Pas de lumière artificielle trop franche
- Corps en mouvement, pas figés
- Éviter les sourires forcés — chercher la concentration

---

## 7. Implémentation — priorités

### Semaine 1 — Impact immédiat (sans redesign total)
- [ ] Intégrer Cormorant Garamond + DM Sans via Google Fonts
- [ ] Remplacer la couleur accent par `#3D5A3E` sur les CTA et accents
- [ ] Agrandir le H1 à 80px minimum
- [ ] Remplacer les avatars initiales par de vraies photos
- [ ] Ajouter la bande défilante stats

### Semaine 2 — Refonte des sections clés
- [ ] Redessiner le hero (fond vert, typographie display)
- [ ] Refaire la section piliers en layout asymétrique
- [ ] Ajouter les animations au scroll

### Semaine 3 — Finition
- [ ] Session photo studio
- [ ] Intégrer les nouvelles photos
- [ ] Refaire la section témoignages avec vrais portraits
- [ ] Optimiser mobile (vérifier typographies, espacements)
- [ ] Test de conversion : comparer les taux avant/après

---

## 8. Références visuels (à étudier)

Ces studios ont une identité forte à observer :

- **Alo Moves** — typographie display, richesse photographique
- **YogaWorks** — usage de l'espace négatif et de la sérénité
- **Kreuzberg Pilates (Berlin)** — éditorial, noir et blanc, caractère
- **The Class by Taryn Toomey** — hero filmique, fond sombre, autorité
- **Studio Pilates International** — clarté, blancheur, premium

> Ne pas copier — s'inspirer de leur rapport entre image et texte, de leur hiérarchie visuelle.

---

*Direction créative réalisée suite à l'audit de helio-six.vercel.app · Juin 2026*
