# LongGreen — Financial Consulting Website

Corporate website for **LongGreen Financial Consulting**: outsourced finance
controller, accounting, ERP implementation, internal audit, taxation and CFO
advisory services for businesses across the GCC, UK and India.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Getting Started

Requires **Node.js 20.9+** (Node 22 recommended).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing Content (no code knowledge required)

All marketing copy lives in `src/content/` — components never hardcode text:

| File | Controls |
|------|----------|
| `src/content/site.ts` | Company name, tagline, contact, regions, SEO defaults |
| `src/content/navigation.ts` | Navbar links, CTA label, footer links |
| `src/content/home.ts` | Every home page section (hero, services, process, testimonials…) |

Change the text in those files and the site updates automatically.

## Design System

Tokens are defined in `src/app/globals.css` (`@theme` block):

- **Canvas** `#0c0c0c` · **Surface** `#141414` · **Brand** `#007755`
- Headings: **Plus Jakarta Sans** · Body: **Inter**
- Cards: `#141414` surface, `1px #262626` border, tonal hover (no shadows)

Full design rationale: `../Screen/executive_financial_intelligence/DESIGN.md`

## Project Structure

```
src/
├── app/            # Routes (home, services, case-studies, careers, consultation)
├── components/
│   ├── layout/     # Navbar, Footer, Container, Section
│   ├── ui/         # Button, Card, Icon primitives
│   ├── sections/   # Page section blocks (Hero, ServicesGrid, CTA…)
│   └── seo/        # JSON-LD structured data
├── content/        # ★ Editable copy (see above)
├── lib/            # Utilities
└── types/          # Shared content types
```

## Roadmap (per implementation plan)

- **Phase 3** — full Services, Case Studies, Careers pages (currently branded placeholders)
- **Phase 4** — consultation form → email/CRM via `/api/consultation`
- **Phase 5** — sitemap, OG images, Lighthouse pass
