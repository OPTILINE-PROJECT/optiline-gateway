import { createFileRoute } from "@tanstack/react-router";
import { CTASection, ListGrid, PageHero, SectionHeading } from "@/components/blocks";
import { continuityPoints, securityPoints } from "@/lib/content";

export const Route = createFileRoute("/security-compliance")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Security & Compliance — Optiline Mada" },
      {
        name: "description",
        content:
          "How Optiline Mada protects your data and operations in Madagascar: confidentiality agreements, controlled access, supervision, business continuity and the applicable legal framework.",
      },
      { property: "og:title", content: "Security & Compliance — Optiline Mada" },
      {
        property: "og:description",
        content: "Confidentiality, controlled access, supervision and business continuity for outsourced operations in Madagascar.",
      },
      { property: "og:url", content: "/security-compliance" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/security-compliance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Security & Compliance", item: "/security-compliance" },
          ],
        }),
      },
    ],
  }),
  component: SecurityCompliancePage,
});

function SecurityCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        title="Your Data and Operations, Protected"
        intro="In brief: every collaborator signs a confidentiality agreement before starting, access to our offices and systems is controlled and supervised, and your data is protected under Malagasy Law No. 2014-038 and, for European clients, the GDPR. This page describes concretely how we secure your operations — in facts, not adjectives."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <SectionHeading
            title="Confidentiality and NDAs"
            intro="A non-disclosure agreement is a contract that legally binds its signer to keep your information secret."
            className="mb-8"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground">
            <p>
              Every Optiline Mada collaborator signs a confidentiality agreement before accessing any client
              information. A specific NDA between your company and Optiline Mada can be signed before any
              detailed discussion about your processes.
            </p>
          </div>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Workstation segregation and access control"
            intro="Workstation segregation means each team works in a dedicated area, on dedicated equipment, with access limited to its own client environment."
            className="mb-8"
          />
          <ListGrid items={[...securityPoints]} />
          <p className="mt-6 text-[14px] text-muted-foreground">
            [TO BE COMPLETED: detailed workstation policy — USB device restrictions, screen privacy, clean-desk rules]
          </p>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Supervision and password policy"
            intro="Supervision means a named local manager monitors activity, quality and compliance every working day."
            className="mb-8"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground">
            <p>
              Each team is supervised by a dedicated local manager who reports to you on a regular basis.
              Access to your tools is granted per collaborator, with individual accounts — never shared
              credentials.
            </p>
            <p className="text-[14px] text-muted-foreground">
              [TO BE COMPLETED: password policy details — minimum length, rotation, multi-factor authentication]
            </p>
          </div>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Business continuity"
            intro="A business continuity plan describes how operations keep running when something fails — power, connectivity or equipment."
            className="mb-8"
          />
          <ListGrid items={[...continuityPoints]} />
          <p className="mt-6 text-[14px] text-muted-foreground">
            [TO BE COMPLETED: documented continuity plan — recovery time objectives, escalation contacts]
          </p>
        </section>

        <section className="border-t border-line py-16 md:py-20">
          <SectionHeading
            title="Applicable legal framework"
            intro="The legal framework is the set of laws that govern how your data may be collected, stored and processed."
            className="mb-8"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground">
            <p>
              In Madagascar, personal data is protected by Law No. 2014-038 on the protection of personal
              data, which governs all processing carried out by Optiline Mada.
            </p>
            <p>
              When your company is established in the European Union, the General Data Protection Regulation
              (GDPR) also applies to the processing of your prospects' and customers' data. Our privacy policy
              details purposes, legal bases, retention periods and your rights.
            </p>
          </div>
        </section>
      </div>

      <CTASection
        title="Discuss your security requirements"
        subtitle="Tell us your compliance constraints — we will explain exactly how your team would operate."
      />
    </>
  );
}
