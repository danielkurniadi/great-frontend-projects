import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../packages/ui/**/*.mdx", "../packages/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // Storybook Composition. See https://storybook.js.org/docs/sharing/storybook-composition
  refs: (config, { configType }) => {
    const marketingStorybookUrl =
      configType === "DEVELOPMENT" ? "http://localhost:7006" : "marketing/";
    // add more sub-storybook ...
    return {
      marketing: {
        title: "Marketing Storybook",
        url: marketingStorybookUrl,
      },
    };
  },
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;
