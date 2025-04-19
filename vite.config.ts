import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Listen on all IPv6 and IPv4 addresses
    port: 8080, // Development server port
  },
  plugins: [
    react(),
  ].filter(Boolean), // Filter out false values (e.g., if componentTagger is not included)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to the 'src' folder
    },
  },
  build: {
    outDir: "build", // Output directory for the build
  },
}));
