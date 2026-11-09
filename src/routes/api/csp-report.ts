import { createFileRoute } from "@tanstack/react-router";

/**
 * Receives Content-Security-Policy violation reports (Report-Only phase).
 * Logs the violation for review; stores nothing and returns no data.
 */
export const Route = createFileRoute("/api/csp-report")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const report = body?.["csp-report"];
          if (report && typeof report === "object") {
            console.warn(
              "CSP violation:",
              JSON.stringify({
                directive: report["violated-directive"],
                blocked: report["blocked-uri"],
                document: report["document-uri"],
              }),
            );
          }
        } catch {
          // Malformed report — ignore.
        }
        return new Response(null, { status: 204 });
      },
    },
  },
});
