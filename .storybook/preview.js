import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import { ThemeProvider as SBThemeProvider } from '@storybook/theming';
import { BrowserRouter } from 'react-router-dom';
import { themeConfig } from '../src/theme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <SBThemeProvider theme={themeConfig('light')}>
        <ThemeProvider theme={themeConfig('light')}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ThemeProvider>
      </SBThemeProvider>
    </StyledEngineProvider>
  ),
];
