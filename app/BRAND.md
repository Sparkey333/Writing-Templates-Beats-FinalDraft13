# Snowdraft — Brand & Soul

## The thesis: Snowflake Method → Hero's Journey

Snowdraft's whole identity is its process, made visible:

> A single **snowflake** — one crystalline seed idea, one sentence — begins to **melt**.
> Its branches **fractal out into tributaries**, the way the
> [Snowflake Method](../03-novel-methods/snowflake-method.md) expands one sentence into a
> paragraph, a page, a scene list. The water threads **interlace with roots**, and feed the
> **first green sprout of life** — a *character*. That sprout springs up into a whole built
> universe whose reason to exist is to tell that character's
> [**Hero's Journey**](../02-story-structure/heros-journey.md): an earned rise to
> inheritance, the highest path, and power through
> [redemption](../06-genre-templates/redemption-arc.md).

**Snowflake Method, then Hero's Journey — that is the model, and it is literally two of this
repo's flagship files working as one pipeline.** The app takes you from the fractal expansion
of an idea all the way up to the character arc it exists to serve.

## The name

**Snowdraft** — "snow" (the Snowflake Method seed) + "draft" (what you're here to write).
We checked: **"Snowdrift" is already an active software trademark** (Snowdrift.coop), while
**"Snowdraft" came up clear**, so Snowdraft is the safer product name. The *snowdrift → thaw →
life* metaphor still lives fully in the art and story above — we just don't put it on the
title bar.

## Palette

| Token | Hex | Use |
|---|---|---|
| Navy base | `#14161c` | App background |
| Elevated navy | `#1b1e26` | Panels, bars |
| Ice cyan | `#7dd3fc` | Primary accent (the snowflake) |
| Strong cyan | `#38bdf8` | Buttons, focus rings |
| Sprout green | `#22c55e` | The "first green of life" — success, growth, the Focus-clear state |
| Flag amber | `#fbbf24` | ⚑ unsure decisions (the Focus tab) |
| Crown gold | `#fbbf24` → white | The Hero's-Journey payoff in hero art |

## Committed art (authored locally, durable)

These are hand-authored vector assets that build offline and ship in the repo — the source
of truth for the app's look:

- [`brand/icon.svg`](./brand/icon.svg) → `brand/icon-1024.png` → the full platform icon set in
  [`src-tauri/icons/`](./src-tauri/icons/) (generated via `npm run tauri icon`). Snowflake
  melting through tributaries into the green sprout.
- [`brand/dmg-background.svg`](./brand/dmg-background.svg) → `src-tauri/dmg/background.png`
  (+`@2x`) → the macOS installer window backdrop (wired in
  [`tauri.conf.json`](./src-tauri/tauri.conf.json) under `bundle.macOS.dmg`). The snowflake's
  thaw flows across the window to the sprout, with the center kept clear for the app and
  Applications-folder icons.

## Higgsfield concept art & animations (marketing / hero art)

Generated via Higgsfield to explore the soul of the app. **These live on a CDN this build
container can't reach (egress policy), and the URLs are account-scoped and may expire** — so
they're documented here rather than committed. Fetch them on an unblocked machine with
[`brand/fetch-assets.sh`](./brand/fetch-assets.sh), or view them in your Higgsfield account by
job ID.

| Asset | Job ID | Type |
|---|---|---|
| Hero arc: snowflake → tributaries → roots → sprout → hero → crown of light | `87413094-bd84-425f-992f-da...` | image (9:16) |
| "Soul" — snowflake unfurling into a manuscript scroll + constellation of story beats | `cf8066a2-a91e-45de-9b1e-918466728d38` | image (16:9) |
| Thaw vertical — snowflake → tributaries → sprout → cosmos | `ffabb0be-a8ed-40fd-9951-c391942dae39` | image (9:16) |
| Logotype lockup (SNOWDRAFT wordmark + mark) | `8f7d8b94-8a89-4187-a253-4d9b8c616d09` | image (16:9) |
| Higgsfield icon concept (informed the committed `icon.svg`) | `f6078ea4-efd0-466b-9eeb-ee10b185b95b` | image (1:1) |
| **Icon splash animation** — the snowflake melts to the sprout (5s) | `36d6007f-9ae9-4d4a-b19c-2b838e62a38b` | video (720×720) |
| **Drift background animation** — ambient installer motion (5s) | `6bbb8afe-f803-4c8a-9b97-17f85afd3f65` | video (16:9) |
| **Splash v2 — 10s, professional, with embedded boot-up chime audio** | `4668146b-6de9-4070-8a78-5c5400a9499a` | video+audio (720×720, Kling 3.0) |

### On the "PS2 boot-up" sound effect
The 10-second splash (`4668146b…`) is rendered on **Kling 3.0**, which generates an **audio
track along with the video** — its prompt asks for a warm, console-style boot-up chime that
swells as the sprout blooms, so the SFX is baked into that clip. A *standalone* SFX/music file
is **not** available through this toolset: Higgsfield's audio tool is text-to-speech only and
its music/SFX models are restricted to a separate game-generation pipeline. To use a bespoke
PS2-style boot sound, add your own licensed `.wav`/`.mp3` to `app/public/` and play it on
splash mount.

> The committed `brand/icon.svg` is our own clean vector interpretation of the Higgsfield
> `f6078ea4` concept, so the app has durable, license-clear, offline-buildable art while the
> Higgsfield pieces serve as hero/marketing art and motion.

## Using the animation as an in-app splash (optional)

The 5-second icon animation makes a natural launch/loading loop. To wire it in on your
machine: run `brand/fetch-assets.sh`, drop the resulting `icon-splash.mp4` into
`app/public/`, and show it behind a fade on first mount. Left out of the committed build to
keep the bundle small and the repo free of un-fetchable binaries.
