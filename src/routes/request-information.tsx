import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import officeTeam from "@/assets/office-team.jpg";
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

  const languageOptions = ["English", "French", "Spanish", "German", "Italian", "Portuguese", "Dutch", "Arabic", "Malagasy", "Multilingual (several)"];
  const hourOptions = [
    "Business hours Europe (9:00–18:00 CET)",
    "Business hours UK (9:00–17:30 GMT)",
    "Business hours US East (9:00–18:00 EST)",
    "Business hours US West (9:00–18:00 PST)",
    "Extended hours (8:00–22:00)",
    "Night shift",
    "Weekends",
    "24/7 coverage",
    "To be defined",
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue">Request information</p>
            <h1 className="mt-1 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-tight text-foreground">
              Get a Custom Proposal for Your Team
            </h1>
            <p className="mt-1 text-[14px] text-muted-foreground">
              Share your requirements and our team will come back to you with a tailored outsourcing solution.
            </p>
          </div>

          <fieldset>
            <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
              Contact information
            </legend>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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

          <fieldset>
            <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
              Your project
            </legend>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                <select id="languages" name="languages" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a language
                  </option>
                  {languageOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Working Hours" htmlFor="workingHours">
                <select id="workingHours" name="workingHours" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select working hours
                  </option>
                  {hourOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2 xl:col-span-3">
              <Field label="Project Description" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={1}
                  className={inputClass}
                  placeholder="Tell us more about your requirements"
                />
              </Field>
              </div>
            </div>
          </fieldset>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-start gap-3 text-[13px] text-muted-foreground">
              <input type="checkbox" name="consent" required className="mt-0.5 size-4 accent-[var(--blue)]" />
              <span>I agree to be contacted by Optiline Mada regarding my request.</span>
            </label>
            <SubmitButton disabled={busy}>{busy ? "Sending…" : "Request Information"}</SubmitButton>
          </div>
        </form>

        <figure className="hidden overflow-hidden rounded-2xl border border-line shadow-elevate lg:block">
          <img
            src={officeTeam}
            alt="Optiline Mada team at work in the office"
            className="h-[520px] w-full object-cover object-top"
          />
        </figure>
      </div>
    </div>
  );
}
