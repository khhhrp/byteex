import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[local]--[hash:base64:3]"
    },
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
});
