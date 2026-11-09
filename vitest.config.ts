import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// leads.functions.test.ts runs under vitest.leads.config.ts instead — it must
// avoid the framework RPC transform applied to server-function modules.
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [
    {
      name: "stub-static-assets",
      enforce: "pre",
      load(id) {
        if (/\.(jpg|jpeg|png|svg|webp|gif|avif)$/.test(id)) return "export default ''";
        return null;
      },
    },
  ],
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["src/lib/leads.functions.test.ts", "node_modules/**"],
  },
});
