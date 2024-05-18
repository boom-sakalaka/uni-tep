import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslint({
      emitWarning: true,
      emitError: true
    })
  ]
});
