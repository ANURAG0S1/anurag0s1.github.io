import type { Project } from "../data/site";

type Visual = Project["visual"];

type Palette = {
  from: string;
  to: string;
  ink: string;
};

export const palettes: Record<Visual, Palette> = {
  migration: { from: "#ff6b3d", to: "#d61f69", ink: "#fff4ec" },
  whitelabel: { from: "#5b5bf7", to: "#1b1464", ink: "#eef0ff" },
  ssr: { from: "#b8f53d", to: "#167a4a", ink: "#08130b" },
  config: { from: "#ffd23f", to: "#f08a24", ink: "#1f1300" },
  dashboard: { from: "#36d6e7", to: "#0b4f8a", ink: "#ecfbff" },
};

type Props = {
  project: Project;
  size?: "sm" | "md" | "lg";
};

export function Cover({ project, size = "md" }: Props) {
  const palette = palettes[project.visual];
  const gradientId = `cover-${project.id}-${size}`;

  return (
    <div
      className={`cover cover-${size}`}
      style={{ color: palette.ink }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="cover-art">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${gradientId})`} />
        <CoverMotif visual={project.visual} ink={palette.ink} />
      </svg>
      {size !== "sm" ? (
        <div className="cover-type">
          <span className="cover-cat">AK–{project.index}</span>
          <strong className="cover-metric">{project.metric ?? project.stack[0]}</strong>
          <span className="cover-title">{project.metricLabel ?? project.context}</span>
        </div>
      ) : null}
    </div>
  );
}

function CoverMotif({ visual, ink }: { visual: Visual; ink: string }) {
  switch (visual) {
    case "migration":
      return (
        <g fill="none" stroke={ink} strokeWidth="1.2" opacity="0.85">
          <circle cx="48" cy="74" r="20" opacity="0.45" />
          <circle cx="70" cy="74" r="20" />
          <path d="M40 74 H82 M76 68 L82 74 L76 80" strokeWidth="1.6" />
        </g>
      );
    case "whitelabel":
      return (
        <g fill="none" stroke={ink} strokeWidth="1.2">
          <rect x="36" y="62" width="28" height="28" rx="3" opacity="0.35" />
          <rect x="46" y="54" width="28" height="28" rx="3" opacity="0.6" />
          <rect x="56" y="46" width="28" height="28" rx="3" fill={ink} fillOpacity="0.12" />
        </g>
      );
    case "ssr":
      return (
        <g fill="none" stroke={ink} opacity="0.75">
          {[26, 21, 16, 11, 6].map((r) => (
            <circle key={r} cx="70" cy="72" r={r} strokeWidth="0.8" />
          ))}
          <circle cx="70" cy="72" r="3" fill={ink} />
          <path d="M14 66 H38 M20 74 H36 M24 82 H38" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
    case "config":
      return (
        <g fill={ink}>
          {Array.from({ length: 16 }, (_, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const on = (i * 7) % 5 < 2;
            return (
              <rect
                key={i}
                x={46 + col * 11}
                y={46 + row * 11}
                width="8"
                height="8"
                rx="2"
                opacity={on ? 0.9 : 0.22}
              />
            );
          })}
        </g>
      );
    case "dashboard":
      return (
        <g fill={ink}>
          {[14, 22, 18, 30, 26, 38].map((h, i) => (
            <rect key={i} x={30 + i * 10} y={88 - h} width="6" height={h} rx="1.5" opacity={0.35 + i * 0.1} />
          ))}
          <path d="M28 66 L44 60 L58 62 L86 46" fill="none" stroke={ink} strokeWidth="1.4" />
        </g>
      );
    default: {
      const exhaustive: never = visual;
      return exhaustive;
    }
  }
}
