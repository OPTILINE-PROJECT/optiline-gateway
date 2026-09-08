import { createFileRoute } from "@tanstack/react-router";
import officeTeam from "@/assets/office-team.jpg";
import { CTASection, ListGrid, PageHero, Pill, SectionHeading } from "@/components/blocks";
import { internationalStandards, values } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Optiline Mada — Outsourcing Partner in Madagascar" },
      {
        name: "description",
        content:
          "Optiline Mada is an outsourcing partner in Madagascar providing managed teams, infrastructure and local operations for international companies.",
      },
      { property: "og:title", content: "About Optiline Mada" },
      {
        property: "og:description",
        content: "Our mission, vision, approach and values as an outsourcing partner in Madagascar.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Optiline Mada"
        intro="We help international companies build and run professional teams in Madagascar — from recruitment to daily operations."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="space-y-10 md:col-span-7">
            <div>
              <SectionHeading title="Our mission" className="mb-4" />
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Give international businesses a simple, reliable way to operate in Madagascar: one
                partner responsible for the people, the workplace, the technology and the local
                administration.
              </p>
            </div>
            <div>
              <SectionHeading title="Our vision" className="mb-4" />
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Position Madagascar as a credible, professional outsourcing destination, judged on
                quality of service rather than cost alone.
              </p>
            </div>
            <div>
              <SectionHeading title="Our approach" className="mb-4" />
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Each engagement starts with a precise definition of your requirements. We then
                recruit, prepare the workspace and technology, and run the local operation with
                supervision and regular reporting — so you keep control of your business while we
                handle the local complexity.
              </p>
            </div>
            <div>
              <SectionHeading title="Our team" className="mb-4" />
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Our management team has significant experience working with international clients
                and business environments. Detailed team profiles will be published here once
                validated. [Placeholder — team information to be provided.]
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src={officeTeam}
              loading="lazy"
              width={1024}
              height={1280}
              alt="Team working in a modern office environment"
              className="aspect-[4/5] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading eyebrow="Values" title="What we hold ourselves to" className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {values.map((v) => (
              <Pill key={v}>{v}</Pill>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading
            eyebrow="International experience"
            title="Local Talent. International Standards."
            className="mb-10"
          />
          <ListGrid items={internationalStandards} />
        </section>
      </div>

      <CTASection />
    </>
  );
}
