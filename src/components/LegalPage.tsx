import { Link } from "@tanstack/react-router";
import { Fragment, type ReactNode } from "react";
import { PageHero } from "@/components/blocks";
import { useLanguage } from "@/i18n/language";
import { legalContent, type LegalPageKey } from "@/i18n/legal";

const legal = {
  name: "Optiline Mada",
  email: "contact@optiline-mada.com",
  phoneFrance: { label: "+33 6 15 83 75 61", href: "tel:+33615837561" },
  phoneMadagascar: { label: "+261 32 03 682 18", href: "tel:+261320368218" },
  address: "Tomboarivo, 09 B 193, MAHAFALY, TOMBOARIVO, Antsirabe, Madagascar",
  nif: "101 921 24 09",
  stat: "78200 12 2025 0 01330",
  rcs: "Antsirabe 2026 A 00038",
};

const linkClass = "text-blue hover:underline";

function Rich({ text, privacyLabel }: { text: string; privacyLabel: string }) {
  const filled = text.replaceAll("{name}", legal.name).replaceAll("{address}", legal.address);
  return (
    <>
      {filled.split(/(\{email\}|\{privacy\})/).map((part, i) => {
        if (part === "{email}")
          return (
            <a key={i} href={`mailto:${legal.email}`} className={linkClass}>
              {legal.email}
            </a>
          );
        if (part === "{privacy}")
          return (
            <Link key={i} to="/privacy-policy" className={linkClass}>
              {privacyLabel}
            </Link>
          );
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-2 text-[19px] font-bold tracking-tight text-foreground">{children}</h2>;
}

export function LegalPage({ page }: { page: LegalPageKey }) {
  const { lang } = useLanguage();
  const c = legalContent[lang] ?? legalContent.en;
  const doc = c[page];
  const label = (text: string) => <span className="font-semibold text-foreground">{text}</span>;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={doc.title} />
      <div className="mx-auto max-w-6xl px-6">
        <article className="max-w-[70ch] space-y-6 py-16 text-[15px] leading-relaxed text-muted-foreground md:py-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
            {c.lastUpdated}: {c.updated}
          </p>
          <p>
            <Rich text={doc.intro} privacyLabel={c.privacyLink} />
          </p>

          {doc.sections.map((s) => (
            <Fragment key={s.h}>
              <H2>{s.h}</H2>
              {s.b.map((block, i) =>
                Array.isArray(block) ? (
                  <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-accent">
                    {block.map((item) => (
                      <li key={item}>
                        <Rich text={item} privacyLabel={c.privacyLink} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>
                    <Rich text={block} privacyLabel={c.privacyLink} />
                  </p>
                ),
              )}
              {s.box && (
                <ul className="space-y-1 rounded-xl border border-line bg-paper/60 p-5 text-[14px]">
                  <li>{label("NIF:")} {legal.nif}</li>
                  <li>{label("STAT:")} {legal.stat}</li>
                  <li>{label("RCS:")} {legal.rcs}</li>
                  {s.box === "regEmail" && (
                    <li>
                      {label(`${c.labels.email}:`)}{" "}
                      <a href={`mailto:${legal.email}`} className={linkClass}>
                        {legal.email}
                      </a>
                    </li>
                  )}
                </ul>
              )}
              {s.contact && (
                <address className="space-y-1 not-italic">
                  <p>
                    {c.labels.email}:{" "}
                    <a href={`mailto:${legal.email}`} className={linkClass}>
                      {legal.email}
                    </a>
                  </p>
                  <p>
                    {c.labels.france}:{" "}
                    <a href={legal.phoneFrance.href} className={linkClass}>
                      {legal.phoneFrance.label}
                    </a>
                  </p>
                  <p>
                    {c.labels.madagascar}:{" "}
                    <a href={legal.phoneMadagascar.href} className={linkClass}>
                      {legal.phoneMadagascar.label}
                    </a>
                  </p>
                  <p>
                    {c.labels.address}: {legal.address}
                  </p>
                </address>
              )}
            </Fragment>
          ))}
        </article>
      </div>
    </>
  );
}
