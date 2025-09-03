import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://foodierest-production.up.railway.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/specialapi": {
        target: "https://foodierest-production-14ff.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/specialapi/, ""),
      },
    },
    historyApiFallback: true, 
  },
});
