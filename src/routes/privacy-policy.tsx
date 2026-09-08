import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Optiline Mada" },
      {
        name: "description",
        content: "How Optiline Mada collects, uses and protects the personal data submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Optiline Mada" },
      { property: "og:description", content: "Our approach to personal data and privacy." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-6xl px-6">
        <article className="max-w-[70ch] space-y-6 py-16 text-[15px] leading-relaxed text-muted-foreground md:py-20">
          <p>
            This policy explains how Optiline Mada handles the personal data submitted through this
            website.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Data we collect</h2>
          <p>
            When you complete a form we collect the information you provide: name, company, job
            title, business email, phone number, country, details of your project and any message
            you send. We also record the date of the request, the form used and the language of the
            website.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Why we use it</h2>
          <p>
            We use this information only to answer your request, prepare a proposal and maintain the
            business relationship you initiate.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Retention and sharing</h2>
          <p>
            Data is kept for as long as necessary to handle your request and is not sold. It may be
            processed in a customer relationship management system operated on our behalf.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Your rights</h2>
          <p>
            You can request access, correction or deletion of your data by writing to{" "}
            <a href={`mailto:${site.contact.email}`} className="text-blue hover:underline">
              {site.contact.email}
            </a>
            .
          </p>
          <p className="rounded-xl border border-dashed border-line bg-paper/60 p-5">
            [This text is a working draft. It should be reviewed and completed by Optiline Mada's
            legal advisor before publication, including the legal entity details and the applicable
            data protection framework.]
          </p>
        </article>
      </div>
    </>
  );
}
