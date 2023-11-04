import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    build: {
    outDir: "build",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["@google-cloud/functions-framework", "@google-cloud/logging"],
    },
  },
  test: {
    coverage: {
      enabled: false,
      provider: "v8",
    },
    environment: "node",
    globals: true,
    include: ["./src/**/*.test.ts"],
  },
});
