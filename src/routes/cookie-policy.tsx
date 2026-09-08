import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";

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
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <div className="mx-auto max-w-6xl px-6">
        <article className="max-w-[70ch] space-y-6 py-16 text-[15px] leading-relaxed text-muted-foreground md:py-20">
          <h2 className="text-[19px] font-bold text-foreground">Essential storage</h2>
          <p>
            We store your language choice and your cookie decision in your browser so the site
            behaves consistently on your next visit. These are required for the site to work.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Measurement cookies</h2>
          <p>
            Audience measurement tools (such as Google Analytics) are not active unless they are
            enabled in the site configuration and you have accepted non-essential cookies.
          </p>
          <h2 className="text-[19px] font-bold text-foreground">Your choice</h2>
          <p>
            You can accept or decline non-essential cookies in the banner shown on your first visit.
            To change your decision, clear this site's data in your browser and reload the page.
          </p>
          <p className="rounded-xl border border-dashed border-line bg-paper/60 p-5">
            [This text is a working draft and should be reviewed by Optiline Mada's legal advisor,
            and updated with the exact list of tools once analytics are activated.]
          </p>
        </article>
      </div>
    </>
  );
}
