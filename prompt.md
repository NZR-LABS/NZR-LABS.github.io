# Prompt Cursor : Site NZR Labs - Design Premium

## Stack Technique
- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS v3.4
- **Animations** : Framer Motion v11
- **Icons** : Lucide React
- **Forms** : React Hook Form + Zod
- **Fonts** : Space Grotesk (display) + Inter (body) via next/font

## Design System

### Couleurs (Tailwind extend)
```js
colors: {
  'bg-dark': '#0A0E27',
  'bg-card': '#141B3A',
  'primary': '#6366F1',
  'primary-light': '#818CF8',
  'secondary': '#10B981',
  'accent': '#F59E0B',
  'accent-pink': '#EC4899',
  'text-primary': '#F8FAFC',
  'text-secondary': '#94A3B8',
}
```

adapter couleurs white mode aussi.

### Typography
- Display : Space Grotesk (headings, logo)
- Body : Inter (paragraphes, UI)
- Mono : JetBrains Mono (code, badges)

### Spacing & Layout
- Container max-width : 1280px
- Sections padding : py-24 (desktop), py-16 (mobile)
- Card padding : p-8 (desktop), p-6 (mobile)
- Gaps : gap-24 (sections), gap-8 (cards)

## Pages Structure

### 1. Homepage (/)
Sections dans l'ordre :
1. **Header** (sticky glass)
2. **Hero** (full viewport, gradient mesh animé, 2 CTAs)
3. **Stats** (4 cards glassmorphism en ligne)
4. **Services** (grille bento 2x2 asymétrique)
5. **Portfolio Preview** (grille 3 colonnes, 6 projets)
6. **Methodology** (timeline avec icônes)
7. **Blog Preview** (3 derniers articles)
8. Final CTA (gradient background, form)
9. Footer (4 colonnes)
2. Services (/services)

Hero section avec titre
Grille 2x2 services détaillés (cards glassmorphism)
FAQ accordion (6-8 questions)
CTA section

3. Portfolio (/portfolio)

Hero + filtres (tags cliquables)
Grille masonry responsive (2-3 colonnes)
Modal lightbox pour détails projet
Pagination si >12 projets

4. Blog (/blog)

Liste articles (grille 2-3 colonnes)
Filtres par catégorie
Pagination
Sidebar : Top articles, Newsletter

5. About (/about)

Hero avec photo (glassmorphism frame)
Timeline parcours (vertical scroll)
Certifications badges animés
Values cards (3 colonnes)

6. Contact (/contact)

Split layout : Form gauche, Info droite
Form : Nom, Email, Service (dropdown), Message
Validation Zod
Success/error states

Composants Clés à Coder
Header
- Sticky avec backdrop-blur
- Logo NZR (gradient bg)
- Nav links (hover underline animation)
- CTA button (gradient hover)
- Mobile menu (slide-in drawer)

Hero
- Gradient mesh background (3 blobs animés)
- Grid pattern overlay (opacity 10%)
- Badge "Disponible" avec pulse
- Title 3 lignes (gradient text)
- Subtitle (text-secondary)
- 2 buttons : Primary (gradient shadow) + Secondary (glass)
- Trust badges en bas (3 cards glass)
- Scroll indicator animé

Service Card
- Glassmorphism bg (bg-card, backdrop-blur)
- Gradient border on hover
- Icon gradient circle (16x16)
- Title + description
- Features list (checkmarks verts)
- Price + CTA en footer
- Hover : scale 1.02 + glow

Portfolio Card
- Image avec overlay gradient
- Tags overlay (top-left)
- Content : Title, description (line-clamp-2)
- Metrics : Durée, Vulns found
- CTA "Voir writeup" avec arrow
- Hover : image scale 1.1, border glow

Blog Card
- Gradient border animé (opacity 20% → 100%)
- Image cover avec gradient overlay
- Category badge
- Meta : Date, read time
- Title (hover color change)
- Description (line-clamp-3)
- CTA "Lire" avec arrow

