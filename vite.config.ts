import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        extention: resolve(__dirname, "extention.html"),
        page: resolve(__dirname, "page.html"),
      },
    },
  },
});
