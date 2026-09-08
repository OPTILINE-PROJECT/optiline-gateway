import { createFileRoute } from "@tanstack/react-router";
import worldNetworkMap from "@/assets/world-network-map.jpg";
import { CTASection, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import { continuityPoints, internationalStandards, securityPoints, whyMadagascar } from "@/lib/content";

export const Route = createFileRoute("/why-madagascar")({
  head: () => ({
    meta: [
      { title: "Why Madagascar for Outsourcing — Optiline Mada" },
      {
        name: "description",
        content:
          "Skilled multilingual workforce, competitive operating costs and European time-zone compatibility: why Madagascar is a professional outsourcing destination.",
      },
      { property: "og:title", content: "Why Madagascar? — Optiline Mada" },
      {
        property: "og:description",
        content: "A professional, competitive outsourcing destination for international businesses.",
      },
      { property: "og:url", content: "/why-madagascar" },
    ],
    links: [{ rel: "canonical", href: "/why-madagascar" }],
  }),
  component: WhyMadagascarPage,
});

function WhyMadagascarPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Madagascar"
        title="Local Talent. International Standards."
        intro="Madagascar combines a skilled, multilingual workforce with competitive operating costs and a convenient time zone for European and international markets."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <SectionHeading title="Why companies look to Madagascar" className="mb-8" />
            <ul className="space-y-3">
              {whyMadagascar.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] font-semibold">
              <span className="rounded-md border border-line px-3.5 py-2 text-foreground">Europe</span>
              <span className="relative h-px w-8 bg-line">
                <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent animate-brandglow" />
              </span>
              <span className="rounded-md border border-accent/40 bg-accent/8 px-3.5 py-2 text-foreground">
                Madagascar
              </span>
              <span className="relative h-px w-8 bg-line">
                <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-blue" />
              </span>
              <span className="rounded-md border border-line px-3.5 py-2 text-foreground">
                International Markets
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line bg-navy shadow-elevate">
              <img
                src={worldNetworkMap}
                loading="lazy"
                width={1536}
                height={1024}
                alt="World map showing Madagascar connected to international business markets"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="grid grid-cols-3 border-t border-navy-foreground/15 bg-navy px-4 py-4 text-center text-navy-foreground">
                <div className="border-r border-navy-foreground/15 px-2">
                  <span className="mx-auto mb-2 block size-2 rounded-full bg-accent animate-brandglow" />
                  <p className="text-[11px] font-semibold">Madagascar</p>
                </div>
                <div className="border-r border-navy-foreground/15 px-2">
                  <span className="mx-auto mb-2 block size-2 rounded-full bg-blue" />
                  <p className="text-[11px] font-semibold">Europe</p>
                </div>
                <div className="px-2">
                  <span className="mx-auto mb-2 block size-2 rounded-full bg-navy-foreground/70" />
                  <p className="text-[11px] font-semibold">Global markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="International experience"
            title="Working to international business standards"
            className="mb-10"
          />
          <ListGrid items={internationalStandards} />
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Security"
            title="Security. Confidentiality. Professional Standards."
            intro="A secure environment and clear procedures protect your operations and your data."
            className="mb-10"
          />
          <ListGrid items={securityPoints} />
          <div className="mt-6 rounded-xl border border-dashed border-line bg-paper/60 p-6">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              [Reserved space — ISO certifications, GDPR-related processes, security certifications
              and business continuity certifications will be published here once officially
              obtained. No certification is claimed at this stage.]
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Continuity"
            title="Designed for Business Continuity"
            className="mb-10"
          />
          <ListGrid items={continuityPoints} />
        </section>
      </div>

      <CTASection />
    </>
  );
}
