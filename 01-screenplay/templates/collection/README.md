# Final Draft-importable template collection

Every template in this folder is a plain **`.fountain`** file. **Final Draft imports Fountain
directly:** open Final Draft → **File → Open** → pick the `.fountain` file (or **File →
Import**). The `#`/`##` section headers land in Final Draft's outline / Beat Board, and each
beat's one-line purpose is a synopsis line under it.

Also opens in WriterDuet, Fade In, Highland, Slugline, and any Fountain-aware app.

## What's here
| File | Structure | Format |
|---|---|---|
| `feature-save-the-cat.fountain` | Save the Cat 15 beats | Feature |
| `feature-heros-journey.fountain` | Hero's Journey (12 stages) | Feature |
| `feature-screenplay.fountain` | Save the Cat scaffold (hand-authored) | Feature |
| `tv-one-hour-drama.fountain` | Cold open + 5 acts | TV hour |
| `tv-half-hour-sitcom.fountain` | Multi-cam cold open + 2 acts + tag | TV half-hour |
| `short-film.fountain` | Single-turn short | Short |
| `story-circle.fountain` | Dan Harmon's 8-step circle | Any |
| `seven-point.fountain` | Seven-Point Structure | Any |
| `shonen-power-up-arc.fountain` | Toonami / Shōnen power-up arc | TV/serial |
| `mystery-fair-play.fountain` | Fair-play mystery | Any |
| `romance.fountain` | Romance beat sheet | Any |
| `heist.fountain` | Heist | Feature |

## Regenerating / adding templates
The 8 structure files are generated from the app's catalog:
```bash
node app/scripts/export-fountain.mjs
```
Edit `app/scripts/export-fountain.mjs` (or `app/src/templatesCatalog.ts`) to add more.

## Notes
- These are **skeletons** — beats laid out as scenes with synopsis lines, ready for you to
  write into. They're the same structures the Snowdraft app seeds when you pick a template.
- For the full craft explanation behind each, see the framework file it's based on (linked
  from the app's template cards and from [`../../../00-master-list/MASTER-TEMPLATE-LIST.md`](../../../00-master-list/MASTER-TEMPLATE-LIST.md)).
