import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export function Contact() {
  const { t } = useLanguage();
  const { contact } = t;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const required = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]");
    const valid = Array.from(required).every((field) => field.value.trim() !== "");
    if (!valid) {
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subjectId = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const subjectService = t.services.items.find((service) => service.id === subjectId);
    const subjectTitle = subjectService?.title ?? subjectId;

    const subjectLine = `${contact.form.subject}: ${subjectTitle} — ${firstName} ${lastName}`.trim();
    const bodyLines = [
      `${contact.form.firstName}: ${firstName}`,
      `${contact.form.lastName}: ${lastName}`,
      `${contact.form.email}: ${email}`,
      phone && `${contact.form.phone}: ${phone}`,
      company && `${contact.form.company}: ${company}`,
      `${contact.form.subject}: ${subjectTitle}`,
      "",
      message,
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n");

    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyLines)}`;

    setStatus("success");
    form.reset();
  };

  const inputClass =
    "w-full rounded-lg border border-paper-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-light/50 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20";

  return (
    <section id="contact" className="bg-paper-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={contact.eyebrow} heading={contact.title} subtitle={contact.subtitle} align="center" />

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <div className="h-full rounded-2xl border border-paper-300 bg-white p-8">
              <h3 className="font-serif text-xl text-ink">{contact.infoTitle}</h3>
              <p className="mt-2 text-sm text-ink-light">{contact.infoText}</p>

              <dl className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-light">{contact.addressLabel}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">
                      {contact.address.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-light">{contact.emailLabel}</dt>
                    <dd className="mt-1 space-y-1 text-sm text-ink">
                      {contact.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="block hover:text-green-600">{email}</a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-light">{contact.phoneLabel}</dt>
                    <dd className="mt-1 space-y-1 text-sm text-ink">
                      {contact.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block hover:text-green-600">{phone}</a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-light">{contact.hoursLabel}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">
                      {contact.hours.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-paper-300 bg-white p-8">
              <h3 className="font-serif text-xl text-ink">{contact.formTitle}</h3>
              <p className="mt-2 text-sm text-ink-light">{contact.formText}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required name="firstName" placeholder={contact.form.firstName} className={inputClass} />
                <input required name="lastName" placeholder={contact.form.lastName} className={inputClass} />
                <input required type="email" name="email" placeholder={contact.form.email} className={inputClass} />
                <input name="phone" placeholder={contact.form.phone} className={inputClass} />
                <input name="company" placeholder={contact.form.company} className={`sm:col-span-2 ${inputClass}`} />
                <select required name="subject" defaultValue="" className={`sm:col-span-2 ${inputClass}`}>
                  <option value="" disabled>{contact.form.subjectPlaceholder}</option>
                  {t.services.items.map((service) => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
                <textarea
                  required
                  name="message"
                  placeholder={contact.form.message}
                  rows={5}
                  className={`sm:col-span-2 ${inputClass}`}
                />
              </div>

              {status === "success" && (
                <p className="mt-4 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-700">{contact.form.success}</p>
              )}
              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-700">{contact.form.error}</p>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-green-500 px-7 py-3 text-xs uppercase tracking-[0.2em] text-forest-950 transition hover:bg-green-600 sm:w-auto"
              >
                {contact.form.submit}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
