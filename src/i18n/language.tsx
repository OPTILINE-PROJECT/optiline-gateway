import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { languages, translations, type LanguageCode } from "./translations";
import { languageDirection } from "./direction";
import { getVisitorCountry } from "@/lib/visitor.functions";
import { resolveVisitorRegion, savedVisitorRegion } from "@/lib/visitor-region";
import type { LanguageRegion } from "@/lib/language-regions";

type LanguageContextValue = {
  lang: LanguageCode;
  setLang: (code: LanguageCode) => void;
  region: LanguageRegion | undefined;
  setRegion: (region: LanguageRegion) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "optiline-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("en");
  const [region, setRegionState] = useState<LanguageRegion>();

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    const saved = savedVisitorRegion(window.localStorage.getItem("optiline-language-region"), stored);
    if (saved) { setLangState(saved.lang); setRegionState(saved); return; }
    let active = true;
    const apply = (country: string | null) => {
      if (!active || window.localStorage.getItem(STORAGE_KEY)) return;
      const detected = resolveVisitorRegion(country, navigator.languages);
      if (detected) { setLangState(detected.lang); setRegionState(detected); }
    };
    apply(null);
    getVisitorCountry().then(({ country }) => apply(country)).catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languageDirection(lang);
  }, [lang]);

  const setLang = useCallback((code: LanguageCode) => {
    setLangState(code);
    window.localStorage.setItem(STORAGE_KEY, code);
  }, []);

  const t = useCallback(
    (key: string) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang],
  );

  const setRegion = useCallback((next: LanguageRegion) => {
    setRegionState(next);
    setLang(next.lang);
    window.localStorage.setItem("optiline-language-region", next.id);
  }, [setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, region, setRegion, t, dir: languageDirection(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export { languages };
export type { LanguageCode };
