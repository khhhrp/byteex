import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName:
        mode === "development" ? "[local]--[hash:base64:3]" : undefined,
    },
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
}));
