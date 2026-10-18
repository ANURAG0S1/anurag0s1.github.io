import { useEffect, useState } from "react";
import { nav, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const sections = [{ id: "home", label: "Intro" }, ...nav] as const;
const sectionIds = sections.map((s) => s.id);

function readProgress(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

export function NowPlaying() {
  const active = useActiveSection(sectionIds);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setProgress(readProgress()));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const index = Math.max(
    0,
    sections.findIndex((s) => s.id === active),
  );
  const current = sections[index] ?? sections[0];
  const next = sections[index + 1];

  return (
    <aside className="player" aria-label="Now playing">
      <div className="player-track">
        <div className="player-art" aria-hidden="true">
          <span className="eq">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="player-meta">
          <strong>
            {site.current.role} · {site.current.company}
          </strong>
          <span>
            Now playing: {current.label}
            {next ? <span className="player-next"> · Up next: {next.label}</span> : null}
          </span>
        </div>
      </div>

      <div className="player-progress" aria-hidden="true">
        <span className="player-time">{String(index + 1).padStart(2, "0")}</span>
        <span className="player-bar">
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
        <span className="player-time">{String(sections.length).padStart(2, "0")}</span>
      </div>

      <div className="player-actions">
        <a href={site.resumePath} download className="btn btn-ghost btn-sm">
          Resume
        </a>
        <a href={`mailto:${site.email}`} className="btn btn-primary btn-sm">
          Email me
        </a>
      </div>
    </aside>
  );
}
