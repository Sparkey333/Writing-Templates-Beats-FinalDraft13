# Screenplay Format — The Industry Standard

The format exists so any reader (agent, director, AD, actor) can estimate runtime and parse
action/dialogue at a glance. Final Draft, WriterDuet, Fade In, Celtx, and Fountain all target
this **same** output spec — the software differs; the page doesn't.

## The core rule
**One page ≈ one minute of screen time.** This is why format discipline matters: a "cheated"
page (crammed margins, tiny font) lies about runtime.

## Page setup
| Element | Spec |
|---|---|
| Paper | US Letter (8.5×11") |
| Font | **12‑pt Courier** (or Courier New / Courier Final Draft) — monospaced, non‑negotiable |
| Top/bottom margin | 1" |
| Left margin | 1.5" (room for a 3‑hole punch/binding) |
| Right margin | 1" (ragged — don't justify) |
| Page numbers | Top right, 0.5" from top; page 1 is unnumbered |

## Element types & their indents (from left edge of page)
| Element | Left indent | Width | Case | Notes |
|---|---|---|---|---|
| **Scene Heading / Slugline** | 1.5" | full | ALL CAPS | `INT./EXT. LOCATION – TIME` |
| **Action** | 1.5" | ~6" | Sentence case | Present tense, visual only (no camera direction unless essential) |
| **Character** | 3.7" | — | ALL CAPS | Name of speaker, centered over dialogue |
| **Dialogue** | 2.5" | ~3.5" | Sentence case | |
| **Parenthetical** | 3.1" | ~2" | (lowercase) | Sparingly — a wryly is a warning sign |
| **Transition** | 6" (right-aligned) | — | ALL CAPS | `CUT TO:`, `SMASH CUT TO:` — modern scripts use these sparingly |
| **Shot** | 1.5" | full | ALL CAPS | `ANGLE ON`, `CLOSE ON` — use rarely; let the director direct |

## Scene headings (sluglines)
```
INT. KITCHEN - DAY
```
- **INT.** (interior) or **EXT.** (exterior), or **INT./EXT.** for a car in motion.
- **LOCATION** — specific enough to scout/build ("KITCHEN," not "HOUSE").
- **TIME** — usually `DAY` or `NIGHT`; `CONTINUOUS`, `LATER`, `MOMENTS LATER` for
  continuity within a sequence. Avoid exact clock times unless plot‑critical.

## Action lines
- Present tense, active voice: *"Sarah grabs the phone."* not *"Sarah grabbed the phone."*
- **CAPITALIZE** a character's name on **first appearance** in action (`SARAH, 30s, runs...`)
  and, by convention, sounds/props that matter (a gunshot, a ringing PHONE).
- Keep paragraphs short — 3–5 lines max. White space reads faster (= feels faster on screen).
- No camera direction (PAN, ZOOM) unless you're the director; write what's *seen*, not how
  it's shot.

## Dialogue & character cues
```
                    SARAH
          You said it yourself. It's over.

                    SARAH (CONT'D)
          (after a beat)
          Isn't it?
```
- `(V.O.)` — voice‑over (narration, phone caller, a letter read aloud).
- `(O.S.)` — off‑screen (in the scene, not in frame).
- `(CONT'D)` — same character continuing after an interruption (action or another speaker).
- Parentheticals modify *delivery*, not action — keep to 1–3 words; overuse reads as
  over‑directing the actor.

## Transitions
- `CUT TO:` — the default (often omitted entirely; a new slugline implies it).
- `SMASH CUT TO:` — a jarring, deliberate hard cut.
- `DISSOLVE TO:` — a slow blend; implies time passing.
- `MATCH CUT TO:` — visual/thematic rhyme between two shots.
- Modern spec scripts use transitions **sparingly** — cutting is usually assumed.

## TV‑specific format
See [final-draft-13-and-competitors.md](./final-draft-13-and-competitors.md) for template
names; format differences:
- **Single‑camera (1‑hour drama):** same as feature format; act breaks marked
  `END OF ACT ONE` / `ACT TWO`. Often opens on a **COLD OPEN / TEASER** before Act 1.
- **Multi‑camera (sitcom):** ALL CAPS action lines, double‑spaced dialogue, scene numbers,
  `(MORE)` at page‑break mid‑speech — built for a table read and a live studio audience.

## Estimating length
- Feature: 90–120 pages (90–120 min).
- Half‑hour comedy: 22–35 pages (multi‑cam runs shorter per page due to format).
- One‑hour drama: 45–65 pages.
- Short film: 1 page ≈ 1 minute; most shorts are 5–20 pages.

## Sources
- Format conventions are industry consensus, documented consistently by Final Draft, Inc.
  (https://www.finaldraft.com/) and the Fountain spec (https://fountain.io/syntax).
- See also [fountain-syntax-cheatsheet.md](./fountain-syntax-cheatsheet.md) for how to type
  all of the above in plain text.
