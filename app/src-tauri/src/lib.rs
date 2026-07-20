// Snowdraft — Tauri backend.
//
// Two small Rust commands power the "Drive Import & Reorganize" flow described in
// ../../01-screenplay/templates/final-draft-snowflake-master-template.md: since a synced
// Google Drive folder appears on disk as an ordinary directory, we don't need Drive's API to
// build the useful part (listing loose files and guessing which Snowflake step each belongs
// to) — only real OAuth would add is pulling files Drive hasn't synced locally yet. See
// ../README.md for what's implemented vs. stubbed.

use serde::Serialize;
use std::fs;
use std::path::Path;

#[derive(Serialize)]
pub struct ImportCandidate {
    name: String,
    path: String,
    is_dir: bool,
    size_bytes: u64,
    suggested_step: String,
    confidence: &'static str,
}

/// List the immediate contents of a directory (non-recursive) as import candidates, each
/// tagged with a best-guess Snowflake step based on filename keywords. This is the
/// "inventory first" pass described in the master template's Drive Import section.
#[tauri::command]
fn scan_import_folder(folder_path: String) -> Result<Vec<ImportCandidate>, String> {
    let dir = Path::new(&folder_path);
    if !dir.is_dir() {
        return Err(format!("Not a directory: {folder_path}"));
    }

    let entries = fs::read_dir(dir).map_err(|e| e.to_string())?;
    let mut candidates = Vec::new();

    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        let metadata = entry.metadata().map_err(|e| e.to_string())?;
        let name = entry.file_name().to_string_lossy().to_string();

        // Skip dotfiles / OS cruft.
        if name.starts_with('.') {
            continue;
        }

        let (suggested_step, confidence) = classify_filename(&name);

        candidates.push(ImportCandidate {
            name,
            path: entry.path().to_string_lossy().to_string(),
            is_dir: metadata.is_dir(),
            size_bytes: metadata.len(),
            suggested_step,
            confidence,
        });
    }

    candidates.sort_by(|a, b| a.name.to_lowercase().cmp(&b.name.to_lowercase()));
    Ok(candidates)
}

/// Heuristic, keyword-based classifier mapping a filename to one of the 10 Snowflake steps.
/// Deliberately simple and transparent (no ML, no network call) so the suggestion is always
/// explainable — the user confirms or overrides every suggestion in the Import tab.
fn classify_filename(name: &str) -> (String, &'static str) {
    let n = name.to_lowercase();

    let rules: &[(&[&str], &str)] = &[
        (&["logline", "one-sentence", "one sentence", "pitch"], "Step 1 — One-Sentence Summary"),
        (&["paragraph-summary", "paragraph summary", "synopsis-short"], "Step 2 — One-Paragraph Summary"),
        (&["character-sheet", "character sheet", "char-summary", "cast"], "Step 3 — Character Summary Sheets"),
        (&["one-page", "one page", "synopsis"], "Step 4 — One-Page Synopsis"),
        (&["pov", "character-synopsis", "character synopsis"], "Step 5 — Character Synopses"),
        (&["four-page", "4-page", "four page", "long-synopsis"], "Step 6 — Four-Page Synopsis"),
        (&["bible", "dossier", "backstory"], "Step 7 — Character Bibles"),
        (&["scene-list", "scene list", "outline", "beatsheet", "beat-sheet", "beat sheet"], "Step 8 — Scene List"),
        (&["scene-brief", "scene brief", "brief"], "Step 9 — Scene Narrative Briefs"),
        (&["chapter", "ch0", "ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8", "ch9",
           "draft", ".fountain"], "Step 10 — Draft"),
        (&["world", "map", "magic", "lore"], "World-building (see 04-worldbuilding/)"),
        (&["act ", "act-", "act1", "act 1", "act one"], "Act structure (Snowflake Step 2 disasters)"),
        (&["arc"], "Character/subplot arc (Snowflake Step 5)"),
    ];

    for (keywords, step) in rules {
        if keywords.iter().any(|k| n.contains(k)) {
            return (step.to_string(), "keyword match");
        }
    }

    ("⚑ Unclassified — tag manually".to_string(), "no match")
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![scan_import_folder])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
