import { defineConfig } from "@rslib/core";

const shared = {
  root: "src/index.ts",
};

export default defineConfig({
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
