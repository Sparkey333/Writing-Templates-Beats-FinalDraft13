// The Template Gallery catalog — the "start of the Final Draft 13 clone."
//
// Each template produces a real, structured starter project: its beats are seeded as
// scene-list rows (marked ⚑ unsure so they show up in the Focus tab until you fill them),
// the format is set, and a short starter Fountain draft scaffolds the acts. This mirrors the
// Final Draft experience where "New from Template" hands you a formatted skeleton, not a
// blank page — except here every template is one of the frameworks from this repo.

import type { SnowflakeProject, ProjectFormat, SceneRow } from "./types";
import { blankProject } from "./types";

export interface StoryTemplate {
  id: string;
  name: string;
  category: "Screenplay" | "TV" | "Novel structure" | "Genre kit";
  format: ProjectFormat;
  blurb: string;
  docPath: string; // the repo file this template is based on
  create: () => SnowflakeProject;
}

interface Beat {
  act: string;
  name: string;
  purpose: string;
}

let seq = 0;
function rowId() {
  seq += 1;
  return `tpl-${seq}`;
}

function beatsToScenes(beats: Beat[]): SceneRow[] {
  return beats.map((b) => ({
    id: rowId(),
    act: b.act,
    slugline: b.name,
    summary: b.purpose,
    valueFrom: "",
    valueTo: "",
    unsure: true,
  }));
}

function seed(
  id: string,
  title: string,
  format: ProjectFormat,
  beats: Beat[],
  draft: string,
  extra: Partial<SnowflakeProject> = {}
): SnowflakeProject {
  return {
    ...blankProject(id, title),
    format,
    scenes: beatsToScenes(beats),
    draft,
    updatedAt: new Date(0).toISOString(),
    ...extra,
  };
}

// ---- Beat lists (accurate to the repo's framework files) ----

const SAVE_THE_CAT: Beat[] = [
  { act: "1", name: "Opening Image", purpose: "The 'before' snapshot; tone and the hero's starting state." },
  { act: "1", name: "Theme Stated", purpose: "Someone states what the story is really about." },
  { act: "1", name: "Set-Up", purpose: "Hero, flaws, the things that need fixing." },
  { act: "1", name: "Catalyst", purpose: "The inciting incident breaks the status quo." },
  { act: "1", name: "Debate", purpose: "The hero hesitates: should I do this?" },
  { act: "2", name: "Break into Two", purpose: "The hero chooses and enters the new world." },
  { act: "2", name: "B Story", purpose: "A relationship that carries the theme." },
  { act: "2", name: "Fun and Games", purpose: "The promise of the premise delivered." },
  { act: "2", name: "Midpoint", purpose: "A false victory or false defeat; stakes raise." },
  { act: "2", name: "Bad Guys Close In", purpose: "External pressure mounts; doubts regroup." },
  { act: "2", name: "All Is Lost", purpose: "The lowest point; a whiff of death." },
  { act: "2", name: "Dark Night of the Soul", purpose: "Hopelessness before the answer." },
  { act: "3", name: "Break into Three", purpose: "The A and B stories fuse; the answer." },
  { act: "3", name: "Finale", purpose: "Execute the plan; prove the change." },
  { act: "3", name: "Final Image", purpose: "The 'after'; mirror of the opening." },
];

const HEROS_JOURNEY: Beat[] = [
  { act: "1", name: "Ordinary World", purpose: "Normal life; stakes and flaws." },
  { act: "1", name: "Call to Adventure", purpose: "A problem disrupts the ordinary world." },
  { act: "1", name: "Refusal of the Call", purpose: "The hero balks out of fear." },
  { act: "1", name: "Meeting the Mentor", purpose: "A guide gives advice, training, or gifts." },
  { act: "1", name: "Crossing the Threshold", purpose: "The hero commits; enters the Special World." },
  { act: "2", name: "Tests, Allies, Enemies", purpose: "Learn the rules; make friends and foes." },
  { act: "2", name: "Approach the Inmost Cave", purpose: "Prep for the central challenge." },
  { act: "2", name: "The Ordeal", purpose: "Life-or-death crisis; greatest fear faced." },
  { act: "2", name: "Reward", purpose: "Survives; seizes the prize or knowledge." },
  { act: "3", name: "The Road Back", purpose: "Recommit; head home; pressure resumes." },
  { act: "3", name: "Resurrection", purpose: "Climactic final test; rebirth proves change." },
  { act: "3", name: "Return with the Elixir", purpose: "Returns transformed, bringing something back." },
];

