import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export function Overview() {
  const { t } = useLanguage();
  const { overview } = t;

  return (
    <section id="overview" className="bg-paper-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal>
            <SectionHeading eyebrow={overview.eyebrow} heading={overview.title} subtitle={overview.subtitle} />
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest-800/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink transition hover:border-green-600 hover:text-green-600"
            >
              {overview.cta}
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {overview.highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-paper-300 bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-light">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
