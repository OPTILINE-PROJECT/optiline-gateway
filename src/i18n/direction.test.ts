import { describe, expect, it } from "vitest";
import { languageDirection } from "./direction";
import { languages } from "./translations";
import { defaultRegionByLanguage, languageRegions } from "@/lib/language-regions";

describe("Hebrew language support", () => {
  it("supports Hebrew with right-to-left reading", () => {
    expect(languages.some((language) => language.code === "he")).toBe(true);
    expect(languageDirection("he")).toBe("rtl");
  });
  it("selects Israel as the Hebrew country", () => {
    expect(defaultRegionByLanguage.he).toBe("IL-he");
    expect(languageRegions.find((region) => region.id === "IL-he"))
      .toMatchObject({ countryCode: "IL", lang: "he", label: "עברית" });
  });
  it("retains Arabic and English direction", () => {
    expect(languageDirection("ar")).toBe("rtl");
    expect(languageDirection("en")).toBe("ltr");
  });
});