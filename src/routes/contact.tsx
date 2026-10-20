import { useState, type FormEvent } from "react";
import { PhotoBanner } from "@/components/PhotoGallery";
import { OfficeLocations } from "@/components/OfficeLocations";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/blocks";
import { Field, inputClass, SubmitButton, submitLead } from "@/components/forms";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Optiline Mada — Outsourcing in Madagascar" },
      {
        name: "description",
        content:
          "Contact the Optiline Mada team to discuss outsourcing your call center, IT or back-office operations to Madagascar.",
      },
      { property: "og:title", content: "Contact Optiline Mada" },
      { property: "og:description", content: "Talk to our team about your outsourcing project." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submitLead(
      { ...data, date: new Date().toISOString(), source: "contact", language: lang },
      site.leadEndpoint,
    );
    setBusy(false);
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Team"
        intro="Tell us about your project and we will come back to you with a concrete proposal."
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <SectionHeading title="Contact details" className="mb-6" />
            <dl className="space-y-4 text-[14.5px]">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Email</dt>
                <dd className="mt-1 text-foreground">
                  <a href={`mailto:${site.contact.email}`} className="hover:text-blue">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Contact in France</dt>
                <dd className="mt-1 text-foreground">
                  <a href={`tel:${site.contact.phoneFrance.replace(/\s/g, "")}`} className="hover:text-blue">
                    {site.contact.phoneFrance}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Contact in Madagascar</dt>
                <dd className="mt-1 text-foreground">
                  <a href={`tel:${site.contact.phoneMadagascar.replace(/\s/g, "")}`} className="hover:text-blue">
                    {site.contact.phoneMadagascar}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Address</dt>
                <dd className="mt-1 text-foreground">{site.contact.address}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Hours</dt>
                <dd className="mt-1 text-foreground">{site.contact.hours}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Registration</dt>
                <dd className="mt-1 text-foreground">
                  NIF {site.contact.nif}
                  <br />
                  STAT {site.contact.stat}
                  <br />
                  {site.contact.rcs}
                </dd>
              </div>
              {site.contact.whatsapp && (
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</dt>
                  <dd className="mt-1 text-foreground">
                    <a href={`https://wa.me/${site.contact.whatsapp}`} className="hover:text-blue">
                      Message us on WhatsApp
                    </a>
                  </dd>
                </div>
              )}
              {site.social.linkedin && (
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</dt>
                  <dd className="mt-1 text-foreground">
                    <a href={site.social.linkedin} className="hover:text-blue">
                      Follow Optiline Mada
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {site.contact.mapsEmbedUrl && (
              <iframe
                title="Optiline Mada location"
                src={site.contact.mapsEmbedUrl}
                loading="lazy"
                className="mt-6 aspect-video w-full rounded-xl border border-line"
              />
            )}
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="rounded-2xl border border-accent/40 bg-accent/6 p-8">
                <p className="text-[16px] leading-relaxed text-foreground">
                  Thank you. Your message has been received. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" required>
                    <input id="name" name="name" required className={inputClass} />
                  </Field>
                  <Field label="Company" htmlFor="company">
                    <input id="company" name="company" className={inputClass} />
                  </Field>
                  <Field label="Business Email" htmlFor="email" required>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </Field>
                  <Field label="Country" htmlFor="country">
                    <input id="country" name="country" className={inputClass} />
                  </Field>
                </div>
                <Field label="Message" htmlFor="message" required>
                  <textarea id="message" name="message" rows={6} required className={inputClass} />
                </Field>
                <label className="flex items-start gap-3 text-[13.5px] text-muted-foreground">
                  <input type="checkbox" name="consent" required className="mt-1 size-4 accent-[var(--blue)]" />
                  <span>I agree to be contacted by Optiline Mada regarding my request.</span>
                </label>
                <SubmitButton disabled={busy}>{busy ? "Sending…" : "Send Message"}</SubmitButton>
              </form>
            )}
          </div>
        </section>
        <OfficeLocations />
        <PhotoBanner k="reception" caption="Visit our offices in Antsirabe" />
      </div>
    </>
  );
}
