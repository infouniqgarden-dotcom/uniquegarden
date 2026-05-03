# Project Context — Unique Garden

## Business Overview

**Client:** Unique Garden Tech Cont. LLC
**Website:** https://uniquegarden.vercel.app
**Region:** Dubai & Sharjah, United Arab Emirates

Unique Garden is a professional contracting company specializing in outdoor and indoor environment services. The business targets residential and commercial clients across the UAE who need high-quality landscaping, garden design, or MEP (Mechanical, Electrical, Plumbing) solutions.

---

## Services Offered

1. **Landscaping & Garden Design** — Custom garden layouts, plant selection, hardscaping
2. **Irrigation Systems** — Automated drip and sprinkler systems
3. **HVAC** — Heating, ventilation, and air conditioning for indoor environments
4. **MEP Services** — Mechanical, Electrical, and Plumbing contracting
5. **Maintenance** — Ongoing garden and system upkeep

---

## Target Audience

- **Primary:** Property owners (villas, residences) in Dubai and Sharjah seeking garden/landscape upgrades
- **Secondary:** Commercial property managers and developers requiring MEP or landscaping for developments
- **Tertiary:** Real estate developers with large outdoor areas needing full design-to-maintenance service

The audience values:
- Quality and visual appeal over price alone
- Trust signals (license, certifications, past projects)
- Local expertise (UAE climate, desert-adapted plants, local regulations)

---

## Website Goals

1. **Lead generation** — Drive quote requests via the contact form
2. **Credibility** — Showcase projects, team, and trading license to build trust
3. **Service discovery** — Help visitors understand the full range of services
4. **SEO** — Rank for landscaping / garden design / HVAC keywords in Dubai/Sharjah

---

## Pages & Their Purpose

| Page | Purpose |
|---|---|
| `/` (Home) | First impression — hero, services overview, projects, testimonials, CTA |
| `/about-us` | Company story, team, stats, credibility |
| `/services` | Full service listings with descriptions |
| `/projects` | Portfolio of completed projects (visual gallery) |
| `/projects/project01` | Deep dive into a featured project (Al Tawr Villa) |
| `/gallery` | Image gallery showcasing work |
| `/careers` | Job listings (future hiring) |
| `/contact-us` | Contact form + location/phone details |

---

## Key Content Notes

- **Featured Project:** Al Tawr Villa (formerly listed as "Modern Villa" — renamed in the most recent commit)
- **Team section:** Showcased on About Us page via `MeetOurTeam` component
- **Testimonials:** Rotating slider with client quotes
- **Company stats:** Showcased in `AboutCompany.tsx` (years of experience, projects completed, etc.)
- **Trading License:** Available as PDF in `public/documents/Unique-Garden-Trading-License.pdf`

---

## Technical Context

### Stack Rationale

| Choice | Reason |
|---|---|
| Next.js App Router | SEO-friendly SSR, fast page loads, image optimization |
| Tailwind CSS v4 | Rapid utility-first styling without naming overhead |
| GSAP | Industry-standard for high-quality scroll animations |
| Lenis | Smooth scrolling that works across browsers without jank |
| Swiper | Accessible, touch-friendly carousels |
| Nodemailer | Direct SMTP control for form emails without third-party SaaS lock-in |
| reCAPTCHA v3 | Invisible bot detection without friction for real users |

### Known Constraints

- All content is **hardcoded in JSX** — no CMS or database. Content updates require code changes.
- Images are stored in `public/` and are **not dynamically managed**. Adding new project images requires a code deployment.
- The site uses a **single project detail route** (`/projects/project01`) — adding more projects requires new route directories.
- Email sending depends on Gmail SMTP credentials in `.env.local` — rotating credentials requires updating environment variables on Vercel.

---

## Development History (Recent)

| Date (approx) | Change |
|---|---|
| May 2026 | Renamed "Modern Villa" to "Al Tawr Villa" |
| April 2026 | Updated animation system |
| March 2026 | Firebox (Firefox) bug fix |
| Feb–Mar 2026 | Animation refinements |
| Earlier | Tag and metadata updates |

---

## Environment Setup

1. Clone the repo
2. Run `npm install`
3. Create `.env.local` with the following:
   ```
   SMTP_HOST=
   SMTP_PORT=
   SMTP_USER=
   SMTP_PASS=
   ADMIN_EMAIL=
   REPLY_TO_EMAIL=
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
   RECAPTCHA_SECRET_KEY=
   ```
4. Run `npm run dev`

The Vercel deployment auto-deploys on push to `main`. Environment variables must be set in the Vercel dashboard.

---

## Repository

- **Remote:** `git@github-second-alias:gowthamavtech/unique-garden.git`
- **Main branch:** `main`
- **CI/CD:** GitHub Actions → Vercel (also configured for GitHub Pages static export)
- **Git user:** gowtham-av

---

## Contact

- **Admin Email:** gowtham.av.dev@gmail.com
- **Deployment URL:** https://uniquegarden.vercel.app
