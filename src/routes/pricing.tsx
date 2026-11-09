import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero, SectionHeading } from "@/components/blocks";
import { solutions } from "@/lib/content";

export const Route = createFileRoute("/pricing")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Pricing — Dedicated Teams in Madagascar from €590 / month — Optiline Mada" },
      {
        name: "description",
        content:
          "Starting prices for dedicated, fully managed positions in Madagascar: teleconsultant from €690 / month, developer from €1,290 / month, administrative assistant from €590 / month.",
      },
      { property: "og:title", content: "Pricing — Optiline Mada" },
      {
        property: "og:description",
        content: "Dedicated managed positions in Madagascar from €590 / month, workspace, equipment and local management included.",
      },
      { property: "og:url", content: "/pricing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const included = [
  "Recruitment and selection of your dedicated collaborators",
  "Professional workspace, computer and equipment",
  "High-speed Internet with backup connectivity",
  "IP telephony for customer operations",
  "Local HR, administration and payroll handling",
  "Day-to-day supervision and operational reporting",
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Starting Prices"
        intro="In brief: a dedicated teleconsultant starts at €690 per month, a dedicated developer at €1,290 per month and a dedicated administrative assistant at €590 per month. Each price covers a fully managed position — workspace, equipment, connectivity and local supervision included. Your final proposal is prepared specifically for your project, based on profiles, team size and working hours."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <SectionHeading
            title="Starting price per dedicated position"
            intro="A dedicated position is a named collaborator working exclusively for your company, managed day to day by Optiline Mada."
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevate"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-blue">{s.title}</p>
                <p className="mt-4 text-[15px] text-muted-foreground">{s.priceProfile}</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-foreground">{s.priceFrom}</p>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted-foreground">{s.short}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex items-center text-[14px] font-semibold text-blue hover:text-navy"
                >
                  See the service in detail →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="What every price includes"
            intro="The monthly price of a dedicated position covers the full managed environment, not only the salary."
            className="mb-10"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-line bg-card p-4 text-[14px] text-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="How your final price is calculated"
            intro="Your proposal depends on four variables: the profiles required, the number of positions, the working hours and the services included. After a first discussion we prepare a detailed, itemised proposal for your project — with no commitment on your side."
          />
        </section>
      </div>

      <CTASection />
    </>
  );
}
