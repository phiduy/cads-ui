declare module "*.ttf"
declare type Shadows = [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  {
    [x: string]: string
  }
]

declare type GreyColor = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  500_8: string
  500_12: string
  500_16: string
  500_24: string
  500_32: string
  500_48: string
  500_56: string
  500_80: string
}

declare type ShadowColor = {
  customLightShadow: { [x: string]: string }
  customDarkShadow: { [x: string]: string }
  onLight1: string
  onLight2: string
  onLight3: string
  onDark1: string
  onDark2: string
  onDark3: string
  BASE_LIGHT: string
  BASE_DARK: string
  PRIMARY: string
  INFO: string
  SUCCESS: string
  WARNING: string
  ERROR: string
}
