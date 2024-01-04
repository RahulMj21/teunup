import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entryPoints: ["index.ts"],
    clean: true,
    minify: true,
    dts: true,
    format: ["cjs"],
    ...options,
}));
