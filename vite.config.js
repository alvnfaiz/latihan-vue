import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    new webpack.DefinePlugin({
      "process.env.VUE_APP_VERSION": JSON.stringify(
        process.env.VUE_APP_VERSION || "0.0.0"
      ),
      "process.env.VUE_APP_BUILD_TIME": JSON.stringify(
        process.env.VUE_APP_BUILD_TIME || "0"
      ),
      
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
