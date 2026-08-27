# Cover image prompts

Prompts for generating per-post cover images with an external image model.
Palette is locked to the site tokens in `src/styles/global.css` — don't drift it.

**Direction: tactile analog instruments.** Every cover is a warm still life of
real, recognisable objects on a workbench — chart recorders, brass fittings,
card catalogues, stone-splitting wedges. Not diagrams, not metaphors rendered
as geometry. If a reader can't name the objects in the picture, the prompt has
failed.

**Generate at 3:2 (e.g. 1536×1024).** The card frame and the post hero are both
3:2, so nothing is cropped; it also crops cleanly to the 1200×630 OG image.
The caption always sits below the image, never over it — compose for the whole
frame.

Drop a finished file in `src/assets/covers/` and name it in the post's
frontmatter — the card renders it instead of the gradient, and nothing else
has to change:

```yaml
cover:
  from: "#C4553C"
  to: "#5A2418"
  image: "../../assets/covers/backtest-lying-intrabar-stop-loss.png"
  alt: "A paper chart recorder, its pen mid-stroke, a red line struck across the printout"
```

Keep `from`/`to` either way — they still drive the OG accent strip.

---

## Keep the covers apart

The failure mode isn't a bad picture, it's four good pictures that feel like
one. Covers sit four-up in the `/writing` grid, so any two of them must differ
on **all three** of these, not just on subject:

- **Camera** — every post below names its angle. No two share one.
- **Dominant material** — brass, paper, oak, stone, bakelite. Don't let brass
  win every frame.
- **Framing** — flat lay, elevation, macro and three-quarter read as different
  pictures even at thumbnail size.

Two specific traps, both already hit once: **no open books or notebooks**, and
**no hand-lettered pages** — the style block bans lettering, and a lettered
spread also fights the caption sitting right under it. If a draft comes back as
"objects on a dark wooden desk, sepia, shallow DOF" for the second time in a
row, the prompt lost — regenerate rather than settle.

## Shared style block

Prepend this to every prompt below.

A warm, tactile still life of real analog engineering instruments,
photographed like an editorial magazine feature: one soft directional light
from the upper left, gentle falloff into shadow, shallow depth of field with
the key object sharp and the background falling away. Everything rests on
aged oak, machined steel, or warm oat paper.

Strict palette — matte oat and parchment (`#F3EFE6`), deep espresso brown and
near-black (`#23201B`), brass and marigold highlights (`#C0801C`). No cool
blues, no cold greys, no neon, no teal-and-orange grading.

Real materials showing real wear: brushed brass, chipped enamel, fibrous
paper, machined steel, dried ink, worn wood. Objects are the entire subject —
no people, no hands, no computer screens, no phones, no modern plastic.
No lettering, no words, no logos, no readable numerals; incidental dial ticks
and scale marks are fine and welcome.

Fine film grain. No HDR, no glossy 3D-render sheen, no lens flare.

---

## 1,120 configs per coin: how I actually tuned a trading bot
`tuning-a-trading-bot-1120-configs` · duotone `#C0801C` → `#6E4610`

Camera: dead top-down flat lay, tray filling the frame edge to edge, no
desk and no horizon visible. Dominant material: brass.

Subject: a typesetter's tray or machinist's drawer, pulled open on a
workbench, divided into hundreds of small square compartments in a strict
grid. Almost every compartment holds an identical dull, tarnished brass slug.
Six or seven slugs, scattered irregularly and never adjacent, have been
polished to a bright warm shine and catch the light. A jeweller's loupe rests
on the tray's edge. A few compartments are empty. The feeling is a sieve that
almost nothing survived — patient, unglamorous sorting work.

## My backtest was lying to me by 28%
`backtest-lying-intrabar-stop-loss` · duotone `#C4553C` → `#5A2418`

> Camera: low three-quarter at desk height, the printed trace running out of
> the frame toward the viewer. Dominant material: paper.

> Subject: a paper strip-chart recorder on a warm oak desk, its inked pen
> caught mid-stroke, a long printed trace spilling off the platen and curling
> onto the desk. A second, older printout lies beneath it, its trace drawn in
> coarse rectangular steps where the newer one is fine and continuous — the two
> visibly diverging toward the right. A mechanical stopwatch sits beside the
> platen, its hand near the half-minute. A red grease pencil lies where it was
> set down, and a single hard red line has been struck across the printout at
> the point where the fine trace dips below and the stepped one does not.

## I audited my own trading bot and found nine ways to lose money
`auditing-my-own-trading-bot` · duotone `#8C6B3F` → `#2E2318`

> Camera: tight macro on the disconnected union nut, most of the frame thrown
> out of focus. Dominant material: machined steel and brass.

> Subject: a brass mechanical instrument opened up for inspection on a
> workbench, its cover unscrewed and set aside, internals exposed — gears,
> valves, a manifold of small pipe fittings. Several joints have been ringed
> with marigold inspection chalk. One brass fitting hangs disconnected, its
> union nut backed off, the line beyond it going nowhere. Inspection tools lie
> in use around it: vernier calipers, a loupe, a small inspection mirror on a
> stalk, a scatter of removed screws. Methodical, unhurried, faintly damning.

## Writing a repo for a reader with no memory
`writing-a-repo-for-a-reader-with-no-memory` · duotone `#4E7A6B` → `#1B2E28`

> Camera: flat head-on elevation, the drawer wall filling the frame like a
> facade. Dominant material: oak.

> Subject: a library card catalogue — a wall of narrow oak drawers with brass
> label holders and pull rods. One drawer is pulled fully open, dense with
> hand-typed index cards packed edge to edge, their top corners softened from
> handling. A single card has been lifted proud of the others and catches the
> light. A rubber date stamp and a well-used ink pad sit on the cabinet top.
> Everything else recedes into quiet, uniform shadow. An archive built for
> somebody who arrives knowing nothing at all.

---

### Drafts — generate when these actually ship

## Running Claude Code + Codex as a dual-agent setup
`dual-agent-claude-code-codex` · duotone `#C88A2C` → `#6E4610`

> Subject: a photographer's light table with a contact sheet laid across it,
> and two identical brass loupes standing on two different frames of the same
> sheet. Each loupe magnifies its frame sharply; the two frames look nearly but
> not quite identical. A red chinagraph pencil has circled one frame and left
> the other alone. Warm light glowing up through the sheet from below. Two
> independent readings of the same evidence, and one disagreement worth having.

## Wiring MCP into a production agent, the parts that bite
`mcp-in-production` · duotone `#3A4A55` → `#141A20` (cool — the one exception)

> Subject: a vintage telephone switchboard patch bay in brass and dark bakelite,
> a neat array of jack sockets with cloth-covered cables seated in most of them,
> curving away off-frame in orderly loops. Two sockets sit empty. One cable has
> pulled free and hangs slack, its brass plug swinging clear of the panel. The
> tidy grid has been disturbed. For this one post only, let the surrounding
> tones run cool — slate and near-black — and keep the brass warm against it.

## Splitting a monolith with Pulumi, without downtime
`monolith-to-microservices-pulumi` · duotone `#B5623C` → `#5E2A16`

> Subject: a single large block of stone on a mason's bench, being split the
> traditional way: a line of drilled holes across its face, steel feathers and
> wedges seated in each one, a hammer set down beside them. The first crack has
> just opened along the line — clean, following exactly where it was scored.
> Marigold chalk marks the remaining cuts still to come. Stone dust on the
> bench. The work of deciding where the seam goes, before any force is applied.
