import { PaletteMode } from '@material-ui/core';
import {
  PRIMARY,
  SECONDARY,
  INFO,
  SUCCESS,
  WARNING,
  ERROR,
  GREY,
  GRADIENTS,
} from '../globalStyles';

const darkPalette = {
  // DARK
  mode: 'dark' as PaletteMode,
  primary: {
    lighter: PRIMARY.lighter,
    light: PRIMARY.light,
    main: PRIMARY.main,
    dark: PRIMARY.dark,
    darker: PRIMARY.darker,
    contrastText: '#fff',
  },
  secondary: {
    lighter: SECONDARY.lighter,
    light: SECONDARY.light,
    main: SECONDARY.main,
    dark: SECONDARY.dark,
    darker: SECONDARY.darker,
    contrastText: '#fff',
  },
  info: {
    lighter: INFO.lighter,
    light: INFO.light,
    main: INFO.main,
    dark: INFO.dark,
    darker: INFO.darker,
    contrastText: '#fff',
  },
  success: {
    lighter: SUCCESS.lighter,
    light: SUCCESS.light,
    main: SUCCESS.main,
    dark: SUCCESS.dark,
    darker: SUCCESS.darker,
    contrastText: GREY[800],
  },
  warning: {
    lighter: WARNING.lighter,
    light: WARNING.light,
    main: WARNING.main,
    dark: WARNING.dark,
    darker: WARNING.darker,
    contrastText: GREY[800],
  },
  error: {
    lighter: ERROR.lighter,
    light: ERROR.light,
    main: ERROR.main,
    dark: ERROR.dark,
    darker: ERROR.darker,
    contrastText: '#fff',
  },

  grey: GREY,
  gradients: GRADIENTS,

  text: {
    primary: '#fff',
    secondary: GREY[500],
    disabled: GREY[600],
  },

  divider: GREY[500_24],

  background: {
    paper: GREY[800],
    default: GREY[900],
    neutral: GREY[500_16],
  },

  action: {
    active: GREY[500],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default darkPalette;
