import { useEffect, useState } from "react";
import { Check, Globe } from "lucide-react";
import { CountryFlag } from "@/components/CountryFlag";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useLanguage } from "@/i18n/language";
import { languageDirection } from "@/i18n/direction";
import { defaultRegionByLanguage, languageRegions, regionCountryName } from "@/lib/language-regions";

const copy = {
  en: ["Language", "Search countries or languages…", "No results."],
  fr: ["Langue", "Rechercher un pays ou une langue…", "Aucun résultat."],
  es: ["Idioma", "Buscar países o idiomas…", "Sin resultados."],
  de: ["Sprache", "Länder oder Sprachen suchen…", "Keine Ergebnisse."],
  it: ["Lingua", "Cerca paesi o lingue…", "Nessun risultato."],
  pt: ["Idioma", "Pesquisar países ou idiomas…", "Sem resultados."],
  nl: ["Taal", "Zoek landen of talen…", "Geen resultaten."],
  ar: ["اللغة", "ابحث عن بلد أو لغة…", "لا توجد نتائج."],
  he: ["שפה", "חיפוש מדינות או שפות…", "לא נמצאו תוצאות."],
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [regionId, setRegionId] = useState<string | null>(null);
  useEffect(() => {
    setRegionId(window.localStorage.getItem("optiline-language-region"));
  }, []);
  const current = languageRegions.find((region) => region.id === regionId && region.lang === lang)
    ?? languageRegions.find((region) => region.id === defaultRegionByLanguage[lang]);
  if (!current) return null;
  const country = regionCountryName(current, lang);
  const [label, search, empty] = copy[lang];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" aria-label={label} title={`${country} · ${current.label}`}
          className="h-auto min-h-11 min-w-0 gap-2 rounded-full border-line bg-card/70 px-3 py-2 text-foreground hover:bg-paper">
          <Globe className="hidden shrink-0 xl:block" />
          <CountryFlag code={current.countryCode} className="h-4 w-6 shrink-0 rounded-[3px]" />
          <span className="min-w-0 max-w-24 text-start sm:max-w-32">
            <span className="block truncate text-sm leading-tight">{country}</span>
            <span dir={languageDirection(lang)} className="block truncate text-xs leading-tight text-muted-foreground">{current.label}</span>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-80 max-w-[calc(100vw-24px)] border-line p-0 shadow-elevate">
        <Command>
          <CommandInput aria-label={label} placeholder={search} />
          <CommandList className="max-h-[min(360px,60dvh)]">
            <CommandEmpty>{empty}</CommandEmpty>
            {languageRegions.map((region) => {
              const name = regionCountryName(region, lang);
              return (
                <CommandItem key={region.id} value={region.id} keywords={[name, region.country, region.label, region.lang]}
                  className="cursor-pointer gap-2 px-3 py-2.5" onSelect={() => {
                    setRegionId(region.id);
                    window.localStorage.setItem("optiline-language-region", region.id);
                    setLang(region.lang);
                    setOpen(false);
                  }}>
                  <CountryFlag code={region.countryCode} className="h-4 w-6 shrink-0 rounded-[3px]" />
                  <span className="min-w-0 flex-1 whitespace-normal text-start">
                    <span className="block font-medium">{name}</span>
                    <span dir={languageDirection(region.lang)} className="block text-xs text-muted-foreground">{region.label}</span>
                  </span>
                  {current.id === region.id && <Check className="shrink-0 text-emerald" />}
                </CommandItem>
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
