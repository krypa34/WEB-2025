import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/unitypay": {
        target: "https://old-pay.unityfinance.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/unitypay/, "")
      }
    }
  },
  preview: {
    port: 4173
  },
  build: {
    outDir: "dist",
    sourcemap: true
  }
});
