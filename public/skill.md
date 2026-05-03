# skill.md

name: julianaijal-content-access
description: Access Julian Aijal's website and articles in a markdown-first format designed for coding agents and documentation workflows.

## Inputs

- `route`: `/`, `/articles`, or `/articles/<slug>`
- `accept`: use `text/markdown` when a compact source form is preferred

## Capabilities

- Returns homepage and article content as markdown
- Exposes article metadata including title, subtitle, date, canonical URL, and image when available
- Provides a site index through `llms.txt`
- Preserves canonical attribution for republished articles

## Constraints

- Content freshness follows the site's cache policy
- Some pages depend on published Hygraph content
- Write actions are not supported; this is a read-oriented website surface

## Recommended Access Pattern

1. Read `/llms.txt` for the top-level map.
2. Fetch the relevant page with `Accept: text/markdown`.
3. Fall back to the `/api/markdown/...` endpoints when direct raw markdown links are easier to use.
