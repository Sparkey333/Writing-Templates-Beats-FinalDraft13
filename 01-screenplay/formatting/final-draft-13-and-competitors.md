# Final Draft 13 & Competitors — Template Landscape

A rundown of what ships in **Final Draft 13 Pro** and how the field's main alternatives
compare, so you know which tool (or which of *our* templates) fits a given job.

## Final Draft 13 — what ships in the box
Final Draft is the long‑standing industry‑standard screenwriting app
(https://www.finaldraft.com/). Its template library and FD13‑era features include:

**Document templates by category**
- **Screenplay** — the standard feature‑film template (see
  [format spec](./screenplay-format-spec.md)).
- **TV** — multiple studio/network‑style templates: single‑camera hour drama, multi‑camera
  half‑hour sitcom (several studio‑specific variants historically bundled, e.g. network
  "half‑hour" and "one‑hour" house styles), plus a generic TV template.
- **Stage Play** — proper stage‑play margins/cues (distinct from screen format).
- **Audio/Radio Drama** — format for audio‑only scripts (sound cues, no visual sluglines).
- **Graphic Novel / Comic Book Script** — panel‑and‑page description format.
- **Novel/Manuscript‑adjacent** — Final Draft is script‑first; prose manuscripts are better
  served by Scrivener/Word (see [novel methods](../../03-novel-methods/)).

**FD13‑era feature set worth knowing (for template‑equivalent thinking)**
- **Beat Board** — a corkboard for planning beats/scenes visually before/while scripting.
- **Story Map** — a structural outline view tied to the script, for act/sequence planning.
- **Structure/Act markers** — tag scenes to acts/sequences for a bird's‑eye pacing view.
- **Templates by genre/format** picker on new‑document creation.
- **Collaboration** — real‑time co‑writing, comments, revision‑mode (colored page revisions
  per studio convention — a real production workflow feature).
- **Focus/Typewriter‑style modes** and interface refinements in the v13 line.

> This repo's [Beat Board](../../02-story-structure/) equivalents are the beat‑sheet files;
> the [Story Map](../../00-master-list/MASTER-TEMPLATE-LIST.md) equivalent is the master list;
> the [FD13 × Snowflake template](../templates/final-draft-snowflake-master-template.md) is
> built to mirror FD13's planning‑to‑script pipeline in plain text.

## Competitors — niche & strengths
| Tool | Niche / strength | Format support |
|---|---|---|
| **WriterDuet** | Best-in-class real-time collaboration (Google‑Docs‑style); free tier; browser + desktop | Screenplay, TV, stage; imports/exports Final Draft `.fdx` |
| **Fade In** | One-time purchase, very close FD‑format fidelity, fast & lightweight, strong mobile app | Screenplay, TV, stage, comic |
| **Celtx** | All-in-one pre-production suite (script + storyboards + scheduling + budgeting) | Screenplay, TV, AV/video, stage, podcast |
| **Arc Studio Pro** | Built *for* collaborative writers' rooms; outlining + index cards + beat boards native | Screenplay, TV (writers'-room-first UX) |
| **Scrivener** | The novelist's tool — corkboard, binder, compile targets; not script-format-native but has a screenplay mode | Novel/manuscript-first; basic script mode |
| **Highland 2** | Fountain-native, minimalist, Mac-first, distraction-free; great for drafting | Fountain (plain text) → exports FDX/PDF |
| **Movie Magic Screenwriter** | Legacy industry tool, strong scheduling/production-side integration | Screenplay, TV, stage |
| **StudioBinder** | Production management (call sheets, shot lists, scheduling) more than drafting | N/A (production, not scripting) |
| **Fountain** (open format) | Not an app — an open plain-text *standard* many of the above read/write | See [syntax cheat sheet](./fountain-syntax-cheatsheet.md) |

## Choosing a lane for this repo's templates
- **Want it to open directly in Final Draft?** Use the `.fountain` templates in
  [`../templates/`](../templates/) — Final Draft imports Fountain, or convert via Highland/
  WriterDuet. (`.fdx` is Final Draft's native XML format; we keep templates in the open
  Fountain format so they're tool‑agnostic and diffable — see
  [`LEGAL-AND-SOURCES.md`](../../LEGAL-AND-SOURCES.md) principles on portability.)
- **Planning before you script?** Use the
  [FD13 × Snowflake master template](../templates/final-draft-snowflake-master-template.md) —
  it front‑loads the Beat‑Board/Story‑Map thinking in Markdown, then hands off to a
  `.fountain` script.
- **Writers' room / collaborative?** Pair these templates with WriterDuet or Arc Studio Pro
  for the live multi‑writer layer; the beat sheets here are the shared source of truth.

## Sources
- Final Draft: https://www.finaldraft.com/
- WriterDuet: https://www.writerduet.com/
- Fade In: https://www.fadeinpro.com/
- Celtx: https://www.celtx.com/
- Arc Studio Pro: https://arcstudiopro.com/
- Scrivener: https://www.literatureandlatte.com/scrivener/
- Highland 2: https://www.highland2.app/
- Fountain: https://fountain.io/
