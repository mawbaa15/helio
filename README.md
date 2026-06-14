# Studio Hélio — Landing Page

## Stack & Choix techniques

**HTML + CSS Custom + Vanilla JS** — Volontairement minimaliste. Pas de framework front-end ni de dépendance CSS pour :
- ⚡ **Zéro overhead** : landing page ultra-légère, excellente Core Web Vitals
- 📱 **100% responsive** en CSS pur
- 🎯 **Conversion-first** : chaque byte compte pour les utilisateurs mobiles
- 🚀 **Zero build step** : servi tel quel, aucune compilation

CSS personnalisé via variables CSS (custom properties) pour totale flexibilité et maintenabilité.

---

## 3 décisions clés

### 1. **Navigation « hero-mode »** 
La navbar change de style dynamiquement au scroll (texte blanc en hero, puis mode scrolled). Crée une hiérarchie visuelle claire sans lourdeur → l'utilisateur sait toujours où il est.

### 2. **Palette minimaliste + Typographie éditorial**
Vert Sauge `#3D5A3E` + Cormorant Garamond : dépasse le cliché « fitness » pour évoquer sérénité + exigence. Chaque couleur a un rôle spécifique documenté → maintenabilité garantie.

### 3. **Scroll reveal + Menu burger hyper-optimisé**
Lazy-loading visuel (Intersection Observer) + menu mobile basique → perfusion on scroll et légèreté mobile. Aucune animation lourd, focus UX pragmatique.

---

## Améliorations avec +1 semaine

- **CMS léger** : intégrer Airtable ou Strapi pour que le studio gère tarifs/témoignages sans dev
- **Analytics enrichies** : tracking micro-conversions (clics CTA, scroll depth, temps section)
- **Motion design** : Framer Motion ou GSAP pour animations hero plus polies
- **Internationalisation** : EN/FR bascule simple (JSON i18n)
- **E-mail marketing** : formulaire de réservation → webhook automation (Zapier)

---

## Ressources & emprunts

| Élément | Source |
|---------|--------|
| **Google Fonts** | Cormorant Garamond + DM Sans (Google Fonts API) |
| **Favicon** | Généré via favicon.io |
| **Icons SVG** | Feather Icons (chevron, menu burger) |
| **Inspiration design** | Design system documenté dans `helio-direction-creative.md` |

---

**Status** : Prêt production · SSG-ready pour Netlify/Vercel
