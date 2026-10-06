import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Optiline Mada" },
      {
        name: "description",
        content: "Terms of use for the Optiline Mada website and the information published on it.",
      },
      { property: "og:title", content: "Terms & Conditions — Optiline Mada" },
      { property: "og:description", content: "Terms of use of this website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage page="terms" />;
}
