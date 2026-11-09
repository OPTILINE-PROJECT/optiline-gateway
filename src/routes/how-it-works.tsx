import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, SectionHeading } from "@/components/blocks";
import { howItWorks, teamSizes } from "@/lib/content";

export const Route = createFileRoute("/how-it-works")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "How It Works — From Brief to Operational Team — Optiline Mada" },
      {
        name: "description",
        content:
          "Five steps from your brief to an operational team in Madagascar: requirements, solution design, recruitment, setup and go-live with local management.",
      },
      { property: "og:title", content: "How It Works — Optiline Mada" },
      {
        property: "og:description",
        content: "From your brief to an operational managed team in Madagascar, in five steps.",
      },
      { property: "og:url", content: "/how-it-works" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "How It Works", item: "/how-it-works" },
          ],
        }),
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From Your Brief to an Operational Team"
        intro="In brief: you describe the profiles and volume you need, we design the solution and recruit your team, we set up the workspace and technology, and your team starts working under local supervision. You manage the work — we manage everything around it. Here is each step."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <ol className="space-y-6">
            {howItWorks.map((step) => (
              <li
                key={step.n}
                className="flex flex-col gap-3 rounded-xl border border-line bg-card p-7 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-navy text-[13px] font-bold text-navy-foreground">
                  {step.n.replace("Step ", "")}
                </span>
                <div>
                  <h2 className="text-[19px] font-bold tracking-tight text-foreground">{step.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Start at the size that fits you"
            intro="A dedicated team can start with a single collaborator and grow to a full department — you adjust the size as your activity evolves."
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {teamSizes.map((t) => (
              <div key={t.title} className="rounded-xl border border-line bg-card p-7">
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-blue">{t.range}</p>
                <h3 className="mt-3 text-[18px] font-bold tracking-tight text-foreground">{t.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection
        title="Start with step 1"
        subtitle="Tell us what you need — profiles, volume, languages and schedules — and receive a tailored proposal."
      />
    </>
  );
}
