import { describe, expect, it } from "vitest";
import { offices, site } from "./site";

describe("confirmed office addresses", () => {
  const expected = [
    ["antsirabe", "Lot 0912 C 185 Manodidina ny Gara, Antsirabe I, Madagascar"],
    ["silicon-valley", "3790 El Camino Real, Palo Alto, CA 94306, USA"],
    ["miami", "4300 Biscayne Blvd, Suite 203, Miami, FL 33137, USA"],
    ["dubai", "Gate Avenue, Dubai, UAE"],
    ["singapore", "Marina Bay Financial Centre Tower 2, 10 Marina Boulevard, Singapore 018983"],
    ["london", "63–66 Hatton Garden, London EC1N 8LE, United Kingdom"],
    ["hong-kong", "7/F, Euro Trade Centre, 13–14 Connaught Road Central, Central, Hong Kong"],
  ];
  for (const [id, address] of expected) {
    it(`preserves the confirmed ${id} address`, () => {
      expect(offices.find((office) => office.id === id)?.address).toBe(address);
    });
  }
  it("keeps the existing Tomboarivo contact address", () => {
    expect(site.contact.address).toBe("Tomboarivo, 09 B 193, MAHAFALY, TOMBOARIVO , Antsirabe, Madagascar");
  });
});