import { BREAK_POINTS } from './globalStyles';
import { alpha } from '@material-ui/core/styles';

export const createGradient = (color1: string, color2: string): string => {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
};

export const getShadowColors = (palette: any): ShadowColor => {
  const BASE_LIGHT: string = palette.grey['500'] as string;
  const BASE_DARK = '#000000';

  const onLight1 = alpha(BASE_LIGHT, 0.2);
  const onLight2 = alpha(BASE_LIGHT, 0.14);
  const onLight3 = alpha(BASE_LIGHT, 0.12);

  const onDark1 = alpha(BASE_DARK, 0.2);
  const onDark2 = alpha(BASE_DARK, 0.14);
  const onDark3 = alpha(BASE_DARK, 0.12);

  const PRIMARY = `0 8px 16px 0 ${alpha(palette.primary?.main, 0.24)}`;
  const INFO = `0 8px 16px 0 ${alpha(palette.info?.main, 0.24)}`;
  const SUCCESS = `0 8px 16px 0 ${alpha(palette.success?.main, 0.24)}`;
  const WARNING = `0 8px 16px 0 ${alpha(palette.warning?.main, 0.24)}`;
  const ERROR = `0 8px 16px 0 ${alpha(palette.error?.main, 0.24)}`;

  const customDarkShadow = {
    z1: `0 1px 2px 0 ${alpha(BASE_DARK, 0.24)}`,
    z8: `0 8px 16px 0 ${alpha(BASE_DARK, 0.24)}`,
    z12: `0 0 2px 0 ${alpha(BASE_DARK, 0.24)}, 0 12px 24px 0 ${alpha(
      BASE_DARK,
      0.24
    )}`,
    z16: `0 0 2px 0 ${alpha(BASE_DARK, 0.24)}, 0 16px 32px -4px ${alpha(
      BASE_DARK,
      0.24
    )}`,
    z20: `0 0 2px 0 ${alpha(BASE_DARK, 0.24)}, 0 20px 40px -4px ${alpha(
      BASE_DARK,
      0.24
    )}`,
    z24: `0 0 4px 0 ${alpha(BASE_DARK, 0.24)}, 0 24px 48px 0 ${alpha(
      BASE_DARK,
      0.24
    )}`,
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
  };

  const customLightShadow = {
    z1: `0 1px 2px 0 ${alpha(BASE_LIGHT, 0.24)}`,
    z8: `0 8px 16px 0 ${alpha(BASE_LIGHT, 0.24)}`,
    z12: `0 0 2px 0 ${alpha(BASE_LIGHT, 0.24)}, 0 12px 24px 0 ${alpha(
      BASE_LIGHT,
      0.24
    )}`,
    z16: `0 0 2px 0 ${alpha(BASE_LIGHT, 0.24)}, 0 16px 32px -4px ${alpha(
      BASE_LIGHT,
      0.24
    )}`,
    z20: `0 0 2px 0 ${alpha(BASE_LIGHT, 0.24)}, 0 20px 40px -4px ${alpha(
      BASE_LIGHT,
      0.24
    )}`,
    z24: `0 0 4px 0 ${alpha(BASE_LIGHT, 0.24)}, 0 24px 48px 0 ${alpha(
      BASE_LIGHT,
      0.24
    )}`,
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
  };

  return {
    BASE_LIGHT,
    BASE_DARK,
    PRIMARY,
    INFO,
    SUCCESS,
    WARNING,
    ERROR,
    customLightShadow,
    customDarkShadow,
    onLight1,
    onLight2,
    onLight3,
    onDark1,
    onDark2,
    onDark3,
  };
};

export const remToPx = (value: string): Number => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value: number): string => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = ({
  sm,
  md,
  lg,
}: Record<'sm' | 'md' | 'lg', number>) => {
  return {
    [BREAK_POINTS.values.sm]: { fontSize: pxToRem(sm) },
    [BREAK_POINTS.values.md]: { fontSize: pxToRem(md) },
    [BREAK_POINTS.values.lg]: { fontSize: pxToRem(lg) },
  };
};
