import { useMemo } from "react";
import type { PartnerItem } from "../data/content";

interface CountryGroup {
  country: string;
  partners: PartnerItem[];
  angle: number;
}

const RADIUS = 170;
const CENTER = 220;

export function PartnerNetwork({ partners, hubLabel }: { partners: PartnerItem[]; hubLabel: string }) {
  const groups = useMemo<CountryGroup[]>(() => {
    const byCountry = new Map<string, PartnerItem[]>();
    for (const partner of partners) {
      const list = byCountry.get(partner.country) ?? [];
      list.push(partner);
      byCountry.set(partner.country, list);
    }
    const entries = Array.from(byCountry.entries());
    return entries.map(([country, list], i) => ({
      country,
      partners: list,
      angle: (i / entries.length) * Math.PI * 2 - Math.PI / 2,
    }));
  }, [partners]);

  return (
    <div className="mx-auto max-w-2xl">
      <svg viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`} className="w-full" role="img" aria-label={hubLabel}>
        {groups.map((group) => {
          const x = CENTER + Math.cos(group.angle) * RADIUS;
          const y = CENTER + Math.sin(group.angle) * RADIUS;
          return (
            <line
              key={group.country}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              className="stroke-green-500/30"
              strokeWidth={1.5}
              strokeDasharray="4 5"
            />
          );
        })}

        <circle cx={CENTER} cy={CENTER} r={46} className="fill-forest-950" />
        <circle cx={CENTER} cy={CENTER} r={46} className="stroke-green-500" strokeWidth={1.5} fill="none" />
        <text x={CENTER} y={CENTER - 4} textAnchor="middle" className="fill-paper-50 text-[11px] font-semibold">
          IDG-Weave
        </text>
        <text x={CENTER} y={CENTER + 12} textAnchor="middle" className="fill-green-400 text-[9px] uppercase tracking-[0.1em]">
          Odessa, UA
        </text>

        {groups.map((group) => {
          const x = CENTER + Math.cos(group.angle) * RADIUS;
          const y = CENTER + Math.sin(group.angle) * RADIUS;
          return (
            <g key={group.country}>
              <circle cx={x} cy={y} r={34} className="fill-white stroke-paper-300" strokeWidth={1.5} />
              <text x={x} y={y - 4} textAnchor="middle" className="fill-ink text-[10px] font-semibold">
                {group.country}
              </text>
              <text x={x} y={y + 9} textAnchor="middle" className="fill-ink-light text-[7.5px]">
                {group.partners.map((p) => p.name).join(" · ")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
