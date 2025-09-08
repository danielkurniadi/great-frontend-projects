/* eslint-disable sort-keys-fix/sort-keys-fix */

/**
 * Prettier preset configuration
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const preset = {
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  useTabs: false,
  singleQuote: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  bracketSameLine: false,
  endOfLine: "auto",
  arrowParens: "always",
  trailingComma: "all",
};

/**
 * @type {import("prettier").Config}
 */
module.exports = {
  ...preset,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindAttributes: ["classNames"],
  tailwindFunctions: ["tv", "clsx", "cn"],
};
