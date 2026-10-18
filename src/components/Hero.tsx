import { site } from "../data/site";

export function Hero() {
  const { hero } = site;
  const initials = hero.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="wrap hero-layout">
        <div className="hero-avatar" aria-hidden="true">
          <span>{initials}</span>
        </div>
        <div className="hero-copy">
          <p className="hero-badge">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 1.5l2.6 2.1 3.3-.4 1 3.2 3 1.5-.9 3.2 1.4 3-2.7 2 .1 3.4-3.3.6-1.7 2.9-3.1-1.3-3.1 1.3-1.7-2.9-3.3-.6.1-3.4-2.7-2 1.4-3-.9-3.2 3-1.5 1-3.2 3.3.4z"
              />
              <path fill="var(--bg)" d="M10.6 15.6l-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4z" />
            </svg>
            Verified {site.title}
          </p>
          <h1 id="hero-heading">{hero.name}</h1>
          <p className="hero-listeners">
            <strong>{site.years} years</strong> in production · {site.location}
          </p>
        </div>
      </div>

      <div className="wrap hero-bar">
        <a href="#work" className="play-btn" aria-label="Play: view selected work">
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path fill="currentColor" d="M8 5.5v13l11-6.5z" />
          </svg>
        </a>
        <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
          Follow
        </a>
        <a href="#contact" className="btn btn-ghost">
          Let’s talk
        </a>
        <span className="hero-eyebrow">{hero.eyebrow}</span>
      </div>

      <div className="wrap hero-about">
        <p className="hero-statement">
          {hero.statement[0]} <em>{hero.statement[1]}</em>
        </p>
        <p className="hero-lede">{hero.lede}</p>
        <ul className="genre-row" aria-label="Stack">
          {hero.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
