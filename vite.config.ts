import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    define: {
      "process.env": { ...env },
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/custom-bootstrap.scss";`,
        },
      },
    },
  });
};
