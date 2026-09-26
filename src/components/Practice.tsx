import { credentials, education, principles, skillGroups } from "../data/site";
import { Reveal } from "./Reveal";

export function Practice() {
  return (
    <section id="practice" className="section" aria-labelledby="practice-heading">
      <div className="wrap">
        <Reveal>
          <p className="kicker">02 / Practice</p>
          <h2 id="practice-heading" className="section-title">
            How I work.
          </h2>
        </Reveal>

        <div className="practice-grid">
          <ol className="method">
            {principles.map((p) => (
              <li key={p.id}>
                <span className="mono">{p.id}</span>
                <h3>{p.name}</h3>
                <p className="method-title">{p.title}</p>
                <p className="method-body">{p.body}</p>
              </li>
            ))}
          </ol>

          <div className="skill-rows">
            {skillGroups.map((group) => (
              <section key={group.name} aria-labelledby={`skill-${group.name}`}>
                <h3 id={`skill-${group.name}`} className="mono">
                  {group.name}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="education">
          <p className="mono">Education</p>
          <div className="edu-card">
            <div className="edu-main">
              <h3>B.Tech, Computer Science (minor)</h3>
              <p className="edu-school">{education.school}</p>
            </div>
            <dl className="edu-meta">
              <div>
                <dt>Graduated</dt>
                <dd>{education.year}</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>{education.gpa}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{education.place}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="creds">
          <p className="mono">Credentials</p>
          <ul>
            {credentials.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>
                  {c.org} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
