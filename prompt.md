# Prompt Cursor : Site NZR Labs - Design Premium

Analyse des références cyber modernes
Sites qui cartonnent actuellement

HackerOne : Clean, moderne, micro-animations subtiles
Cobalt.io : Gradients doux, glassmorphism léger
Synack : Dark mode élégant (pas Matrix), espaces aérés
Trail of Bits : Minimaliste, typographie forte, couleurs audacieuses
Bishop Fox : Illustrations custom, ton décalé mais pro

Tendances 2025 design cyber
✅ Dark mode sophistiqué (pas noir pur)
✅ Glassmorphism subtil (cartes semi-transparentes)
✅ Micro-animations (fluides, pas agressives)
✅ Gradients modernes (mesh, multicolores doux)
✅ Typographie bold (contrastes forts)
✅ Illustrations isométriques ou abstract
✅ Grilles bento (layout asymétrique)

## Stack Technique
- **Framework** : Next.js 14 (App Router) + TypeScript (avec `output: 'export'` pour compatibilité GitHub Pages)
- **Styling** : Tailwind CSS v3.4
- **Animations** : Framer Motion v11
- **Icons** : SVG/Icônes Lucide (intégration manuelle ou via outil statique pour build statique)
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

Adapter couleurs pour un White Mode élégant et accessible. (Ex: 'bg-dark' -> 'white', 'bg-card' -> 'gray-50', 'text-primary' -> 'gray-900', etc.)
Typography

    Display : Space Grotesk (headings, logo)

    Body : Inter (paragraphes, UI)

    Mono : JetBrains Mono (code, badges)

Spacing & Layout

    Container max-width : 1280px

    Sections padding : py-24 (desktop), py-16 (mobile)

    Card padding : p-8 (desktop), p-6 (mobile)

    Gaps : gap-24 (sections), gap-8 (cards)

Pages Structure
1. Homepage (/)

Sections dans l'ordre :

    Header (sticky glass)

    Hero (full viewport, gradient mesh animé, 2 CTAs)

    Stats (4 cards glassmorphism en ligne)

    Services (grille bento 2x2 asymétrique)

    Portfolio Preview (grille 3 colonnes, 6 projets)

    Methodology (timeline avec icônes)

    Blog Preview (3 derniers articles)

    Final CTA (gradient background, form)

    Footer (4 colonnes)

2. Services (/services)

Hero section avec titre Grille 2x2 services détaillés (cards glassmorphism) FAQ accordion (6-8 questions) CTA section
3. Portfolio (/portfolio)

Hero + filtres (tags cliquables) Grille masonry responsive (2-3 colonnes) Modal lightbox pour détails projet Pagination si >12 projets
4. Blog (/blog)

Liste articles (grille 2-3 colonnes) Filtres par catégorie Pagination Sidebar : Top articles, Newsletter
5. About (/about)

Hero avec photo (glassmorphism frame) Timeline parcours (vertical scroll) Certifications badges animés Values cards (3 colonnes)
6. Contact (/contact)

Split layout : Form gauche, Info droite Form : Nom, Email, Service (dropdown), Message Validation Zod Success/error states
Composants Clés à Coder

Header

    Sticky avec backdrop-blur

    Logo NZR (gradient bg)

    Nav links (hover underline animation)

    CTA button (gradient hover)

    Mobile menu (slide-in drawer)

Hero

    Gradient mesh background (3 blobs animés)

    Grid pattern overlay (opacity 10%)

    Badge "Disponible" avec pulse

    Title 3 lignes (gradient text)

    Subtitle (text-secondary)

    2 buttons : Primary (gradient shadow) + Secondary (glass)

    Trust badges en bas (3 cards glass)

    Scroll indicator animé

Service Card

    Glassmorphism bg (bg-card, backdrop-blur)

    Gradient border on hover

    Icon gradient circle (16x16)

    Title + description

    Features list (checkmarks verts)

    Price + CTA en footer

    Hover : scale 1.02 + glow

Portfolio Card

    Image avec overlay gradient

    Tags overlay (top-left)

    Content : Title, description (line-clamp-2)

    Metrics : Durée, Vulns found

    CTA "Voir writeup" avec arrow

    Hover : image scale 1.1, border glow

