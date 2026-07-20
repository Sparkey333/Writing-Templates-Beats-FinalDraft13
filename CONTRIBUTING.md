# Contributing to the Compendium

This is a living library. Here's how to add to it without it turning into a junk drawer.

## Principles

1. **Original or linked, never pirated.** Add your own templates and your own analyses.
   For anyone else's full work (a screenplay, a novel), add a **link**, not the file. See
   [`LEGAL-AND-SOURCES.md`](./LEGAL-AND-SOURCES.md).
2. **Plain text wins.** Markdown for docs, `.fountain` for scripts. No proprietary binaries
   in version control unless there's a strong reason.
3. **One idea per file**, cross‑linked, so pieces stay reusable.

## File layout for a new *framework*

Match the house style so every framework reads the same way:

```markdown
# <Framework Name>

> One‑line definition. — <Originator, Source/Year>

## What it is
## When to use it (and when not to)
## The beats / steps
  (ordered list, each with position/% where it applies + one‑line purpose)
## Worked example
  (a well‑known story mapped to the beats — your own analysis)
## Blank template
  (copy‑pasteable, with << placeholders >> and [ ] checkboxes)
## Sources
```

## File layout for a new *genre template*

```markdown
# <Genre> Template — "<memorable name>"

## The promise (what the reader/viewer is here for)
## Obligatory beats & conventions (the genre's must‑haves)
## The arc, beat by beat
## Variations & subversions
## Blank template
## Exemplars (works that use it — linked, not copied)
```

## Adding a beat sheet of an existing work

- Put analyses under [`07-reference-analyses/`](./07-reference-analyses/) (prose) or
  [`01-screenplay/beat-sheets/`](./01-screenplay/beat-sheets/) (film/TV).
- Write the beats **in your own words**. Quote sparingly and only for commentary.
- Link the legal source for the full text at the top.
- Name the framework you're mapping against (e.g., "mapped to Save the Cat beats").

## Naming

- Folders: `NN-topic/` (numeric prefix keeps order).
- Files: `kebab-case.md`. Frameworks named after the thing (`heros-journey.md`).
- Update [`INDEX.md`](./INDEX.md) and the relevant folder `README.md` when you add a file.

## Style

- US spelling, sentence case headings, Oxford comma.
- Prefer tables for beat/position lists.
- Keep placeholders in `<< angle‑brackets >>` so they're grep‑able and obviously "fill me."
