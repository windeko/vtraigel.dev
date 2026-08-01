# vtraigel.dev

Personal site & building-in-public blog. Astro (static), deployed on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Structure

```
src/
  consts.ts              # name, URL, socials, nav — single source of truth
  assets/profile.jpg     # hero photo — optimized at build by astro:assets
  content.config.ts      # blog collection schema
  content/posts/*.mdx    # blog posts (frontmatter + body)
  data/                  # testimonials.ts, projects.ts
  components/            # Hero, Capabilities, Writing, Projects, Testimonials, ...
  layouts/               # BaseLayout, PostLayout
  pages/
    index.astro          # homepage
    writing/index.astro  # blog index (plaque grid)
    writing/[...slug].astro
    rss.xml.js           # /rss.xml
    404.astro
public/                  # favicon, og-default.png, robots.txt, cv/
```

## Writing a post

Create `src/content/posts/my-post.mdx`:

```mdx
---
title: "Post title"
description: "One-line summary used for SEO and cards."
date: 2026-08-01
tag: "ai-workflow"
readingTime: "7 min read"
cover: { from: "#C88A2C", to: "#6E4610" }   # plaque gradient
draft: false                                  # true = hidden from build
---

Body in Markdown / MDX.
```

The homepage shows the latest 5; `/writing` shows all. `draft: true` hides a post.

## Before launch (TODO)

- [ ] Replace the 3 starter posts with 1–2 real articles (or set `draft: true`).
- [ ] Replace `public/cv/Vladimir-Traigel-CV.pdf` with the real CV.
- [ ] Optional: swap the static `og-default.png` for per-post OG image generation.
- [x] Images are self-hosted — testimonial avatars in `public/testimonials/`, hero photo in
      `src/assets/profile.jpg` (optimized at build via `astro:assets`). Nothing is hot-linked
      from the old GitHub Pages site anymore, so the `windeko.github.io` redirect is safe.

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Output directory: `dist`.
4. Add custom domain `vtraigel.dev` (move nameservers from Porkbun to Cloudflare first).
5. `www` → apex redirect and old `windeko.github.io` → `vtraigel.dev` redirect via Cloudflare Rules.
6. Enable Cloudflare Web Analytics (free) and, if wanted, Email Routing for `vlad@vtraigel.dev`.

Keep the site unlisted / no announcement until the first 1–2 real posts are up.
