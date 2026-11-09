import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Layers, Lightbulb } from "lucide-react";
import { CTASection, FeatureCard, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import {
  getIndustry,
  industryProcess,
  industrySolutions,
  industryWhyMadagascar,
  industries,
} from "@/lib/industries";

export const Route = createFileRoute("/industries/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    if (!getIndustry(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) {
      return {
        meta: [
          { title: "Industry not found — Optiline Mada" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `/industries/${params.slug}`;
    return {
      meta: [
        { title: industry.seoTitle },
        { name: "description", content: industry.seoDescription },
        { name: "keywords", content: industry.keywords.join(", ") },
        { property: "og:title", content: industry.heroTitle },
        { property: "og:description", content: industry.seoDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: industry.heroTitle,
            description: industry.seoDescription,
            serviceType: industry.name,
            areaServed: "Worldwide",
            provider: { "@type": "Organization", name: "Optiline Mada" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "/industries" },
              { "@type": "ListItem", position: 3, name: industry.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { slug } = Route.useLoaderData();
  const industry = getIndustry(slug);
  if (!industry) return null;
  const Icon = industry.icon;
  const related = industries
    .filter((i) => i.slug !== industry.slug)
    .slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Industry" title={industry.heroTitle} intro={industry.heroIntro} />

      <div className="mx-auto max-w-6xl px-6">
        {/* Overview + photo */}
        <section className="grid items-start gap-10 py-16 md:grid-cols-[1.15fr_1fr] md:py-20">
          <div className="min-w-0">
            <SectionHeading eyebrow="Overview" title={`How we work with ${industry.name}`} />
            <div className="mt-6 space-y-5">
              {industry.overview.map((p) => (
                <p key={p.slice(0, 32)} className="text-pretty text-[15px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-border shadow-elevate">
            <img
              src={industry.image}
              alt={industry.imageAlt}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
            />
            <figcaption className="border-t border-border bg-card px-4 py-3 text-[12.5px] text-muted-foreground">
              {industry.imageAlt}
            </figcaption>
          </figure>
        </section>

        {/* Services */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Scope"
            title="What your team can handle"
            intro={`Selected from ${industry.name}'s daily operations. We build the team around the missions you actually outsource.`}
            className="mb-10"
          />
          <ListGrid items={industry.services} />
        </section>

        {/* Challenges */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Challenges & answers"
            title="The problems we are asked to solve"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {industry.challenges.map((c) => (
              <article
                key={c.problem.slice(0, 32)}
                className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-coral">
                  <Lightbulb className="size-4" aria-hidden />
                  Challenge
                </div>
                <h3 className="text-[15px] font-bold leading-snug tracking-tight text-foreground">
                  {c.problem}
                </h3>
                <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  <CheckCircle2 className="size-4" aria-hidden />
                  Our answer
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.solution}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Engagement models */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Engagement models"
            title="Ways to work with us"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {industrySolutions.map((s) => (
              <FeatureCard key={s.title} title={s.title} text={s.text} tone="blue" />
            ))}
          </div>
        </section>

        {/* Why Madagascar */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Why Madagascar"
            title="Why companies build here"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryWhyMadagascar.map((w) => (
              <FeatureCard key={w.title} title={w.title} text={w.text} tone="accent" />
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="Process"
            title="From first call to live operations"
            className="mb-10"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryProcess.map((s) => (
              <li key={s.n} className="rounded-xl border border-line bg-card p-5">
                <span className="font-mono text-[12px] text-blue">{s.n}</span>
                <h3 className="mt-2 text-[15px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading eyebrow="Questions" title={`Frequently asked — ${industry.name}`} className="mb-10" />
          <div className="space-y-3">
            {industry.faq.map((f) => (
              <details
                key={f.q.slice(0, 32)}
                className="group rounded-xl border border-line bg-card px-5 py-4 open:border-accent/40"
              >
                <summary className="grid grid-cols-[minmax(0,1fr)_auto] cursor-pointer list-none items-center gap-4 text-[15px] font-semibold tracking-tight text-foreground marker:hidden">
                  <span className="min-w-0">{f.q}</span>
                  <span className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mb-8 flex items-center gap-2">
            <Layers className="size-4 text-blue" aria-hidden />
            <h2 className="text-[17px] font-bold tracking-tight text-foreground">Other industries we support</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/industries/$slug"
                params={{ slug: r.slug }}
                className="group flex items-start justify-between gap-3 rounded-xl border border-line bg-card p-4 transition-colors hover:border-accent/50 hover:bg-paper"
              >
                <span>
                  <span className="block text-[14px] font-semibold tracking-tight text-foreground">{r.name}</span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-muted-foreground">{r.shortDesc}</span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-blue opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </section>

        <div className="mb-2 flex items-center gap-3 border-t border-border pt-10 pb-2">
          <span className="grid size-9 place-items-center rounded-lg border border-navy/15 bg-navy/8">
            <Icon className="size-4 text-navy" aria-hidden />
          </span>
          <p className="text-[13px] text-muted-foreground">
            {industry.shortDesc}
          </p>
        </div>
      </div>

      <CTASection
        title={`Build your ${industry.name} team`}
        subtitle="Tell us the missions, volumes and languages — we prepare a proposal with profiles, timeline and pricing."
      />
    </>
  );
}
