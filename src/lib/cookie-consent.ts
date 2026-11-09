export const COOKIE_KEY = "optiline-cookie-consent";
export const COOKIE_EVENT = "optiline-cookie-change";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export type CookieChoices = { analytics: boolean; marketing: boolean };
export type CookieConsent = CookieChoices & { version: number; savedAt: number };
export const noOptionalCookies: CookieChoices = { analytics: false, marketing: false };

export function parseCookieConsent(raw: string | null, now = Date.now()): CookieConsent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (!value || value.version !== CONSENT_VERSION || typeof value.savedAt !== "number" ||
      value.savedAt > now || now - value.savedAt >= CONSENT_MAX_AGE ||
      typeof value.analytics !== "boolean" || typeof value.marketing !== "boolean") return null;
    return value;
  } catch { return null; }
}

export function readCookieConsent(): CookieConsent | null {
  try { return parseCookieConsent(window.localStorage.getItem(COOKIE_KEY)); }
  catch { return null; }
}

export function saveCookieConsent(choices: CookieChoices): CookieConsent {
  const consent = { ...choices, version: CONSENT_VERSION, savedAt: Date.now() };
  try { window.localStorage.setItem(COOKIE_KEY, JSON.stringify(consent)); } catch { /* Keep the current choice even when storage is blocked. */ }
  window.dispatchEvent(new CustomEvent(COOKIE_EVENT, { detail: consent }));
  return consent;
}

/** Optional integrations must check their own purpose before loading or reading storage. */
export function allowsOptionalCookies(consent: CookieConsent | null, purpose: keyof CookieChoices, now = Date.now()) {
  return Boolean(consent && parseCookieConsent(JSON.stringify(consent), now)?.[purpose]);
}