const STORY_CIRCLE: Beat[] = [
  { act: "1", name: "1. You", purpose: "A character in a zone of comfort." },
  { act: "1", name: "2. Need", purpose: "But they want something." },
  { act: "1", name: "3. Go", purpose: "They enter an unfamiliar situation." },
  { act: "2", name: "4. Search", purpose: "They adapt to it." },
  { act: "2", name: "5. Find", purpose: "They get what they wanted." },
  { act: "2", name: "6. Take", purpose: "They pay a heavy price for it." },
  { act: "3", name: "7. Return", purpose: "They come back to the familiar situation." },
  { act: "3", name: "8. Change", purpose: "Having been transformed." },
];

const SEVEN_POINT: Beat[] = [
  { act: "1", name: "Hook", purpose: "Starting state; opposite of the resolution." },
  { act: "1", name: "Plot Turn 1", purpose: "The call; the world changes." },
  { act: "2", name: "Pinch Point 1", purpose: "Apply pressure; the antagonist's force." },
  { act: "2", name: "Midpoint", purpose: "Shift from reaction to action." },
  { act: "2", name: "Pinch Point 2", purpose: "Harder pressure; a loss." },
  { act: "3", name: "Plot Turn 2", purpose: "The final piece needed to win." },
  { act: "3", name: "Resolution", purpose: "The climax and payoff (design this first)." },
];

const SHONEN_ARC: Beat[] = [
  { act: "1", name: "Peace / new normal", purpose: "Show the current power ceiling as impressive." },
  { act: "1", name: "Threat lands, over-powered", purpose: "Villain demonstrates force; beats a strong ally." },
  { act: "1", name: "First clash → loss", purpose: "Hero fails; personal stakes introduced." },
  { act: "2", name: "The cost / catalyst", purpose: "Loss or humiliation converts to resolve." },
  { act: "2", name: "Training / mentor", purpose: "Compressed growth; a technique withheld." },
  { act: "2", name: "Gauntlet / tournament", purpose: "Escalating sub-fights toward the boss." },
  { act: "2", name: "Darkest moment", purpose: "The new power still isn't enough." },
  { act: "3", name: "Transformation", purpose: "Emotional trigger → named power-up → inversion." },
  { act: "3", name: "Victory at a price", purpose: "Win, but pay a real cost; new limitation." },
  { act: "3", name: "Foreshadow the bigger bad", purpose: "Seed a threat one tier above the new ceiling." },
];

const MYSTERY: Beat[] = [
  { act: "1", name: "The crime", purpose: "A body, a theft, a locked room." },
  { act: "1", name: "Detective & method", purpose: "Establish who investigates and how." },
  { act: "1", name: "Suspect pool", purpose: "3-5 with means, motive, opportunity." },
  { act: "2", name: "Clues planted", purpose: "Every clue the solution needs, on-page." },
  { act: "2", name: "Red herrings", purpose: "Plausible false leads." },
  { act: "2", name: "False solution", purpose: "The obvious suspect, cleared." },
  { act: "3", name: "Final clue / twist", purpose: "Information that recontextualizes everything." },
  { act: "3", name: "The reveal", purpose: "Walk back through the planted clues." },
  { act: "3", name: "Resolution / justice", purpose: "Consequence and thematic closure." },
];

const ROMANCE: Beat[] = [
  { act: "1", name: "Meet cute / ugly", purpose: "First encounter; spark or friction." },
  { act: "1", name: "No way / resistance", purpose: "A real reason they shouldn't be together." },
  { act: "2", name: "Attraction builds", purpose: "Forced proximity or shared goal." },
  { act: "2", name: "First kiss / turning point", purpose: "The relationship becomes undeniable." },
  { act: "2", name: "Falling in love", purpose: "The joyful deepening — the genre's fun." },
  { act: "3", name: "Black moment", purpose: "The internal wound resurfaces; it seems over." },
  { act: "3", name: "The grovel / the choice", purpose: "Actively choose the relationship." },
  { act: "3", name: "HEA / HFN", purpose: "The earned union." },
];

const HEIST: Beat[] = [
  { act: "1", name: "The target", purpose: "What's being taken and why it matters." },
  { act: "1", name: "Assemble the crew", purpose: "Each specialist, demonstrated." },
  { act: "1", name: "The plan, explained", purpose: "Audience-legible rules (fair play)." },
  { act: "2", name: "Complication in prep", purpose: "An obstacle forces the plan to adapt." },
  { act: "2", name: "Execution begins", purpose: "The plan in motion; near-misses." },
  { act: "2", name: "Apparent failure", purpose: "It looks like it's fallen apart." },
  { act: "3", name: "The reveal", purpose: "This was part of the plan all along." },
  { act: "3", name: "The deeper twist", purpose: "One layer past what the audience expected." },
  { act: "3", name: "Getaway or cost", purpose: "Clean escape, or someone pays." },
];

