# Design System — Unique Garden

## Brand Identity

**Company:** Unique Garden Tech Cont. LLC
**Industry:** Landscaping, Garden Design, Irrigation, HVAC, MEP Services
**Region:** Dubai & Sharjah, UAE

The visual identity centers on nature — greens, clean whitespace, and organic imagery — balanced with a professional, trustworthy aesthetic suited to a B2B/B2C construction & landscaping audience.

---

## Color Palette

All colors are defined as CSS custom properties in `src/app/styles/globals.css`.

### Brand Colors

| Variable | Value | Usage |
|---|---|---|
| `--primary-color` | `#027833` | CTAs, headings, primary actions |
| `--secondary-color` | `#27c669` | Hover states, accents |
| `--highlight-bg` | `#cef17b` | Tag pills, badges, highlight spans |
| `--widget-bg` | `#ebf5ef` | Section background alternation |

### Text Colors

| Variable | Value | Usage |
|---|---|---|
| `--text-primary` | `#0a0a0a` | Body text, headings |
| `--text-secondary` | `#555555` | Subtext, descriptions |
| `--text-on-dark` | `#ffffff` | Text on dark/image backgrounds |

### Card Overlay Colors

Used for decorative overlays on project and service cards:

| Variable | Approx Color |
|---|---|
| `--card-gold` | Warm gold |
| `--card-teal` | Deep teal |
| `--card-burgundy` | Burgundy |
| `--card-olive` | Olive green |
| `--card-taupe` | Warm taupe |

### UI Colors

| Variable | Usage |
|---|---|
| `--navbar-bg` | Navbar background |
| `--button-hover` | Button hover background |
| `--border-color` | Dividers and borders |

---

## Typography

Fonts loaded via Google Fonts and defined in `src/app/styles/typography.css`.

### Typefaces

| Role | Font | CSS Variable |
|---|---|---|
| Primary (sans-serif) | Figtree | `--font-figtree` |
| Accent (serif) | EB Garamond | `--font-garamond` |

### Type Scale

| Element | Size | Line Height | Letter Spacing |
|---|---|---|---|
| Body default | 24px | 36px | -0.02em |
| Section headings | `clamp(32px, 4vw, 64px)` | ~1.1 | -0.03em |
| Sub-headings | `clamp(20px, 2.5vw, 40px)` | 1.2 | -0.02em |
| Small / caption | 14–16px | 1.4 | 0 |

All font sizes use `clamp()` for fluid scaling between mobile and desktop.

---

## Layout System

### Viewport Base

The site is designed at a **1920px base viewport**. CSS custom properties use viewport-relative units calculated against this base so elements scale proportionally on all screen widths.

### Breakpoints

| Name | Width | Trigger |
|---|---|---|
| Mobile | ≤ 767px | `MobileClassHandler` adds `.mobile` to `<body>` |
| Desktop | > 767px | Default styles |

### Section Wrapper

Every major page section uses the `.widget-wrapper` class as its outer container. Background-colored sections additionally use `.bg`:

```
.widget-wrapper          → max-width, horizontal padding, vertical spacing
.widget-wrapper.bg       → adds --widget-bg background
```

### Grid & Spacing

- Primary layout uses CSS Grid and Flexbox
- Spacing utilities in `src/app/styles/spacings.scss`
- No fixed pixel margins on sections — use `clamp()` or CSS custom property-based spacing

---

## Component Design

### Buttons

Defined in `src/app/styles/buttons.scss`.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `--primary-color` (#027833) | White | None |
| Secondary | White | `--primary-color` | Green |
| Ghost | Transparent | `--primary-color` | Green dashed |

All buttons use `clamp()` for padding and font size. Hover states include a subtle background/color transition (~0.3s ease).

### Navbar

- Transparent on homepage hero, solid white on scroll and inner pages
- Active page link highlighted with primary green
- Mobile: Hamburger icon triggers a slide-in menu
- Smooth transition on background change using CSS transition

### Hero Banner

- Full-width background image with an overlay
- Headline in Figtree, bold, large clamp size
- Supporting text in EB Garamond italic for contrast
- CTA button below headline

### Cards (Projects / Services)

- Image with a colored overlay (one of the card overlay variables)
- Title and short description overlaid on hover or always visible
- Subtle scale transform on hover

### Testimonials

- Swiper slider (horizontal scroll)
- Quote text in EB Garamond
- Client name + designation below
- Navigation dots and/or arrows

### Contact Form

- Clean, full-width input fields
- Labels above inputs
- Error states in red with descriptive messages
- Submit button full-width on mobile, auto-width on desktop
- reCAPTCHA badge visible per Google policy

---

## Animation Design

### Principles

- **Purposeful:** Animations reveal content and guide attention, never decorative noise
- **Once:** Scroll-triggered animations fire once (`once: true`) — no loop or repeat
- **Staggered reveals:** Groups of cards/items reveal with a stagger delay (~0.15s)
- **Performance-first:** GPU-accelerated properties only (`transform`, `opacity`)

### Animation Types

| Type | Implementation | Elements |
|---|---|---|
| Initial page load | CSS keyframes in `animation.scss` | Navbar, hero text |
| Scroll reveal (group) | GSAP ScrollTrigger on `.gsap-stagger-group` | Cards, service items |
| Scroll reveal (solo) | GSAP ScrollTrigger on `.gsap-solo` | Section headings, images |
| Smooth scroll | Lenis library (`<ReactLenis root />`) | Entire page |

### Scroll Trigger Settings (defaults)

```js
start: "top 85%"   // trigger when element is 85% from top of viewport
once: true          // fire and remove listener
```

---

## Image Guidelines

- **Format:** WebP primary, AVIF for browsers that support it (Next.js auto-converts)
- **Optimization:** Always use Next.js `<Image>` with `sizes` prop
- **Hero images:** `priority={true}` to avoid LCP penalty
- **Alt text:** Descriptive and keyword-relevant

### Image Directory Structure

```
public/images/
├── 01-home-page/
├── 02-About-Us/
├── 03-Services-Page/
├── 04-Gallery/
├── 05-Projects/
└── ...
```

---

## Icons & SVGs

All SVG icons live in `public/`. Categories:

- **Brand:** `brand-logo.svg`, `brand-name-logo.svg`
- **Social:** `instagram.svg`, `linkedin.svg`, `facebook.svg`
- **UI:** Hamburger, arrow, email, phone icons

Prefer inline SVG or Next.js `<Image>` for icons — avoid icon font libraries.

---

## Accessibility

- Semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- ARIA labels on form inputs and interactive elements
- Focus-visible styles on all interactive elements
- Color contrast meets WCAG AA (primary green on white passes)
- Images have descriptive `alt` text
- Skip-to-content link (if not present, consider adding)
