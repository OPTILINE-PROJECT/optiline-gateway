import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";
import { Field, inputClass, SubmitButton, submitLead } from "@/components/forms";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export const Route = createFileRoute("/request-a-visit")({
  head: () => ({
    meta: [
      { title: "Visit Our Facilities in Madagascar — Optiline Mada" },
      {
        name: "description",
        content:
          "Schedule a visit of Optiline Mada's facilities in Madagascar and see the workspaces, infrastructure and teams before you commit.",
      },
      { property: "og:title", content: "Visit Our Facilities — Optiline Mada" },
      {
        property: "og:description",
        content: "Request a guided visit of our offices and operations in Madagascar.",
      },
      { property: "og:url", content: "/request-a-visit" },
    ],
    links: [{ rel: "canonical", href: "/request-a-visit" }],
  }),
  component: RequestVisitPage,
});

function RequestVisitPage() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submitLead(
      { ...data, date: new Date().toISOString(), source: "request-a-visit", language: lang },
      site.leadEndpoint,
    );
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-xl rounded-2xl border border-accent/40 bg-accent/6 p-10">
          <h1 className="text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold tracking-tight text-foreground">
            Thank you.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Your visit request has been received. Our team will contact you shortly to confirm the
            details.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-md bg-navy px-5 py-3 text-[14px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Request a visit"
        title="Visit Our Facilities"
        intro="See the workspaces, the infrastructure and the working environment in person before you decide."
      />

      <div className="mx-auto max-w-6xl px-6">
        <form onSubmit={onSubmit} className="max-w-2xl space-y-5 py-16 md:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="name" required>
              <input id="name" name="name" required className={inputClass} />
            </Field>
            <Field label="Company" htmlFor="company" required>
              <input id="company" name="company" required className={inputClass} />
            </Field>
            <Field label="Country" htmlFor="country" required>
              <input id="country" name="country" required className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email" required>
              <input id="email" name="email" type="email" required className={inputClass} />
            </Field>
            <Field label="Preferred Date" htmlFor="preferredDate">
              <input id="preferredDate" name="preferredDate" type="date" className={inputClass} />
            </Field>
            <Field label="Number of Visitors" htmlFor="visitors">
              <input id="visitors" name="visitors" type="number" min="1" className={inputClass} />
            </Field>
          </div>
          <Field label="Message" htmlFor="message">
            <textarea id="message" name="message" rows={5} className={inputClass} />
          </Field>
          <SubmitButton disabled={busy}>{busy ? "Sending…" : "Schedule a Visit"}</SubmitButton>
        </form>
      </div>
    </>
  );
}
