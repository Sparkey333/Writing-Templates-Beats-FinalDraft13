// Exports the whole template catalog as Final Draft-importable .fountain files.
//
// Final Draft opens Fountain directly (File → Open, pick the .fountain). Each file here is a
// title page + act sections + one scene per beat, with the beat's purpose as a synopsis line
// (which lands in Final Draft's outline / Beat Board). Run: `node app/scripts/export-fountain.mjs`
// Output: 01-screenplay/templates/collection/*.fountain

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "..", "01-screenplay", "templates", "collection");
mkdirSync(OUT, { recursive: true });

const B = (act, name, purpose) => ({ act, name, purpose });

const SAVE_THE_CAT = [
  B(1, "Opening Image", "The 'before' snapshot; tone and the hero's starting state."),
  B(1, "Theme Stated", "Someone states what the story is really about."),
  B(1, "Set-Up", "Hero, flaws, the things that need fixing."),
  B(1, "Catalyst", "The inciting incident breaks the status quo."),
  B(1, "Debate", "The hero hesitates: should I do this?"),
  B(2, "Break into Two", "The hero chooses and enters the new world."),
  B(2, "B Story", "A relationship that carries the theme."),
  B(2, "Fun and Games", "The promise of the premise delivered."),
  B(2, "Midpoint", "A false victory or false defeat; stakes raise."),
  B(2, "Bad Guys Close In", "External pressure mounts; doubts regroup."),
  B(2, "All Is Lost", "The lowest point; a whiff of death."),
  B(2, "Dark Night of the Soul", "Hopelessness before the answer."),
  B(3, "Break into Three", "The A and B stories fuse; the answer."),
  B(3, "Finale", "Execute the plan; prove the change."),
  B(3, "Final Image", "The 'after'; mirror of the opening."),
];
const HEROS_JOURNEY = [
  B(1, "Ordinary World", "Normal life; stakes and flaws."),
  B(1, "Call to Adventure", "A problem disrupts the ordinary world."),
  B(1, "Refusal of the Call", "The hero balks out of fear."),
  B(1, "Meeting the Mentor", "A guide gives advice, training, or gifts."),
  B(1, "Crossing the Threshold", "The hero commits; enters the Special World."),
  B(2, "Tests, Allies, Enemies", "Learn the rules; make friends and foes."),
  B(2, "Approach the Inmost Cave", "Prep for the central challenge."),
  B(2, "The Ordeal", "Life-or-death crisis; greatest fear faced."),
  B(2, "Reward", "Survives; seizes the prize or knowledge."),
  B(3, "The Road Back", "Recommit; head home; pressure resumes."),
  B(3, "Resurrection", "Climactic final test; rebirth proves change."),
  B(3, "Return with the Elixir", "Returns transformed, bringing something back."),
];
const STORY_CIRCLE = [
  B(1, "You", "A character in a zone of comfort."),
  B(1, "Need", "But they want something."),
  B(1, "Go", "They enter an unfamiliar situation."),
  B(2, "Search", "They adapt to it."),
  B(2, "Find", "They get what they wanted."),
  B(2, "Take", "They pay a heavy price for it."),
  B(3, "Return", "They come back to the familiar situation."),
  B(3, "Change", "Having been transformed."),
];
const SEVEN_POINT = [
  B(1, "Hook", "Starting state; opposite of the resolution."),
  B(1, "Plot Turn 1", "The call; the world changes."),
  B(2, "Pinch Point 1", "Apply pressure; the antagonist's force."),
  B(2, "Midpoint", "Shift from reaction to action."),
  B(2, "Pinch Point 2", "Harder pressure; a loss."),
  B(3, "Plot Turn 2", "The final piece needed to win."),
  B(3, "Resolution", "The climax and payoff (design this first)."),
];
const SHONEN_ARC = [
  B(1, "Peace / new normal", "Show the current power ceiling as impressive."),
  B(1, "Threat lands, over-powered", "Villain demonstrates force; beats a strong ally."),
  B(1, "First clash, loss", "Hero fails; personal stakes introduced."),
  B(2, "The cost / catalyst", "Loss or humiliation converts to resolve."),
  B(2, "Training / mentor", "Compressed growth; a technique withheld."),
  B(2, "Gauntlet / tournament", "Escalating sub-fights toward the boss."),
  B(2, "Darkest moment", "The new power still isn't enough."),
  B(3, "Transformation", "Emotional trigger, named power-up, inversion."),
  B(3, "Victory at a price", "Win, but pay a real cost; new limitation."),
  B(3, "Foreshadow the bigger bad", "Seed a threat one tier above the new ceiling."),
];
const MYSTERY = [
  B(1, "The crime", "A body, a theft, a locked room."),
  B(1, "Detective and method", "Establish who investigates and how."),
  B(1, "Suspect pool", "3-5 with means, motive, opportunity."),
  B(2, "Clues planted", "Every clue the solution needs, on-page."),
  B(2, "Red herrings", "Plausible false leads."),
  B(2, "False solution", "The obvious suspect, cleared."),
  B(3, "Final clue / twist", "Information that recontextualizes everything."),
  B(3, "The reveal", "Walk back through the planted clues."),
  B(3, "Resolution / justice", "Consequence and thematic closure."),
];
const ROMANCE = [
  B(1, "Meet cute or ugly", "First encounter; spark or friction."),
  B(1, "No way / resistance", "A real reason they shouldn't be together."),
  B(2, "Attraction builds", "Forced proximity or shared goal."),
  B(2, "First kiss / turning point", "The relationship becomes undeniable."),
  B(2, "Falling in love", "The joyful deepening."),
  B(3, "Black moment", "The internal wound resurfaces; it seems over."),
  B(3, "The grovel / the choice", "Actively choose the relationship."),
  B(3, "HEA / HFN", "The earned union."),
];
const HEIST = [
  B(1, "The target", "What's being taken and why it matters."),
  B(1, "Assemble the crew", "Each specialist, demonstrated."),
  B(1, "The plan, explained", "Audience-legible rules (fair play)."),
  B(2, "Complication in prep", "An obstacle forces the plan to adapt."),
  B(2, "Execution begins", "The plan in motion; near-misses."),
  B(2, "Apparent failure", "It looks like it's fallen apart."),
  B(3, "The reveal", "This was part of the plan all along."),
  B(3, "The deeper twist", "One layer past what the audience expected."),
  B(3, "Getaway or cost", "Clean escape, or someone pays."),
];

