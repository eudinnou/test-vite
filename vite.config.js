import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
      include: [
        /App.jsx$/,
      ],
    }),
  ],
  build: {
    assetsDir: "static",
    outDir: "dist",
    sourcemap: true,
    target: "esnext",
  },
});
