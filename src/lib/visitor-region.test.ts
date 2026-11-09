import { describe, expect, it } from "vitest";
import { resolveVisitorRegion, savedVisitorRegion } from "./visitor-region";

describe("visitor country-language defaults", () => {
  it("defaults French visitors to France and French", () => {
    expect(resolveVisitorRegion("FR", ["en-US"])?.id).toBe("FR-fr");
  });
  it("defaults Israeli visitors to Israel and Hebrew", () => {
    expect(resolveVisitorRegion("IL", ["en-US"])?.id).toBe("IL-he");
  });
  it("uses a supported browser language when country detection is unavailable", () => {
    expect(resolveVisitorRegion(null, ["fr-CA"])?.id).toBe("CA-fr");
  });
  it("preserves the visitor's explicit country-language choice", () => {
    expect(savedVisitorRegion("MG-fr", "fr")?.id).toBe("MG-fr");
  });
});