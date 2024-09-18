import { defineConfig } from "@rslib/core";

const shared = {
  root: "src/index.ts",
};

export default defineConfig({
  dev: {
    lazyCompilation: true,
  },
  lib: [
    {
      ...shared,
      bundle: true,
      format: "umd",
      output: {
        distPath: {
          root: "./dist",
        },
      },
    },
  ],
  plugins: [],
});
