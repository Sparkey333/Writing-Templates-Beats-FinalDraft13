# The Final Draft 13 × Snowflake Method Master Template

**The centerpiece planning document of this repo.** It fuses Randy Ingermanson's
[10‑step Snowflake Method](../../03-novel-methods/snowflake-method.md) (the *process* —
how you grow an idea) with Final Draft 13's document architecture (the *destination* — a
production‑ready script), so you plan and build in one continuous document instead of
losing your outline the moment you open a blank script page.

It is also the **spec this repo's planned app is built from** — see [`../../app/README.md`](../../app/README.md).
Everything below is designed to work equally well as (a) a document you fill in by hand,
or (b) a schema a piece of software could drive a UI from.

> A fully filled‑out worked example of this exact template, built on *The Matrix* (as
> original structural analysis — not the real script), lives at
> [`../beat-sheets/the-matrix-filled-snowflake-example.md`](../beat-sheets/the-matrix-filled-snowflake-example.md).
> Read that alongside this file to see the template in use.

---

## How to use this document

1. **Work top to bottom.** Each Snowflake step only asks you to *expand* the step before it
   — never invent from nothing.
2. **Every field can be left `⚑ UNSURE`.** Don't force a decision. Flag it and move on —
   see [the Focus / To‑Do Tab](#focus--to-do-tab-unsure-decisions) at the bottom, which
   collects every `⚑` in this document into one punch‑list.
3. **When you reach Step 10 (scene list),** hand the `.fountain` scaffolding at the bottom
   off to a real script file — start from
   [`feature-screenplay.fountain`](./feature-screenplay.fountain) and paste your scene list
   in as section headers.
4. **Importing existing material (a Google Drive folder, old drafts, notes):** see
   [Drive Import & Reorganize](#drive-import--reorganize-existing-material) below — this
   template doubles as the **target schema** you sort loose documents into.

---

## Snowflake Step 1 — One‑Sentence Summary
*(FD13 equivalent: the project's logline, shown on the title page / project settings)*

```text
LOGLINE (≤15 words, roles not names):
  ⚑ ______________________________________________________________
```

## Snowflake Step 2 — One‑Paragraph Summary (the three disasters)
*(FD13 equivalent: Story Map top level — your four/five tentpole beats)*

```text
SETUP:                    ⚑
DISASTER 1  (~25% | Act 1 → Act 2 turn):   ⚑
DISASTER 2  (~50% | Midpoint):             ⚑
DISASTER 3  (~75% | Act 2 → Act 3 turn):   ⚑
ENDING:                   ⚑
```
> Cross‑reference: this five‑sentence shape *is* [Three‑Act Structure](../../02-story-structure/three-act-structure.md)'s
> turning points. If you also want film‑grade page targets, run these five sentences through
> the [Save the Cat 15‑beat sheet](../../02-story-structure/save-the-cat-15-beats.md) next.

## Snowflake Step 3 — Character Summary Sheets
*(FD13 equivalent: the Character list within Beat Board)*

Repeat this block per major character — full dossiers live in
[`../../05-character/character-dossier-template.md`](../../05-character/character-dossier-template.md);
this is the compressed planning version:

```text
NAME/ROLE:
ONE-LINE ARC:
MOTIVATION (abstract want):        ⚑
GOAL (concrete want):              ⚑
CONFLICT (what stops them):        ⚑
EPIPHANY (what they learn):        ⚑
THEIR OWN ONE-PARAGRAPH STORYLINE: ⚑
```

## Snowflake Step 4 — One‑Page Synopsis
*(FD13 equivalent: the Story Map's expanded outline pass)*

Expand each of the 5 sentences from Step 2 into a full paragraph (aim ~1 page total). Each
paragraph should end on a disaster/turn except the last.

```text
[Setup paragraph]        ⚑
[Disaster 1 paragraph]   ⚑
[Disaster 2 paragraph]   ⚑
[Disaster 3 paragraph]   ⚑
[Ending paragraph]       ⚑
```

## Snowflake Step 5 — Character Synopses
Tell the story from each major character's POV, half‑page each. Surfaces subplot beats you'd
otherwise miss. `⚑` per character until drafted.

## Snowflake Step 6 — Four‑Page Synopsis
Expand each Step‑4 paragraph into a full page. This is the last pure‑prose stage before you
start thinking in scenes — most writers can hand this to a collaborator or reader for
feedback *before* committing to the scene list.

## Snowflake Step 7 — Character Bibles
*(FD13 equivalent: full character notes attached to the project)*

Full dossier per major character →
[`../../05-character/character-dossier-template.md`](../../05-character/character-dossier-template.md).
Link or paste each here.

## Snowflake Step 8 — Scene List
*(FD13 equivalent: Beat Board cards / Story Map scene index — this is the direct handoff
into the actual script file)*

```text
 #  | ACT | POV/Slugline               | What happens (goal → outcome)     | Value shift | ⚑
────┼─────┼─────────────────────────────┼────────────────────────────────────┼─────────────┼───
 1  | 1   | INT./EXT. ___ - ___         |                                    | __ → __     |
 2  | 1   |                             |                                    |             |
 3  | 1   |                             |                                    |             |
...
```
> When this table is done, every row becomes a `## Scene N` section marker (or a slugline)
> in your `.fountain` file. This is the exact moment you leave this document and open
> [`feature-screenplay.fountain`](./feature-screenplay.fountain) (or the TV/short template).

## Snowflake Step 9 — Scene Narrative Briefs (optional)
For any scene marked `⚑` in Step 8, or any scene you're nervous about, write a quick brief
before drafting it in full:
```text
SCENE #:      CONFLICT:      SETBACK/TURN:      POV GOAL ENTERING/EXITING:
```

## Snowflake Step 10 — Write
Open the matching `.fountain` template ([feature](./feature-screenplay.fountain) /
[TV hour](./tv-one-hour-drama.fountain) / [TV half‑hour](./tv-half-hour-sitcom.fountain) /
[short](./short-film.fountain)), paste the Step 8 scene list in as your section scaffolding,
and draft scene by scene. You are now expanding, not inventing.

---

## Focus / To‑Do Tab (unsure decisions)

Every `⚑` above is a decision you haven't locked yet. **Copy them here as you go** — this is
the "separate tab to focus on those to‑do items" this template is built around. In the
[planned app](../../app/README.md), this section *is* a literal separate tab that
auto‑collects every `⚑` in the document, sorted by Snowflake step, so open questions never
get buried in prose.

```text
FOCUS LIST — open decisions, newest first
[ ] (Step __) — question:                     → notes/options:
[ ] (Step __) — question:                     → notes/options:
[ ] (Step __) — question:                     → notes/options:
```

**How to clear one:** decide → replace the `⚑` above with your answer → check the box here
→ leave the line as a decision log (don't delete it — "why did we choose X" is worth keeping).

---

## Drive Import & Reorganize (existing material)

If you already have loose planning docs — a Google Drive folder of notes, old outlines,
half‑finished chapter drafts — use this template as the **target schema** to sort them into,
rather than starting from zero:

1. **Inventory first.** List every doc in the folder with a one‑line guess at which Snowflake
   step it belongs to (a character sheet → Step 3/7; a synopsis draft → Step 4/6; a scene
   draft → Step 9/10).
2. **Sort, don't rewrite.** Paste/link each doc under its matching heading above. Resist
   editing on the first pass — reorganization and revision are different jobs.
3. **Flag gaps as `⚑` in the Focus Tab**, not as guilt. A folder that has Step 9 scene drafts
   but no Step 2 one‑paragraph summary just means Step 2 is your next real task — the
   Snowflake shape tells you what's actually missing.
4. **Chapters/Acts/Arcs mapping** — when importing a multi‑document project:
   - Loose **chapter** docs → Step 8 scene‑list rows (one row per chapter/scene) →
     grouped under Step 4/6 synopsis paragraphs by which disaster they follow.
   - **Act** docs → the three disasters + ending in Step 2.
   - **Arc** docs (character or subplot throughlines) → Step 5 (character synopses) or, for
     a series, a per‑book/season repeat of Steps 1–2 (see
     [snowflake-method.md § For series & screen](../../03-novel-methods/snowflake-method.md)).
5. **Live Drive link (manual today, automatable later):** paste the folder's share link here
   and keep this document as the index into it:
   ```text
   SOURCE DRIVE FOLDER: ⚑ <paste share link>
   IMPORT STATUS:       ⚑ not started / in progress / sorted
   ```
   The [app](../../app/README.md)'s planned Google Drive connector automates steps 1–4 above
   (list the folder, propose a Snowflake‑step tag per file, let you confirm/move) — see that
   file for current status; until then, this manual pass works fine and produces the exact
   same document shape.

---

## Sources
- Randy Ingermanson, Snowflake Method: https://www.advancedfictionwriting.com/articles/snowflake-method/
  — full breakdown: [`../../03-novel-methods/snowflake-method.md`](../../03-novel-methods/snowflake-method.md)
- Final Draft 13 feature rundown: [`../formatting/final-draft-13-and-competitors.md`](../formatting/final-draft-13-and-competitors.md)
- Fountain syntax (for Step 10 handoff): [`../formatting/fountain-syntax-cheatsheet.md`](../formatting/fountain-syntax-cheatsheet.md)
