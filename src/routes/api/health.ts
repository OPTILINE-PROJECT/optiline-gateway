import { createFileRoute } from "@tanstack/react-router";

/** Public health check for uptime monitoring. Returns no private data. */
export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { status: "ok", service: "optiline-mada", timestamp: new Date().toISOString() },
          { headers: { "Cache-Control": "no-store" } },
        ),
    },
  },
});
