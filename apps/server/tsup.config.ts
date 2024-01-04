import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    entry: ["src/index.ts"],
    format: ["cjs"],
    minify: true,
    clean: true,
    ...options,
}));