const TV_HOUR: Beat[] = [
  { act: "0", name: "Cold Open / Teaser", purpose: "A hook before the titles." },
  { act: "1", name: "Act One", purpose: "Establish this episode's A/B/C stories." },
  { act: "2", name: "Act Two", purpose: "Complications; first real obstacle." },
  { act: "3", name: "Act Three", purpose: "Midpoint reversal; subplots collide." },
  { act: "4", name: "Act Four", purpose: "The episode's low point / escalation." },
  { act: "5", name: "Act Five", purpose: "Climax; plant the hook for next episode." },
];

const NINE_BLOCK: Beat[] = [
  { act: "1", name: "Block 1 — Setup (ch 1-3)", purpose: "Introduction, inciting incident, reaction." },
  { act: "1", name: "Block 2 — Reaction (ch 4-6)", purpose: "Reaction, action, consequence." },
  { act: "1", name: "Block 3 — Development (ch 7-9)", purpose: "Pressure, pinch, turn into Act 2." },
  { act: "2", name: "Block 4 — New world (ch 10-12)", purpose: "New world, fun & games, old contrast." },
  { act: "2", name: "Block 5 — Midpoint (ch 13-15)", purpose: "Build, midpoint reversal, fallout." },
  { act: "2", name: "Block 6 — Development (ch 16-18)", purpose: "Reaction, action, all-in." },
  { act: "3", name: "Block 7 — Trials (ch 19-21)", purpose: "Trials, pinch, darkest hour." },
  { act: "3", name: "Block 8 — Finale setup (ch 22-24)", purpose: "Power within, rising action, plan." },
  { act: "3", name: "Block 9 — Resolution (ch 25-27)", purpose: "Climax, falling action, new normal." },
];

function screenplayDraft(title: string): string {
  return `Title: ${title}\nCredit: Written by\nAuthor: Your Name\n\n/*\nStarter scaffold. Your scene list (from the Planner's Step 8) becomes the sections below.\nSee ../01-screenplay/formatting/fountain-syntax-cheatsheet.md\n*/\n\n# ACT ONE\n\n## Opening\n\nINT. LOCATION - DAY\n\nOpen here.\n\n# ACT TWO\n\n# ACT THREE\n\n> THE END <\n`;
}

function novelNote(structure: string): string {
  return `[[ Novel project — structure: ${structure}. Draft prose here; Fountain treats plain\nparagraphs as action, so this works for prose too. Fill the Planner's Snowflake steps first. ]]\n\n# Chapter One\n\n`;
}

