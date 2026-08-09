import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export function Values() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="values" className="bg-paper-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={about.valuesEyebrow}
          heading={about.valuesTitle}
          subtitle={about.valuesSubtitle}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-paper-300 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                  <Icon name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
