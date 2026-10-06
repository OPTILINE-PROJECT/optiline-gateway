import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Optiline Mada" },
      {
        name: "description",
        content: "How Optiline Mada collects, uses and protects the personal data submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Optiline Mada" },
      { property: "og:description", content: "Our approach to personal data and privacy." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage page="privacy" />;
}
