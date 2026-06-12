## 2. Le client fictif : « Studio Hélio »

> Studio de **Pilates & mobilité** à Bordeaux. Ouvert il y a 2 ans, 3 coachs, ambiance haut de gamme mais chaleureuse. Cible : femmes et hommes 28-55 ans, actifs, qui veulent bouger sans se blesser et déstresser. Le concurrent direct, c'est la salle de sport bas de gamme à 19€/mois — Hélio se positionne au-dessus : petits groupes, suivi, qualité.

**Objectif n°1 de la page : faire réserver un premier cours d'essai gratuit.** Tout doit pousser vers ça.

### Identité de marque (à respecter)
- **Nom** : Studio Hélio
- **Ton** : premium, apaisant, sûr de soi. Pas « salle de muscu », pas « bootcamp ».
- **Couleurs imposées** : fond crème `#F4EFE9`, texte profond `#2A2622`, accent terracotta `#C66B4A`. (Tu peux ajouter 1 neutre complémentaire si besoin, pas plus.)
- **Typo** : à toi de choisir un pairing cohérent (Google Fonts ok). Un titre à caractère + un corps lisible.
- **Pas de logo fourni** : crée un simple wordmark texte propre (pas besoin d'un vrai logo dessiné).

### Contenu fourni (à utiliser — tu peux réorganiser, raccourcir, réécrire les transitions, mais garde le fond)

**Accroche / promesse :** « Renforce ton corps sans le casser. » — Pilates en petits groupes (6 max), encadré, pour gagner en force, souplesse et sérénité.

**Les 3 piliers / bénéfices :**
1. *Petits groupes (6 max)* — chaque mouvement est corrigé, zéro blessure.
2. *Coachs diplômés* — 3 coachs certifiés, +400h de formation chacun.
3. *Progrès mesurés* — bilan à l'entrée, point tous les 2 mois.

**Comment ça se passe (méthode en 3 étapes) :**
1. Tu réserves ton cours d'essai gratuit.
2. On fait ton bilan posture/mobilité (15 min).
3. Tu rejoins un créneau qui te va, et on suit tes progrès.

**Les offres / tarifs :**
- *Découverte* — 1er cours **offert**.
- *Carnet 10 séances* — **190€** (valable 3 mois).
- *Illimité mensuel* — **95€/mois** (sans engagement).

**Témoignages (fictifs, à mettre en scène) :**
- « En 2 mois mon mal de dos a disparu. Je n'aurais jamais cru. » — Camille R.
- « Les petits groupes changent tout, on n'est pas un numéro. » — Marc D.
- « Le seul sport que je n'ai pas lâché. » — Inès B.

**FAQ (au moins 4) :**
- Faut-il être souple pour commencer ? → Non, justement.
- Combien de fois par semaine ? → 1 à 3, selon ton objectif.
- C'est adapté après une blessure ? → Oui, avec l'accord de ton médecin.
- Comment j'annule un cours ? → Jusqu'à 12h avant, sans frais.

**Infos pratiques :** 12 rue des Remparts, Bordeaux · ouvert lun-sam 7h-21h · hello@studiohelio.fr · 05 56 00 00 00.

**Images** : à toi de sourcer des visuels libres de droits (Unsplash, Pexels…) cohérents avec la marque. La qualité et la cohérence du choix font partie de la note.

---

## 3. Ce qu'on attend (le périmètre)

Une **landing page mono-page**, en français, **entièrement responsive** (mobile d'abord), avec **au minimum** :

- En-tête collant (sticky) avec navigation + **menu burger fonctionnel sur mobile**
- Section hero avec la promesse + CTA principal « Réserver mon cours d'essai »
- Les sections : piliers/bénéfices · méthode en 3 étapes · tarifs · témoignages · FAQ · zone de contact/CTA final · footer
- **Une FAQ en accordéon** (ouverture/fermeture en JS)
- **Un formulaire de réservation** (nom, email, téléphone, créneau souhaité) **avec validation** côté client et un message de confirmation. Pas besoin de backend réel — un faux envoi qui affiche « Merci, on te recontacte » suffit, mais le formulaire doit *fonctionner* et valider proprement.
- **SEO de base** : `<title>`, meta description, balises sémantiques (`header/main/section/footer`), attributs `alt` sur les images, Open Graph.
- **Accessibilité de base** : contrastes lisibles, focus visible au clavier, labels de formulaire, navigation au clavier qui marche.

---

## 4. Les contraintes (lis-les, elles comptent)

- **Stack libre mais ça doit être du vrai build.** Next.js + Tailwind est notre stack maison et un bon choix, mais utilises du html , css et et javascript moderne vanilla pas de framework compliqué  **Pas de page builder** (Framer, Webflow, Wix export, Elementor…). On évalue ton intégration, pas un glisser-déposer.
- **Pas de template acheté ni copié.** Tu peux utiliser une lib de composants ou des utilitaires CSS, mais l'intégration doit être la tienne. Tout emprunt (snippet, lib, asset) doit être crédité dans le README.
- **Pas d'emoji en guise d'icônes.** Utilise un set d'icônes SVG (Lucide, Heroicons…).
- **L'IA est autorisée** (on en utilise tous les jours). Mais on verra vite la différence entre quelqu'un qui pilote l'IA avec goût et quelqu'un qui colle du « slop » générique sans le relire. Approprie-toi le résultat.

---
## 5. Ce que tu nous rends


1. **Un dépôt Git** (GitHub, public ou en nous invitant). On regarde **aussi ton historique de commits** : des commits clairs et progressifs valent mieux qu'un seul gros « final ».
2. **Un README court** (½ page max) qui répond à :
   - Quelle stack et pourquoi ce choix ?
   - 2-3 décisions de design/structure que tu as prises et pourquoi.
   - Qu'est-ce que tu améliorerais avec une semaine de plus ?
   - Ce que tu as emprunté (libs, assets, snippets).

---

## 6. Comment on note

On évalue sur 4 axes : **qualité technique & code propre · sens du design · compréhension de la conversion (ça doit vendre) · autonomie**. Plus un point sur la **clarté de ta communication** (README, commits).
