import { credentials, education, principles, site, skillGroups } from "../data/site";
import { Reveal } from "./Reveal";

export function Practice() {
  const { about } = site;

  return (
    <section id="practice" className="section" aria-labelledby="practice-heading">
      <div className="wrap">
        <Reveal>
          <h2 id="practice-heading" className="block-title">
            About
          </h2>
        </Reveal>

        <div className="about-card">
          <div className="about-art" aria-hidden="true">
            <span>{site.years}</span>
            <small>years on record</small>
          </div>
          <div className="about-copy">
            <h3>{about.heading}</h3>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
            <dl className="about-facts">
              {about.aside.items.map((item) => (
                <div key={item.k}>
                  <dt>{item.k}</dt>
                  <dd>{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="block">
          <Reveal>
            <h3 className="block-title">How I work</h3>
          </Reveal>
          <ol className="principles">
            {principles.map((p) => (
              <li key={p.id}>
                <span className="principle-side">Side {p.id}</span>
                <h4>{p.name}</h4>
                <p className="principle-title">{p.title}</p>
                <p className="principle-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="block">
          <Reveal>
            <h3 className="block-title">Genres</h3>
          </Reveal>
          <div className="genres">
            {skillGroups.map((group) => (
              <section key={group.name} aria-labelledby={`genre-${group.name}`}>
                <h4 id={`genre-${group.name}`} className="eyebrow">
                  {group.name}
                </h4>
                <ul className="genre-row">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="block credits">
          <Reveal>
            <h3 className="block-title">Credits</h3>
          </Reveal>
          <dl className="credits-list">
            <div>
              <dt>Education</dt>
              <dd>
                <strong>B.Tech, Computer Science (minor)</strong>
                <span>
                  {education.school} · {education.place} · {education.year} · GPA {education.gpa}
                </span>
              </dd>
            </div>
            {credentials.map((c) => (
              <div key={c.name}>
                <dt>Certificate</dt>
                <dd>
                  <strong>{c.name}</strong>
                  <span>
                    {c.org} · {c.year}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
