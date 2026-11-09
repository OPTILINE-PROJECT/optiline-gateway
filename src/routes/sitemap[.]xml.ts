import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";
import { industries } from "@/lib/industries";
import { insights } from "@/lib/content";
import { solutions } from "@/lib/content";

const BASE_URL = "https://madagascar-talent-bridge.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        if (!BASE_URL) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const industryRouteId = "/industries/$slug";
        if (isSitemapRouteIncluded(router.routesById[industryRouteId])) {
          for (const industry of industries) {
            const location = router.buildLocation({
              to: "/industries/$slug",
              params: { slug: industry.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, industryRouteId);
            if (path) entries.push({ path });
          }
        }

        const serviceRouteId = "/services/$slug";
        if (isSitemapRouteIncluded(router.routesById[serviceRouteId])) {
          for (const solution of solutions) {
            const location = router.buildLocation({
              to: "/services/$slug",
              params: { slug: solution.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, serviceRouteId);
            if (path) entries.push({ path });
          }
        }

        const insightRouteId = "/insights/$slug";
        if (isSitemapRouteIncluded(router.routesById[insightRouteId])) {
          for (const post of insights) {
            const location = router.buildLocation({
              to: "/insights/$slug",
              params: { slug: post.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, insightRouteId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
