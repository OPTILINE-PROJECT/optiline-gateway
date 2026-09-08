import { createFileRoute, Link } from "@tanstack/react-router";
import officeTeam from "@/assets/office-team.jpg";
import madagascarMap from "@/assets/madagascar-map.jpg";
import { useLanguage } from "@/i18n/language";
import {
  CTASection,
  Eyebrow,
  FeatureCard,
  Pill,
  SectionHeading,
} from "@/components/blocks";
import {
  advantages,
  howItWorks,
  industries,
  infrastructure,
  managedSteps,
  solutions,
  talentProfiles,
  teamSizes,
  trustPoints,
} from "@/lib/content";
import { infrastructureStats, stats } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Outsourcing in Madagascar — Optiline Mada | Fully Managed Teams" },
      {
        name: "description",
        content:
          "Build your team in Madagascar without the complexity. Call center, IT development and back-office outsourcing with offices, technology, HR and local management fully managed.",
      },
      { property: "og:title", content: "Your Team in Madagascar. Fully Managed. — Optiline Mada" },
      {
        property: "og:description",
        content:
          "End-to-end outsourcing in Madagascar: recruitment, workspaces, IT, connectivity, administration and local management.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();

  return (
    <>
      <div className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="grid items-center gap-10 pb-16 pt-16 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-24">
          <div className="animate-rise md:col-span-7">
            <div className="mb-7 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em]">
              <span className="size-1.5 rounded-full bg-accent animate-brandglow" />
              <span className="text-blue">{t("hero.badge1")}</span>
              <span className="text-border">•</span>
              <span className="text-muted-foreground">{t("hero.badge2")}</span>
              <span className="text-border">•</span>
              <span className="text-muted-foreground">{t("hero.badge3")}</span>
            </div>
            <h1 className="text-balance text-[clamp(2.6rem,6vw,4.4rem)] font-extrabold leading-[1.02] tracking-tight text-foreground">
              {t("hero.title")} <span className="text-blue">{t("hero.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/request-information"
                className="rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-navy-foreground ring-1 ring-black/5 transition-colors hover:bg-blue"
              >
                {t("cta.buildTeam")}
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-line px-6 py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-paper"
              >
                {t("cta.requestInfo")}
              </Link>
            </div>
          </div>
          <div className="animate-rise md:col-span-5 [animation-delay:120ms]">
            <img
              src={officeTeam}
              width={1024}
              height={1280}
              alt="Professionals working at modern workstations in an open-plan office"
              className="aspect-[4/5] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="border-y border-border py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            {[
              "End-to-End Outsourcing",
              "Ready-to-Operate",
              "Fully Managed",
              "Skilled Talent",
              "Reliable Infrastructure",
            ].map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                <span className={`size-1.5 rounded-full ${i === 2 ? "bg-accent" : "bg-blue"}`} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* WHY OPTILINE */}
        <section className="py-20 md:py-24">
          <SectionHeading
            eyebrow="(a) — Why Optiline Mada"
            title="Everything You Need to Build Your Team in Madagascar"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <FeatureCard key={a.title} title={a.title} text={a.text} tone={a.tone} />
            ))}
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-4 md:py-8">
          <SectionHeading
            eyebrow="(b) — Our solutions"
            title="Flexible Outsourcing Solutions"
            className="mb-12"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevate"
              >
                <h3 className="text-[19px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.short}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.items.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line px-2 py-1 text-[12px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex w-fit rounded-md border border-line px-4 py-2.5 text-[13.5px] font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-paper"
                >
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* WE TAKE CARE OF EVERYTHING */}
        <section className="py-20 md:py-24">
          <SectionHeading
            eyebrow="(c) — Fully managed"
            title="You Focus on Your Business. We Take Care of the Rest."
            className="mb-12"
          />
          <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {managedSteps.map((step) => (
              <li key={step.n} className="bg-background p-6 transition-colors hover:bg-paper">
                <span className="font-mono text-[12px] font-medium text-blue">{step.n}</span>
                <h3 className="mt-2 text-[16px] font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* OFFER VISUALISATION */}
        <section className="pb-20 md:pb-24">
          <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 text-navy-foreground md:px-12 md:py-16">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative mb-12 max-w-2xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                (d) — How it works
              </p>
              <h2 className="text-balance text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                From Your Idea to a Ready-to-Operate Team
              </h2>
            </div>
            <div className="relative grid items-center gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-6">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-navy-foreground/50">Client</p>
                <p className="text-[19px] font-bold tracking-tight">You</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-navy-foreground/60">
                  Define your profiles, volumes and activities. Step back from the local complexity.
                </p>
              </div>
              <div className="rounded-xl border border-accent/40 bg-accent/[0.07] p-6 shadow-[0_0_50px_-12px_color-mix(in_oklab,var(--accent)_50%,transparent)]">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-accent">Optiline Mada</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "Recruitment",
                    "HR",
                    "Office",
                    "IT",
                    "Internet",
                    "Telephony",
                    "Security",
                    "Services",
                    "Management",
                  ].map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border px-2 py-1.5 text-center text-[12px] ${
                        item === "Telephony"
                          ? "border-accent/30 bg-accent/15 text-accent"
                          : "border-white/10 text-navy-foreground/75"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-6">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-navy-foreground/50">Output</p>
                <p className="text-[19px] font-bold tracking-tight">Ready-to-Operate Team</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-navy-foreground/60">
                  Skilled, equipped and supervised — working to international standards from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="border-t border-border py-20 md:py-24">
          <SectionHeading
            eyebrow="(e) — Infrastructure"
            title="Built for Reliable Operations"
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {infrastructure.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-line bg-card p-4 text-[14px] font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-paper"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructureStats.map((s) => (
              <div key={s.label} className="rounded-lg border border-line bg-navy/5 p-5">
                <p className="font-mono text-[15px] font-medium text-foreground">{s.value}</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TALENT */}
        <section className="py-4 md:py-8">
          <SectionHeading
            eyebrow="(f) — Our talent"
            title="The People Behind Your Operations"
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2">
            {talentProfiles.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-line bg-accent/6 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[16px] font-bold tracking-tight text-foreground">
                Need a specific profile?
              </p>
              <p className="mt-1.5 text-[14px] text-muted-foreground">
                Tell us what you need and our recruitment team will help you build the right team.
              </p>
            </div>
            <Link
              to="/request-information"
              className="shrink-0 rounded-md bg-navy px-5 py-3 text-[14px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
            >
              Request a Profile
            </Link>
          </div>
        </section>

        {/* WHY MADAGASCAR */}
        <section className="py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>(g) — Why Madagascar</Eyebrow>
              <h2 className="text-balance text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-foreground">
                Local Talent. International Standards.
              </h2>
              <p className="mt-5 max-w-[50ch] text-pretty text-[16px] leading-relaxed text-muted-foreground">
                Madagascar offers a skilled, multilingual workforce, competitive operating costs and
                convenient time-zone alignment with Europe — a professional destination for
                international outsourcing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] font-semibold">
                <span className="rounded-md border border-line px-3.5 py-2 text-foreground">Europe</span>
                <span className="relative h-px w-8 bg-line">
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent animate-brandglow" />
                </span>
                <span className="rounded-md border border-accent/40 bg-accent/8 px-3.5 py-2 text-foreground">
                  Madagascar
                </span>
                <span className="relative h-px w-8 bg-line">
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-blue" />
                </span>
                <span className="rounded-md border border-line px-3.5 py-2 text-foreground">
                  International Markets
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Skilled workforce", "Multilingual talent", "Growing tech ecosystem", "Strong service culture"].map(
                  (p) => (
                    <Pill key={p}>{p}</Pill>
                  ),
                )}
              </div>
              <Link
                to="/why-madagascar"
                className="mt-8 inline-flex rounded-md border border-line px-5 py-3 text-[14px] font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-paper"
              >
                Why Madagascar
              </Link>
            </div>
            <div className="md:col-span-5">
              <img
                src={madagascarMap}
                loading="lazy"
                width={1088}
                height={1088}
                alt="Map showing Madagascar connected to Europe and international markets"
                className="aspect-square w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — 5 STEPS */}
        <section className="border-t border-border py-20 md:py-24">
          <SectionHeading
            eyebrow="(h) — Process"
            title="From Your Idea to a Fully Operational Team"
            className="mb-12"
          />
          <ol className="grid gap-4 md:grid-cols-5">
            {howItWorks.map((s) => (
              <li key={s.n} className="rounded-xl border border-line bg-card p-5">
                <span className="font-mono text-[12px] text-blue">{s.n}</span>
                <h3 className="mt-2 text-[15px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* TEAM SIZES */}
        <section className="pb-20 md:pb-24">
          <SectionHeading
            eyebrow="(i) — Flexible team sizes"
            title="From One Specialist to an Entire Operations Team"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {teamSizes.map((s) => (
              <div key={s.title} className="rounded-xl border border-line bg-navy/5 p-6">
                <p className="font-mono text-[13px] text-blue">{s.range}</p>
                <h3 className="mt-2 text-[18px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mb-10">
            <Eyebrow>(j) — Industries</Eyebrow>
            <h2 className="text-balance text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight text-foreground">
              Supporting Businesses Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.slice(0, 8).map((i) => (
              <Link
                key={i.name}
                to="/industries"
                className="rounded-lg border border-line bg-card p-4 transition-colors hover:border-accent/40 hover:bg-paper"
              >
                <span className="block text-[15px] font-semibold tracking-tight text-foreground">
                  {i.name}
                </span>
                <span className="mt-1 block text-[12.5px] text-muted-foreground">{i.note}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* TRUST + STATS */}
        <section className="py-20 md:py-24">
          <SectionHeading
            eyebrow="(k) — Trust"
            title="Why Companies Choose Optiline Mada"
            className="mb-10"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p) => (
              <div key={p} className="rounded-lg border border-line bg-card p-4 text-[14px] text-foreground">
                {p}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-line bg-blue/6 p-5">
                <p className="font-mono text-[15px] font-medium text-foreground">{s.value}</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-muted-foreground">
            Figures will be published once the official data is confirmed.
          </p>
        </section>

        {/* TESTIMONIALS — placeholders */}
        <section className="border-t border-border py-20 md:py-24">
          <SectionHeading eyebrow="(l) — Clients" title="What Our Clients Say" className="mb-10" />
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <blockquote key={n} className="rounded-xl border border-dashed border-line bg-paper/60 p-6">
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  [Client testimonial placeholder {n} — to be replaced with a real, approved client
                  quote.]
                </p>
                <footer className="mt-4 text-[12.5px] text-muted-foreground/80">
                  [Name, role, company — to be provided]
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
