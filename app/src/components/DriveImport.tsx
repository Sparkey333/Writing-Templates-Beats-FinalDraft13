import { useState } from "react";
import type { SnowflakeProject } from "../types";

interface Props {
  project: SnowflakeProject;
  onChange: (project: SnowflakeProject) => void;
}

interface ImportCandidate {
  name: string;
  path: string;
  is_dir: boolean;
  size_bytes: number;
  suggested_step: string;
  confidence: string;
}

function isTauri(): boolean {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export default function DriveImport({ project, onChange }: Props) {
  const [folderPath, setFolderPath] = useState(project.driveFolderLink);
  const [candidates, setCandidates] = useState<ImportCandidate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);

  async function pickFolder() {
    if (!isTauri()) {
      setError("Folder picking needs the native app shell — see the note below for the dev-server limitation.");
      return;
    }
    const { open } = await import("@tauri-apps/plugin-dialog");
    const picked = await open({ directory: true, multiple: false });
    if (typeof picked === "string") {
      setFolderPath(picked);
      onChange({ ...project, driveFolderLink: picked, importStatus: "in progress" });
    }
  }

  async function scan() {
    setError(null);
    if (!isTauri()) {
      setError("Scanning needs the native app shell (Tauri fs access). Run this inside the built desktop app.");
      return;
    }
    if (!folderPath.trim()) {
      setError("Pick or paste a folder path first.");
      return;
    }
    setScanning(true);
    try {
      const { invoke } = await import("@tauri-apps/api/core");
      const result = await invoke<ImportCandidate[]>("scan_import_folder", { folderPath });
      setCandidates(result);
      onChange({ ...project, driveFolderLink: folderPath, importStatus: "in progress" });
    } catch (e) {
      setError(String(e));
    } finally {
      setScanning(false);
    }
  }

  function markSorted() {
    onChange({ ...project, importStatus: "sorted" });
  }

  return (
    <div className="drive-import">
      <h2>Drive Import & Reorganize</h2>
      <p className="hint">
        Sort an existing folder of loose planning docs (chapters, act notes, character sheets)
        into this project's Snowflake steps — see{" "}
        <code>final-draft-snowflake-master-template.md § Drive Import</code>.
      </p>

      <div className="drive-status-box">
        <strong>What's real vs. stubbed today:</strong>
        <ul>
          <li>
            ✅ <strong>Local-folder scanning</strong> — point this at any folder on disk (including
            a <strong>Google Drive for Desktop</strong> sync folder — Drive files you've synced
            appear as ordinary local files) and it lists every file with a suggested Snowflake
            step, using filename keyword matching (see <code>src-tauri/src/lib.rs</code>).
          </li>
          <li>
            🚧 <strong>Direct Google Drive API browsing</strong> (no local sync required) is not
            wired up — it needs a Google Cloud OAuth client (a client ID/secret registered to
            this app, plus a consent screen) that only the app's owner can provision. The scan
            command above is written so swapping in a real Drive listing later only means adding
            a second data source — the classifier and UI don't change.
          </li>
        </ul>
        <p>
          <strong>Today's workaround:</strong> install{" "}
          <a href="https://www.google.com/drive/download/" target="_blank" rel="noreferrer">
            Google Drive for Desktop
          </a>
          , let your planning folder sync locally, then point the scanner at that local path.
        </p>
      </div>

      <div className="drive-controls">
        <input
          className="field"
          placeholder="/path/to/synced/drive/folder"
          value={folderPath}
          onChange={(e) => setFolderPath(e.target.value)}
        />
        <button className="btn" onClick={pickFolder}>Browse…</button>
        <button className="btn" onClick={scan} disabled={scanning}>
          {scanning ? "Scanning…" : "Scan folder"}
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      <div className="import-status-row">
        Status:
        <select value={project.importStatus} onChange={(e) => onChange({ ...project, importStatus: e.target.value as SnowflakeProject["importStatus"] })}>
          <option value="not started">not started</option>
          <option value="in progress">in progress</option>
          <option value="sorted">sorted</option>
        </select>
        <button className="btn" onClick={markSorted}>Mark sorted</button>
      </div>

      {candidates.length > 0 && (
        <table className="scene-table">
          <thead>
            <tr>
              <th>File</th>
              <th>Suggested Snowflake step</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.path}>
                <td>{c.is_dir ? "📁" : "📄"} {c.name}</td>
                <td>{c.suggested_step}</td>
                <td>{c.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
