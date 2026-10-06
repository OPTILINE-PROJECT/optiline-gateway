import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoBanner, PhotoDuo } from "@/components/PhotoGallery";
import heroEuro from "@/assets/hero-euro.jpg";
import worldNetworkMap from "@/assets/world-network-map.jpg";
import { useLanguage } from "@/i18n/language";
import { useEffect, useRef, useState } from "react";
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

type Logo = {
  name: string;
  slug?: string; // icône chargée depuis cdn.simpleicons.org
  src?: string; // ton propre fichier dans /public/partners
  flag?: string; // code pays → drapeau chargé depuis flagcdn.com
};

/* Ligne 1 : opérateurs + outils (défile vers la gauche) */
const toolsRow: Logo[] = [
  { name: "Orange", slug: "orange" },
  { name: "Yas", src: "/partners/yas.svg" }, // à confirmer
  { name: "Airtel", slug: "airtel" }, // à confirmer
  { name: "HEROES CRM", src: "/partners/heroes-crm.svg" },
  { name: "Zapier", slug: "zapier" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Zoho", slug: "zoho" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Intercom", slug: "intercom" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Odoo", slug: "odoo" },
  { name: "Twilio", slug: "twilio" },
  { name: "3CX", slug: "3cx" },
  { name: "Asterisk", slug: "asterisk" },
  { name: "RingCentral", slug: "ringcentral" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Slack", slug: "slack" },
  { name: "Zoom", slug: "zoom" },
  { name: "Notion", slug: "notion" },
  { name: "Asana", slug: "asana" },
  { name: "Trello", slug: "trello" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "PrestaShop", slug: "prestashop" },
];

/* Ligne 2 : entreprises + marchés servis (défile vers la droite) */
const companiesRow: Logo[] = [
  { name: "K40", src: "/partners/k40.svg" },
  // ➕ tes vrais clients ici : { name: "Nom", src: "/partners/nom.svg" },
  { name: "France", flag: "fr" },
  { name: "Belgium", flag: "be" },
  { name: "Switzerland", flag: "ch" },
  { name: "Germany", flag: "de" },
  { name: "United Kingdom", flag: "gb" },
  { name: "Canada", flag: "ca" },
  { name: "United States", flag: "us" },
];

function LogoCard({ logo }: { logo: Logo }) {
  const imgSrc = logo.flag
    ? `https://flagcdn.com/w80/${logo.flag}.png`
    : logo.src ?? (logo.slug ? `https://cdn.simpleicons.org/${logo.slug}` : undefined);
  const [failed, setFailed] = useState(!imgSrc);
  const showName = Boolean(logo.slug || logo.flag) || failed;

  return (
    <div className="group flex h-20 min-w-44 shrink-0 items-center justify-center gap-3 rounded-xl border border-line bg-card px-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-elevate">
      {!failed && (
        <img
          src={imgSrc}
          alt={showName ? "" : logo.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className={
            logo.flag
              ? "h-5 w-auto rounded-[3px] shadow-sm"
              : `w-auto max-w-[120px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
                  showName ? "h-6" : "max-h-8"
                }`
          }
        />
      )}
      {showName && (
        <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
          {logo.name}
        </span>
      )}
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  duration = 50,
}: {
  items: Logo[];
  reverse?: boolean;
  duration?: number;
}) {
  // Répète la liste pour que chaque moitié dépasse la largeur de l'écran
  const half = Array.from({ length: Math.max(1, Math.ceil(14 / items.length)) }, () => items).flat();

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className="marquee-track flex w-max hover:[animation-play-state:paused]"
        style={{
          animationName: "marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4">
            {half.map((logo, i) => (
              <LogoCard key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

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
      { name: "twitter:card", content: "summary_large_image" },
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
        <section className="relative grid items-center gap-10 overflow-hidden pb-16 pt-16 md:grid-cols-12 md:gap-10 md:pb-6 md:pt-6">
          <div className="absolute left-0 top-0 h-1 w-28 bg-coral" />
          <div className="absolute left-28 top-0 h-1 w-20 bg-sun" />
          <div className="absolute left-48 top-0 h-1 w-36 bg-accent" />
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
                className="rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-navy-foreground shadow-elevate transition-colors hover:bg-blue"
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
            <div className="relative pb-5 pl-5">
              <span className="absolute bottom-0 left-0 h-3/5 w-3/5 rounded-xl bg-accent" />
              <img
                src={heroEuro}
                width={1024}
                height={1280}
                alt="European manager and Malagasy team lead reviewing work together in a bright office"
                className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-elevate"
              />
              <div className="absolute bottom-10 left-0 border-l-4 border-coral bg-navy px-5 py-4 text-navy-foreground shadow-elevate">
                <p className="font-mono text-[11px] uppercase text-accent">Madagascar</p>
                <p className="mt-1 text-[14px] font-bold">Talent connected to your business</p>
              </div>
            </div>
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

        {/* WHY MADAGASCAR */}
        <section className="section-wash-mint py-10 md:py-10">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>(a) — Why Madagascar</Eyebrow>
              <h2 className="text-balance text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-foreground">
                Local Talent. International Standards.
              </h2>
              <p className="mt-5 max-w-[50ch] text-pretty text-[16px] leading-relaxed text-muted-foreground">
                Madagascar offers a skilled, multilingual workforce, competitive operating costs and
                convenient time-zone alignment with Europe — a professional destination for
                international outsourcing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] font-semibold">
                <span className="rounded-md border border-blue/30 bg-blue/10 px-3.5 py-2 text-foreground">Europe</span>
                <span className="relative h-px w-8 bg-line">
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent animate-brandglow" />
                </span>
                <span className="rounded-md border border-accent/40 bg-accent/8 px-3.5 py-2 text-foreground">
                  Madagascar
                </span>
                <span className="relative h-px w-8 bg-line">
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-blue" />
                </span>
                <span className="rounded-md border border-coral/30 bg-coral/10 px-3.5 py-2 text-foreground">
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
              <div className="overflow-hidden rounded-xl border border-line bg-navy shadow-elevate">
                <img
                  src={worldNetworkMap}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  alt="World map showing Madagascar connected to international business markets"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="grid grid-cols-3 border-t border-navy-foreground/15 bg-navy px-4 py-4 text-center text-navy-foreground">
                  <div className="border-r border-navy-foreground/15 px-2">
                    <span className="mx-auto mb-2 block size-2 rounded-full bg-accent animate-brandglow" />
                    <p className="text-[11px] font-semibold">Madagascar</p>
                  </div>
                  <div className="border-r border-navy-foreground/15 px-2">
                    <span className="mx-auto mb-2 block size-2 rounded-full bg-blue" />
                    <p className="text-[11px] font-semibold">Europe</p>
                  </div>
                  <div className="px-2">
                    <span className="mx-auto mb-2 block size-2 rounded-full bg-navy-foreground/70" />
                    <p className="text-[11px] font-semibold">Global markets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY OPTILINE */}
        <section className="section-wash-blue py-10 md:py-10">
          <SectionHeading
            eyebrow="(b) — Why Optiline Mada"
            title="Everything You Need to Build Your Team in Madagascar"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <FeatureCard key={a.title} title={a.title} text={a.text} tone={a.tone} />
            ))}
          </div>
        </section>

        <PhotoBanner k="teamMeeting" caption="Your dedicated team, managed locally" />
        {/* SOLUTIONS */}
        <section className="py-16 md:py-1">
          <SectionHeading
            eyebrow="(c) — Our solutions"
            title="Flexible Outsourcing Solutions"
            className="mb-12"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {solutions.map((s, index) => (
              <div
                key={s.slug}
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevate ${
                  index === 0 ? "bg-blue/10" : index === 1 ? "bg-mint/55" : "bg-sun/15"
                }`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${index === 0 ? "bg-blue" : index === 1 ? "bg-accent" : "bg-coral"}`} />
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

                {/* mt-auto pousse le bouton en bas : tous les boutons sont alignés */}
                <div className="mt-auto pt-6">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex w-fit cursor-pointer items-center rounded-md border border-line bg-foreground/5 px-4 py-2.5 text-[13.5px] font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-accent/50 hover:bg-foreground/10 hover:shadow active:translate-y-px"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <PhotoBanner k="openOffice" caption="Workspaces ready for your team" />
        {/* WE TAKE CARE OF EVERYTHING */}
        <section className="section-wash-warm py-10 md:py-10">
          <SectionHeading
            eyebrow="(d) — Fully managed"
            title="You Focus on Your Business. We Take Care of the Rest."
            className="mb-12"
          />

          <ManagedStepsLine />
        </section>

        {/* OFFER VISUALISATION */}
        <section className="pb-20 md:pb-24">
          <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 text-navy-foreground md:px-12 md:py-16">
            <div className="absolute inset-x-0 top-0 flex h-2">
              <span className="w-1/2 bg-blue" />
              <span className="w-1/3 bg-accent" />
              <span className="flex-1 bg-coral" />
            </div>
            <div className="relative mb-12 max-w-2xl">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                (e) — How it works
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

        <PhotoBanner k="building" caption="Modern premises in Antsirabe" />
        {/* INFRASTRUCTURE */}
        <section className="section-wash-blue border-t border-border py-10 md:py-10">
          <SectionHeading
            eyebrow="(f) — Infrastructure"
            title="Built for Reliable Operations"
            className="mb-12"
          />

          <KeyFigures />

          <ul className="mt-8 flex flex-wrap gap-2">
            {infrastructure.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-[13.5px] font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-paper"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>  

        <PhotoDuo a="agent" b="developers" />
        {/* TALENT */}
        <section className="py-10 md:py-10">
          <SectionHeading
            eyebrow="(g) — Our talent"
            title="The People Behind Your Operations"
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2">
            {talentProfiles.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-accent/30 bg-mint/55 p-6 sm:flex-row sm:items-center sm:justify-between">
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

        <PhotoBanner k="training" caption="Onboarding & continuous training" />
        {/* HOW IT WORKS — 5 STEPS */}
        <section className="border-t border-border py-10 md:py-10">
          <SectionHeading
            eyebrow="(h) — Process"
            title="From Your Idea to a Fully Operational Team"
            className="mb-12"
          />
          <ol className="grid gap-4 md:grid-cols-5">
            {howItWorks.map((s, index) => (
              <li key={s.n} className={`relative overflow-hidden rounded-xl border border-line p-5 ${index % 3 === 0 ? "bg-blue/8" : index % 3 === 1 ? "bg-mint/50" : "bg-sun/12"}`}>
                <span className={`absolute inset-x-0 top-0 h-1 ${index % 3 === 0 ? "bg-blue" : index % 3 === 1 ? "bg-accent" : "bg-coral"}`} />
                <span className="font-mono text-[12px] text-blue">{s.n}</span>
                <h3 className="mt-2 text-[15px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* TEAM SIZES */}
        <section className="section-wash-warm py-10 md:py-10">
          <SectionHeading
            eyebrow="(i) — Flexible team sizes"
            title="From One Specialist to an Entire Operations Team"
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {teamSizes.map((s, index) => (
              <div key={s.title} className={`rounded-xl border border-line p-6 ${index === 0 ? "bg-blue/10" : index === 1 ? "bg-mint/55" : "bg-coral/8"}`}>
                <p className="font-mono text-[13px] text-blue">{s.range}</p>
                <h3 className="mt-2 text-[18px] font-bold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <PhotoDuo a="officeTeam" b="clientCall" />
        {/* INDUSTRIES */}
        <section className="border-t border-border py-10 md:py-10">
          <div className="mb-10">
            <Eyebrow>(j) — Industries</Eyebrow>
            <h2 className="text-balance text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight text-foreground">
              Supporting Businesses Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.slice(0, 8).map((i, index) => (
              <Link
                key={i.name}
                to="/industries"
                className={`border-l-4 rounded-lg border border-line p-4 transition-colors hover:-translate-y-0.5 hover:shadow-elevate ${index % 4 === 0 ? "border-l-blue bg-blue/8" : index % 4 === 1 ? "border-l-accent bg-mint/45" : index % 4 === 2 ? "border-l-coral bg-coral/8" : "border-l-sun bg-sun/12"}`}
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
        <section className="section-wash-blue py-10 md:py-10">
          <SectionHeading
            eyebrow="(k) — Trust"
            title="Why Companies Choose Optiline Mada"
            className="mb-10"
          />

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Arguments de confiance */}
            <ul className="grid gap-3 lg:col-span-5">
              {trustPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-line bg-card p-4 text-[14px] leading-snug text-foreground transition-colors hover:border-accent/40 hover:bg-paper"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                  >
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Chiffres clés */}
            <TrustStats />
          </div>

          <p className="mt-6 text-[12.5px] text-muted-foreground">
            Figures will be published once the official data is confirmed.
          </p>
        </section>

        {/* COMMITMENTS (replace with real testimonials once approved) */}
        <section className="border-t border-border py-10 md:py-10">
          <SectionHeading
            eyebrow="(l) — Our promise"
            title="Our Commitments to Your Business"
            className="mb-10"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { q: "A dedicated manager follows your team every day and reports to you regularly.", who: "Transparent management", bar: "bg-accent" },
              { q: "Your data and processes are protected with strict access rules and confidentiality agreements.", who: "Security & confidentiality", bar: "bg-coral" },
              { q: "You start small, test the quality, then scale your team at your own pace.", who: "Flexible growth", bar: "bg-sun" },
            ].map((c) => (
              <blockquote key={c.who} className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-elevate">
                <span className={`absolute left-0 top-0 h-1 w-full ${c.bar}`} />
                <p className="text-3xl leading-none text-accent">“</p>
                <p className="mt-2 text-[15px] leading-relaxed">{c.q}</p>
                <footer className="mt-4 text-[13px] font-semibold text-muted-foreground">{c.who}</footer>
              </blockquote>
            ))}
          </div>

          {/* Partenaires & technologies : deux carrousels infinis */}
          <div className="mt-14">
            <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Our partners, operators & technology
            </p>

            <style>{`
              @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
              @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
            `}</style>

            <div className="space-y-4">
              <Marquee items={toolsRow} duration={60} />
              <Marquee items={companiesRow} reverse duration={45} />
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}

function ManagedStepsLine() {
  const [active, setActive] = useState(0);
  const last = managedSteps.length - 1;
  const current = managedSteps[active];

  return (
    <div>
      {/* Ligne d'étapes (défilement horizontal sur mobile) */}
      <div className="overflow-x-auto pb-2">
        <ol className="relative grid min-w-[880px] grid-cols-10">
          {/* Ligne de fond */}
          <span aria-hidden className="absolute left-[5%] right-[5%] top-[18px] h-px bg-line" />
          {/* Ligne de progression */}
          <span
            aria-hidden
            className="absolute left-[5%] top-[18px] h-px bg-blue transition-all duration-500"
            style={{ width: `${(active / last) * 90}%` }}
          />

          {managedSteps.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;

            return (
              <li key={step.n} className="relative flex justify-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  className="group flex cursor-pointer flex-col items-center px-1 text-center outline-none"
                >
                  <span
                    className={`z-10 flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[12px] font-medium transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-blue/40 ${
                      isActive
                        ? "scale-110 border-blue bg-blue text-white shadow-elevate"
                        : isDone
                        ? "border-blue bg-background text-blue"
                        : "border-line bg-background text-muted-foreground group-hover:border-blue/50"
                    }`}
                  >
                    {step.n}
                  </span>
                  <span
                    className={`mt-3 text-[12.5px] font-semibold leading-tight tracking-tight transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Panneau de détail */}
      <div
        key={current.n}
        className="mt-8 flex flex-col gap-5 rounded-xl border border-line bg-background p-6 animate-in fade-in slide-in-from-bottom-1 duration-300 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-2xl">
          <span className="font-mono text-[12px] font-medium text-blue">
            {current.n} / {managedSteps[last].n}
          </span>
          <h3 className="mt-1 text-[18px] font-bold tracking-tight text-foreground">
            {current.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{current.text}</p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            aria-label="Previous step"
            className="rounded-md border border-line bg-foreground/5 px-4 py-2.5 text-[13.5px] font-semibold text-foreground transition-all hover:bg-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => Math.min(last, a + 1))}
            disabled={active === last}
            aria-label="Next step"
            className="rounded-md border border-line bg-foreground/5 px-4 py-2.5 text-[13.5px] font-semibold text-foreground transition-all hover:bg-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

/** Décompose "Up to 10 Gbps" → { prefix: "Up to", number: 10, suffix: " Gbps" } */
function parseValue(value: string) {
  const m = value.match(/^(.*?)(\d[\d,]*)(.*)$/);
  if (!m) return { prefix: "", number: null as number | null, suffix: value };
  return {
    prefix: m[1].trim(),
    number: Number(m[2].replace(/,/g, "")),
    suffix: m[3],
  };
}

function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({ to, start, duration = 1400 }: { to: number; start: boolean; duration?: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{n.toLocaleString("en-US")}</>;
}

function KeyFigures() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 shadow-elevate lg:grid-cols-4"
    >
      {infrastructureStats.map((s) => {
        const { prefix, number, suffix } = parseValue(s.value);
        return (
          <div key={s.label} className="bg-navy px-6 py-10 text-center text-white md:py-12">
            {/* Ligne réservée au préfixe ("Up to") pour garder les chiffres alignés */}
            <p className="h-5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
              {prefix}
            </p>
            <p className="mt-1 font-bold leading-none tracking-tight text-[40px] sm:text-[52px] lg:text-[60px]">
              {number !== null ? <CountUp to={number} start={inView} /> : null}
              <span className="text-[0.55em] font-semibold text-white/80">{suffix}</span>
            </p>
            <span aria-hidden className="mx-auto mt-5 block h-0.5 w-8 rounded-full bg-accent" />
            <p className="mt-4 text-[13.5px] leading-snug text-white/70">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function TrustStats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 lg:col-span-7">
      {stats.map((s, i) => {
        const { prefix, number, suffix } = parseValue(s.value);
        const featured = i === 0;

        return (
          <div
            key={s.label}
            className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate ${
              featured
                ? "col-span-2 border-transparent bg-blue text-white sm:p-8"
                : "border-line bg-card text-foreground"
            }`}
          >
            {prefix && (
              <p className={`text-[12px] font-medium uppercase tracking-[0.14em] ${featured ? "text-white/70" : "text-muted-foreground"}`}>
                {prefix}
              </p>
            )}

            <p
              className={`font-bold leading-none tracking-tight ${
                featured ? "text-[56px] sm:text-[72px]" : "text-[36px] sm:text-[44px]"
              } ${featured ? "" : "text-blue"}`}
            >
              {number !== null ? (
                <>
                  <CountUp to={number} start={inView} />
                  <span className="text-[0.5em] font-semibold opacity-80">{suffix}</span>
                </>
              ) : (
                <span className="text-[0.6em]">{suffix}</span>
              )}
            </p>

            <span
              aria-hidden
              className={`mt-5 block h-0.5 w-8 rounded-full ${featured ? "bg-white/60" : "bg-accent"}`}
            />
            <p className={`mt-3 text-[13.5px] leading-snug ${featured ? "text-white/85" : "text-muted-foreground"}`}>
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}