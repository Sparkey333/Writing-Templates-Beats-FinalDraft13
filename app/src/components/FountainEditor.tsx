import { useMemo } from "react";
import type { SnowflakeProject } from "../types";
import { parseFountain, estimatePages } from "../lib/fountainPreview";

interface Props {
  project: SnowflakeProject;
  onChange: (project: SnowflakeProject) => void;
}

export default function FountainEditor({ project, onChange }: Props) {
  const parsed = useMemo(() => parseFountain(project.draft), [project.draft]);
  const pages = useMemo(() => estimatePages(project.draft), [project.draft]);

  return (
    <div className="editor">
      <div className="editor-toolbar">
        <span className="pill">~{pages} page{pages === 1 ? "" : "s"}</span>
        <span className="pill">Fountain format</span>
        <a
          className="pill pill-link"
          href="https://fountain.io/syntax"
          target="_blank"
          rel="noreferrer"
        >
          syntax reference ↗
        </a>
      </div>
      <div className="editor-split">
        <textarea
          className="editor-source"
          spellCheck={false}
          value={project.draft}
          onChange={(e) => onChange({ ...project, draft: e.target.value, updatedAt: new Date().toISOString() })}
        />
        <div className="editor-preview">
          {parsed.map((line, i) => {
            switch (line.type) {
              case "scene-heading":
                return <div key={i} className="fp-scene-heading">{line.text}</div>;
              case "character":
                return <div key={i} className="fp-character">{line.text}</div>;
              case "parenthetical":
                return <div key={i} className="fp-parenthetical">{line.text}</div>;
              case "dialogue":
                return <div key={i} className="fp-dialogue">{line.text}</div>;
              case "transition":
                return <div key={i} className="fp-transition">{line.text}</div>;
              case "centered":
                return <div key={i} className="fp-centered">{line.text}</div>;
              case "section":
                return (
                  <div key={i} className={`fp-section fp-section-${line.level ?? 1}`}>
                    {line.text}
                  </div>
                );
              case "synopsis":
                return <div key={i} className="fp-synopsis">◦ {line.text}</div>;
              case "note":
                return <div key={i} className="fp-note">[[{line.text}]]</div>;
              case "blank":
                return <div key={i} className="fp-blank" />;
              default:
                return <div key={i} className="fp-action">{line.text}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
