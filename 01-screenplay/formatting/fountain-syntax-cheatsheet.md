# Fountain Syntax Cheat Sheet

> Fountain is a simple markup for writing screenplays in plain, human‑readable text — no
> markup tags, no styling — that renders to full industry‑standard screenplay format.
> Open standard: https://fountain.io/ · Full spec: https://fountain.io/syntax

Every `.fountain` template in [`../templates/`](../templates/) uses this syntax. It's the
reason those templates are plain `.txt`‑like files that still import perfectly into Final
Draft, WriterDuet, Highland, Slugline, and other apps.

## Why it matters for this repo
Fountain files are **diffable, greppable, and portable** — exactly what a template library
needs. Write in any text editor; open in Final Draft when you want the WYSIWYG view.

## Scene headings
Any line starting with `INT`, `EXT`, `EST`, `INT./EXT`, or `I/E` (period optional) becomes a
slugline automatically:
```
INT. KITCHEN - DAY
```
Force any line into a scene heading with a leading dot:
```
.FLASHBACK - THE OLD HOUSE
```

## Action
Just... write it. Any plain paragraph not matched by another rule is action:
```
Sarah grabs the phone off the counter. Her hand is shaking.
```

## Character cues & dialogue
An ALL‑CAPS line (with no lowercase letters) followed directly by text becomes a character
cue + dialogue:
```
SARAH
You said it yourself. It's over.
```
Force a cue with a leading `@` (useful for lowercase or unusual names):
```
@mc chris
Yo, that's not my name.
```

## Parentheticals
A line in `(parentheses)` directly under a character cue:
```
SARAH
(quietly)
Isn't it?
```

## Dual dialogue
Add a `^` after the second character's cue to run it side‑by‑side with the previous speech:
```
SARAH
I can't believe this.

MARCUS ^
I can't believe this either.
```

## Transitions
ALL‑CAPS lines ending in `TO:` are transitions automatically:
```
CUT TO:
```
Force any transition with a leading `>`:
```
> FLASH TO BLACK.
```

## Emphasis
Standard Markdown‑style inline emphasis:
```
*italics*        →  italics
**bold**         →  bold
***bold italics*** → bold italics
_underline_      →  underline
```

## Notes & sections (non‑printing)
```
[[This is a note to self — won't print.]]

# Act One                  ← section (outline level 1, non-printing structure)
## Sequence A               ← section level 2
= This is a synopsis line for an outline pass.
```

## Centered text (title pages, cards)
```
> THE END <
```

## Title page
A block at the very top of the file, `Key: Value` pairs, ended by a blank line:
```
Title: _**MIDNIGHT RUN**_
Credit: Written by
Author: Your Name
Draft date: 2026-07-20
Contact: you@example.com

INT. KITCHEN - DAY
...
```

## Page breaks & lyrics
```
===                         ← forces a page break
~This is a lyric line       ← italicized, centered lyric convention
```

## Forcing element types quickly
| Prefix | Forces |
|---|---|
| `.` | Scene heading |
| `!` | Action line |
| `@` | Character cue |
| `~` | Lyric |
| `>` alone before `<` | Centered text |
| `>` | Transition |
| `#` / `##` | Section (outline) |
| `=` | Synopsis |

## Boneyard (block comments — won't print)
```
/*
Cut this whole scene? Revisit in next pass.
*/
```

## Sources
- Fountain spec (official, complete): https://fountain.io/syntax
- Fountain home / app list: https://fountain.io/
