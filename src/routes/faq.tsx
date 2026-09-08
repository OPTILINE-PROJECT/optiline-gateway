import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/blocks";
import { faqs } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Outsourcing FAQ — Optiline Mada Madagascar" },
      {
        name: "description",
        content:
          "Answers on team setup times, recruitment, equipment, connectivity, IP telephony, HR administration, scaling and pricing for outsourcing in Madagascar.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Optiline Mada" },
      {
        property: "og:description",
        content: "Everything international companies ask before outsourcing to Madagascar.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions International Companies Ask Us"
        intro="If your question is not covered here, our team will answer it directly."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="max-w-3xl py-16 md:py-20">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-line">
                <AccordionTrigger className="text-start text-[16px] font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14.5px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      <CTASection />
    </>
  );
}
