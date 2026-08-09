import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Icon } from "./Icon";

export function Services() {
  const { t } = useLanguage();
  const { services } = t;

  return (
    <section id="services" className="bg-forest-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={services.eyebrow} heading={services.title} subtitle={services.subtitle} align="center" dark />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.items.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 0.08}>
              <TiltCard max={4} className="h-full rounded-2xl border border-paper-50/10 bg-forest-900/60 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-paper-50">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper-200/75">{service.desc}</p>
                  </div>
                </div>

                {service.subcards.length > 0 && (
                  <div className="mt-5 space-y-3 border-t border-paper-50/10 pt-5">
                    {service.subcards.map((sub) => (
                      <div key={sub.title}>
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-green-400/90">
                          {sub.title}
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed text-paper-200/65">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-green-500/20 bg-gradient-to-br from-forest-900 to-forest-800 px-8 py-12 text-center">
            <h3 className="font-serif text-2xl text-paper-50 md:text-3xl">{services.ctaTitle}</h3>
            <p className="max-w-md text-sm text-paper-200/75">{services.ctaText}</p>
            <a
              href="#contact"
              className="rounded-full bg-green-500 px-7 py-3 text-xs uppercase tracking-[0.2em] text-forest-950 transition hover:bg-green-400"
            >
              {services.quoteBtn}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
