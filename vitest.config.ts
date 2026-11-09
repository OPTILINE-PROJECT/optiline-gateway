import { defineConfig } from "vitest/config";

// leads.functions.test.ts runs under vitest.leads.config.ts instead — it must
// avoid the framework RPC transform applied to server-function modules.
export default defineConfig({
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["src/lib/leads.functions.test.ts", "node_modules/**"],
  },
});
