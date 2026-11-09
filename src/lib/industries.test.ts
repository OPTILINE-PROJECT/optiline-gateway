import { describe, expect, it } from "vitest";
import {
  getIndustry,
  industries,
  industryProcess,
  industrySolutions,
  industryWhyMadagascar,
} from "./industries";

const EXPECTED_SLUGS = [
  "ecommerce",
  "technology-saas",
  "finance-banking",
  "insurance",
  "healthcare",
  "retail-distribution",
  "telecommunications",
  "travel-hospitality",
  "real-estate",
  "professional-services",
  "logistics",
  "startups",
  "automotive",
  "education",
  "legal",
  "energy",
  "construction",
  "media-marketing",
  "food-beverage",
  "hr-recruitment",
];

describe("industries catalogue", () => {
  it("publishes exactly the 20 confirmed sectors", () => {
    expect(industries.map((i) => i.slug)).toEqual(EXPECTED_SLUGS);
  });

  it("keeps slugs unique and resolvable", () => {
    expect(new Set(industries.map((i) => i.slug)).size).toBe(20);
    for (const slug of EXPECTED_SLUGS) {
      expect(getIndustry(slug)?.slug).toBe(slug);
    }
    expect(getIndustry("does-not-exist")).toBeUndefined();
  });

  it("gives every sector complete page content", () => {
    for (const i of industries) {
      expect(i.name, i.slug).toBeTruthy();
      expect(i.heroTitle, i.slug).toBeTruthy();
      expect(i.heroIntro, i.slug).toBeTruthy();
      expect(i.overview.length, i.slug).toBeGreaterThanOrEqual(2);
      expect(i.services.length, i.slug).toBeGreaterThanOrEqual(6);
      expect(i.challenges.length, i.slug).toBe(3);
      expect(i.faq.length, i.slug).toBe(5);
      for (const c of i.challenges) {
        expect(c.problem.trim().length, i.slug).toBeGreaterThan(10);
        expect(c.solution.trim().length, i.slug).toBeGreaterThan(10);
      }
    }
  });

  it("gives every sector its own SEO title and description", () => {
    const titles = new Set(industries.map((i) => i.seoTitle));
    const descriptions = new Set(industries.map((i) => i.seoDescription));
    expect(titles.size).toBe(20);
    expect(descriptions.size).toBe(20);
    for (const i of industries) {
      expect(i.seoTitle.length, i.slug).toBeLessThanOrEqual(70);
      expect(i.seoDescription.length, i.slug).toBeGreaterThanOrEqual(50);
    }
  });

  it("never states invented figures, clients or certifications", () => {
    const banned = /ISO\s?\d{3,5}|SOC\s?2|GDPR certified|certified|award-winning|our client[s]?\s|trusted by\b/i;
    for (const i of industries) {
      const haystack = [
        i.shortDesc,
        i.heroIntro,
        ...i.overview,
        ...i.services,
        ...i.challenges.flatMap((c) => [c.problem, c.solution]),
        ...i.faq.flatMap((f) => [f.q, f.a]),
        i.seoDescription,
      ].join(" ");
      expect(haystack, i.slug).not.toMatch(banned);
    }
  });

  it("keeps shared blocks complete", () => {
    expect(industryWhyMadagascar.length).toBe(6);
    expect(industrySolutions.length).toBe(6);
    expect(industryProcess.length).toBe(6);
  });
});
