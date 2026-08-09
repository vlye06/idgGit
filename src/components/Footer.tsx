import { company } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const { footer, contact, nav } = t;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-50/10 bg-forest-950 py-16 text-paper-200/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-4">
              <img src="/idg_logo.png" alt={company.name} className="h-8 w-auto" />
              <span className="font-serif text-lg text-paper-50">{company.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-50">{footer.servicesLabel}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {t.services.items.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-green-400">{service.title}</a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-green-400 hover:text-green-300">{footer.allServicesLabel}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-50">{footer.companyLabel}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-green-400">{footer.aboutLabel}</a></li>
              <li><a href="#partners" className="hover:text-green-400">{nav.partners}</a></li>
              <li><a href="#contact" className="hover:text-green-400">{nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-50">{footer.contactLabel}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {contact.emails.map((email) => (
                <li key={email}><a href={`mailto:${email}`} className="hover:text-green-400">{email}</a></li>
              ))}
              {contact.phones.map((phone) => (
                <li key={phone}><a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-green-400">{phone}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper-50/10 pt-6 text-center text-xs text-paper-200/50">
          © {year} {company.name} — {company.fullName}. {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
