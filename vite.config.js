import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        extention: resolve(__dirname, "extention.html"),
        page: resolve(__dirname, "page.html"),
      },
    },
  },
});
