import "../src/index.css";
import "./styles.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
