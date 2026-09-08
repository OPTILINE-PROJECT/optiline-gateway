import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/blocks";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Support — Optiline Mada Outsourcing Madagascar" },
      {
        name: "description",
        content:
          "E-commerce, technology, finance, insurance, healthcare, retail, telecom, travel, logistics and more — outsourced teams in Madagascar for every sector.",
      },
      { property: "og:title", content: "Supporting Businesses Across Industries — Optiline Mada" },
      {
        property: "og:description",
        content: "Outsourced customer, IT and back-office teams across a wide range of industries.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Supporting Businesses Across Industries"
        intro="Our teams adapt to your sector, your processes and your service expectations. Additional industries can be added at any time."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((i) => (
              <div
                key={i.name}
                className="rounded-lg border border-line bg-card p-5 transition-colors hover:border-accent/40 hover:bg-paper"
              >
                <span className="block text-[15px] font-semibold tracking-tight text-foreground">
                  {i.name}
                </span>
                <span className="mt-1 block text-[12.5px] text-muted-foreground">{i.note}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection title="Don't see your industry?" subtitle="Tell us about your activity — we build the team around it." />
    </>
  );
}
