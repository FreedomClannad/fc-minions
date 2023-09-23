import { defineConfig, ConfigEnv, UserConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from 'path';
import { wrapperEnv } from './src/utils/getEnv.ts';
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig =>{
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  const define = {
    "process.env": process.env
  };
  if (mode.mode === "development") {
    dotenv.config({ path: ".env.development"});
  } else if (mode.mode === "production") {
    dotenv.config({ path: ".env.production"})
  }
  return {
    define: define,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
    },
    plugins: [
      react(),
      createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
      requireTransform({
        fileRegex: /.ts$|.tsx$|.vue$/,
      }),
    ],
  }
});
