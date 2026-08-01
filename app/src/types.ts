// Data model for a Snowdraft project — a direct schema mirror of
// ../../01-screenplay/templates/final-draft-snowflake-master-template.md.
// Every Snowflake step in that document has a matching field (or field group) here.

export type ProjectFormat = "novel" | "screenplay" | "tv" | "short";

export interface SnowflakeCharacter {
  id: string;
  name: string;
  role: string;
  oneLineArc: string;
  motivation: string; // abstract want
  goal: string; // concrete want
  conflict: string;
  epiphany: string;
  storyline: string; // their own one-paragraph version of the story
  unsure: boolean;
}

export interface SceneRow {
  id: string;
  act: string;
  slugline: string;
  summary: string; // goal -> outcome
  valueFrom: string;
  valueTo: string;
  unsure: boolean;
}

/** A manually-added item on the Focus Tab, distinct from the ones auto-derived from ⚑ gaps. */
export interface FocusItem {
  id: string;
  step: string;
  label: string;
  notes: string;
  resolved: boolean;
}

export interface SnowflakeProject {
  id: string;
  title: string;
  format: ProjectFormat;
  updatedAt: string;

  // Step 1
  logline: string;

  // Step 2 — the three-disaster paragraph
  setup: string;
  disaster1: string;
  disaster2: string;
  disaster3: string;
  ending: string;

  // Step 3 — character summary sheets (compressed dossiers)
  characters: SnowflakeCharacter[];

  // Step 4 / 6 — synopsis passes (kept as free text; step 4 = short, step 6 = long)
  onePageSynopsis: string;
  fourPageSynopsis: string;

  // Step 5 — character POV synopses (free text; one section per character by convention)
  characterSynopses: string;

  // Step 7 — pointer/notes; full dossiers live in the character list above for the MVP
  characterBibleNotes: string;

  // Step 8 — scene list
  scenes: SceneRow[];

  // Step 9 — scene narrative briefs (free text keyed by scene number, by convention)
  sceneBriefs: string;

  // Step 10 — the actual draft, in Fountain syntax (works for prose too; Fountain
  // tolerates plain paragraphs as Action lines, so it's a reasonable universal draft format)
  draft: string;

  // Drive Import & Reorganize
  driveFolderLink: string;
  importStatus: "not started" | "in progress" | "sorted";

  // Focus Tab — manually added items. Auto-derived ⚑ gaps are computed on the fly by
  // lib/focus.ts and are NOT stored here (they're always in sync with the live document).
  focusItems: FocusItem[];
}

export function emptyCharacter(id: string): SnowflakeCharacter {
  return {
    id,
    name: "",
    role: "",
    oneLineArc: "",
    motivation: "",
    goal: "",
    conflict: "",
    epiphany: "",
    storyline: "",
    unsure: true,
  };
}

export function emptyScene(id: string): SceneRow {
  return {
    id,
    act: "1",
    slugline: "",
    summary: "",
    valueFrom: "",
    valueTo: "",
    unsure: true,
  };
}

export function blankProject(id: string, title = "Untitled Project"): SnowflakeProject {
  return {
    id,
    title,
    format: "screenplay",
    updatedAt: new Date(0).toISOString(),
    logline: "",
    setup: "",
    disaster1: "",
    disaster2: "",
    disaster3: "",
    ending: "",
    characters: [],
    onePageSynopsis: "",
    fourPageSynopsis: "",
    characterSynopses: "",
    characterBibleNotes: "",
    scenes: [],
    sceneBriefs: "",
    draft: "",
    driveFolderLink: "",
    importStatus: "not started",
    focusItems: [],
  };
}
