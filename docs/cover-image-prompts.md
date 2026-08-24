# Cover image prompts

Prompts for generating per-post cover images with an external image model.
Palette is locked to the site tokens in `src/styles/global.css` — don't drift it.

**Generate at 3:2 (e.g. 1536×1024).** The card frame is 3:2, so nothing gets
cropped; it also crops cleanly to the 1200×630 OG image.

Drop a finished file in `src/assets/covers/` and name it in the post's
frontmatter — the card renders it instead of the gradient, and nothing else
has to change:

```yaml
cover:
  from: "#C4553C"
  to: "#5A2418"
  image: "../../assets/covers/backtest-lying-intrabar-stop-loss.png"
  alt: "Two price traces at different resolutions diverging across a threshold line"
```

Keep `from`/`to` either way — they still drive the OG accent strip.

---

## Shared style block

Prepend this to every prompt below.

> Abstract editorial cover illustration for a software-engineering blog. Flat,
> vector-adjacent digital art with a fine film grain — no photorealism, no 3D
> render gloss, no neon cyberpunk, no lens flare. Warm analog-technical mood,
> like a drafting table rather than a dashboard: matte oat-paper ground
> `#F3EFE6`, deep espresso linework `#23201B`, one marigold accent `#C0801C`
> used sparingly for the single thing that matters. Precise geometry — thin
> rules, plotted curves, measured grids, honest alignment. Generous negative
> space. The caption sits below the image, never over it, so the whole frame
> stays visible — compose for all of it. No text, no letters, no
> numbers, no logos, no UI chrome, no people, no hands, no screens.

---

## 1,120 configs per coin: how I actually tuned a trading bot
`tuning-a-trading-bot-1120-configs` · duotone `#C0801C` → `#6E4610`

> Subject: a vast parameter search space with almost no survivors. A dense
> orthogonal field of small squares — hundreds of them, evenly spaced, most
> rendered in flat muted espresso at low contrast. Six or seven squares,
> scattered irregularly and never adjacent, are filled solid marigold and ringed
> with a thin halo. Behind the field, very faint plotted equity curves run left
> to right, mostly ghosted away. Duotone warm marigold `#C0801C` into deep brown
> `#6E4610` over oat paper. The feeling is a sieve, not a celebration.

## My backtest was lying to me by 28%
`backtest-lying-intrabar-stop-loss` · duotone `#C4553C` → `#5A2418`

> Subject: the same price path drawn at two resolutions, diverging. Two line
> traces begin overlapped at the left edge: one coarse and blocky, stepping in
> large rectangular increments; one fine and continuous, sampling far more
> often. They separate progressively toward the right, the gap between them
> shaded as a soft wedge. A single thin horizontal marigold rule crosses the
> composition — the fine line pierces it, the blocky line steps clean over it
> without touching. Duotone rust `#C4553C` into dark oxblood `#5A2418` over oat
> paper.

## I audited my own trading bot and found nine ways to lose money
`auditing-my-own-trading-bot` · duotone `#8C6B3F` → `#2E2318`

> Subject: an exploded technical schematic of a money-handling pipeline. Thin
> espresso lines connect a chain of simple geometric nodes — circles, squares,
> a valve, a junction — laid out like an engineering diagram with faint
> dimension marks. Several joints are circled in marigold as flagged faults. At
> one point the line simply stops: a connector ends in open space with nothing
> on the other side, and a small marigold arrow continues past it into blank
> paper. Duotone bronze `#8C6B3F` into near-black brown `#2E2318` over oat
> paper.

## Writing a repo for a reader with no memory
`writing-a-repo-for-a-reader-with-no-memory` · duotone `#4E7A6B` → `#1B2E28`

> Subject: an archive built for someone who arrives knowing nothing. A wall of
> thin vertical document edges seen nearly side-on — dozens of sheets stacked
> in a long shallow row, receding slightly, drawn as fine parallel espresso
> rules. One sheet is pulled forward from the stack and lit in marigold, casting
> a soft warm glow onto its neighbours. Everything else is quiet and uniform.
> Duotone muted pine green `#4E7A6B` into deep forest `#1B2E28` over oat paper.

---

### Drafts — generate when these actually ship

## Running Claude Code + Codex as a dual-agent setup
`dual-agent-claude-code-codex` · duotone `#C88A2C` → `#6E4610`

> Subject: two independent observers whose disagreement is the point. Two large
> thin-outlined circles overlap slightly off-centre, each filled with a
> different fine texture — one a dot grid, one a hatch of parallel lines. Only
> the lens-shaped intersection is marigold, and inside it the two textures
> interfere into a moiré. Calm, symmetrical, almost instrument-like. Duotone
> amber `#C88A2C` into deep brown `#6E4610` over oat paper.

## Wiring MCP into a production agent, the parts that bite
`mcp-in-production` · duotone `#3A4A55` → `#141A20` (cool — the one exception)

> Subject: a connector panel under real load. A neat array of identical circular
> ports drawn in thin line, most with cables seated and running off-frame in
> orderly curves. Two ports sit empty; one cable hangs loose and unplugged, its
> free end drifting, drawn in marigold. Slight asymmetry — the tidy grid has
> been disturbed. Duotone cool slate `#3A4A55` into near-black `#141A20` over
> oat paper, with the marigold `#C0801C` accent kept warm against the cool
> field.

## Splitting a monolith with Pulumi, without downtime
`monolith-to-microservices-pulumi` · duotone `#B5623C` → `#5E2A16`

> Subject: one solid mass parting along its seams. A single large block drawn in
> clean axonometric projection separates into four or five smaller blocks that
> drift apart along straight paths, still clearly cut from the same body. The
> cut faces glow marigold; the outer surfaces stay matte. Thin construction
> lines trace where each piece came from. Duotone terracotta `#B5623C` into dark
> brick `#5E2A16` over oat paper.
