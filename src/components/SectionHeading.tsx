export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] ${
          dark ? "text-green-400" : "text-green-600"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-serif text-4xl md:text-5xl leading-[1.1] text-balance ${
          dark ? "text-paper-50" : "text-ink"
        } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-balance ${dark ? "text-paper-200/80" : "text-ink-light"} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
