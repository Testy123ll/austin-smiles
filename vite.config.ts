import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use esbuild for minification (faster than terser, already included)
    minify: "esbuild",
    // Inline small assets as base64 to save round trips
    assetsInlineLimit: 4096,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Raise chunk warning threshold (informational only)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps initial bundle tiny
        manualChunks: (id) => {
          // Core vendor (react, react-dom)
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "vendor-react";
          }
          // Router
          if (
            id.includes("node_modules/react-router-dom") ||
            id.includes("node_modules/react-router/")
          ) {
            return "vendor-router";
          }
          // Framer Motion — large, lazy-loaded by modals/animations
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
          // All radix-ui components in one chunk
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          // Lucide icons
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
          // Recharts + date-fns (heavy, rarely needed on landing)
          if (
            id.includes("node_modules/recharts") ||
            id.includes("node_modules/date-fns") ||
            id.includes("node_modules/d3-")
          ) {
            return "vendor-charts";
          }
          // All other node_modules
          if (id.includes("node_modules/")) {
            return "vendor-misc";
          }
        },
        // Stable filenames with content hashes for long-lived caching
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
