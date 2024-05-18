import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import eslint from "vite-plugin-eslint";
import UniPages from "@uni-helper/vite-plugin-uni-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UniPages(),
    uni(),
    eslint({
      emitWarning: true,
      emitError: true
    })
  ]
});
