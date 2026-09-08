import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/blocks";
import { insights } from "@/lib/content";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights on Outsourcing in Madagascar — Optiline Mada" },
      {
        name: "description",
        content:
          "Articles on BPO, IT outsourcing, recruitment, customer service and business expansion in Madagascar and Africa.",
      },
      { property: "og:title", content: "Insights — Optiline Mada" },
      {
        property: "og:description",
        content: "Practical perspectives on outsourcing, remote teams and operations in Madagascar.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on Outsourcing and Operations"
        intro="Practical articles on building, running and scaling outsourced teams in Madagascar."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <Link
                key={post.slug}
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="flex flex-col rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevate"
              >
                <h2 className="text-[17px] font-bold leading-snug tracking-tight text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-5 text-[13px] font-semibold text-blue">Read article</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
