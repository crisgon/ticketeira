import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/app/styles/themes/default";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
);

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [withThemeProvider];
