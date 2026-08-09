import { useEffect, useState } from "react";
import { company } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./Icon";

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#partners", label: t.nav.partners },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? "bg-forest-950/90 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-4">
          <img src="/idg_logo.png" alt="IDG-Weave" className="h-9 w-auto" />
          <span className="font-serif text-xl tracking-wide text-paper-50">
            {company.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-paper-200/80 transition hover:text-green-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-paper-50/20 p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] transition ${
                lang === "en" ? "bg-green-500 text-forest-950" : "text-paper-200/70 hover:text-paper-50"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ua")}
              className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] transition ${
                lang === "ua" ? "bg-green-500 text-forest-950" : "text-paper-200/70 hover:text-paper-50"
              }`}
            >
              UA
            </button>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-green-400/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-green-400 transition hover:bg-green-400 hover:text-forest-950"
          >
            {t.nav.contactCta}
          </a>
        </div>

        <button
          className="text-paper-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 bg-forest-950/95 px-6 pb-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm uppercase tracking-[0.2em] text-paper-200/80 hover:text-green-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm uppercase tracking-[0.2em] text-green-400"
          >
            {t.nav.contactCta}
          </a>
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] ${
                lang === "en" ? "bg-green-500 text-forest-950" : "border border-paper-50/20 text-paper-200/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ua")}
              className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] ${
                lang === "ua" ? "bg-green-500 text-forest-950" : "border border-paper-50/20 text-paper-200/70"
              }`}
            >
              UA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
