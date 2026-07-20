import { useState } from "react";
import type { SnowflakeProject, SnowflakeCharacter, SceneRow } from "../types";
import { emptyCharacter, emptyScene } from "../types";
import { stepCompletion } from "../lib/focus";

interface Props {
  project: SnowflakeProject;
  onChange: (project: SnowflakeProject) => void;
}

const STEP_LABELS = [
  "1. One-Sentence Summary",
  "2. One-Paragraph Summary",
  "3. Character Summary Sheets",
  "4. One-Page Synopsis",
  "5. Character Synopses",
  "6. Four-Page Synopsis",
  "7. Character Bibles",
  "8. Scene List",
  "9. Scene Narrative Briefs",
  "10. Draft",
];

let idCounter = 0;
function nextId(prefix: string) {
  idCounter += 1;
  return `${prefix}-${Date.now()}-${idCounter}`;
}

export default function SnowflakePlanner({ project, onChange }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  function set<K extends keyof SnowflakeProject>(key: K, value: SnowflakeProject[K]) {
    onChange({ ...project, [key]: value, updatedAt: new Date().toISOString() });
  }

  function updateCharacter(id: string, patch: Partial<SnowflakeCharacter>) {
    set(
      "characters",
      project.characters.map((c) => (c.id === id ? { ...c, ...patch } : c))
    );
  }

  function addCharacter() {
    set("characters", [...project.characters, emptyCharacter(nextId("char"))]);
  }

  function removeCharacter(id: string) {
    set("characters", project.characters.filter((c) => c.id !== id));
  }

  function updateScene(id: string, patch: Partial<SceneRow>) {
    set(
      "scenes",
      project.scenes.map((s) => (s.id === id ? { ...s, ...patch } : s))
    );
  }

  function addScene() {
    set("scenes", [...project.scenes, emptyScene(nextId("scene"))]);
  }

  function removeScene(id: string) {
    set("scenes", project.scenes.filter((s) => s.id !== id));
  }

  const completion = stepCompletion(project);

  return (
    <div className="planner">
      <div className="planner-rail">
        <div className="completion-ring" title={`${completion}% of Snowflake steps look complete`}>
          <svg viewBox="0 0 36 36">
            <path
              className="ring-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="ring-fg"
              strokeDasharray={`${completion}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span>{completion}%</span>
        </div>
        {STEP_LABELS.map((label, i) => (
          <button
            key={label}
            className={`planner-rail-btn ${activeStep === i ? "active" : ""}`}
            onClick={() => setActiveStep(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="planner-content">
        {activeStep === 0 && (
          <section>
            <h2>Step 1 — One-Sentence Summary</h2>
            <p className="hint">≤15 words. Use roles, not names, if you can.</p>
            <input
              className="field"
              value={project.logline}
              placeholder="A ___ must ___ before ___, but ___."
              onChange={(e) => set("logline", e.target.value)}
            />
          </section>
        )}

        {activeStep === 1 && (
          <section>
            <h2>Step 2 — One-Paragraph Summary</h2>
            <p className="hint">The three-disaster spine. These map to Three-Act turning points.</p>
            <label>Setup</label>
            <textarea className="field" rows={2} value={project.setup} onChange={(e) => set("setup", e.target.value)} />
            <label>Disaster 1 (~25% — end of Act 1)</label>
            <textarea className="field" rows={2} value={project.disaster1} onChange={(e) => set("disaster1", e.target.value)} />
            <label>Disaster 2 (~50% — Midpoint)</label>
            <textarea className="field" rows={2} value={project.disaster2} onChange={(e) => set("disaster2", e.target.value)} />
            <label>Disaster 3 (~75% — end of Act 2)</label>
            <textarea className="field" rows={2} value={project.disaster3} onChange={(e) => set("disaster3", e.target.value)} />
            <label>Ending</label>
            <textarea className="field" rows={2} value={project.ending} onChange={(e) => set("ending", e.target.value)} />
          </section>
        )}

        {activeStep === 2 && (
          <section>
            <h2>Step 3 — Character Summary Sheets</h2>
            <button className="btn" onClick={addCharacter}>+ Add character</button>
            {project.characters.length === 0 && <p className="hint">No characters yet — add your protagonist first.</p>}
            <div className="card-list">
              {project.characters.map((c) => (
                <div className="card" key={c.id}>
                  <div className="card-row">
                    <input
                      className="field field-inline"
                      placeholder="Name"
                      value={c.name}
                      onChange={(e) => updateCharacter(c.id, { name: e.target.value })}
                    />
                    <input
                      className="field field-inline"
                      placeholder="Role (protagonist / mentor / ...)"
                      value={c.role}
                      onChange={(e) => updateCharacter(c.id, { role: e.target.value })}
                    />
                    <label className="unsure-toggle">
                      <input
                        type="checkbox"
                        checked={c.unsure}
                        onChange={(e) => updateCharacter(c.id, { unsure: e.target.checked })}
                      />
                      ⚑ unsure
                    </label>
                    <button className="btn-danger" onClick={() => removeCharacter(c.id)}>✕</button>
                  </div>
                  <input
                    className="field"
                    placeholder="One-line arc"
                    value={c.oneLineArc}
                    onChange={(e) => updateCharacter(c.id, { oneLineArc: e.target.value })}
                  />
                  <div className="card-row">
                    <input
                      className="field field-inline"
                      placeholder="Motivation (abstract want)"
                      value={c.motivation}
                      onChange={(e) => updateCharacter(c.id, { motivation: e.target.value })}
                    />
                    <input
                      className="field field-inline"
                      placeholder="Goal (concrete want)"
                      value={c.goal}
                      onChange={(e) => updateCharacter(c.id, { goal: e.target.value })}
                    />
                  </div>
                  <div className="card-row">
                    <input
                      className="field field-inline"
                      placeholder="Conflict"
                      value={c.conflict}
                      onChange={(e) => updateCharacter(c.id, { conflict: e.target.value })}
                    />
                    <input
                      className="field field-inline"
                      placeholder="Epiphany"
                      value={c.epiphany}
                      onChange={(e) => updateCharacter(c.id, { epiphany: e.target.value })}
                    />
                  </div>
                  <textarea
                    className="field"
                    rows={2}
                    placeholder="Their one-paragraph storyline"
                    value={c.storyline}
                    onChange={(e) => updateCharacter(c.id, { storyline: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {activeStep === 3 && (
          <section>
            <h2>Step 4 — One-Page Synopsis</h2>
            <p className="hint">Expand each Step 2 sentence into a full paragraph.</p>
            <textarea className="field field-tall" value={project.onePageSynopsis} onChange={(e) => set("onePageSynopsis", e.target.value)} />
          </section>
        )}

        {activeStep === 4 && (
          <section>
            <h2>Step 5 — Character Synopses</h2>
            <p className="hint">Tell the story from each major character's POV, half a page each.</p>
            <textarea className="field field-tall" value={project.characterSynopses} onChange={(e) => set("characterSynopses", e.target.value)} />
          </section>
        )}

        {activeStep === 5 && (
          <section>
            <h2>Step 6 — Four-Page Synopsis</h2>
            <p className="hint">Expand each Step 4 paragraph into a full page.</p>
            <textarea className="field field-tall" value={project.fourPageSynopsis} onChange={(e) => set("fourPageSynopsis", e.target.value)} />
          </section>
        )}

        {activeStep === 6 && (
          <section>
            <h2>Step 7 — Character Bibles</h2>
            <p className="hint">
              Full dossiers per character — use the template at
              <code> 05-character/character-dossier-template.md</code>. Paste notes/links here.
            </p>
            <textarea className="field field-tall" value={project.characterBibleNotes} onChange={(e) => set("characterBibleNotes", e.target.value)} />
          </section>
        )}

        {activeStep === 7 && (
          <section>
            <h2>Step 8 — Scene List</h2>
            <button className="btn" onClick={addScene}>+ Add scene</button>
            <table className="scene-table">
              <thead>
                <tr>
                  <th>Act</th>
                  <th>Slugline / POV</th>
                  <th>Goal → Outcome</th>
                  <th>Value shift</th>
                  <th>⚑</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {project.scenes.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <input className="field field-tiny" value={s.act} onChange={(e) => updateScene(s.id, { act: e.target.value })} />
                    </td>
                    <td>
                      <input className="field" value={s.slugline} onChange={(e) => updateScene(s.id, { slugline: e.target.value })} />
                    </td>
                    <td>
                      <input className="field" value={s.summary} onChange={(e) => updateScene(s.id, { summary: e.target.value })} />
                    </td>
                    <td className="value-shift-cell">
                      <input className="field field-tiny" value={s.valueFrom} onChange={(e) => updateScene(s.id, { valueFrom: e.target.value })} />
                      <span>→</span>
                      <input className="field field-tiny" value={s.valueTo} onChange={(e) => updateScene(s.id, { valueTo: e.target.value })} />
                    </td>
                    <td>
                      <input type="checkbox" checked={s.unsure} onChange={(e) => updateScene(s.id, { unsure: e.target.checked })} />
                    </td>
                    <td>
                      <button className="btn-danger" onClick={() => removeScene(s.id)}>✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeStep === 8 && (
          <section>
            <h2>Step 9 — Scene Narrative Briefs</h2>
            <p className="hint">For any scene marked ⚑, write a quick brief before drafting it in full.</p>
            <textarea className="field field-tall" value={project.sceneBriefs} onChange={(e) => set("sceneBriefs", e.target.value)} />
          </section>
        )}

        {activeStep === 9 && (
          <section>
            <h2>Step 10 — Write</h2>
            <p className="hint">
              Open the <strong>Editor</strong> tab in the sidebar — it's pre-loaded from this project's draft field.
              Paste your Step 8 scene list in as section scaffolding and draft scene by scene.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
