import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
  staticData: { sitemap: false },
  component: InsightsLayout,
});

function InsightsLayout() {
  return <Outlet />;
}
