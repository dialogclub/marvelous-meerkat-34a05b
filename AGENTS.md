# Project Guide

## Architecture

This is a small Next.js 16 App Router site deployed on Netlify. It has two routes that render the same client component with different language data. There is no database, API, authentication, or runtime persistence.

## Key Directories

- `app/` contains all routes, metadata, content, and styling.
- `app/CinemaVision.tsx` owns the page structure and both Ukrainian and English copy.
- `app/globals.css` owns the complete visual system and responsive behavior.
- `public/` contains metadata assets.

## Conventions

- Keep both language versions structurally identical by editing the `copy` object instead of duplicating markup.
- Preserve the editorial, print-inspired visual direction and existing CSS variables.
- Prefer semantic HTML and accessible labels for navigation and decorative elements.
- Keep the project dependency-light; do not add a component library for simple interface changes.
- Use absolute public asset paths such as `/og-odyssey.png`.

## Deployment

Netlify runs `npm run build` from `netlify.toml`. Next.js routing and server rendering are handled by Netlify's framework integration.

## Non-obvious Decisions

The source archive included Cloudflare/Vinext build output and example database code. Those files are intentionally excluded because the delivered site only needs the original Next.js page source and static media on Netlify.
