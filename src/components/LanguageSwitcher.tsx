import { useState } from "react";
import { languages, useLanguage } from "@/i18n/language";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-foreground/30"
      >
        <span className="font-medium text-foreground">{current.short}</span>
        <span className="inline-block h-1.5 w-1.5 rotate-45 border-b border-r border-muted-foreground" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <ul
            role="listbox"
            className="absolute end-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-line bg-card py-1 shadow-elevate"
          >
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-[13.5px] transition-colors hover:bg-paper ${
                    l.code === lang ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="text-[11px] tracking-wider">{l.short}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
