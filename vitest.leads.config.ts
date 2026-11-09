import { defineConfig } from "vitest/config";

// Run server-handler unit tests without the framework's RPC transform.
export default defineConfig({ test: { environment: "node", include: ["src/lib/leads.functions.test.ts"] } });