- Animations Framer Motion
Scroll Animations

Fade in from bottom : initial={{ opacity: 0, y: 50 }} → whileInView={{ opacity: 1, y: 0 }}
Stagger children : delay 0.1s entre cards
Viewport : once: true (pas de repeat)

Hover Effects

Cards : whileHover={{ scale: 1.02 }}
Buttons : whileHover={{ scale: 1.05 }} + whileTap={{ scale: 0.95 }}
Images : scale parent + transition={{ type: "spring" }}

Background Animations

Gradient blobs : keyframe blob (7s infinite)
Pulse badge : animate-ping + static dot
Scroll indicator : animate-bounce

Features Spéciales
Glassmorphism Effect
bg-bg-card backdrop-blur-xl border border-white/10

Gradient Text
bg-gradient-to-r from-white via-primary-light to-accent-pink 
bg-clip-text text-transparent

Gradient Border Hover
<div className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-pink 
       rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>
  <div className="relative bg-bg-card ...">Content</div>
</div>

Grid Pattern Overlay
<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
```
(Créer grid.svg : grille subtile 20x20px)

## Responsive Breakpoints
- Mobile : < 768px (stack tout)
- Tablet : 768-1024px (grille 2 colonnes)
- Desktop : > 1024px (grille 3-4 colonnes)

## Performance
- Images : next/image avec priority sur hero
- Lazy load composants below fold
- Dynamic imports pour heavy components (charts, etc.)
- Optimiser fonts (subset, display: swap)

## Accessibilité
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels sur interactive elements
- Focus visible states (ring-2 ring-primary)
- Keyboard navigation (Tab, Enter, Esc)
- Color contrast WCAG AA (vérifié avec tools)

## Structure Fichiers
```
/app
  /(routes)
    page.tsx                 # Homepage
    services/page.tsx
    portfolio/page.tsx
    blog/page.tsx
    about/page.tsx
    contact/page.tsx
  layout.tsx                 # Root layout
  globals.css                # Tailwind + custom styles
/components
  /layout
    Header.tsx
    Footer.tsx
  /sections
    Hero.tsx
    Services.tsx
    Portfolio.tsx
    Blog.tsx
    FinalCTA.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
/lib
  utils.ts
  validations.ts
/public
  /images
  /icons
  grid.svg
```

## Spécificités Design

### Priorité Visuelle
1. **Hero** : Wow effect immédiat (gradient mesh + typo bold)
2. **Services** : Lisibilité (cards claires, pricing visible)
3. **Portfolio** : Visual (images grandes, hover effects)
4. **Blog** : Scannabilité (gradient borders, meta visible)

### Tone of Voice (UI copy)
- Headings : Assertifs, directs ("Sécurisez votre infra")
- Descriptions : Clairs, bénéfices ("Rapport actionnable en 48h")
- CTAs : Impératifs, valeur ("Demander audit gratuit")
- Pas de jargon inutile, vulgariser si technique

### Mood Board
- Référence : HackerOne (clean), Cobalt (gradients), Synack (dark élégant)
- Éviter : Matrix (trop cliché), Noir pur (trop sombre), Neon aggressive

## Livrables Attendus
1. Site fonctionnel déployé sur Vercel
2. Code TypeScript strict (pas de any)
3. Components réutilisables et documentés
4. README avec setup instructions
5. Lighthouse score > 90 (Performance, A11y, SEO)
6. Responsive testé sur 3 devices minimum

## Notes Importantes
- White mode par defaut, Dark mode toggle
- Tous les textes en français
- Pas de lorem ipsum, utiliser vrais contenus
- Optimiser pour conversion (CTAs visibles, friction minimale)
- Tester formulaire contact avec validation

---

**Objectif** : Un site qui fait dire "wow" aux tech, et "sérieux" aux tradi. 
White mode et Dark mode élégant, animations subtiles, contenu clair. 🚀
```
