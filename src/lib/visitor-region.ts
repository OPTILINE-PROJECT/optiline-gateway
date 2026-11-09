import { defaultRegionByLanguage, languageRegions } from "./language-regions";
import { languages, type LanguageCode } from "@/i18n/translations";

export function resolveVisitorRegion(country: string | null, locales: readonly string[]) {
  const preferred = locales.map((locale) => (locale.split(/[-_]/)[0] ?? "").toLowerCase());
  const candidates = languageRegions.filter((region) => region.countryCode === country?.toUpperCase());
  const regional = candidates.find((region) => preferred.includes(region.lang)) ?? candidates[0];
  if (regional) return regional;
  for (const locale of locales) {
    const [code, regionCode] = locale.split(/[-_]/);
    const supported = languages.find((language) => language.code === code?.toLowerCase());
    if (!supported) continue;
    const exact = languageRegions.find((region) => region.countryCode === regionCode?.toUpperCase() && region.lang === supported.code);
    return exact ?? languageRegions.find((region) => region.id === defaultRegionByLanguage[supported.code]);
  }
  return languageRegions.find((region) => region.id === defaultRegionByLanguage.en);
}

export function savedVisitorRegion(id: string | null, lang: string | null) {
  return languageRegions.find((region) => region.id === id && (!lang || region.lang === lang))
    ?? languageRegions.find((region) => region.id === defaultRegionByLanguage[lang as LanguageCode]);
}