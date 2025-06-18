import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import {resolve} from 'path'
// import alias from '@rollup/plugin-alias'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // }
});
