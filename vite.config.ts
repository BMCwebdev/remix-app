import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import styleX from "vite-plugin-stylex";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    styleX({
      libraries: ['@bmcwebdev/rac-stylex', '@bmcwebdev/rac-stylex-tokens'],
    }),
    tsconfigPaths()
  ],
});
