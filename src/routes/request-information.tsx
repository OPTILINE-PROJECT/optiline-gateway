import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";
import { Field, inputClass, SubmitButton, submitLead } from "@/components/forms";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export const Route = createFileRoute("/request-information")({
  head: () => ({
    meta: [
      { title: "Request Information — Outsourcing Proposal | Optiline Mada" },
      {
        name: "description",
        content:
          "Tell us the profiles, number of positions, languages and schedules you need in Madagascar and receive a custom outsourcing proposal.",
      },
      { property: "og:title", content: "Request Information — Optiline Mada" },
      {
        property: "og:description",
        content: "Get a custom outsourcing proposal for your team in Madagascar.",
      },
      { property: "og:url", content: "/request-information" },
    ],
    links: [{ rel: "canonical", href: "/request-information" }],
  }),
  component: RequestInformationPage,
});

function RequestInformationPage() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submitLead(
      { ...data, date: new Date().toISOString(), source: "request-information", language: lang },
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
            Your request has been received. Our team will contact you shortly.
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
        eyebrow="Request information"
        title="Get a Custom Proposal for Your Team"
        intro="Share your requirements and our team will come back to you with a tailored outsourcing solution."
      />

      <div className="mx-auto max-w-6xl px-6">
        <form onSubmit={onSubmit} className="max-w-3xl space-y-10 py-16 md:py-20">
          <fieldset className="space-y-5">
            <legend className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
              Contact information
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" htmlFor="firstName" required>
                <input id="firstName" name="firstName" required className={inputClass} />
              </Field>
              <Field label="Last Name" htmlFor="lastName" required>
                <input id="lastName" name="lastName" required className={inputClass} />
              </Field>
              <Field label="Company" htmlFor="company" required>
                <input id="company" name="company" required className={inputClass} />
              </Field>
              <Field label="Job Title" htmlFor="jobTitle">
                <input id="jobTitle" name="jobTitle" className={inputClass} />
              </Field>
              <Field label="Business Email" htmlFor="email" required>
                <input id="email" name="email" type="email" required className={inputClass} />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input id="phone" name="phone" type="tel" className={inputClass} />
              </Field>
              <Field label="Country" htmlFor="country" required>
                <input id="country" name="country" required className={inputClass} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
              Your project
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Service Required" htmlFor="service" required>
                <select id="service" name="service" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Call Center</option>
                  <option>Customer Service</option>
                  <option>IT / Software Development</option>
                  <option>Administrative / Back Office</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Number of Positions" htmlFor="positions">
                <input id="positions" name="positions" type="number" min="1" className={inputClass} />
              </Field>
              <Field label="Expected Start Date" htmlFor="startDate">
                <input id="startDate" name="startDate" type="date" className={inputClass} />
              </Field>
              <Field label="Required Languages" htmlFor="languages">
                <input id="languages" name="languages" className={inputClass} placeholder="e.g. English, French" />
              </Field>
              <Field label="Working Hours" htmlFor="workingHours">
                <input id="workingHours" name="workingHours" className={inputClass} placeholder="e.g. 9:00–18:00 CET" />
              </Field>
            </div>
            <Field label="Project Description" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={6}
                className={inputClass}
                placeholder="Tell us more about your requirements"
              />
            </Field>
          </fieldset>

          <label className="flex items-start gap-3 text-[13.5px] text-muted-foreground">
            <input type="checkbox" name="consent" required className="mt-1 size-4 accent-[var(--blue)]" />
            <span>I agree to be contacted by Optiline Mada regarding my request.</span>
          </label>

          <SubmitButton disabled={busy}>{busy ? "Sending…" : "Request Information"}</SubmitButton>
        </form>
      </div>
    </>
  );
}
