# Prompt pour Cursor : Site NZR Labs

## Contexte
Créer un site vitrine professionnel pour NZR Labs, cabinet de conseil en cybersécurité. 
Cible : PME traditionnelles (finance, industrie) + startups tech.
Positionnement : Expertise technique + accessibilité business.

## Stack technique recommandée
- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion (sobres)
- **Formulaire** : React Hook Form + Zod
- **Déploiement** : Vercel
- **CMS** (optionnel blog) : Contentlayer ou MDX

## Design system

### Couleurs
```css
:root {
  --primary: #1E3A8A;      /* Bleu marine */
  --secondary: #10B981;    /* Vert émeraude */
  --accent: #F59E0B;       /* Ambre */
  --neutral: #F8FAFC;      /* Gris clair */
  --text: #1E293B;         /* Anthracite */
}
```

### Typographie
- **Headings** : Inter Bold (ou Poppins)
- **Body** : Inter Regular
- **Code** (si snippets) : JetBrains Mono

### Spacing
- Mobile-first
- Containers max-width : 1200px
- Padding sections : py-20 (desktop), py-12 (mobile)

## Structure des pages

### 1. Homepage (/)
Composants à créer :
- `<Hero />` : H1 + sous-titre + 2 CTAs + badges certifications
- `<KeyNumbers />` : 3 statistiques en ligne (500+ labs, 2 certs, etc.)
- `<ServicesPreview />` : 3 cards services (icône + titre + description courte + CTA)
- `<PortfolioPreview />` : Grille 3 projets récents
- `<BlogPreview />` : 3 derniers articles
- `<FinalCTA />` : Section pleine largeur avec CTA contact

### 2. Services (/services)
- Liste des 5 services
- Chaque service : Card détaillée (description + méthodologie + durée + prix indicatif)
- Section FAQ (5-10 questions)

### 3. Portfolio (/portfolio)
- Système de filtres (tags : web, infra, cloud, dfir)
- Grille responsive de projets
- Modal ou page dédiée par projet

### 4. Blog (/blog)
- Liste articles avec pagination
- Card : image hero + titre + date + extrait + tags
- Page article : MDX avec syntax highlighting

### 5. À propos (/about)
- Section photo + bio
- Timeline parcours (optionnel)
- Valeurs & engagements
- Certifications avec badges

### 6. Contact (/contact)
- Formulaire (validation Zod)
- Coordonnées en sidebar
- Carte (optionnel)

## Features techniques

### Accessibilité
- Semantic HTML
- ARIA labels
- Contraste WCAG AA minimum
- Navigation clavier

### Performance
- Images optimisées (next/image)
- Lazy loading
- Lighthouse score > 90

### SEO
- Metadata par page
- Open Graph
- Sitemap.xml
- robots.txt

### Animations (sobres)
- Fade-in au scroll (Framer Motion)
- Hover effects subtils sur cards
- Pas d'animations distrayantes

## Ton & copywriting
- Professionnel mais accessible
- Phrases courtes et claires
- Éviter jargon technique inutile
- CTA directs : "Demander un audit", "Discutons de votre projet"

## Structure fichiers suggérée
```
/app
  /(routes)
    /page.tsx (homepage)
    /services/page.tsx
    /portfolio/page.tsx
    /blog/page.tsx
    /about/page.tsx
    /contact/page.tsx
/components
  /ui (buttons, cards, inputs...)
  /sections (Hero, Services, Portfolio...)
  /layout (Header, Footer)
/lib (utils, validations)
/public/images
/content (MDX articles si blog)
```

## Exemples de composants à coder

### Hero
```tsx
<section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-bold mb-4">
      Protégez votre entreprise contre les cybermenaces
    </h1>
    <p className="text-xl mb-8">
      Tests d'intrusion • Audits de conformité • Réponse à incident
    </p>
    <div className="flex gap-4">
      <Button variant="secondary">Demander un audit</Button>
      <Button variant="outline">Nos services</Button>
    </div>
    <div className="flex gap-4 mt-8">
      <Badge>OSCP en cours</Badge>
      <Badge>RC Pro 1M€</Badge>
      <Badge>RGPD compliant</Badge>
    </div>
  </div>
</section>
```

### ServiceCard
```tsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
  <Icon className="w-12 h-12 text-primary mb-4" />
  <h3 className="text-2xl font-bold mb-2">{title}</h3>
  <p className="text-gray-600 mb-4">{description}</p>
  <ul className="space-y-2 mb-6">
    {features.map(f => <li key={f}>✓ {f}</li>)}
  </ul>
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-500">{duration}</span>
    <span className="font-bold text-primary">{price}</span>
  </div>
  <Button className="w-full mt-4">En savoir plus</Button>
</div>
```

## Instructions de génération

1. Initialiser projet Next.js 14 + TypeScript + Tailwind
2. Créer design system (colors, typography dans globals.css)
3. Développer composants UI réutilisables (Button, Card, Badge...)
4. Coder sections homepage une par une
5. Implémenter pages secondaires
6. Intégrer formulaire contact avec validation
7. Ajouter animations Framer Motion (subtiles)
8. Optimiser images et performances
9. Tester responsive mobile/tablet/desktop
10. Setup déploiement Vercel

## Contraintes importantes
- ❌ Pas de fond noir "hacker"
- ❌ Pas d'animations agressives
- ❌ Pas de stock photos génériques
- ✅ Design épuré et professionnel
- ✅ Contenu clair et rassurant
- ✅ CTAs visibles mais pas intrusifs

## Livrables attendus
- Site fonctionnel déployé
- Code commenté et propre
- README avec instructions
- Fichiers de contenu éditables (services, projets)

---

**Objectif final** : Un site qui inspire confiance aux PME traditionnelles tout en démontrant l'expertise technique aux startups tech.
```

---
