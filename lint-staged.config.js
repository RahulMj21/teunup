module.exports = {
  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `pnpm dlx eslint --fix ${filenames.join(" ")}`,
    `pnpm dlx prettier --write ${filenames.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `pnpm dlx prettier --write ${filenames.join(" ")}`,
};
