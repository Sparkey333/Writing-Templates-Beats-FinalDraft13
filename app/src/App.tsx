import { useEffect, useState } from "react";
import "./App.css";
import type { SnowflakeProject } from "./types";
import { blankProject } from "./types";
import { matrixSeedProject } from "./seedData";
import { deriveAutoFocusItems } from "./lib/focus";
import { saveProjectAs, openProject, autosave, loadAutosave } from "./lib/projectFile";
import SnowflakePlanner from "./components/SnowflakePlanner";
import FountainEditor from "./components/FountainEditor";
import FocusTab from "./components/FocusTab";
import DriveImport from "./components/DriveImport";

type Tab = "planner" | "editor" | "focus" | "import";

const TABS: { id: Tab; label: string }[] = [
  { id: "planner", label: "Snowflake Planner" },
  { id: "editor", label: "Editor" },
  { id: "focus", label: "Focus" },
  { id: "import", label: "Drive Import" },
];

export default function App() {
  const [project, setProject] = useState<SnowflakeProject>(() => loadAutosave() ?? matrixSeedProject());
  const [tab, setTab] = useState<Tab>("planner");
  const [savedPath, setSavedPath] = useState<string | null>(null);

  useEffect(() => {
    autosave(project);
  }, [project]);

  const openFocusCount = deriveAutoFocusItems(project).length + project.focusItems.filter((f) => !f.resolved).length;

  async function handleSave() {
    const path = await saveProjectAs(project);
    if (path) setSavedPath(path);
  }

  async function handleOpen() {
    const loaded = await openProject();
    if (loaded) {
      setProject(loaded);
      setSavedPath(null);
    }
  }

  function handleNew() {
    if (!confirm("Start a new blank project? Unsaved changes to the current one will be lost unless you save first.")) return;
    setProject(blankProject(`local-${Date.now()}`, "Untitled Project"));
    setSavedPath(null);
  }

  function loadMatrixExample() {
    setProject(matrixSeedProject());
    setSavedPath(null);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">❄</span>
          <span>Snowdraft</span>
        </div>
        <input
          className="title-input"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value, updatedAt: new Date().toISOString() })}
        />
        <select
          className="format-select"
          value={project.format}
          onChange={(e) => setProject({ ...project, format: e.target.value as SnowflakeProject["format"] })}
        >
          <option value="novel">Novel</option>
          <option value="screenplay">Screenplay</option>
          <option value="tv">TV</option>
          <option value="short">Short</option>
        </select>
        <div className="topbar-actions">
          <button className="btn" onClick={handleNew}>New</button>
          <button className="btn" onClick={handleOpen}>Open…</button>
          <button className="btn btn-primary" onClick={handleSave}>Save As…</button>
          <button className="btn" onClick={loadMatrixExample}>Load Matrix example</button>
        </div>
      </header>

      {savedPath && <div className="save-toast">Saved to {savedPath}</div>}

      <nav className="tabbar">
        {TABS.map((t) => (
          <button key={t.id} className={`tab-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
            {t.label}
            {t.id === "focus" && openFocusCount > 0 && <span className="badge">{openFocusCount}</span>}
          </button>
        ))}
      </nav>

      <main className="app-main">
        {tab === "planner" && <SnowflakePlanner project={project} onChange={setProject} />}
        {tab === "editor" && <FountainEditor project={project} onChange={setProject} />}
        {tab === "focus" && <FocusTab project={project} onChange={setProject} />}
        {tab === "import" && <DriveImport project={project} onChange={setProject} />}
      </main>

      <footer className="statusbar">
        <span>Autosaved locally · Last edit {new Date(project.updatedAt).toLocaleString()}</span>
        <span>
          Built on the{" "}
          <a href="https://github.com/Sparkey333/Writing-Templates-Beats-FinalDraft13" target="_blank" rel="noreferrer">
            Writing Templates &amp; Beats Compendium
          </a>
        </span>
      </footer>
    </div>
  );
}
