import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Icon } from "./Icon";

export function WhyUs() {
  const { t } = useLanguage();
  const { whyUs } = t;

  return (
    <section id="why-us" className="bg-paper-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={whyUs.eyebrow} heading={whyUs.title} subtitle={whyUs.subtitle} align="center" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <TiltCard max={6} className="h-full rounded-2xl border border-paper-300 bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