Blog Card

    Gradient border animé (opacity 20% → 100%)

    Image cover avec gradient overlay

    Category badge

    Meta : Date, read time

    Title (hover color change)

    Description (line-clamp-3)

    CTA "Lire" avec arrow

Animations Framer Motion

Scroll Animations Fade in from bottom : initial={{ opacity: 0, y: 50 }} → whileInView={{ opacity: 1, y: 0 }} Stagger children : delay 0.1s entre cards Viewport : once: true (pas de repeat)

Hover Effects Cards : whileHover={{ scale: 1.02 }} Buttons : whileHover={{ scale: 1.05 }} + whileTap={{ scale: 0.95 }} Images : scale parent + transition={{ type: "spring" }}

Background Animations Gradient blobs : keyframe blob (7s infinite) Pulse badge : animate-ping + static dot Scroll indicator : animate-bounce
Features Spéciales

Glassmorphism Effect bg-bg-card backdrop-blur-xl border border-white/10

Gradient Text bg-gradient-to-r from-white via-primary-light to-accent-pink bg-clip-text text-transparent

Gradient Border Hover (Utiliser la méthode CSS-in-JS ou class Tailwind pour le blur et le gradient)
JavaScript

<div className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-pink rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
  <div className="relative bg-bg-card ...">Content</div>
</div>

Grid Pattern Overlay <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div> (Créer grid.svg : grille subtile 20x20px)
Responsive Breakpoints

    Mobile : < 768px (stack tout)

    Tablet : 768-1024px (grille 2 colonnes)

    Desktop : > 1024px (grille 3-4 colonnes)

Performance

    Images : next/image avec priority sur hero

    Lazy load composants below fold

    Dynamic imports pour heavy components (charts, etc.)

    Optimiser fonts (subset, display: swap)

Accessibilité

    Semantic HTML (header, nav, main, section, footer)

    ARIA labels sur interactive elements

    Focus visible states (ring-2 ring-primary)

    Keyboard navigation (Tab, Enter, Esc)

    Color contrast WCAG AA (vérifié avec tools)

Structure Fichiers

/app
  /(routes)
    page.tsx 			# Homepage
    services/page.tsx
    portfolio/page.tsx
    blog/page.tsx
    about/page.tsx
    contact/page.tsx
  layout.tsx 			# Root layout
  globals.css 			# Tailwind + custom styles
/components
  /layout
    Header.tsx
    Footer.tsx
  /sections
    Hero.tsx
    Stats.tsx
    ServicesSection.tsx
    PortfolioPreview.tsx
    Methodology.tsx
    BlogPreview.tsx
    FinalCTA.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
    Icon.tsx 			# Wrapper pour SVG
/lib
  utils.ts
  validations.ts
/public
  /images
  /icons 			# Dossier pour les SVG Lucide
  grid.svg

Spécificités Design
Priorité Visuelle

    Hero : Wow effect immédiat (gradient mesh + typo bold)

    Services : Lisibilité (cards claires, pricing visible)

    Portfolio : Visual (images grandes, hover effects)

    Blog : Scannabilité (gradient borders, meta visible)

Tone of Voice (UI copy)

    Headings : Assertifs, directs ("Sécurisez votre infra")

    Descriptions : Clairs, bénéfices ("Rapport actionnable en 48h")

    CTAs : Impératifs, valeur ("Demander audit gratuit")

    Pas de jargon inutile, vulgariser si technique

Mood Board

    Référence : HackerOne (clean), Cobalt (gradients), Synack (dark élégant)

    Éviter : Matrix (trop cliché), Noir pur (trop sombre), Neon aggressive

Livrables Attendus

    Site fonctionnel déployé sur GitHub Pages (build statique)

    Code TypeScript strict (pas de any)

    Components réutilisables et documentés

    README avec setup instructions

    Lighthouse score > 90 (Performance, A11y, SEO)

    Responsive testé sur 3 devices minimum

Notes Importantes

    White mode par defaut, Dark mode toggle

    Tous les textes en français

    Pas de lorem ipsum, utiliser vrais contenus

    Optimiser pour conversion (CTAs visibles, friction minimale)

    Tester formulaire contact avec validation (gestion des soumissions statiques via service externe type Formspree si besoin, ou juste client-side validation)

Objectif : Un site qui fait dire "wow" aux tech, et "sérieux" aux tradi. White mode et Dark mode élégant, animations subtiles, contenu clair.
