module.exports = {
    // Type check TypeScript files
    "**/*.(ts|tsx)": () => "pnpm exec tsc --noEmit",

    // Lint then format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": (filenames) => [
        `pnpm run lint`,
        `pnpm dlx prettier --write ${filenames.join(" ")}`,
    ],

    // Format MarkDown and JSON
    "**/*.(md|json)": (filenames) =>
        `pnpm dlx prettier --write ${filenames.join(" ")}`,
};
