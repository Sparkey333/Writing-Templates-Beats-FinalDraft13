// A small, readable subset of the Fountain spec (https://fountain.io/syntax), enough to
// preview the elements Snowdraft's templates actually use: scene headings, action,
// character/dialogue/parenthetical, transitions, sections/synopses, centered text, and
// notes. Not a full parser — see ../../01-screenplay/formatting/fountain-syntax-cheatsheet.md
// for the complete spec if you need every edge case.

export interface FountainLine {
  type:
    | "scene-heading"
    | "character"
    | "dialogue"
    | "parenthetical"
    | "transition"
    | "centered"
    | "section"
    | "synopsis"
    | "note"
    | "action"
    | "blank";
  text: string;
  level?: number; // for sections (#, ##, ###)
}

const SCENE_RE = /^(INT|EXT|EST|INT\.?\/EXT|I\/E)[. ]/i;
const TRANSITION_RE = /^[A-Z0-9 ]+TO:$/;

export function parseFountain(source: string): FountainLine[] {
  const rawLines = source.replace(/\r\n/g, "\n").split("\n");
  const lines: FountainLine[] = [];
  let previousWasCharacter = false;

  for (let i = 0; i < rawLines.length; i++) {
    const raw = rawLines[i];
    const trimmed = raw.trim();

    if (trimmed === "") {
      lines.push({ type: "blank", text: "" });
      previousWasCharacter = false;
      continue;
    }

    if (trimmed.startsWith("[[") && trimmed.endsWith("]]")) {
      lines.push({ type: "note", text: trimmed.slice(2, -2) });
      continue;
    }

    if (trimmed.startsWith("=")) {
      lines.push({ type: "synopsis", text: trimmed.replace(/^=+\s?/, "") });
      continue;
    }

    if (trimmed.startsWith("#")) {
      const level = trimmed.match(/^#+/)?.[0].length ?? 1;
      lines.push({ type: "section", text: trimmed.replace(/^#+\s?/, ""), level });
      continue;
    }

    if (trimmed.startsWith(".") && !trimmed.startsWith("..")) {
      lines.push({ type: "scene-heading", text: trimmed.slice(1) });
      previousWasCharacter = false;
      continue;
    }

    if (SCENE_RE.test(trimmed)) {
      lines.push({ type: "scene-heading", text: trimmed });
      previousWasCharacter = false;
      continue;
    }

    if (trimmed.startsWith(">") && trimmed.endsWith("<")) {
      lines.push({ type: "centered", text: trimmed.slice(1, -1).trim() });
      continue;
    }

    if (trimmed.startsWith(">")) {
      lines.push({ type: "transition", text: trimmed.slice(1).trim() });
      continue;
    }

    if (TRANSITION_RE.test(trimmed) && trimmed === trimmed.toUpperCase()) {
      lines.push({ type: "transition", text: trimmed });
      continue;
    }

    if (trimmed.startsWith("(") && trimmed.endsWith(")") && previousWasCharacter) {
      lines.push({ type: "parenthetical", text: trimmed });
      continue;
    }

    const isAllCaps =
      trimmed === trimmed.toUpperCase() &&
      /[A-Z]/.test(trimmed) &&
      trimmed.length < 40 &&
      !trimmed.startsWith("(");
    const startsWithAt = trimmed.startsWith("@");

    if (startsWithAt || (isAllCaps && rawLines[i + 1]?.trim())) {
      lines.push({ type: "character", text: startsWithAt ? trimmed.slice(1) : trimmed.replace(/\s*\^$/, "") });
      previousWasCharacter = true;
      continue;
    }

    if (previousWasCharacter) {
      lines.push({ type: "dialogue", text: trimmed });
      continue;
    }

    lines.push({ type: "action", text: trimmed });
    previousWasCharacter = false;
  }

  return lines;
}

/** Very rough page-count estimate (industry rule of thumb: ~55 lines/page of mixed content). */
export function estimatePages(source: string): number {
  const nonBlank = source.split("\n").filter((l) => l.trim() !== "").length;
  return Math.max(1, Math.round(nonBlank / 45));
}
