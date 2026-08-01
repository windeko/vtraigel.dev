# CLAUDE.md

Context for Claude Code. This project has no connection to any claude.ai chat history —
everything Claude Code needs to know about *why* the site looks and is structured this way
lives here. Keep this file updated as decisions change.

## Who this is for

**Vladimir Traigel (Vlad)** — Senior Full-Stack Engineer at Arbio (Berlin, AI-driven
hospitality), based in Belgrade, Serbia. Primary stack: TypeScript / Node.js / React, with
production LLM/multi-agent systems (LangGraph, Vercel AI SDK, multi-provider: Anthropic,
Bedrock, Groq, OpenAI, Gemini). Also does Pulumi/AWS infra work (monolith → event-driven
microservices).

## What this project is

`vtraigel.dev` — personal site + "building in public" blog. It is **not** a client-work
portfolio or a studio brand. It exists to serve two goals Vlad set explicitly:

1. **Employability / visibility as a top engineer** — insurance in case the Arbio contract
   ends. The site + LinkedIn + GitHub together are the "find me" surface.
2. **A future dev/AI product** — the blog audience (developers, AI engineers) is the same
   audience a future MCP/AI-tooling product would need. Site content and product distribution
   are meant to compound together, not be separate efforts.

Full backstory/strategy lives in `plan-razvitiya.md` (kept alongside this file) — read it
before making positioning decisions (e.g. what goes in the hero, what projects to feature,
tone of writing).

## Design system — do not casually restyle

The visual design was deliberately art-directed over many iterations and Vlad explicitly
approved the final look. Treat these as fixed unless he asks to change them:

- **Palette**: warm oat/paper background (`--paper`), espresso ink text (`--ink`), single
  warm gold/marigold accent (`--accent`) — chosen specifically to avoid the generic
  "cream + serif + terracotta" AI-generated-site cliché.
- **Type**: Bricolage Grotesque (display/headings), Inter (body), JetBrains Mono
  (labels, meta, the signature `whoami` card).
- **Signature motif**: the `whoami` mono card in the hero — deliberately "engineer" but warm,
  not a cold black terminal.
- **Liquid glass**: `.card` and related surfaces use `backdrop-filter: blur(...)` +
  translucent background + inset highlight. This only reads visually because of the
  **ambient parallax blobs** (`Ambient.astro`) behind the content — don't remove one without
  the other, the glass needs something colorful to blur.
- **Button paradigm** (explicitly settled after iteration): hover = background tint +
  accent-colored border. No lift/translate, no cursor changes on disabled states, no black
  border on hover. Applies to `.btn-ghost`, `.toggle`, `.cbtn`, `.links a`.
- **Shadows**: layered/soft (`--shadow` token, 3 layers), not a single hard drop shadow.
- **Theme**: light by default, dark available via toggle, choice persisted in
  `localStorage('theme')`, applied pre-paint (see `BaseHead.astro` inline script) to avoid
  flash-of-wrong-theme.

If a design change is requested, prefer adjusting the CSS custom properties in
`src/styles/global.css` over introducing new ad-hoc colors/shadows.

## Content model

- Blog posts: `src/content/posts/*.mdx`, schema in `src/content.config.ts`.
  Frontmatter: `title, description, date, tag, readingTime?, cover: {from,to}, draft`.
- Homepage shows the 5 most recent non-draft posts (`Writing.astro`); `/writing` shows all
  as a plaque grid (`PlaqueCard.astro`) with a frosted-glass caption panel over a gradient
  cover (until real cover images exist).
- Testimonials and projects are data-driven (`src/data/testimonials.ts`, `projects.ts`) —
  edit data, not markup.

## Known TODOs / not-yet-real content

- The 3 starter posts are **placeholders** written to prove the content pipeline — they say
  so in-body ("This is a starter draft"). Replace with real posts or set `draft: true`.
- Images are self-hosted (done): testimonial avatars live in `public/testimonials/`, the hero
  photo in `src/assets/profile.jpg` rendered through `astro:assets` (`<Image>`), which emits a
  ~2 kB webp instead of the original 218 kB jpeg. Keep new photos in `src/assets/` + `<Image>`
  rather than raw `<img>` in `public/` unless the file is already small.
- `public/cv/Vladimir-Traigel-CV.pdf` is a generated placeholder, not the real CV.
- `public/og-default.png` is a generated placeholder OG image in the right palette/fonts —
  fine as a stopgap, but per-post OG image generation would be a nice upgrade.

## Launch plan (agreed, don't relitigate without reason)

- **Do not publicly announce or link the site yet.** Ship it, but keep it unlisted until
  1–2 real blog posts exist — a live site with only "coming soon" posts undercuts the
  "building in public" premise it's trying to establish.
- **Hosting: Cloudflare Pages** (not Vercel) — chosen specifically because Cloudflare's free
  tier permits commercial use and has unlimited bandwidth, while Vercel's free Hobby tier
  does not. Also consolidates DNS (moving nameservers from Porkbun), gets free Web Analytics,
  and free Email Routing for a `@vtraigel.dev` address — all mentioned as wanted.
- Build command `npm run build`, output dir `dist`. Static output, no adapter needed.
- After go-live: redirect `www` → apex, and redirect the old `windeko.github.io` →
  `vtraigel.dev` so existing links don't die.

## Brand consistency

Cross-check company names/dates against Vlad's LinkedIn (`in/vtraigel`) if this ever needs
touching — there was a known discrepancy (site said "Moonfare", LinkedIn said "Andersen";
Andersen is the outsourcing vendor, Moonfare the end client) that was resolved once already.
Don't reintroduce inconsistency.
