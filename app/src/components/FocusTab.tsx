import { useState } from "react";
import type { SnowflakeProject, FocusItem } from "../types";
import { deriveAutoFocusItems } from "../lib/focus";

interface Props {
  project: SnowflakeProject;
  onChange: (project: SnowflakeProject) => void;
}

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `manual-${Date.now()}-${idCounter}`;
}

export default function FocusTab({ project, onChange }: Props) {
  const [newLabel, setNewLabel] = useState("");
  const [newStep, setNewStep] = useState("General");

  const autoItems = deriveAutoFocusItems(project);
  const grouped = new Map<string, typeof autoItems>();
  for (const item of autoItems) {
    if (!grouped.has(item.step)) grouped.set(item.step, []);
    grouped.get(item.step)!.push(item);
  }

  function addManualItem() {
    if (!newLabel.trim()) return;
    const item: FocusItem = {
      id: nextId(),
      step: newStep,
      label: newLabel.trim(),
      notes: "",
      resolved: false,
    };
    onChange({ ...project, focusItems: [...project.focusItems, item] });
    setNewLabel("");
  }

  function toggleResolved(id: string) {
    onChange({
      ...project,
      focusItems: project.focusItems.map((f) => (f.id === id ? { ...f, resolved: !f.resolved } : f)),
    });
  }

  function removeManualItem(id: string) {
    onChange({ ...project, focusItems: project.focusItems.filter((f) => f.id !== id) });
  }

  const openManual = project.focusItems.filter((f) => !f.resolved);
  const resolvedManual = project.focusItems.filter((f) => f.resolved);
  const totalOpen = autoItems.length + openManual.length;

  return (
    <div className="focus-tab">
      <div className="focus-header">
        <h2>Focus — open decisions</h2>
        <p className="hint">
          Every ⚑ across the Snowflake document, auto-collected here, plus anything you add
          manually. Clear an auto item by filling in the field it's flagging — it disappears on
          its own.
        </p>
        <div className="focus-count">{totalOpen} open item{totalOpen === 1 ? "" : "s"}</div>
      </div>

      {grouped.size === 0 && openManual.length === 0 && (
        <div className="focus-empty">Nothing flagged right now — nice.</div>
      )}

      {[...grouped.entries()].map(([step, items]) => (
        <div className="focus-group" key={step}>
          <h3>{step}</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="focus-item focus-item-auto">
                <span className="focus-dot" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {openManual.length > 0 && (
        <div className="focus-group">
          <h3>Manually added</h3>
          <ul>
            {openManual.map((item) => (
              <li key={item.id} className="focus-item">
                <label>
                  <input type="checkbox" checked={item.resolved} onChange={() => toggleResolved(item.id)} />
                  <strong>[{item.step}]</strong> {item.label}
                </label>
                <button className="btn-danger" onClick={() => removeManualItem(item.id)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="focus-add">
        <input
          className="field field-inline"
          placeholder="Step (e.g. Step 3, World-building, ...)"
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
        />
        <input
          className="field"
          placeholder="New open question or decision..."
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addManualItem()}
        />
        <button className="btn" onClick={addManualItem}>+ Add</button>
      </div>

      {resolvedManual.length > 0 && (
        <details className="focus-resolved">
          <summary>{resolvedManual.length} resolved (decision log)</summary>
          <ul>
            {resolvedManual.map((item) => (
              <li key={item.id} className="focus-item focus-item-resolved">
                <label>
                  <input type="checkbox" checked={item.resolved} onChange={() => toggleResolved(item.id)} />
                  <strong>[{item.step}]</strong> {item.label}
                </label>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
