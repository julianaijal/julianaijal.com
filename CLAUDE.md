# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website and blog for Julian Aijal (julianaijal.com). Built with Next.js 15 (App Router), TypeScript, React 19, and SASS modules. Content is managed via Hygraph (GraphCMS) headless CMS. Deployed on Vercel.

## Commands

```bash
npm run dev              # Start dev server at localhost:3000
npm run build            # Production build + sitemap generation
npm run start            # Start production server
npm run lint             # ESLint (next/core-web-vitals config)
npm run generate-sitemap # Generate sitemap only
```

## Architecture

### Data Flow

Content is fetched from Hygraph CMS via GraphQL (`app/utils/api.tsx`). Four main fetch functions: `fetchArticles()`, `fetchPosts()`, `fetchHome()`, `fetchArticleBySlug(slug)`. Server-side fetching with 2-day (172800s) revalidation cache. HTML content from the CMS is sanitized with `isomorphic-dompurify` before rendering.

### Routing

Uses Next.js App Router. Pages live in `/app`:
- `page.tsx` — Homepage
- `articles/[slug]/page.tsx` — Dynamic article pages

### Components

- `/app/_components/` — Shared React components (barrel-exported via `index.tsx`)
- `/app/_lib/` — Schema.org structured data (Schema.tsx, SchemaArticle.tsx), Web Vitals, React Scan
- `/app/hooks/` — Custom hooks: `useInViewFade` (intersection observer animations), `useWindowDimensions`
- `/app/utils/` — CMS API functions, image conversion, cache revalidation

Mix of Server Components and Client Components (`'use client'`).

### Styling

SASS Modules (`.module.scss` files in `/app/styles/`). Shared variables and mixins in `/app/styles/utils/`:
- Breakpoints: mobile (max 767px), tablet (768-1079px), desktop (min 1080px)
- Max content width: 70rem
- Dark theme (background `#111827`)

### Configuration

- `next.config.js` — CSP headers, security headers, image optimization (AVIF/WebP), remote image patterns for `*.graphassets.com`
- `config/app.config.tsx` — Environment variable mappings
- `.prettierrc` — Single quotes, semicolons, 2-space indent, 80 char width, trailing commas

### Environment Variables

Required: `HYGRAPH_API_KEY`, `HYGRAPH_AUTH_TOKEN`, `ANALYTICS_MEASUREMENT_ID`, `REACT_SCAN_API_KEY`. Copy `.env.example` to `.env.local` for local development.
