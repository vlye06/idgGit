import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { content, type Lang, type SiteContent } from "../data/content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: SiteContent;
}

const STORAGE_KEY = "idg_lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ua" ? "ua" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "ua" ? "uk" : "en";
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: content[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
