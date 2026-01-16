import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]]
      }
    })
  ],
  css: {
    modules: {
      generateScopedName: "[local]--[hash:base64:3]"
    },
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
});
