import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    tsconfigPaths: true,
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    // @luizcastro-dev/ui is a linked workspace package, so vite doesn't crawl
    // it at startup and discovers its @base-ui imports mid-session. The late
    // re-optimize leaves the page holding two react instances and hooks crash
    // ("Cannot read properties of null"). Crawl the ui sources up front so
    // every component's deps get pre-bundled with the first pass.
    entries: ["index.html", "../../packages/ui/src/components/*.tsx"],
  },
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
