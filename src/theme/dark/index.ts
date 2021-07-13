import { createTheme } from '@material-ui/core';
import { Components } from '@material-ui/core/styles/components';
import { Shadows } from '@material-ui/core/styles/shadows';
import { BREAK_POINTS, BORDER_RADIUS } from '../globalStyles';
import palette from './palette';
import typography from '../typography';
import shadows from './shadows';
import componentsOverride from '../overrides';

const components: Components = componentsOverride({
  theme: {
    palette,
    shadows: (shadows as unknown) as Shadows,
    typography,
    shape: BORDER_RADIUS,
  },
});

const themeOptions = {
  palette,
  typography,
  shadows: (shadows as unknown) as Shadows,
  components,
  breakpoints: BREAK_POINTS,
  shape: BORDER_RADIUS,
};

export default createTheme(themeOptions);
