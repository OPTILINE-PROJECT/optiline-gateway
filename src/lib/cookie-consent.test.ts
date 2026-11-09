import { describe, expect, it } from "vitest";
import { allowsOptionalCookies, CONSENT_MAX_AGE, noOptionalCookies, parseCookieConsent } from "./cookie-consent";

const now = 1_800_000_000_000;
const consent = (analytics: boolean, marketing: boolean, savedAt = now) => ({ analytics, marketing, savedAt, version: 1 });
describe("cookie consent rules", () => {
  it("blocks both optional purposes before a first-visit choice", () => {
    expect(allowsOptionalCookies(parseCookieConsent(null, now), "analytics", now)).toBe(false);
    expect(allowsOptionalCookies(parseCookieConsent(null, now), "marketing", now)).toBe(false);
  });
  it("reject all disables both optional purposes", () => {
    expect(noOptionalCookies).toEqual({ analytics: false, marketing: false });
    expect(allowsOptionalCookies(consent(false, false), "analytics", now)).toBe(false);
    expect(allowsOptionalCookies(consent(false, false), "marketing", now)).toBe(false);
  });
  it("only grants the selected purpose", () => {
    expect(allowsOptionalCookies(consent(true, false), "analytics", now)).toBe(true);
    expect(allowsOptionalCookies(consent(true, false), "marketing", now)).toBe(false);
  });
  it("supports withdrawal of previously granted consent", () => {
    expect(allowsOptionalCookies(consent(true, true), "marketing", now)).toBe(true);
    expect(allowsOptionalCookies(consent(false, false), "marketing", now)).toBe(false);
  });
  it("renews choices after 180 days", () => {
    expect(CONSENT_MAX_AGE).toBe(180 * 24 * 60 * 60 * 1000);
    expect(parseCookieConsent(JSON.stringify(consent(true, true, now - CONSENT_MAX_AGE)), now)).toBeNull();
    expect(parseCookieConsent(JSON.stringify(consent(true, true, now - CONSENT_MAX_AGE + 1)), now)?.analytics).toBe(true);
  });
  it("does not treat legacy, malformed, future or wrong-version values as consent", () => {
    for (const raw of ["accepted", "declined", "{}", JSON.stringify({ ...consent(true, true), version: 2 }), JSON.stringify(consent(true, true, now + 1))]) expect(parseCookieConsent(raw, now)).toBeNull();
  });
});