# AGENTS.md

This file helps coding agents work efficiently with `julianaijal.com`.

## Project

- Site: `https://julianaijal.com`
- Stack: Next.js 15 App Router, TypeScript, React 19, Sass modules
- Content source: Hygraph CMS over GraphQL
- Deployment: Vercel

## Primary Routes

- `/` - homepage
- `/articles` - article index
- `/articles/[slug]` - article detail pages
- `/llms.txt` - machine-readable site index
- `/skill.md` - capability summary for agent workflows
- `/agent-permissions.json` - access and rate-limit guidance

## Markdown Access

The site supports agent-friendly markdown responses.

- Request `/` with `Accept: text/markdown`
- Request `/articles` with `Accept: text/markdown`
- Request `/articles/[slug]` with `Accept: text/markdown`

Direct raw markdown endpoints are also available:

- `/api/markdown`
- `/api/markdown/articles`
- `/api/markdown/articles/[slug]`

Markdown responses include:

- `Content-Type: text/markdown; charset=utf-8`
- `Vary: Accept`
- `Content-Signal: search=yes, ai-train=no, ai-input=yes`
- `x-markdown-tokens` token estimate header

## Working Notes

- Favor server-rendered content and existing App Router patterns.
- Article HTML from Hygraph is sanitized before rendering.
- Canonical links may point off-site for republished articles.
- Keep agent-facing docs in sync between repo root and `public/` when applicable.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run generate-sitemap
```
