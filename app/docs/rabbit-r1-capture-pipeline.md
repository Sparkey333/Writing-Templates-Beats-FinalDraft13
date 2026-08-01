# Rabbit R1 → Snowdraft capture pipeline

**Goal:** speak or jot a note/idea on a **Rabbit R1**, and have it land as a file that
Snowdraft automatically sorts into the right place in your writing pipeline — the correct
Snowflake step, world-building, a character, or a specific project's folder.

This document is the design + the honest "what's real today vs. what needs the device."

## The pipeline (end to end)

```
 ┌────────────┐   1. capture      ┌──────────────┐   2. sync        ┌───────────────────┐
 │  Rabbit R1 │ ───────────────►  │ capture inbox │ ───────────────► │  Snowdraft app    │
 │ (voice/txt)│   note / thought  │  folder (disk)│   file appears   │  Import/Capture    │
 └────────────┘                   └──────────────┘                   │  tab auto-sorts    │
                                                                     └─────────┬─────────┘
                                        4. you confirm  ◄──────────────────────┘
                                        3. classify → suggest Snowflake step / project folder
```

1. **Capture on R1.** Speak a thought or type a note. The R1 records it (voice memo →
   transcript, or a text journal entry).
2. **Sync to a capture-inbox folder** on your computer — an ordinary directory Snowdraft can
   read (e.g. `~/Snowdraft/inbox/`).
3. **Auto-sort.** Snowdraft's **Import** tab scans the inbox and, using the same classifier
   that powers Drive Import (`scan_import_folder` → `classify_filename` in
   [`../src-tauri/src/lib.rs`](../src-tauri/src/lib.rs)), tags each capture with a best-guess
   destination: a **Snowflake step** (logline / character sheet / scene / draft…),
   **world-building**, or an **act/arc**.
4. **You confirm or override** each suggestion — nothing moves silently. Confirmed captures
   flow into the project (and unresolved ones become ⚑ items in the **Focus tab**, so a
   half-formed 2 a.m. idea doesn't get lost).

## What's real today

- ✅ **The auto-sort engine.** Point the **Import** tab at any capture-inbox folder and it
  lists every file with a suggested Snowflake step. This is live right now — the R1 case is
  just "the folder happens to be filled by an R1."
- ✅ **Keyword classification** by filename (`logline…`, `character…`, `scene…`, `chapter…`,
  `world…`, `arc…`, `act…`), transparent and overridable.
- ✅ **Works with any capture source** — R1, a phone voice-memo folder, a Drive-synced notes
  folder, Obsidian daily notes, etc. The pipeline isn't R1-specific; R1 is the first target.

## What needs the device / more setup (roadmap)

- 🚧 **Getting R1 captures into the inbox folder automatically.** The R1's notes live in its
  **rabbitOS / rabbithole** account. Realistic paths, in order of effort:
  1. **Manual export** (works today): export/copy R1 journal entries or transcripts into the
     inbox folder; Snowdraft sorts them.
  2. **A sync bridge** (small script): a scheduled job that pulls new entries from the
     rabbithole account/API into the inbox folder. Depends on Rabbit exposing an export/API
     for journal entries — to be confirmed against their current developer offering.
  3. **A Rabbit "creation" / intern integration** (if/when available): have the R1 write
     directly to a connected storage folder.
- 🚧 **Content-based classification.** Today's classifier reads *filenames*. A capture named
  `note-2026-07-20.txt` has no hint — so the next step is to classify by **content** (a small
  on-device or local model reads the note and decides "this is a character beat for Project X").
  The classifier interface is already isolated so this is an additive change.
- 🚧 **Multi-project routing.** Sorting not just by Snowflake step but into the correct
  *project's* folder when you're juggling several.

## Suggested folder convention

```
~/Snowdraft/
  inbox/                     ← R1 (and any capture source) drops raw notes here
  projects/
    my-novel/
      my-novel.snowdraft.json
      captures-sorted/       ← confirmed captures land here, by step
        step-3-characters/
        step-8-scenes/
        world/
```

## Why this fits the app's model

Snowdraft is **Snowflake Method → Hero's Journey**: ideas start as tiny seeds and grow into
structure. An R1 capture is the *smallest* seed — a single spoken sentence — and this pipeline
is how that seed enters the fractal: caught, classified, and placed where it can grow, instead
of dying in a notes app. See [`../BRAND.md`](../BRAND.md).

## Status

Design + the auto-sort half are shipped. The R1-account → inbox bridge and content-based
classification are the next build (tracked in [`../README.md`](../README.md) roadmap). If you
tell me how you currently get notes off your R1 (manual export vs. an account/API you can
reach), I'll wire the matching bridge.
