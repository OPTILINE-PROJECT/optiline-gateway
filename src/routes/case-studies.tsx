import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero, SectionHeading } from "@/components/blocks";

export const Route = createFileRoute("/case-studies")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Case Studies — Client Operations in Madagascar — Optiline Mada" },
      {
        name: "description",
        content:
          "Client case studies: sector, mission, volume, dedicated team size, duration and measured results of outsourcing operations managed by Optiline Mada in Madagascar.",
      },
      { property: "og:title", content: "Case Studies — Optiline Mada" },
      {
        property: "og:description",
        content: "Documented client operations in Madagascar: mission, volume, team size and measured results.",
      },
      { property: "og:url", content: "/case-studies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "/case-studies" },
          ],
        }),
      },
    ],
  }),
  component: CaseStudiesPage,
});

/** Template shown until real cases are published with written client consent. */
const caseTemplate = [
  { label: "Sector", value: "[TO BE COMPLETED: client sector]" },
  { label: "Mission", value: "[TO BE COMPLETED: scope of the outsourced activity]" },
  { label: "Volume", value: "[TO BE COMPLETED: e.g. contacts handled per month]" },
  { label: "Dedicated team", value: "[TO BE COMPLETED: number of collaborators]" },
  { label: "Duration", value: "[TO BE COMPLETED: length of the collaboration]" },
  { label: "Measured result", value: "[TO BE COMPLETED: quantified outcome]" },
];

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Client Operations, Documented"
        intro="In brief: we publish case studies only with the written agreement of the clients concerned — never invented, never anonymised beyond recognition. Each case documents the sector, the mission, the volume, the dedicated team size, the duration and a measured result. The first cases are being prepared with our clients."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <SectionHeading
            title="What each case study will show"
            intro="A case study is a factual account of one client operation, with figures the client has approved for publication."
            className="mb-10"
          />
          <div className="rounded-xl border border-dashed border-line bg-card p-7">
            <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {caseTemplate.map((row) => (
                <div key={row.label}>
                  <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-blue">{row.label}</dt>
                  <dd className="mt-1.5 text-[14px] text-muted-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-foreground">
            In the meantime, we are happy to describe reference operations directly during a call, within the
            limits of our confidentiality agreements.{" "}
            <Link to="/industries" className="font-semibold text-blue hover:text-navy">
              Browse the 20 sectors we serve
            </Link>{" "}
            to see where our teams operate.
          </p>
        </section>
      </div>

      <CTASection
        title="Ask for references directly"
        subtitle="Tell us your sector and your project — we will share what we can, under NDA if needed."
      />
    </>
  );
}
