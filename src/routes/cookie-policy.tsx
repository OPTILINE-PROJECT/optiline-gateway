import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CookiePreferences } from "@/components/CookiePreferences";
import { cookieCopy } from "@/i18n/cookies";
import { useLanguage } from "@/i18n/language";

export const Route = createFileRoute("/cookie-policy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Cookie Policy — Optiline Mada" },
      {
        name: "description",
        content: "Which cookies this website uses, what they do and how to accept or decline them.",
      },
      { property: "og:title", content: "Cookie Policy — Optiline Mada" },
      { property: "og:description", content: "Cookies used on the Optiline Mada website." },
      { property: "og:url", content: "/cookie-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  const { lang } = useLanguage();
  const c = cookieCopy(lang);
  return <LegalPage page="cookies" preferences={<section aria-label={c.settings} className="space-y-4 border-y border-line py-6" data-no-translate><h2 className="text-xl font-bold text-foreground">{c.settings}</h2><CookiePreferences /></section>} />;
}
