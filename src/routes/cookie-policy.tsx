import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
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
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return <LegalPage page="cookies" />;
}
