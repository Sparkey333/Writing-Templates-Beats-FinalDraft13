import type { SnowflakeProject } from "../types";
import { TEMPLATE_CATALOG, TEMPLATE_CATEGORIES, type StoryTemplate } from "../templatesCatalog";

interface Props {
  onUse: (project: SnowflakeProject) => void;
}

const REPO = "https://github.com/Sparkey333/Writing-Templates-Beats-FinalDraft13/blob/claude/story-templates-beat-sheets-5o3slj";

export default function TemplateGallery({ onUse }: Props) {
  return (
    <div className="gallery">
      <div className="gallery-intro">
        <h2>New from Template</h2>
        <p className="hint">
          The start of the Final Draft 13 clone: pick a structure and it seeds a project with
          the beats already laid out as scenes (each flagged ⚑ until you fill it in, so they
          show up in the Focus tab). Every template is one of this repo's frameworks.
        </p>
      </div>

      {TEMPLATE_CATEGORIES.map((cat) => (
        <section key={cat} className="gallery-section">
          <h3>{cat}</h3>
          <div className="gallery-grid">
            {TEMPLATE_CATALOG.filter((t) => t.category === cat).map((t: StoryTemplate) => (
              <div className="tpl-card" key={t.id}>
                <div className="tpl-card-body">
                  <div className="tpl-format-chip">{t.format}</div>
                  <h4>{t.name}</h4>
                  <p>{t.blurb}</p>
                </div>
                <div className="tpl-card-actions">
                  <button className="btn btn-primary" onClick={() => onUse(t.create())}>
                    Use template
                  </button>
                  <a className="tpl-doc-link" href={`${REPO}/${t.docPath}`} target="_blank" rel="noreferrer">
                    docs ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="gallery-footer">
        Want these as <strong>.fountain</strong> files to import into Final Draft? The whole
        collection is in{" "}
        <a href={`${REPO}/01-screenplay/templates/collection`} target="_blank" rel="noreferrer">
          <code>01-screenplay/templates/collection/</code>
        </a>{" "}
        — Final Draft imports Fountain directly (File → Open).
      </div>
    </div>
  );
}
