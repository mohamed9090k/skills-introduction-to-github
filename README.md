# Nocturne Atelier — Luxury Perfume eCommerce (Frontend)

A modern luxury perfume storefront foundation built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

This repo bootstraps the design system and global shell for a luxe eCommerce experience:

- Deep navy / smoky teal / gold accent design tokens (Tailwind theme extensions)
- Elegant typography via `next/font` (Cormorant Garamond for headings + Inter for body)
- Global navigation shell (header + footer)
- Reusable UI primitives: `Button`, `Card`, `Section`
- High-resolution SVG hero/model + 3D bottle assets under `public/images`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production server after a build
- `npm run lint` — run ESLint (Next.js config)

## Environment variables

No environment variables are required to render the base layout.

For future integrations (payments, CMS, analytics), create a `.env.local` file at the repo root.

Example:

```bash
NEXT_PUBLIC_SITE_NAME="Nocturne Atelier"
```

See `.env.example`.

## Project structure

- `app/` — Next.js App Router (layout + homepage)
- `components/` — reusable UI components
- `lib/` — shared utilities
- `public/images/` — hero/model + bottle assets
- `tailwind.config.ts` — luxury design tokens (colors, gradients, radii, shadows)