const ROMAN = { 0: "COLD OPEN", 1: "ONE", 2: "TWO", 3: "THREE", 4: "FOUR", 5: "FIVE" };

function toFountain(title, subtitle, beats) {
  let s = `Title: _**${title.toUpperCase()}**_\n`;
  s += `Credit: ${subtitle}\n`;
  s += `Author: Your Name\n`;
  s += `Draft date: 2026-07-20\n`;
  s += `Source: Writing Templates & Beats Compendium\n\n`;
  s += `/*\n  ${subtitle}. Final Draft imports this file directly (File > Open).\n`;
  s += `  Each beat below is a section + synopsis + a starter scene. Fill and expand.\n*/\n\n`;
  let lastAct = null;
  for (const b of beats) {
    if (b.act !== lastAct) {
      s += `\n# ACT ${ROMAN[b.act] ?? b.act}\n\n`;
      lastAct = b.act;
    }
    s += `## ${b.name}\n`;
    s += `= ${b.purpose}\n\n`;
    s += `INT. LOCATION - DAY\n\n`;
    s += `Write the "${b.name}" beat here.\n\n`;
  }
  s += `\n> THE END <\n`;
  return s;
}

const FILES = [
  ["feature-save-the-cat", "UNTITLED FEATURE", "Feature screenplay - Save the Cat 15 beats", SAVE_THE_CAT],
  ["feature-heros-journey", "UNTITLED JOURNEY", "Feature screenplay - Hero's Journey (12 stages)", HEROS_JOURNEY],
  ["story-circle", "UNTITLED STORY", "Any medium - Dan Harmon Story Circle (8 steps)", STORY_CIRCLE],
  ["seven-point", "UNTITLED STORY", "Any medium - Seven-Point Structure", SEVEN_POINT],
  ["shonen-power-up-arc", "UNTITLED ARC", "Genre - Toonami / Shonen power-up arc (10 beats)", SHONEN_ARC],
  ["mystery-fair-play", "UNTITLED MYSTERY", "Genre - Fair-play mystery", MYSTERY],
  ["romance", "UNTITLED ROMANCE", "Genre - Romance beat sheet", ROMANCE],
  ["heist", "UNTITLED HEIST", "Genre - Heist", HEIST],
];

for (const [slug, title, subtitle, beats] of FILES) {
  const path = join(OUT, `${slug}.fountain`);
  writeFileSync(path, toFountain(title, subtitle, beats), "utf8");
  console.log("wrote", path);
}
console.log(`\nDone: ${FILES.length} Fountain templates in 01-screenplay/templates/collection/`);
