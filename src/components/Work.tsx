import { useState } from "react";
import { engineering, experience, projects } from "../data/site";
import { Cover } from "./Cover";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="wrap">
        <h2 id="work-heading" className="sr-only">
          Work
        </h2>
        <Popular />
        <Discography />
        <Eras />
      </div>
    </section>
  );
}

function Popular() {
  return (
    <div className="block">
      <Reveal>
        <h3 className="block-title">Popular</h3>
      </Reveal>
      <ol className="tracklist">
        {engineering.map((item, i) => (
          <li key={item.title} className="track">
            <span className="track-no" aria-hidden="true">
              <span className="track-num">{i + 1}</span>
              <svg className="track-play" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="track-main">
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </span>
            <span className="track-label">{item.label}</span>
            <span className="track-stat">{item.stat}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Discography() {
  const [selectedId, setSelectedId] = useState<string>(projects[0]?.id ?? "");
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  if (!selected) return null;

  return (
    <div className="block">
      <Reveal>
        <h3 className="block-title">Discography</h3>
        <p className="block-sub">Selected releases. Pick a record to read its liner notes.</p>
      </Reveal>

      <ul className="albums">
        {projects.map((project) => {
          const isActive = project.id === selected.id;
          return (
            <li key={project.id}>
              <button
                type="button"
                className={`album ${isActive ? "is-active" : ""}`}
                aria-pressed={isActive}
                aria-controls="liner-notes"
                onClick={() => setSelectedId(project.id)}
              >
                <Cover project={project} />
                <strong>{project.name}</strong>
                <span>{project.context}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <article id="liner-notes" className="liner" aria-labelledby="liner-title">
        <Cover project={selected} size="lg" />
        <div className="liner-body">
          <p className="eyebrow">Release · {selected.context}</p>
          <h4 id="liner-title">{selected.name}</h4>
          <dl className="liner-notes">
            <div>
              <dt>Problem</dt>
              <dd>{selected.problem}</dd>
            </div>
            <div>
              <dt>What shipped</dt>
              <dd>{selected.solution}</dd>
            </div>
            <div>
              <dt>Engineering</dt>
              <dd>{selected.engineering}</dd>
            </div>
          </dl>
          <ol className="impact">
            {selected.impact.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
          <ul className="genre-row" aria-label="Technologies">
            {selected.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

function Eras() {
  const [active, setActive] = useState(0);
  const role = experience[active];

  if (!role) return null;

  return (
    <div className="block">
      <Reveal>
        <h3 className="block-title">Eras</h3>
        <p className="block-sub">Where the work was recorded.</p>
      </Reveal>

      <div className="chip-tabs" role="tablist" aria-label="Roles">
        {experience.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`era-tab-${item.id}`}
            aria-selected={i === active}
            aria-controls="era-panel"
            className={`chip-tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {item.company}
          </button>
        ))}
      </div>

      <article
        id="era-panel"
        className="era"
        role="tabpanel"
        aria-labelledby={`era-tab-${role.id}`}
      >
        <header className="era-head">
          <div className="era-tile" aria-hidden="true">
            {role.company.slice(0, 1)}
          </div>
          <div>
            <p className="eyebrow">
              {role.dates} · {role.location}
            </p>
            <h4>
              {role.role} <span>at {role.company}</span>
            </h4>
            <p className="era-summary">{role.summary}</p>
          </div>
        </header>
        <ol className="tracklist tracklist-compact">
          {role.points.map((point, i) => (
            <li key={point} className="track">
              <span className="track-no" aria-hidden="true">
                <span className="track-num">{i + 1}</span>
              </span>
              <span className="track-main">
                <span>{point}</span>
              </span>
            </li>
          ))}
        </ol>
        <ul className="genre-row" aria-label="Technologies">
          {role.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
