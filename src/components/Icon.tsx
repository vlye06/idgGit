import type { IconName } from "../data/content";

const paths: Record<IconName, React.ReactNode> = {
  spindle: (
    <>
      <path d="M12 3v18" />
      <path d="M9 7c0-1.5 1.3-2 3-2s3 .5 3 2-1.3 2-3 2-3-.5-3-2Z" />
      <path d="M8 12c0-1.8 1.8-2.5 4-2.5s4 .7 4 2.5-1.8 2.5-4 2.5-4-.7-4-2.5Z" />
      <path d="M9 17c0-1.5 1.3-2 3-2s3 .5 3 2-1.3 2-3 2-3-.5-3-2Z" />
    </>
  ),
  spool: (
    <>
      <ellipse cx="12" cy="5" rx="6" ry="2" />
      <ellipse cx="12" cy="19" rx="6" ry="2" />
      <path d="M6 5v14M18 5v14" />
      <path d="M8 8h8M8 12h8M8 16h8" />
    </>
  ),
  shuttle: (
    <>
      <path d="M3 12c3-4 15-4 18 0-3 4-15 4-18 0Z" />
      <path d="M12 9v6" />
    </>
  ),
  droplet: (
    <path d="M12 2c4 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3-8 7-13Z" />
  ),
  waves: (
    <>
      <path d="M2 9c1.5 1.2 3 1.2 4.5 0S9.5 7.8 11 9s3 1.2 4.5 0 3-1.2 4.5 0" />
      <path d="M2 15c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
    </>
  ),
  expand: (
    <>
      <path d="M3 12h18" />
      <path d="M7 8l-4 4 4 4" />
      <path d="M17 8l4 4-4 4" />
    </>
  ),
  "check-square": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 3a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2Z" />
      <path d="M12 9v6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-6-3.8-9s1.3-6.5 3.8-9Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11z" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h16" />
      <circle cx="15" cy="6" r="2" />
      <path d="M4 12h16" />
      <circle cx="9" cy="12" r="2" />
      <path d="M4 18h16" />
      <circle cx="16" cy="18" r="2" />
    </>
  ),
  "life-buoy": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="m7.5 7.5 3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" />
    </>
  ),
  handshake: (
    <>
      <path d="M2 13h5l2.5-2.5a2 2 0 0 1 2.8 0L14 13h8" />
      <path d="M9 10l3 3-1.5 1.5a1.5 1.5 0 0 1-2 0" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  search: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  truck: (
    <>
      <rect x="1" y="7" width="13" height="10" rx="1" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  "arrow-down": <path d="M12 4v16M6 14l6 6 6-6" />,
  "arrow-right": <path d="M4 12h16M14 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  "external-link": (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
};

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
