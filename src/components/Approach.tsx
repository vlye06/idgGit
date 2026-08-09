import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export function Approach() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="approach" className="bg-paper-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={about.approachEyebrow} heading={about.approachTitle} align="center" />

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-paper-300 md:block" />
          {about.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-paper-100 text-green-600">
                  <Icon name={step.icon} className="h-5 w-5" />
                </div>
                <span className="ml-3 font-serif text-2xl text-paper-300 md:ml-0 md:mt-4">0{i + 1}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
