import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PhotoGallery, PhotoBanner, type PhotoKey } from "@/components/PhotoGallery";
import { CTASection, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import { howItWorks, solutions, type Solution } from "@/lib/content";

const serviceBanners: Record<Solution["slug"], { k: PhotoKey; caption: string }> = {
  "call-center": { k: "supportAgent", caption: "Dedicated customer operations teams" },
  "it-development": { k: "developers", caption: "Engineering teams working as an extension of yours" },
  "administrative-outsourcing": { k: "backOffice", caption: "Structured, confidential back-office operations" },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Optiline Mada" }, { name: "robots", content: "noindex" }] };
    }
    const { solution } = loaderData;
    const title = `${solution.title} in Madagascar — Optiline Mada`;
    return {
      meta: [
        { title },
        { name: "description", content: solution.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.intro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: solution.title,
            description: solution.intro,
            areaServed: "Worldwide",
            provider: { "@type": "Organization", name: "Optiline Mada" },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { solution } = Route.useLoaderData();
  const banner = serviceBanners[solution.slug];

  return (
    <>
      <PageHero eyebrow="Service" title={solution.title} intro={solution.intro} />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <SectionHeading eyebrow="Scope" title="Roles and activities we cover" className="mb-10" />
          <ListGrid items={solution.items} />
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading eyebrow="Process" title="How we set your team up" className="mb-10" />
          <ol className="grid gap-4 md:grid-cols-5">
            {howItWorks.map((s) => (
              <li key={s.n} className="rounded-xl border border-line bg-card p-5">
                <span className="font-mono text-[12px] text-blue">{s.n}</span>
                <h3 className="mt-2 text-[15px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading eyebrow="Other solutions" title="Explore the rest of our offer" className="mb-8" />
          <div className="flex flex-wrap gap-3">
            {solutions
              .filter((s) => s.slug !== solution.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-md border border-line px-5 py-3 text-[14px] font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-paper"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </section>
        <PhotoBanner k={banner.k} caption={banner.caption} />
      </div>

      <CTASection title={solution.cta} subtitle="Tell us the profiles and volumes — we prepare a custom proposal." />
    </>
  );
}
