import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Pill, SectionHeading } from "@/components/blocks";
import { Field, inputClass, SubmitButton, submitLead } from "@/components/forms";
import { useLanguage } from "@/i18n/language";
import { careerCategories } from "@/lib/content";
import { site } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Optiline Mada — Jobs in Antananarivo, Madagascar" },
      {
        name: "description",
        content:
          "Join Optiline Mada: opportunities in call center, IT, development, administration, management and support roles in Madagascar.",
      },
      { property: "og:title", content: "Join Optiline Mada" },
      {
        property: "og:description",
        content: "Career opportunities with an international outsourcing partner in Madagascar.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form = new FormData(e.currentTarget);
    const cv = form.get("cv");
    const data = Object.fromEntries(
      Array.from(form.entries()).filter(([k]) => k !== "cv"),
    ) as Record<string, string>;
    await submitLead(
      {
        ...data,
        cvFileName: cv instanceof File ? cv.name : "",
        date: new Date().toISOString(),
        source: "careers",
        language: lang,
      },
      site.leadEndpoint,
    );
    setBusy(false);
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Optiline Mada"
        intro="We work with international clients and professional standards. If you want to grow in that environment, we would like to hear from you."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-20">
          <SectionHeading title="Where we recruit" className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {careerCategories.map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <SectionHeading title="Apply" className="mb-10" />
          {sent ? (
            <div className="max-w-xl rounded-2xl border border-accent/40 bg-accent/6 p-8">
              <p className="text-[16px] leading-relaxed text-foreground">
                Thank you. Your application has been received. Our recruitment team will contact you
                if your profile matches an opportunity.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-w-2xl space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" required>
                  <input id="name" name="name" required className={inputClass} />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input id="phone" name="phone" type="tel" className={inputClass} />
                </Field>
                <Field label="Position" htmlFor="position" required>
                  <input id="position" name="position" required className={inputClass} />
                </Field>
              </div>
              <Field label="CV upload" htmlFor="cv">
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-[14px] text-muted-foreground"
                />
              </Field>
              <Field label="Message" htmlFor="message">
                <textarea id="message" name="message" rows={5} className={inputClass} />
              </Field>
              <SubmitButton disabled={busy}>{busy ? "Sending…" : "Apply Now"}</SubmitButton>
            </form>
          )}
        </section>
      </div>
    </>
  );
}
