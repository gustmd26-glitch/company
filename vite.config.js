import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages(GitHub Actions 빌드)는 /company/ 아래, Vercel과 로컬은 루트(/)에서 열림
  base: process.env.GITHUB_ACTIONS ? "/company/" : "/",
  server: { port: 5173, open: true },
});
