import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Optiline Mada" },
      {
        name: "description",
        content: "Terms of use for the Optiline Mada website and the information published on it.",
      },
      { property: "og:title", content: "Terms & Conditions — Optiline Mada" },
      { property: "og:description", content: "Terms of use of this website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <div className="mx-auto max-w-6xl px-6">
        <article className="max-w-[70ch] space-y-6 py-16 text-[15px] leading-relaxed text-muted-foreground md:py-20">
          <h2 className="text-[19px] font-bold text-foreground">Use of this website</h2>
          <p>
            The content of this website is provided for information purposes about Optiline Mada's
            outsourcing services. It does not constitute a contractual offer.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Proposals</h2>
          <p>
            Services, team compositions, schedules and prices are defined in a written proposal
            prepared for each client.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Intellectual property</h2>
          <p>
            The texts, visuals and design of this website belong to Optiline Mada and may not be
            reproduced without prior authorisation.
          </p>
          <p className="rounded-xl border border-dashed border-line bg-paper/60 p-5">
            [This text is a working draft. Legal entity details, governing law and jurisdiction must
            be completed by Optiline Mada before publication.]
          </p>
        </article>
      </div>
    </>
  );
}
