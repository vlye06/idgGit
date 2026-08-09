import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="bg-forest-950 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading eyebrow={about.storyEyebrow} heading={about.storyTitle} align="center" dark />

        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {about.storyParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-balance text-center text-base leading-relaxed text-paper-200/85 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-paper-50/15 pt-10 md:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <div className="font-serif text-3xl text-green-400 md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-paper-200/70">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
