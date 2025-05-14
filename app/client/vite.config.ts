import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

const PROXY_URL =
  process.platform === "win32"
    ? "http://127.0.0.1:18940"
    : "http://localhost:18940";

export default defineConfig({
  clearScreen: false,
  server: {
    port: 1894,
    proxy: {
      "/api": PROXY_URL,
    },
  },
  plugins: [react(), reactRefresh()],
  root: "./src",
  base: "/",
  publicDir: "assets",
  build: {
    outDir: "../build",
    emptyOutDir: true, // also necessary
  },
  resolve: {
    alias: {
      modules: "/modules",
      shared: "/shared",
    },
  },
});
