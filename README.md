# Sunshineone

Marketing site for **SUNSHINEONE LLC** — software consulting & digital transformation studio.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, ShadCN/Radix UI primitives, and the Geist font family.

---

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Accept the default settings — Vercel auto-detects Next.js. No environment variables are required for the base build.
4. Click **Deploy**.

That's it. Subsequent pushes to `main` deploy automatically.

---

## Project structure

```
sunshineone/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Nav + Footer)
│   ├── globals.css         # Tailwind layers + design tokens
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx       # Client component (filter state)
│   ├── pricing/page.tsx
│   ├── contact/page.tsx    # Client component (form state)
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── nav.tsx             # Sticky scroll-aware nav
│   ├── footer.tsx
│   ├── grain.tsx           # Dotted background overlay
│   ├── sections/
│   │   └── final-cta.tsx   # Reusable CTA used on every page
│   └── ui/                 # ShadCN-style primitives
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── counter.tsx     # Framer Motion animated counter
│       ├── eyebrow.tsx     # Mono label with pulsing dot
│       ├── halo.tsx        # Decorative gradient orb
│       ├── logo.tsx        # SVG logo + wordmark
│       ├── reveal.tsx      # Scroll-triggered fade-in
│       └── terminal.tsx    # Code block with traffic lights
├── lib/
│   └── utils.ts            # cn() helper
├── tailwind.config.ts      # Brand tokens + ShadCN config
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Brand tokens

The design system is encoded in `tailwind.config.ts` so everything composes with Tailwind utilities.

```
Signal Gradient   linear-gradient(135deg, #0066FF, #00D4FF)
Electric Blue     #0066FF   → brand-blue
Cyber Cyan        #00D4FF   → brand-cyan
Deep Navy         #0A1628   → brand-navy
Background        #050B17   → bg
Foreground        #F8FAFC   → ink
Body text         #CBD5E1   → ink-2
Muted text        #94A3B8   → ink-3
Hairline          rgba(255,255,255,0.08)
```

Quick utility examples:

```tsx
<div className="bg-brand-gradient">    {/* gradient surface */}
<span className="accent-text">          {/* gradient text */}
<div className="card-surface">          {/* standard card */}
<div className="font-mono">             {/* Geist Mono */}
```

## Fonts

`GeistSans` and `GeistMono` are loaded via the official `geist` npm package in `app/layout.tsx`. The CSS variables `--font-geist-sans` and `--font-geist-mono` are wired through Tailwind's `font-sans` and `font-mono` utilities.

---

## Things you'll likely want to wire up after deploying

### Contact form

The form at `/contact` is currently client-side only — it sets a `submitted` state but doesn't actually send the message anywhere. Three easy options:

- **[Resend](https://resend.com)** — add a Next.js API route at `app/api/contact/route.ts` that calls Resend's SDK
- **[Formspree](https://formspree.io)** — change the form `action` to your Formspree endpoint, no backend code needed
- **Custom API route** — write your own `app/api/contact/route.ts` that hits your CRM or sends to Slack

### Real social URLs

Footer social links currently point to `#`. Update them in `components/footer.tsx`.

### Case study detail pages

`/work` lists 6 case studies — each card currently links to `#`. To build out detail pages, create `app/work/[slug]/page.tsx` and switch the cards to use the slug.

### Sitemap & robots

For better SEO add `app/sitemap.ts` and `app/robots.ts`. Next.js will serve them at `/sitemap.xml` and `/robots.txt` automatically.

### Open Graph image

`app/layout.tsx` references OpenGraph metadata but doesn't define an image. Add `app/opengraph-image.tsx` or `app/opengraph-image.png` (1200×630) and Next.js will pick it up.

### Favicon

A small inline SVG favicon (the Sunshineone logo mark on a gradient tile) is set as a data URI in `app/layout.tsx`. To replace with a `.ico` or higher-res PNG, drop the file in `app/` as `icon.png` / `icon.ico` and remove the `icons` block from the metadata.

---

## Notes

- All pages are server components by default; only `nav.tsx`, `work/page.tsx`, `contact/page.tsx`, and the animated primitives (`counter`, `reveal`, `accordion`) are client components.
- Accessibility: focus rings, semantic HTML, reduced-motion handling in `<Reveal />`.
- TypeScript is in strict mode. `npm run build` should pass with zero errors and zero warnings on a clean install.

---

© 2026 SUNSHINEONE LLC. All rights reserved.
