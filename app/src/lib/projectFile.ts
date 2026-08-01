// Save/load a SnowflakeProject as JSON.
//
// In the native Tauri shell this uses the fs + dialog plugins to write a real .snowdraft.json
// file anywhere on disk (including directly inside a synced Google Drive folder — see
// DriveImport.tsx). When the app is opened as a plain web page (e.g. `npm run dev` in a
// browser, or a future web build) there's no native file-save API, so it falls back to a
// browser download / <input type=file> pick. Same project schema either way.

import type { SnowflakeProject } from "../types";

function isTauri(): boolean {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export async function saveProjectAs(project: SnowflakeProject): Promise<string | null> {
  const json = JSON.stringify(project, null, 2);
  const suggestedName = `${project.title.replace(/[^\w\- ]+/g, "").trim() || "untitled"}.snowdraft.json`;

  if (isTauri()) {
    const { save } = await import("@tauri-apps/plugin-dialog");
    const { writeTextFile } = await import("@tauri-apps/plugin-fs");
    const path = await save({
      defaultPath: suggestedName,
      filters: [{ name: "Snowdraft Project", extensions: ["json"] }],
    });
    if (!path) return null;
    await writeTextFile(path, json);
    return path;
  }

  // Browser fallback: trigger a download.
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = suggestedName;
  a.click();
  URL.revokeObjectURL(url);
  return suggestedName;
}

export async function openProject(): Promise<SnowflakeProject | null> {
  if (isTauri()) {
    const { open } = await import("@tauri-apps/plugin-dialog");
    const { readTextFile } = await import("@tauri-apps/plugin-fs");
    const path = await open({
      multiple: false,
      filters: [{ name: "Snowdraft Project", extensions: ["json"] }],
    });
    if (!path || Array.isArray(path)) return null;
    const text = await readTextFile(path);
    return JSON.parse(text) as SnowflakeProject;
  }

  // Browser fallback: <input type=file>.
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return resolve(null);
      const text = await file.text();
      resolve(JSON.parse(text) as SnowflakeProject);
    };
    input.click();
  });
}

const LOCAL_STORAGE_KEY = "snowdraft.autosave.v1";

/** Cheap autosave to localStorage/webview storage so work survives a reload between explicit saves. */
export function autosave(project: SnowflakeProject) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(project));
  } catch {
    // Storage can be unavailable (private browsing, quota) — autosave is best-effort only.
  }
}

export function loadAutosave(): SnowflakeProject | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SnowflakeProject) : null;
  } catch {
    return null;
  }
}