export const TEMPLATE_CATALOG: StoryTemplate[] = [
  // Screenplay
  {
    id: "feature-stc",
    name: "Feature Screenplay — Save the Cat",
    category: "Screenplay",
    format: "screenplay",
    blurb: "A 90-120pp feature scaffolded with all 15 Save the Cat beats as scenes.",
    docPath: "01-screenplay/templates/feature-screenplay.fountain",
    create: () => seed("feature-stc", "Untitled Feature", "screenplay", SAVE_THE_CAT, screenplayDraft("UNTITLED FEATURE")),
  },
  {
    id: "feature-hero",
    name: "Feature Screenplay — Hero's Journey",
    category: "Screenplay",
    format: "screenplay",
    blurb: "The 12-stage mythic structure, seeded as scenes for an adventure feature.",
    docPath: "02-story-structure/heros-journey.md",
    create: () => seed("feature-hero", "Untitled Journey", "screenplay", HEROS_JOURNEY, screenplayDraft("UNTITLED JOURNEY")),
  },
  {
    id: "short-film",
    name: "Short Film — Single Turn",
    category: "Screenplay",
    format: "short",
    blurb: "1-20pp short: status quo → one turn → consequence → final image.",
    docPath: "01-screenplay/templates/short-film.fountain",
    create: () =>
      seed("short-film", "Untitled Short", "short", [
        { act: "1", name: "Status quo", purpose: "Establish character and want, fast." },
        { act: "2", name: "The turn", purpose: "One clear disruption." },
        { act: "3", name: "Consequence / climax", purpose: "The character acts (or fails to)." },
        { act: "3", name: "Final image", purpose: "Leave on an image; trust the cut." },
      ], screenplayDraft("UNTITLED SHORT")),
  },
  // TV
  {
    id: "tv-hour",
    name: "TV One-Hour Drama",
    category: "TV",
    format: "tv",
    blurb: "Cold open + five acts, the single-camera hour-drama skeleton.",
    docPath: "01-screenplay/templates/tv-one-hour-drama.fountain",
    create: () => seed("tv-hour", "Untitled Pilot", "tv", TV_HOUR, screenplayDraft("UNTITLED PILOT")),
  },
  // Novel structures
  {
    id: "novel-snowflake",
    name: "Novel — Snowflake Method (blank)",
    category: "Novel structure",
    format: "novel",
    blurb: "Start from one sentence and grow outward. No pre-seeded scenes — the Planner drives it.",
    docPath: "03-novel-methods/snowflake-method.md",
    create: () => seed("novel-snowflake", "Untitled Novel", "novel", [], novelNote("Snowflake Method")),
  },
  {
    id: "novel-stc",
    name: "Novel — Save the Cat Writes a Novel",
    category: "Novel structure",
    format: "novel",
    blurb: "The 15 beats re-scaled to novel word-count %, seeded as chapters.",
    docPath: "03-novel-methods/save-the-cat-writes-a-novel.md",
    create: () => seed("novel-stc", "Untitled Novel", "novel", SAVE_THE_CAT, novelNote("Save the Cat Writes a Novel")),
  },
  {
    id: "novel-nineblock",
    name: "Novel — 9-Block / 27-Chapter",
    category: "Novel structure",
    format: "novel",
    blurb: "A symmetrical 27-chapter lattice: 3 acts × 3 blocks × 3 chapters.",
    docPath: "03-novel-methods/nine-block-27-chapter.md",
    create: () => seed("novel-nineblock", "Untitled Novel", "novel", NINE_BLOCK, novelNote("9-Block / 27-Chapter")),
  },
  {
    id: "novel-storycircle",
    name: "Any medium — Story Circle (8)",
    category: "Novel structure",
    format: "novel",
    blurb: "Dan Harmon's 8-step circle; great for character-driven or episodic work.",
    docPath: "02-story-structure/story-circle.md",
    create: () => seed("novel-storycircle", "Untitled Story", "novel", STORY_CIRCLE, novelNote("Story Circle")),
  },
  {
    id: "novel-sevenpoint",
    name: "Any medium — Seven-Point Structure",
    category: "Novel structure",
    format: "novel",
    blurb: "Plot backward from the resolution; the 7 points seeded in order.",
    docPath: "02-story-structure/seven-point-structure.md",
    create: () => seed("novel-sevenpoint", "Untitled Story", "novel", SEVEN_POINT, novelNote("Seven-Point Structure")),
  },
  // Genre kits
  {
    id: "genre-shonen",
    name: "Genre — Toonami / Shōnen Power-Up Arc",
    category: "Genre kit",
    format: "tv",
    blurb: "The DBZ / Yu Yu Hakusho escalation loop, seeded as a 10-beat arc.",
    docPath: "06-genre-templates/toonami-shonen-powerup-arc.md",
    create: () => seed("genre-shonen", "Untitled Arc", "tv", SHONEN_ARC, screenplayDraft("UNTITLED ARC")),
  },
  {
    id: "genre-mystery",
    name: "Genre — Mystery (Fair-Play)",
    category: "Genre kit",
    format: "novel",
    blurb: "A solvable whodunit: crime, suspects, planted clues, twist, reveal.",
    docPath: "06-genre-templates/mystery-fair-play-template.md",
    create: () => seed("genre-mystery", "Untitled Mystery", "novel", MYSTERY, novelNote("Mystery — Fair-Play")),
  },
  {
    id: "genre-romance",
    name: "Genre — Romance",
    category: "Genre kit",
    format: "novel",
    blurb: "The obligatory romance beats from meet-cute to earned HEA/HFN.",
    docPath: "06-genre-templates/romance-beat-sheet.md",
    create: () => seed("genre-romance", "Untitled Romance", "novel", ROMANCE, novelNote("Romance")),
  },
  {
    id: "genre-heist",
    name: "Genre — Heist",
    category: "Genre kit",
    format: "screenplay",
    blurb: "Crew, plan, execution, and the double-twist reveal.",
    docPath: "06-genre-templates/heist-template.md",
    create: () => seed("genre-heist", "Untitled Heist", "screenplay", HEIST, screenplayDraft("UNTITLED HEIST")),
  },
];

export const TEMPLATE_CATEGORIES: StoryTemplate["category"][] = [
  "Screenplay",
  "TV",
  "Novel structure",
  "Genre kit",
];
