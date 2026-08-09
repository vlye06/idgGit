import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export function Partners() {
  const { t } = useLanguage();
  const { partners } = t;

  return (
    <section id="partners" className="bg-paper-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={partners.eyebrow} heading={partners.title} subtitle={partners.subtitle} align="center" />
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-light">{partners.intro}</p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {partners.items.map((partner, i) => (
            <Reveal key={partner.id} delay={(i % 4) * 0.06}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-0 overflow-hidden rounded-2xl border border-paper-300 bg-white transition hover:border-green-500/50 hover:shadow-xl hover:shadow-forest-950/5 sm:grid-cols-[220px_1fr]"
              >
                <div className="flex min-h-[140px] items-center justify-center border-b border-paper-300 bg-paper-50 p-6 sm:border-b-0 sm:border-r">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-[160px] object-contain grayscale transition group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 p-7">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-forest-950">
                    {partner.category}
                  </span>
                  <h3 className="font-serif text-xl text-ink">{partner.name}</h3>
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-green-600">{partner.role}</div>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-light">{partner.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition group-hover:text-green-600">
                    <Icon name="external-link" className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-paper-300 bg-white px-8 py-12 text-center">
            <h3 className="font-serif text-2xl text-ink md:text-3xl">{partners.ctaTitle}</h3>
            <p className="max-w-md text-sm text-ink-light">{partners.ctaText}</p>
            <a
              href="#contact"
              className="rounded-full bg-forest-800 px-7 py-3 text-xs uppercase tracking-[0.2em] text-paper-50 transition hover:bg-forest-700"
            >
              {t.nav.contactCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
