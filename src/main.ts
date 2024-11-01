import { createSSRApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import { usePinia } from "@/store/setup";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = usePinia(app);
  return {
    app,
    pinia
  };
}
