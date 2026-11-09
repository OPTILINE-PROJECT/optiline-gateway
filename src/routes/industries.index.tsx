import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { CTASection, PageHero } from "@/components/blocks";
import { PhotoBanner } from "@/components/PhotoGallery";
import { industries } from "@/lib/industries";

export const Route = createFileRoute("/industries/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Industries We Support — Outsourcing by Sector | Optiline Mada" },
      {
        name: "description",
        content:
          "E-commerce, SaaS, banking, insurance, healthcare, retail, telecom, travel, logistics and more: dedicated outsourced teams in Madagascar for 20 sectors.",
      },
      {
        property: "og:title",
        content: "Industries We Support — Outsourcing Teams in Madagascar",
      },
      {
        property: "og:description",
        content:
          "Explore how companies in 20 sectors outsource customer service, IT and back-office operations to managed teams in Madagascar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries we support",
          itemListElement: industries.map((industry, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: industry.name,
            url: `/industries/${industry.slug}`,
          })),
        }),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return industries;
    return industries.filter((i) =>
      [i.name, i.shortDesc, i.heroTitle, ...i.keywords, ...i.services]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Supporting Businesses Across Industries"
        intro="Our teams adapt to your sector, your processes and your service expectations. Explore how we work in your industry — or tell us about yours, we build the team around it."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="pt-14 md:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="relative flex w-full max-w-md items-center">
              <Search className="pointer-events-none absolute left-4 size-4 text-muted-foreground" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search an industry or a mission…"
                className="w-full rounded-lg border border-line bg-card py-3 pl-11 pr-4 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/60"
              />
            </label>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {results.length} / {industries.length} sectors
            </p>
          </div>

          {results.length === 0 ? (
            <p className="mt-10 rounded-xl border border-line bg-card px-6 py-10 text-center text-[15px] text-muted-foreground">
              No industry matches your search.{" "}
              <Link to="/contact" className="font-semibold text-blue underline-offset-4 hover:underline">
                Tell us about your activity
              </Link>{" "}
              — we build the team around it.
            </p>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((i) => {
                const Icon = i.icon;
                return (
                  <Link
                    key={i.slug}
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevate"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={i.image}
                        alt={i.imageAlt}
                        width={1024}
                        height={576}
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-lg border border-white/25 bg-navy/80 backdrop-blur">
                        <Icon className="size-4 text-navy-foreground" aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-[15px] font-bold tracking-tight text-foreground">{i.name}</h2>
                      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                        {i.shortDesc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue">
                        Explore this sector
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <PhotoBanner k="industryTeam" caption="Teams dedicated to your industry" />
      </div>

      <CTASection
        title="Don't see your industry?"
        subtitle="Tell us about your activity — we build the team around it."
      />
    </>
  );
}
