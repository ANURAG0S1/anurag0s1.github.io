import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <div className="contact-card">
          <Reveal>
            <p className="eyebrow">Bookings open</p>
            <h2 id="contact-heading" className="contact-title">
              Have a product that needs to perform?
            </h2>
            <p className="contact-lede">
              I am most useful on production web systems: migrations, SEO surfaces, and integrations that have to
              hold SLA.
            </p>
          </Reveal>
          <div className="contact-actions">
            <a className="btn btn-primary btn-lg" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn-outline btn-lg" href={site.resumePath} download>
              Download resume
            </a>
          </div>
          <ul className="contact-links">
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          ℗ {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {site.location} · {site.title}
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
