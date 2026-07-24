# The Legend of Litiguh — series integration plan

Snowdraft's first real-world series: three books used as the **system's triangulation test** —
if the app can hold a completed book, a completed counterpoint, and a planned finale in one
braided structure, the model works.

| Book | Title | Status | Role in the system test |
|---|---|---|---|
| 1 | **Stone of Matter** | Complete | Foundation — primary focus; proves ingestion + re-planning of a finished Snowflake-built novel |
| 2 | **Stone of Water** | Complete | Counterpoint — proves the same structure holds a book that *inverts* Book 1's answers |
| 3 | **Dominion** | Planned | Triangulation — proves forward planning: braided arcs from Books 1–2 converging |

All three were originally planned with the **Snowflake Method** with arc planning braided
across chapters, acts, and books — exactly the pipeline this repo documents
([Snowflake](../../03-novel-methods/snowflake-method.md) → [Hero's Journey](../../02-story-structure/heros-journey.md)
→ [multi-book braiding](../../06-genre-templates/epic-fantasy-braided-multipov.md)).

## Getting the manuscripts in (the honest path)

The source folder (`/Users/ansom/Downloads/__Legend of Litiguh`) lives on the author's Mac.
**This cloud build environment cannot reach local machines**, so the pipe is the app itself:

1. Open the web app (canvas artifact or `app/web-demo/index.html`).
2. **Capture tab → drag the folder's contents in.** The browser reads text files
   (.md/.txt/.fountain) **locally — nothing uploads anywhere**.
3. Each file is classified (filename keywords → Snowflake step; "matter"/"water"/"dominion"
   → book routing) and filed on confirm. World-building docs land under **World-building**.
4. Imported materials appear on the Series tab per book; the desktop app's folder scanner
   (`src-tauri/src/lib.rs`) does the same against a real directory, no browser needed.

## What the app now has for this (web build)

- **Series tab** — the three books as switchable projects, series logline / braided-arc /
  world-building fields, per-book imported-materials list.
- **Per-book Snowflake planner** (all 10 steps), Fountain editor, Focus tab — all scoped to
  the active book.
- **Scene Art tab** — one key image per act: upload a local reference (works everywhere) or
  **BYOK generation** (OpenAI `gpt-image-1` or a custom endpoint; key stored only in the
  browser) with a house style: *ancient pastel sketch, weathered illuminated-manuscript,
  arctic greys + one living green accent.* Honest limits: the Claude canvas sandbox blocks
  outbound API calls and external image URLs — generation runs in the desktop app or a
  locally-opened copy; the canvas always gives you the exact prompt to run anywhere.

## Positioning vs. CodexHeim / Scrivener

Same territory (long-form novel/series planning), different spine: those tools organize
*documents*; Snowdraft organizes the **method** — the Snowflake steps are the schema, unsure
decisions surface automatically (Focus), captures classify themselves into the pipeline, and
scene art hangs off the act structure rather than a separate binder. Feature-parity gaps
(rich text, compile/export targets, full-text search) are tracked in the app roadmap.

## Next steps
1. Author drags the real Book 1 files in → verify classification quality on real names.
2. Content-based classification (read the text, not just the filename) — interface isolated.
3. Desktop parity for the Series + Scene Art tabs (currently web-first).
4. Per-chapter key-scene art pass across Book 1, then 2, then 3.
