import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import eslint from "vite-plugin-eslint"; /* vite eslit 编译的时候提示 */
import UniPages from "@uni-helper/vite-plugin-uni-pages";
import AutoImport from "unplugin-auto-import/vite"; /* 自动导入 */

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = await import("unocss/vite").then((i) => i.default);
  return {
    plugins: [
      uni(),
      UniPages({
        subPackages: ["src/pages-sub"]
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        exclude: ["node_modules", "dist"],
        // dirs: ['src/composables', 'src/hooks'], /* 指定一个或多个目录，插件会扫描这些目录中的文件，自动导入这些文件中导出的模块。 */
        dirs: ["./src/store/modules", "./src/composables", "./src/store"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
        }
      }),
      eslint({
        emitWarning: true,
        emitError: true
      }),
      UnoCSS()
    ]
  };
});
