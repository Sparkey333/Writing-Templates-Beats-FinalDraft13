# Snowdraft — the compendium's companion app

A desktop app (Tauri + React/TypeScript + Rust) that turns the
[FD13 × Snowflake Master Template](../01-screenplay/templates/final-draft-snowflake-master-template.md)
into an actual planner and editor: fill in the Snowflake Method's 10 steps, watch open
decisions collect automatically in a **Focus tab**, then draft in a Fountain‑aware editor
with a live formatted preview. It's the MVP first step toward the "Final Draft 13 clone"
described in the repo's project goals — see [Roadmap](#roadmap) for what's next.

> **Read this before asking "where's my .dmg?"** — see
> [Building a macOS .dmg](#building-a-macos-dmg-read-this-first) below. Short version: this
> app was built in a Linux cloud container, which **cannot** compile or open a macOS app.
> The Rust backend and the React frontend are both verified to compile and run cleanly on
> Linux (see [What's actually verified](#whats-actually-verified-in-this-container)) — the
> code is real and complete — but turning it into a signed `.dmg` needs an actual Mac (or the
> GitHub Actions workflow in [`../.github/workflows/build-macos.yml`](../.github/workflows/build-macos.yml),
> which does this automatically on Apple hardware in CI).

## What's in the MVP

| Tab | What it does |
|---|---|
| **Snowflake Planner** | All 10 Snowflake Method steps as a real form: logline, the three-disaster paragraph, a character-sheet editor, synopsis passes, and a scene-list table with per-scene value-shift tracking. A completion ring shows rough progress. |
| **Editor** | A Fountain‑syntax textarea with a live, properly-formatted screenplay preview (scene headings, character/dialogue, transitions, sections) rendered by a small local parser — see [`src/lib/fountainPreview.ts`](./src/lib/fountainPreview.ts). |
| **Focus** | Auto‑collects every unresolved field across the whole project (blank loglines, unsure‑flagged characters/scenes, missing synopses) into one punch list, grouped by Snowflake step — the literal "separate tab to focus on those to‑do items." You can also add your own manual items. |
| **Drive Import** | Points at a local folder (including a **Google Drive for Desktop** sync folder) and lists every file with a best‑guess Snowflake‑step tag, via a small Rust classifier (`scan_import_folder` in [`src-tauri/src/lib.rs`](./src-tauri/src/lib.rs)). See [Drive integration honesty check](#drive-integration-honesty-check) for exactly what this does and doesn't do. |

A **worked example project** (built from the original Matrix structural analysis in
[`../01-screenplay/beat-sheets/the-matrix-filled-snowflake-example.md`](../01-screenplay/beat-sheets/the-matrix-filled-snowflake-example.md))
loads by default so the app is never a blank page on first launch — click **"Load Matrix
example"** in the toolbar to reload it at any time.

Projects save as plain `.snowdraft.json` files anywhere on disk (via native Save/Open
dialogs), plus a local autosave so in‑progress work survives a reload.

## Drive integration honesty check

The task that drove this app asked for a "direct link Google Drive folder" that can "fill in"
and "reorganize/import" planning docs. Here's precisely what's real vs. what needs more setup:

- ✅ **Real today:** point the Import tab at any local folder path. Because Google Drive for
  Desktop syncs your Drive folder to an ordinary path on disk, this works for actual Drive
  content with zero extra setup — no API keys, no login. The Rust backend lists the folder and
  suggests a Snowflake step per file via keyword matching (see `classify_filename` in
  `src-tauri/src/lib.rs`); you confirm or override every suggestion.
- 🚧 **Not wired up:** browsing Drive directly over its API (so files that aren't synced
  locally would still show up) needs a Google Cloud project with an OAuth client registered
  to this app's identifier, plus a consent screen — credentials only the app's *owner* can
  provision (they're tied to a Google Cloud billing/console account, not something that can
  be generated generically). The scan command's interface was written so adding this later is
  additive: a second data source feeding the same classifier and the same review UI, not a
  rewrite.

## Building a macOS .dmg (read this first)

**This app was built and verified inside a Linux cloud container** (see environment notes in
the session that produced it) — there is no Mac, no Xcode, and no macOS SDK available here.
Tauri's macOS bundler (which produces a `.app` and `.dmg`) only runs *on* macOS — it can't
cross-compile from Linux. So this container cannot produce, and therefore cannot open, a
`.dmg`. Two ways to get one:

### Option A — CI builds it for you (recommended, zero local setup)
[`../.github/workflows/build-macos.yml`](../.github/workflows/build-macos.yml) runs on GitHub's
hosted macOS runners and uses [`tauri-apps/tauri-action`](https://github.com/tauri-apps/tauri-action)
to produce a real, installable `.dmg` as a downloadable workflow artifact (and attaches it to
a GitHub Release when pushed to `main`/tagged). Trigger it from the **Actions** tab after this
PR merges (or push a tag), download the artifact, and you have a `.dmg` built by an actual Mac.

### Option B — build it yourself on your Mac
```bash
# Prerequisites: Xcode Command Line Tools, Rust (rustup.rs), Node 20+
git clone <this repo>
cd Writing-Templates-Beats-FinalDraft13/app
npm install
npm run tauri build            # produces src-tauri/target/release/bundle/dmg/Snowdraft_0.1.0_*.dmg
open src-tauri/target/release/bundle/dmg/*.dmg
```
The `.dmg` this produces is **unsigned** (no Apple Developer ID attached) — macOS Gatekeeper
will warn on first open. Right‑click → Open (instead of double‑click) the first time, or see
[Tauri's macOS signing guide](https://tauri.app/distribute/sign/macos/) to sign/notarize for
distribution beyond your own machine.

## What's actually verified in this container

Everything below was run and passed inside the Linux container that built this app — it's not
a claim, it's what actually happened this session:
- `npx tsc --noEmit` — the whole TypeScript frontend type-checks with zero errors.
- `npm run build` — the full Vite production frontend build succeeds (see `dist/`).
- `cargo check` and `cargo build` (after installing the Linux Tauri prerequisites —
  `libwebkit2gtk-4.1-dev`, `libayatana-appindicator3-dev`, `librsvg2-dev`, etc.) — the Rust
  backend compiles **and fully links** into a working Linux binary.
- What was **not** possible here: actually launching the GUI (this container has no display
  server) and building the macOS/Windows targets (different OS toolchains entirely).

## Local development
```bash
npm install
npm run tauri dev     # native window, needs a display — won't work in a headless container
# or, frontend-only in a regular browser tab (no native save/open dialogs, uses download/upload instead):
npm run dev
```

## Roadmap
This is the MVP slice, not the finished "Final Draft 13 + best-of-competitors" app described
in the project brief. Sensible next steps, roughly in order:
0. **Template gallery ("start of the FD13 clone")** — a Templates tab that surfaces the
   repo's whole library (the `.fountain` screenplay/TV/short templates, the
   [FD13 × Snowflake master template](../01-screenplay/templates/final-draft-snowflake-master-template.md),
   and every framework beat sheet) as one-click "New project from template" starting points.
   This is the concrete next step toward the Final Draft 13 clone: the template picker is the
   first screen a Final Draft user sees, and this repo already *is* the template set.
0b. **Connections / integrations module (incl. Rabbit R1)** — a "Connections" tab and a
   small connection-builder for external devices/services, starting with a **Rabbit R1**
   dashboard + connector (push a scene/beat to the device, pull notes/voice-captures back
   in). Scoped as its own module because it's orthogonal to the writing core; see the note
   in the repo PR/summary — this was requested but is a larger, separate build and is
   captured here rather than stubbed half-way.
1. **Real screenplay pagination** — replace the preview's rough line-count estimate with true
   paginated, Courier-metric page breaks (industry "1 page = 1 minute" fidelity).
2. **PDF export** — render the Fountain draft to a properly formatted screenplay PDF.
3. **Direct Google Drive API** — OAuth + Drive picker, once the project has its own Google
   Cloud credentials (see honesty check above).
4. **AI-assisted drafting** — a "propose the next scene from the scene list" assist, scoped
   tightly to the project's own Snowflake data so suggestions stay grounded in what's already
   been decided (never overwrite the Focus tab's flagged decisions automatically).
5. **Series/season bibles** — multi-project linking for the "novel and series planning"
   use case, persisting world/character state across books per
   [`snowflake-method.md § For series & screen`](../03-novel-methods/snowflake-method.md).
6. **Feature parity pass** against Final Draft 13 / WriterDuet / Arc Studio Pro — see
   [`../01-screenplay/formatting/final-draft-13-and-competitors.md`](../01-screenplay/formatting/final-draft-13-and-competitors.md)
   for the feature checklist this app is working through (Beat Board, Story Map, revision
   colors, real-time collaboration).

## Recommended IDE setup
[VS Code](https://code.visualstudio.com/) + [Tauri extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
