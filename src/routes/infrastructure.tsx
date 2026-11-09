import { createFileRoute } from "@tanstack/react-router";
import { CTASection, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import { infrastructure } from "@/lib/content";
import { infrastructureStats } from "@/lib/site";

export const Route = createFileRoute("/infrastructure")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Infrastructure — Offices, Connectivity and Equipment — Optiline Mada" },
      {
        name: "description",
        content:
          "The infrastructure behind your team in Madagascar: up to 10 Gbps dual-fiber Internet, 3,000 scalable workstations, 24/7 operations coverage and professional IP telephony.",
      },
      { property: "og:title", content: "Infrastructure — Optiline Mada" },
      {
        property: "og:description",
        content: "Up to 10 Gbps connectivity, 3,000 scalable workstations and 24/7 operations coverage in Madagascar.",
      },
      { property: "og:url", content: "/infrastructure" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Infrastructure", item: "/infrastructure" },
          ],
        }),
      },
    ],
  }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Built for Continuous Operations"
        intro="In brief: your team works from professional offices in Antsirabe with up to 10 Gbps dual-fiber Internet, backup connectivity and power backup. The environment scales to 3,000 workstations and supports 24/7 operations across two shifts. Here are the facts."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructureStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-card p-6 text-center">
                <p className="text-3xl font-extrabold tracking-tight text-foreground">{s.value}</p>
                <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="What your team uses every day"
            intro="Every dedicated position comes with the complete working environment listed here — no hidden extras."
            className="mb-10"
          />
          <ListGrid items={infrastructure} />
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Connectivity and continuity"
            intro="Dual-fiber Internet means two independent physical lines reach the site, so a cut on one line does not stop your operation."
            className="mb-8"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground">
            <p>
              Internet connectivity reaches up to 10 Gbps over dual fiber, with a backup connection ready to
              take over. Power backup keeps workstations, network and telephony running through outages.
            </p>
            <p className="text-[14px] text-muted-foreground">
              [TO BE COMPLETED: power backup autonomy, ISP names, uptime figures once officially measured]
            </p>
          </div>
        </section>
      </div>

      <CTASection
        title="See the infrastructure for yourself"
        subtitle="Request an on-site visit in Antsirabe — we will show you the offices, the equipment and the teams at work."
      />
    </>
  );
}
