import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/js/main.jsx",
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].css",
      },
    },
  },
});
