import type { LanguageCode } from "@/i18n/language";

export type LanguageRegion = { id: string; countryCode: string; lang: LanguageCode; country: string; label: string };

// Country-language pairs from Careline, restricted to the site’s supported languages.
export const languageRegions: LanguageRegion[] = [
  {
    "id": "DZ-fr",
    "countryCode": "DZ",
    "lang": "fr",
    "country": "Algeria",
    "label": "Français"
  },
  {
    "id": "DZ-ar",
    "countryCode": "DZ",
    "lang": "ar",
    "country": "Algeria",
    "label": "العربية"
  },
  {
    "id": "AD-fr",
    "countryCode": "AD",
    "lang": "fr",
    "country": "Andorra",
    "label": "Français"
  },
  {
    "id": "AD-es",
    "countryCode": "AD",
    "lang": "es",
    "country": "Andorra",
    "label": "Español"
  },
  {
    "id": "AO-pt",
    "countryCode": "AO",
    "lang": "pt",
    "country": "Angola",
    "label": "Português"
  },
  {
    "id": "AR-es",
    "countryCode": "AR",
    "lang": "es",
    "country": "Argentina",
    "label": "Español"
  },
  {
    "id": "BH-ar",
    "countryCode": "BH",
    "lang": "ar",
    "country": "Bahrain",
    "label": "العربية"
  },
  {
    "id": "BE-fr",
    "countryCode": "BE",
    "lang": "fr",
    "country": "Belgium",
    "label": "Français"
  },
  {
    "id": "BE-nl",
    "countryCode": "BE",
    "lang": "nl",
    "country": "Belgium",
    "label": "Nederlands"
  },
  {
    "id": "BE-de",
    "countryCode": "BE",
    "lang": "de",
    "country": "Belgium",
    "label": "Deutsch"
  },
  {
    "id": "BZ-es",
    "countryCode": "BZ",
    "lang": "es",
    "country": "Belize",
    "label": "Español"
  },
  {
    "id": "BZ-en",
    "countryCode": "BZ",
    "lang": "en",
    "country": "Belize",
    "label": "English"
  },
  {
    "id": "BJ-fr",
    "countryCode": "BJ",
    "lang": "fr",
    "country": "Benin",
    "label": "Français"
  },
  {
    "id": "BO-es",
    "countryCode": "BO",
    "lang": "es",
    "country": "Bolivia",
    "label": "Español"
  },
  {
    "id": "BR-pt",
    "countryCode": "BR",
    "lang": "pt",
    "country": "Brazil",
    "label": "Português"
  },
  {
    "id": "BF-fr",
    "countryCode": "BF",
    "lang": "fr",
    "country": "Burkina Faso",
    "label": "Français"
  },
  {
    "id": "BI-fr",
    "countryCode": "BI",
    "lang": "fr",
    "country": "Burundi",
    "label": "Français"
  },
  {
    "id": "CM-fr",
    "countryCode": "CM",
    "lang": "fr",
    "country": "Cameroon",
    "label": "Français"
  },
  {
    "id": "CM-en",
    "countryCode": "CM",
    "lang": "en",
    "country": "Cameroon",
    "label": "English"
  },
  {
    "id": "CA-fr",
    "countryCode": "CA",
    "lang": "fr",
    "country": "Canada",
    "label": "Français"
  },
  {
    "id": "CA-en",
    "countryCode": "CA",
    "lang": "en",
    "country": "Canada",
    "label": "English"
  },
  {
    "id": "CV-pt",
    "countryCode": "CV",
    "lang": "pt",
    "country": "Cape Verde",
    "label": "Português"
  },
  {
    "id": "CF-fr",
    "countryCode": "CF",
    "lang": "fr",
    "country": "Central African Republic",
    "label": "Français"
  },
  {
    "id": "TD-fr",
    "countryCode": "TD",
    "lang": "fr",
    "country": "Chad",
    "label": "Français"
  },
  {
    "id": "TD-ar",
    "countryCode": "TD",
    "lang": "ar",
    "country": "Chad",
    "label": "العربية"
  },
  {
    "id": "CL-es",
    "countryCode": "CL",
    "lang": "es",
    "country": "Chile",
    "label": "Español"
  },
  {
    "id": "CO-es",
    "countryCode": "CO",
    "lang": "es",
    "country": "Colombia",
    "label": "Español"
  },
  {
    "id": "KM-fr",
    "countryCode": "KM",
    "lang": "fr",
    "country": "Comoros",
    "label": "Français"
  },
  {
    "id": "KM-ar",
    "countryCode": "KM",
    "lang": "ar",
    "country": "Comoros",
    "label": "العربية"
  },
  {
    "id": "CG-fr",
    "countryCode": "CG",
    "lang": "fr",
    "country": "Congo - Brazzaville",
    "label": "Français"
  },
  {
    "id": "CD-fr",
    "countryCode": "CD",
    "lang": "fr",
    "country": "Congo - Kinshasa",
    "label": "Français"
  },
  {
    "id": "CR-es",
    "countryCode": "CR",
    "lang": "es",
    "country": "Costa Rica",
    "label": "Español"
  },
  {
    "id": "CI-fr",
    "countryCode": "CI",
    "lang": "fr",
    "country": "Côte d’Ivoire",
    "label": "Français"
  },
  {
    "id": "CU-es",
    "countryCode": "CU",
    "lang": "es",
    "country": "Cuba",
    "label": "Español"
  },
  {
    "id": "DJ-fr",
    "countryCode": "DJ",
    "lang": "fr",
    "country": "Djibouti",
    "label": "Français"
  },
  {
    "id": "DJ-ar",
    "countryCode": "DJ",
    "lang": "ar",
    "country": "Djibouti",
    "label": "العربية"
  },
  {
    "id": "DO-es",
    "countryCode": "DO",
    "lang": "es",
    "country": "Dominican Republic",
    "label": "Español"
  },
  {
    "id": "EC-es",
    "countryCode": "EC",
    "lang": "es",
    "country": "Ecuador",
    "label": "Español"
  },
  {
    "id": "EG-ar",
    "countryCode": "EG",
    "lang": "ar",
    "country": "Egypt",
    "label": "العربية"
  },
  {
    "id": "SV-es",
    "countryCode": "SV",
    "lang": "es",
    "country": "El Salvador",
    "label": "Español"
  },
  {
    "id": "GQ-fr",
    "countryCode": "GQ",
    "lang": "fr",
    "country": "Equatorial Guinea",
    "label": "Français"
  },
  {
    "id": "GQ-es",
    "countryCode": "GQ",
    "lang": "es",
    "country": "Equatorial Guinea",
    "label": "Español"
  },
  {
    "id": "GQ-pt",
    "countryCode": "GQ",
    "lang": "pt",
    "country": "Equatorial Guinea",
    "label": "Português"
  },
  {
    "id": "ER-ar",
    "countryCode": "ER",
    "lang": "ar",
    "country": "Eritrea",
    "label": "العربية"
  },
  {
    "id": "FR-fr",
    "countryCode": "FR",
    "lang": "fr",
    "country": "France",
    "label": "Français"
  },
  {
    "id": "FR-pt",
    "countryCode": "FR",
    "lang": "pt",
    "country": "France",
    "label": "Português"
  },
  {
    "id": "GF-fr",
    "countryCode": "GF",
    "lang": "fr",
    "country": "French Guiana",
    "label": "Français"
  },
  {
    "id": "PF-fr",
    "countryCode": "PF",
    "lang": "fr",
    "country": "French Polynesia",
    "label": "Français"
  },
  {
    "id": "GA-fr",
    "countryCode": "GA",
    "lang": "fr",
    "country": "Gabon",
    "label": "Français"
  },
  {
    "id": "DE-de",
    "countryCode": "DE",
    "lang": "de",
    "country": "Germany",
    "label": "Deutsch"
  },
  {
    "id": "GI-es",
    "countryCode": "GI",
    "lang": "es",
    "country": "Gibraltar",
    "label": "Español"
  },
  {
    "id": "GI-en",
    "countryCode": "GI",
    "lang": "en",
    "country": "Gibraltar",
    "label": "English"
  },
  {
    "id": "GP-fr",
    "countryCode": "GP",
    "lang": "fr",
    "country": "Guadeloupe",
    "label": "Français"
  },
  {
    "id": "GT-es",
    "countryCode": "GT",
    "lang": "es",
    "country": "Guatemala",
    "label": "Español"
  },
  {
    "id": "GN-fr",
    "countryCode": "GN",
    "lang": "fr",
    "country": "Guinea",
    "label": "Français"
  },
  {
    "id": "GW-pt",
    "countryCode": "GW",
    "lang": "pt",
    "country": "Guinea-Bissau",
    "label": "Português"
  },
  {
    "id": "HT-fr",
    "countryCode": "HT",
    "lang": "fr",
    "country": "Haiti",
    "label": "Français"
  },
  {
    "id": "HN-es",
    "countryCode": "HN",
    "lang": "es",
    "country": "Honduras",
    "label": "Español"
  },
  {
    "id": "IN-pt",
    "countryCode": "IN",
    "lang": "pt",
    "country": "India",
    "label": "Português"
  },
  {
    "id": "IR-ar",
    "countryCode": "IR",
    "lang": "ar",
    "country": "Iran",
    "label": "العربية"
  },
  {
    "id": "IQ-ar",
    "countryCode": "IQ",
    "lang": "ar",
    "country": "Iraq",
    "label": "العربية"
  },
  {
    "id": "IT-it",
    "countryCode": "IT",
    "lang": "it",
    "country": "Italy",
    "label": "Italiano"
  },
  {
    "id": "IL-he",
    "countryCode": "IL",
    "lang": "he",
    "country": "Israel",
    "label": "עברית"
  },
  {
    "id": "IT-it-placeholder",
    "countryCode": "IT",
    "lang": "it",
    "country": "Italy",
    "label": "Italiano"
  },
  {
    "id": "IT-23-fr",
    "countryCode": "IT",
    "lang": "fr",
    "country": "Italy — Vallée d’Aoste · Valle d’Aosta",
    "label": "Français"
  },
  {
    "id": "IT-23-it",
    "countryCode": "IT",
    "lang": "it",
    "country": "Italy — Vallée d’Aoste · Valle d’Aosta",
    "label": "Italiano"
  },
  {
    "id": "JO-ar",
    "countryCode": "JO",
    "lang": "ar",
    "country": "Jordan",
    "label": "العربية"
  },
  {
    "id": "KW-ar",
    "countryCode": "KW",
    "lang": "ar",
    "country": "Kuwait",
    "label": "العربية"
  },
  {
    "id": "LB-fr",
    "countryCode": "LB",
    "lang": "fr",
    "country": "Lebanon",
    "label": "Français"
  },
  {
    "id": "LB-ar",
    "countryCode": "LB",
    "lang": "ar",
    "country": "Lebanon",
    "label": "العربية"
  },
  {
    "id": "LY-ar",
    "countryCode": "LY",
    "lang": "ar",
    "country": "Libya",
    "label": "العربية"
  },
  {
    "id": "LU-fr",
    "countryCode": "LU",
    "lang": "fr",
    "country": "Luxembourg",
    "label": "Français"
  },
  {
    "id": "LU-de",
    "countryCode": "LU",
    "lang": "de",
    "country": "Luxembourg",
    "label": "Deutsch"
  },
  {
    "id": "LU-pt",
    "countryCode": "LU",
    "lang": "pt",
    "country": "Luxembourg",
    "label": "Português"
  },
  {
    "id": "MO-pt",
    "countryCode": "MO",
    "lang": "pt",
    "country": "Macao",
    "label": "Português"
  },
  {
    "id": "MG-fr",
    "countryCode": "MG",
    "lang": "fr",
    "country": "Madagascar",
    "label": "Français"
  },
  {
    "id": "ML-fr",
    "countryCode": "ML",
    "lang": "fr",
    "country": "Mali",
    "label": "Français"
  },
  {
    "id": "MQ-fr",
    "countryCode": "MQ",
    "lang": "fr",
    "country": "Martinique",
    "label": "Français"
  },
  {
    "id": "MR-fr",
    "countryCode": "MR",
    "lang": "fr",
    "country": "Mauritania",
    "label": "Français"
  },
  {
    "id": "MR-ar",
    "countryCode": "MR",
    "lang": "ar",
    "country": "Mauritania",
    "label": "العربية"
  },
  {
    "id": "YT-fr",
    "countryCode": "YT",
    "lang": "fr",
    "country": "Mayotte",
    "label": "Français"
  },
  {
    "id": "MX-es",
    "countryCode": "MX",
    "lang": "es",
    "country": "Mexico",
    "label": "Español"
  },
  {
    "id": "MC-fr",
    "countryCode": "MC",
    "lang": "fr",
    "country": "Monaco",
    "label": "Français"
  },
  {
    "id": "MA-fr",
    "countryCode": "MA",
    "lang": "fr",
    "country": "Morocco",
    "label": "Français"
  },
  {
    "id": "MA-ar",
    "countryCode": "MA",
    "lang": "ar",
    "country": "Morocco",
    "label": "العربية"
  },
  {
    "id": "MZ-pt",
    "countryCode": "MZ",
    "lang": "pt",
    "country": "Mozambique",
    "label": "Português"
  },
  {
    "id": "NL-nl",
    "countryCode": "NL",
    "lang": "nl",
    "country": "Netherlands",
    "label": "Nederlands"
  },
  {
    "id": "NC-fr",
    "countryCode": "NC",
    "lang": "fr",
    "country": "New Caledonia",
    "label": "Français"
  },
  {
    "id": "NI-es",
    "countryCode": "NI",
    "lang": "es",
    "country": "Nicaragua",
    "label": "Español"
  },
  {
    "id": "NE-fr",
    "countryCode": "NE",
    "lang": "fr",
    "country": "Niger",
    "label": "Français"
  },
  {
    "id": "OM-ar",
    "countryCode": "OM",
    "lang": "ar",
    "country": "Oman",
    "label": "العربية"
  },
  {
    "id": "PS-ar",
    "countryCode": "PS",
    "lang": "ar",
    "country": "Palestine",
    "label": "العربية"
  },
  {
    "id": "PA-es",
    "countryCode": "PA",
    "lang": "es",
    "country": "Panama",
    "label": "Español"
  },
  {
    "id": "PY-es",
    "countryCode": "PY",
    "lang": "es",
    "country": "Paraguay",
    "label": "Español"
  },
  {
    "id": "PY-pt",
    "countryCode": "PY",
    "lang": "pt",
    "country": "Paraguay",
    "label": "Português"
  },
  {
    "id": "PE-es",
    "countryCode": "PE",
    "lang": "es",
    "country": "Peru",
    "label": "Español"
  },
  {
    "id": "PH-es",
    "countryCode": "PH",
    "lang": "es",
    "country": "Philippines",
    "label": "Español"
  },
  {
    "id": "PH-en",
    "countryCode": "PH",
    "lang": "en",
    "country": "Philippines",
    "label": "English"
  },
  {
    "id": "PT-pt",
    "countryCode": "PT",
    "lang": "pt",
    "country": "Portugal",
    "label": "Português"
  },
  {
    "id": "PR-es",
    "countryCode": "PR",
    "lang": "es",
    "country": "Puerto Rico",
    "label": "Español"
  },
  {
    "id": "QA-ar",
    "countryCode": "QA",
    "lang": "ar",
    "country": "Qatar",
    "label": "العربية"
  },
  {
    "id": "RE-fr",
    "countryCode": "RE",
    "lang": "fr",
    "country": "Réunion",
    "label": "Français"
  },
  {
    "id": "RW-fr",
    "countryCode": "RW",
    "lang": "fr",
    "country": "Rwanda",
    "label": "Français"
  },
  {
    "id": "RW-en",
    "countryCode": "RW",
    "lang": "en",
    "country": "Rwanda",
    "label": "English"
  },
  {
    "id": "ST-pt",
    "countryCode": "ST",
    "lang": "pt",
    "country": "São Tomé & Príncipe",
    "label": "Português"
  },
  {
    "id": "SA-ar",
    "countryCode": "SA",
    "lang": "ar",
    "country": "Saudi Arabia",
    "label": "العربية"
  },
  {
    "id": "SN-fr",
    "countryCode": "SN",
    "lang": "fr",
    "country": "Senegal",
    "label": "Français"
  },
  {
    "id": "SC-fr",
    "countryCode": "SC",
    "lang": "fr",
    "country": "Seychelles",
    "label": "Français"
  },
  {
    "id": "SC-en",
    "countryCode": "SC",
    "lang": "en",
    "country": "Seychelles",
    "label": "English"
  },
  {
    "id": "SO-ar",
    "countryCode": "SO",
    "lang": "ar",
    "country": "Somalia",
    "label": "العربية"
  },
  {
    "id": "ZA-pt",
    "countryCode": "ZA",
    "lang": "pt",
    "country": "South Africa",
    "label": "Português"
  },
  {
    "id": "ZA-en",
    "countryCode": "ZA",
    "lang": "en",
    "country": "South Africa",
    "label": "English"
  },
  {
    "id": "ES-es",
    "countryCode": "ES",
    "lang": "es",
    "country": "Spain",
    "label": "Español"
  },
  {
    "id": "BL-fr",
    "countryCode": "BL",
    "lang": "fr",
    "country": "St. Barthélemy",
    "label": "Français"
  },
  {
    "id": "MF-fr",
    "countryCode": "MF",
    "lang": "fr",
    "country": "St. Martin",
    "label": "Français"
  },
  {
    "id": "PM-fr",
    "countryCode": "PM",
    "lang": "fr",
    "country": "St. Pierre & Miquelon",
    "label": "Français"
  },
  {
    "id": "SD-ar",
    "countryCode": "SD",
    "lang": "ar",
    "country": "Sudan",
    "label": "العربية"
  },
  {
    "id": "CH-fr",
    "countryCode": "CH",
    "lang": "fr",
    "country": "Switzerland",
    "label": "Français"
  },
  {
    "id": "CH-de",
    "countryCode": "CH",
    "lang": "de",
    "country": "Switzerland",
    "label": "Deutsch"
  },
  {
    "id": "CH-it",
    "countryCode": "CH",
    "lang": "it",
    "country": "Switzerland",
    "label": "Italiano"
  },
  {
    "id": "CH-pt",
    "countryCode": "CH",
    "lang": "pt",
    "country": "Switzerland",
    "label": "Português"
  },
  {
    "id": "SY-ar",
    "countryCode": "SY",
    "lang": "ar",
    "country": "Syria",
    "label": "العربية"
  },
  {
    "id": "TL-pt",
    "countryCode": "TL",
    "lang": "pt",
    "country": "Timor-Leste",
    "label": "Português"
  },
  {
    "id": "TG-fr",
    "countryCode": "TG",
    "lang": "fr",
    "country": "Togo",
    "label": "Français"
  },
  {
    "id": "TN-fr",
    "countryCode": "TN",
    "lang": "fr",
    "country": "Tunisia",
    "label": "Français"
  },
  {
    "id": "TN-ar",
    "countryCode": "TN",
    "lang": "ar",
    "country": "Tunisia",
    "label": "العربية"
  },
  {
    "id": "TR-ar",
    "countryCode": "TR",
    "lang": "ar",
    "country": "Türkiye",
    "label": "العربية"
  },
  {
    "id": "AE-ar",
    "countryCode": "AE",
    "lang": "ar",
    "country": "United Arab Emirates",
    "label": "العربية"
  },
  {
    "id": "GB-en",
    "countryCode": "GB",
    "lang": "en",
    "country": "United Kingdom",
    "label": "English"
  },
  {
    "id": "US-es",
    "countryCode": "US",
    "lang": "es",
    "country": "United States",
    "label": "Español"
  },
  {
    "id": "US-en",
    "countryCode": "US",
    "lang": "en",
    "country": "United States",
    "label": "English"
  },
  {
    "id": "US-pt",
    "countryCode": "US",
    "lang": "pt",
    "country": "United States",
    "label": "Português"
  },
  {
    "id": "US-LA-fr",
    "countryCode": "US",
    "lang": "fr",
    "country": "United States — Louisiane · Louisiana",
    "label": "Français"
  },
  {
    "id": "US-LA-en",
    "countryCode": "US",
    "lang": "en",
    "country": "United States — Louisiane · Louisiana",
    "label": "English"
  },
  {
    "id": "UY-es",
    "countryCode": "UY",
    "lang": "es",
    "country": "Uruguay",
    "label": "Español"
  },
  {
    "id": "UY-pt",
    "countryCode": "UY",
    "lang": "pt",
    "country": "Uruguay",
    "label": "Português"
  },
  {
    "id": "VU-fr",
    "countryCode": "VU",
    "lang": "fr",
    "country": "Vanuatu",
    "label": "Français"
  },
  {
    "id": "VU-en",
    "countryCode": "VU",
    "lang": "en",
    "country": "Vanuatu",
    "label": "English"
  },
  {
    "id": "VE-es",
    "countryCode": "VE",
    "lang": "es",
    "country": "Venezuela",
    "label": "Español"
  },
  {
    "id": "VE-pt",
    "countryCode": "VE",
    "lang": "pt",
    "country": "Venezuela",
    "label": "Português"
  },
  {
    "id": "WF-fr",
    "countryCode": "WF",
    "lang": "fr",
    "country": "Wallis & Futuna",
    "label": "Français"
  },
  {
    "id": "EH-es",
    "countryCode": "EH",
    "lang": "es",
    "country": "Western Sahara",
    "label": "Español"
  },
  {
    "id": "YE-ar",
    "countryCode": "YE",
    "lang": "ar",
    "country": "Yemen",
    "label": "العربية"
  }
];

export const defaultRegionByLanguage: Record<LanguageCode, string> = { en: "GB-en", fr: "FR-fr", es: "ES-es", de: "DE-de", it: "IT-it", pt: "PT-pt", nl: "NL-nl", ar: "SA-ar", he: "IL-he" };

export function regionCountryName(region: LanguageRegion, lang: LanguageCode) {
  const base = new Intl.DisplayNames([lang], { type: "region" }).of(region.countryCode) ?? region.country;
  const suffix = region.country.includes(" — ") ? region.country.slice(region.country.indexOf(" — ")) : "";
  return base + suffix;
}
