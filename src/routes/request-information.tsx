import { FormActions } from "@/components/FormActions";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import officeTeam from "@/assets/office-team.jpg";
import { Field, inputClass, submitLead, FormSubmissionError } from "@/components/forms";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export const Route = createFileRoute("/request-information")({
  staticData: { sitemap: true },
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/request-information" }],
  }),
  component: RequestInformationPage,
});

const DRAFT_KEY = "optiline-quote-draft";

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

const steps = [
  { n: 1, label: "Your need" },
  { n: 2, label: "Volume & language" },
  { n: 3, label: "Your details" },
] as const;

type Draft = Record<string, string>;

function loadDraft(): Draft {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as Draft) : {};
  } catch {
    return {};
  }
}

function RequestInformationPage() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<Draft>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Restore a partial draft so an interrupted request can be resumed.
  useEffect(() => {
    setDraft(loadDraft());
  }, []);

  function collectCurrent(): Draft {
    const form = formRef.current;
    if (!form) return draft;
    const data = Object.fromEntries(new FormData(form)) as Draft;
    const merged = { ...draft, ...data };
    setDraft(merged);
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(merged));
    } catch {
      // storage unavailable — draft simply won't persist
    }
    return merged;
  }

  function goTo(next: number) {
    const form = formRef.current;
    if (next > step && form && !form.reportValidity()) return;
    collectCurrent();
    setStep(next);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setFailed(false);
    const data = collectCurrent();
    const delivered = await submitLead(
      { ...data, date: new Date().toISOString(), source: "request-information", language: lang },
      site.leadEndpoint,
    );
    setBusy(false);
    setSent(delivered);
    setFailed(!delivered);
    if (delivered) {
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        // ignore
      }
    }
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

  const v = (key: string) => draft[key] ?? "";

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <form ref={formRef} onSubmit={onSubmit} className="lead-form min-w-0 space-y-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue">Request information</p>
            <h1 className="mt-1 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold tracking-tight text-foreground">
              Get a Custom Proposal for Your Team
            </h1>
            <p className="mt-1 text-[14px] text-muted-foreground">
              Three short steps — your answers are saved as you go, so you can come back later.
            </p>
          </div>

          <ol className="flex flex-wrap items-center gap-2" aria-label="Form progress">
            {steps.map((s) => (
              <li
                key={s.n}
                aria-current={step === s.n ? "step" : undefined}
                className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium ${
                  step === s.n
                    ? "border-blue bg-blue/10 text-foreground"
                    : step > s.n
                      ? "border-accent/50 bg-accent/8 text-foreground"
                      : "border-line text-muted-foreground"
                }`}
              >
                <span className="font-mono text-[11px]">{s.n}</span>
                {s.label}
              </li>
            ))}
          </ol>

          {step === 1 && (
            <fieldset>
              <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
                Step 1 — Your need
              </legend>
              <div className="grid min-w-0 items-end gap-3 grid-cols-2">
                <Field label="Service Required" htmlFor="service" required>
                  <select id="service" name="service" required className={inputClass} defaultValue={v("service")}>
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
                <div className="col-span-2">
                  <Field label="Project Description" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us more about your requirements"
                      defaultValue={v("message")}
                    />
                  </Field>
                </div>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
                Step 2 — Volume & language
              </legend>
              <div className="grid min-w-0 items-end gap-3 grid-cols-2 xl:grid-cols-4">
                <Field label="Number of Positions" htmlFor="positions">
                  <input id="positions" name="positions" type="number" min="1" className={inputClass} defaultValue={v("positions")} />
                </Field>
                <Field label="Expected Start Date" htmlFor="startDate">
                  <input id="startDate" name="startDate" type="date" className={inputClass} defaultValue={v("startDate")} />
                </Field>
                <Field label="Required Languages" htmlFor="languages">
                  <select id="languages" name="languages" className={inputClass} defaultValue={v("languages")}>
                    <option value="" disabled>
                      Select a language
                    </option>
                    {languageOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Working Hours" htmlFor="workingHours">
                  <select id="workingHours" name="workingHours" className={inputClass} defaultValue={v("workingHours")}>
                    <option value="" disabled>
                      Select working hours
                    </option>
                    {hourOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">
                Step 3 — Your details
              </legend>
              <div className="grid min-w-0 items-end gap-3 grid-cols-2 xl:grid-cols-4">
                <Field label="First Name" htmlFor="firstName" required>
                  <input id="firstName" name="firstName" required className={inputClass} defaultValue={v("firstName")} />
                </Field>
                <Field label="Last Name" htmlFor="lastName" required>
                  <input id="lastName" name="lastName" required className={inputClass} defaultValue={v("lastName")} />
                </Field>
                <Field label="Company" htmlFor="company" required>
                  <input id="company" name="company" required className={inputClass} defaultValue={v("company")} />
                </Field>
                <Field label="Job Title" htmlFor="jobTitle">
                  <input id="jobTitle" name="jobTitle" className={inputClass} defaultValue={v("jobTitle")} />
                </Field>
                <Field label="Business Email" htmlFor="email" required>
                  <input id="email" name="email" type="email" required className={inputClass} defaultValue={v("email")} />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input id="phone" name="phone" type="tel" className={inputClass} defaultValue={v("phone")} />
                </Field>
                <Field label="Country" htmlFor="country" required>
                  <input id="country" name="country" required className={inputClass} defaultValue={v("country")} />
                </Field>
              </div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                Your details are used only to answer your request and prepare your proposal, as described in our{" "}
                <Link to="/privacy-policy" className="font-medium text-blue hover:text-navy">
                  privacy policy
                </Link>
                .
              </p>
            </fieldset>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => goTo(step - 1)}
                className="rounded-md border border-line bg-card px-5 py-2.5 text-[14px] font-semibold text-foreground transition-colors hover:bg-paper"
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={() => goTo(step + 1)}
                className="rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
              >
                Continue
              </button>
            )}
          </div>

          <div className="min-w-0">
            {failed && <FormSubmissionError />}
            {step === 3 && <FormActions busy={busy} action="Request Information" />}
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
