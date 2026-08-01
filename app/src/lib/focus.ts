// Derives the Focus Tab's auto-collected list of open ⚑ decisions from a live project —
// this is the "separate tab to focus on those to-do items" from the master template's
// Focus / To-Do Tab section. Nothing here is stored; it's recomputed from the document
// every render, so it can never drift out of sync with what's actually still blank.

import type { SnowflakeProject } from "../types";

export interface DerivedFocusItem {
  id: string;
  step: string;
  label: string;
  source: "auto";
}

export function deriveAutoFocusItems(project: SnowflakeProject): DerivedFocusItem[] {
  const items: DerivedFocusItem[] = [];
  const push = (step: string, label: string, id: string) =>
    items.push({ id, step, label, source: "auto" });

  if (!project.logline.trim()) push("Step 1", "One-sentence summary is blank", "s1-logline");

  if (!project.setup.trim()) push("Step 2", "Setup sentence is blank", "s2-setup");
  if (!project.disaster1.trim()) push("Step 2", "Disaster 1 (~25%) is blank", "s2-d1");
  if (!project.disaster2.trim()) push("Step 2", "Disaster 2 / Midpoint (~50%) is blank", "s2-d2");
  if (!project.disaster3.trim()) push("Step 2", "Disaster 3 (~75%) is blank", "s2-d3");
  if (!project.ending.trim()) push("Step 2", "Ending sentence is blank", "s2-ending");

  if (project.characters.length === 0) {
    push("Step 3", "No characters added yet", "s3-none");
  }
  for (const c of project.characters) {
    const who = c.name.trim() || "(unnamed character)";
    if (c.unsure) push("Step 3", `${who} — marked unsure`, `s3-unsure-${c.id}`);
    if (!c.motivation.trim()) push("Step 3", `${who} — motivation not set`, `s3-mot-${c.id}`);
    if (!c.goal.trim()) push("Step 3", `${who} — goal not set`, `s3-goal-${c.id}`);
    if (!c.conflict.trim()) push("Step 3", `${who} — conflict not set`, `s3-conf-${c.id}`);
    if (!c.epiphany.trim()) push("Step 3", `${who} — epiphany not set`, `s3-epi-${c.id}`);
  }

  if (!project.onePageSynopsis.trim()) push("Step 4", "One-page synopsis is blank", "s4-blank");
  if (!project.characterSynopses.trim()) push("Step 5", "Character POV synopses not started", "s5-blank");
  if (!project.fourPageSynopsis.trim()) push("Step 6", "Four-page synopsis not started", "s6-blank");
  if (!project.characterBibleNotes.trim()) push("Step 7", "Character bibles not linked/noted", "s7-blank");

  if (project.scenes.length === 0) {
    push("Step 8", "Scene list is empty", "s8-none");
  }
  for (const s of project.scenes) {
    const label = s.slugline.trim() || `Scene (act ${s.act})`;
    if (s.unsure) push("Step 8", `${label} — marked unsure`, `s8-unsure-${s.id}`);
    if (!s.summary.trim()) push("Step 8", `${label} — no goal/outcome summary`, `s8-sum-${s.id}`);
  }

  if (!project.sceneBriefs.trim() && project.scenes.some((s) => s.unsure)) {
    push("Step 9", "Unsure scenes have no narrative brief yet", "s9-blank");
  }

  if (project.importStatus !== "sorted" && project.driveFolderLink.trim()) {
    push("Drive Import", `Import status: ${project.importStatus}`, "import-status");
  }

  return items;
}

/** Rough completion % across the 10 Snowflake steps, for the sidebar progress ring. */
export function stepCompletion(project: SnowflakeProject): number {
  const checks = [
    !!project.logline.trim(),
    !!(project.setup && project.disaster1 && project.disaster2 && project.disaster3 && project.ending),
    project.characters.length > 0 && project.characters.every((c) => !c.unsure),
    !!project.onePageSynopsis.trim(),
    !!project.characterSynopses.trim(),
    !!project.fourPageSynopsis.trim(),
    !!project.characterBibleNotes.trim(),
    project.scenes.length > 0 && project.scenes.every((s) => !s.unsure),
    !!project.sceneBriefs.trim(),
    !!project.draft.trim(),
  ];
  const done = checks.filter(Boolean).length;
  return Math.round((done / checks.length) * 100);
}
