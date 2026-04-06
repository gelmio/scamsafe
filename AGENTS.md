# Project Guidelines

## Overview

ScamSafe is a static Next.js 15 site for online scam protection training by Luke Gelmi (Perth, WA). The home page uses scroll-based navigation; the site also has a blog at `/blog/`. Exported as static HTML to `docs/` for GitHub Pages hosting.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export via `output: "export"`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (New York style) with Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form, Brevo for email capture
- **Blog:** MDX via `next-mdx-remote/rsc`, `gray-matter` for front matter, `remark-gfm` for GFM support
- **Package manager:** pnpm

## Code Style

- Use `"use client"` only for components that need browser APIs or interactivity
- Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional/merged class names
- shadcn/ui components live in `components/ui/` — follow the existing CVA variant pattern (see `components/ui/button.tsx`)
- Use `React.ComponentProps<"element">` for extending HTML element props
- Use `@/` path alias for imports from the project root
- Brand palette: emerald-500 focus rings and accents — maintain consistency across new components

## Architecture

- `app/page.tsx` — Server component wrapper; reads blog posts at build time, passes to `HomeContent`
- `app/home-content.tsx` — Client component with all landing page sections + scroll navigation
- `app/layout.tsx` — Root layout with Geist font family and comprehensive SEO/OG metadata
- `app/breavo-subscribe-form.tsx` — Brevo email form (injects external scripts via `useEffect`)
- `app/blog/layout.tsx` — Blog layout with header navigation (Home, Blog links)
- `app/blog/page.tsx` — Blog listing page (server component)
- `app/blog/[slug]/page.tsx` — Individual post page with `generateStaticParams` + `MDXRemote`
- `content/blog/*.mdx` — Blog post source files (MDX with YAML front matter); build-time only
- `components/blog-card.tsx` — Reusable blog post preview card
- `components/mdx-components.tsx` — Custom MDX → React component mapping for blog content
- `components/ui/` — shadcn/ui base components; do not modify existing patterns unless instructed
- `lib/blog.ts` — Blog utilities: `getAllPosts()`, `getPostBySlug()`, reading time calculation
- `lib/utils.ts` — Shared utilities (`cn()`)

## Build & Deploy

- `pnpm dev` — local development server
- `pnpm build` — production build (static export to `out/`)
- `pnpm static` — copies static export to `docs/` for GitHub Pages
- Output is pure static HTML — no API routes, no SSR, no ISR

## Conventions

- Home page content should be scroll sections; blog is the exception with dedicated routes (`/blog/`, `/blog/[slug]/`)
- Prefer Tailwind utility classes over custom CSS; `globals.css` uses Tailwind layers
- Everything must work with static export (`output: "export"`, `trailingSlash: true`) — no server-runtime features
- Blog posts go in `content/blog/` as `.mdx` files — see `.github/skills/scamsafe-blog-writing/SKILL.md` for full conventions
- Blog front matter: `title` (required), `description` (required), `date` (required), `tags` (optional), `coverImage` (optional)
- `readingTime` is auto-calculated from word count — do not add it to front matter
- Cover images go in `public/blog/` and are referenced as `/blog/filename.jpg`
