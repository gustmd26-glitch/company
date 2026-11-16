import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 주소(https://gustmd26-glitch.github.io/company/)에 맞춘 경로
  base: "/company/",
  server: { port: 5173, open: true },
});
