import React, { FC, HTMLAttributes, ReactChild } from "react"
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  Theme
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import lightTheme from "./light"
import darkTheme from "./dark"

export const themeConfig = (type: "light" | "dark") => {
  if (type === "light") return lightTheme
  return darkTheme
}

interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild
  theme: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const nextTheme = Object.assign({}, theme)

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={nextTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
