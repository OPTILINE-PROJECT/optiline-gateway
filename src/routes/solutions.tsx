import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import { customisableItems, solutions, teamSizes } from "@/lib/content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Outsourcing Solutions in Madagascar — Optiline Mada" },
      {
        name: "description",
        content:
          "Call center outsourcing, IT and software development and administrative back-office teams in Madagascar — recruited, equipped and managed by Optiline Mada.",
      },
      { property: "og:title", content: "Flexible Outsourcing Solutions — Optiline Mada" },
      {
        property: "og:description",
        content:
          "Three outsourcing families: customer operations, IT development and back-office services, fully managed in Madagascar.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Flexible Outsourcing Solutions"
        intro="Whether you need a customer operations team, software engineers or structured back-office support, Optiline Mada builds and runs the local operation for you."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="space-y-6 py-16 md:py-20">
          {solutions.map((s) => (
            <article key={s.slug} className="rounded-2xl border border-line bg-card p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-tight text-foreground">
                {s.title}
              </h2>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                {s.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line px-3 py-1.5 text-[12.5px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-8 inline-flex rounded-md bg-navy px-5 py-3 text-[14px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Custom solutions"
            title="Your Business. Your Team. Your Requirements."
            intro="Every element of the operation is defined with you before we start."
            className="mb-10"
          />
          <ListGrid items={customisableItems} />
          <Link
            to="/request-information"
            className="mt-8 inline-flex rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
          >
            Design My Solution
          </Link>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Team sizes"
            title="From One Specialist to an Entire Operations Team"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {teamSizes.map((s) => (
              <div key={s.title} className="rounded-xl border border-line bg-navy/5 p-6">
                <p className="font-mono text-[13px] text-blue">{s.range}</p>
                <h3 className="mt-2 text-[18px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
