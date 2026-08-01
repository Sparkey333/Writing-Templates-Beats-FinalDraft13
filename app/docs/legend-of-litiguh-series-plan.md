# The Legend of Litiguh — series canon & integration plan

Snowdraft's real-world series. **Books 1–7 are named for the seven Creation Stones.**

> **Source of truth:** repo `Sparkey333/Legend-of-Litiguh`, branch
> `claude/litiguh-manuscript-org-1nr8t7`. `main` holds only a LICENSE — the manuscripts,
> codex, and series bible are all on that branch.

## The Seven Creation Stones — CANON

Verified against four independent files, all derived from the manuscript text itself:

| # | Source | What it says |
|---|---|---|
| 1 | `shared/world-codex/magic-system/creation-stones.md` (marked **CANON**, lines 5–21) | *"Seven Creation Stones exist."* Table of all seven + *"The Stone names are drawn directly from the text."* |
| 2 | `shared/world-codex/glossary.md` § The Stones | **Matter · Voids · Energy · Dominion · Water · Light · Phases** |
| 3 | `shared/series-bible/series-arc.md` | *"Seven Creation Stones. Three books."* + per-Stone book mapping |
| 4 | `books/book-01-stone-of-matter/story-design/snowflake/step-04-one-page-synopsis.md` | Same seven, in-line in Book 1's own synopsis |

| Stone | Domain | Wielder | Standing after Book 1 |
|---|---|---|---|
| **Matter** | Substance, solidity, the physical | Gwendolyn (d. Ch. II); hidden on Cephas | The object of the whole plot |
| **Water** | Water and its behaviours | *Drowning*, struck down | Contested |
| **Dominion** | Command over others; the will | The Morningstar's own | Dark — *"the worst of their kind"* |
| **Voids** | Absence, pressure differential, displacement | Gwendolyn wielded voids at full power | Bonded to Matter's line |
| **Energy** | Force, lightning, heat, motion | Held among the dark host | Dark |
| **Light** | Light, sight, revelation | The celestial tier | Light |
| **Phases** | States of matter and transitions between | Referenced, unassigned | **OPEN — the wildcard** |

**The central rule:** a Stone grants *the core of an aspect — "the crux of it, the emanating
essence"* — bonded into the wielder's chest. Others can study the same aspect and counter a
wielder move for move, but **understanding is borrowed; the Stone is owned.** Effects:
crystallisation, longevity, amplification, guardianship of a place.
**Largest open gap:** how a Stone transfers is never shown on the page.

## Book order

| # | Title | Status | Evidence |
|---|---|---|---|
| 1 | **Stone of Matter** | ✅ Complete — 39 chapters, **~194,841 words**, 4 Parts | Full manuscript + its own Snowflake steps 01–10 |
| 2 | **Stone of Water** | Planned (overview JSON, no prose) | `series-arc.md`: Water → book 2 |
| 3 | **Stone of Dominion** | Drafts exist, **mislabeled** | `series-arc.md`: Dominion → book 3; `applied-craft-guide.md`: *"Book 3 needs Dominion and the Greater War intact"* |
| 4–7 | **Voids · Energy · Light · Phases** | Order not yet fixed | All canon Stones; `series-arc.md` hints only |
| 8–9 | *(not named in any file)* | — | — |

### ⚠️ Two corrections to make in the Litiguh repo
1. **`studio/content/planning/snowflake/series/overview.json` is stale.** It lists *Fire, Air,
   Spirit, Shadow, Time* — none are canon Stones. The file admits it:
   `"Replace working titles 4–9 from Drive snowflake when Prism sync lands."`
2. **The `sof` drafts are mislabeled.** ~15 draft chapters under
   `studio/content/manuscripts/sof/drafts/` sit under the working title *Stone of Fire*; by
   canon that material belongs to **Book 3 — Stone of Dominion**.

## Book 1 — the real distillation already in the repo

Book 1 ships its own Snowflake steps 01–10 plus `variants/step-01.json` and `step-02.json`.
The incumbent one-sentence (15 words):

> **A boy on a hidden island must be tested for a power that destroys whoever wants it.**

Its three-disaster paragraph, Parts, and principal cast (Ammon, Mikael, Gwendolyn, the
Morningstar) are seeded into the app verbatim — see `app/web-demo/index.html` `defaultState()`.

Part structure: **I The Wind Caves** 13 ch / 52,666 w · **II Leviticum** 9 ch / 48,896 w ·
**III Dark Windows** 7 ch / 40,786 w · **IV Trials Of Guardians** 10 ch / 52,493 w.

## What the app now carries

- **Series tab** — all seven Stone-books as switchable projects, Book 1 seeded from the real
  manuscript's own planning, series logline/arc/world filled from the series bible.
- **Codex tab** — the seven Stones with domain, wielder, and standing, sourced as above.
- **Planner / Editor / Focus / Capture / Scene Art** — per-book, as before.

Local storage key bumped to `snowdraft.web.v3` so the canon series replaces the old
placeholder state.

## Fractal Distillation (next)

The reverse-Snowflake pass — distil upward from the 195k-word manuscript and judge new
candidates *against* the incumbent above, keeping a winner only if it genuinely beats it.
Design and results: see `fractal-distillation.md` (pending run).
