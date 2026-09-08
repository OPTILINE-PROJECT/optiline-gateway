import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-blue">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      {intro && <p className="mt-5 text-pretty text-[16px] leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

const toneMap = {
  navy: "bg-navy/5 hover:shadow-elevate",
  blue: "bg-blue/6 hover:shadow-elevate",
  accent: "bg-accent/6 hover:shadow-elevate",
} as const;

export function FeatureCard({
  title,
  text,
  tone = "navy",
}: {
  title: string;
  text: string;
  tone?: keyof typeof toneMap;
}) {
  return (
    <div
      className={`rounded-xl border border-line p-6 ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${toneMap[tone]}`}
    >
      <div className="mb-5 grid size-9 place-items-center rounded-lg border border-navy/15 bg-navy/8">
        <span
          className={`size-2.5 rounded-full ${
            tone === "accent" ? "bg-accent animate-brandglow" : tone === "blue" ? "bg-blue" : "bg-navy"
          }`}
        />
      </div>
      <h3 className="text-[17px] font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line px-3 py-1.5 text-[12.5px] text-muted-foreground">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="animate-rise max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-[58ch] text-pretty text-[17px] leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 text-navy-foreground md:px-14 md:py-16">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight">
              {title ?? t("final.title")}
            </h2>
            <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-navy-foreground/70">
              {subtitle ?? t("final.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/request-information"
                className="rounded-md bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-foreground transition hover:brightness-110"
              >
                {t("cta.requestInfo")}
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white/20 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-white/5"
              >
                {t("cta.talkToTeam")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ListGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-lg border border-line bg-card p-4 text-[14px] text-foreground transition-colors hover:border-accent/40"
        >
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
