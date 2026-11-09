import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";

/** Return only coarse country metadata, never the visitor's IP or location. */
export const getVisitorCountry = createServerFn({ method: "GET" }).handler(() => {
  setResponseHeader("Cache-Control", "private, no-store");
  const request = getRequest();
  const cf = "cf" in request ? request.cf : undefined;
  const metadataCountry = cf && typeof cf === "object" && "country" in cf ? cf.country : null;
  const country = typeof metadataCountry === "string" ? metadataCountry : getRequestHeader("cf-ipcountry");
  return { country: country && /^[A-Z]{2}$/.test(country) && country !== "XX" ? country : null };
});