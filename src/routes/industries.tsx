import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
  staticData: { sitemap: false },
  component: IndustriesLayout,
});

function IndustriesLayout() {
  return <Outlet />;
}
