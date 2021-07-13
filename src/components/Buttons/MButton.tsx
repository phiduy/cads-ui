import React from 'react';
import { Button, ButtonProps, capitalize } from '@material-ui/core';
import { useTheme, alpha } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
// ----------------------------------------------------------------------

type MButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type MButtonStyledColor = 'info' | 'success' | 'warning' | 'error';

type MVariantClassName =
  | 'containedInfo'
  | 'containedSuccess'
  | 'containedWarning'
  | 'containedError'
  | 'containedWhite'
  | 'outlinedInfo'
  | 'outlinedSuccess'
  | 'outlinedWarning'
  | 'outlinedError'
  | 'textInfo'
  | 'textSuccess'
  | 'textWarning'
  | 'textError';

type MButtonType = 'contained' | 'outlined' | 'text';

// ----------------------------------------------------------------------

export type MButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: MButtonColor;
  variant?: MButtonType;
  loading: boolean;
} & ButtonProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const shadows = (theme.shadows as unknown) as Shadows;

  const styleContained = (color: MButtonStyledColor) => {
    return {
      boxShadow: shadows[25][color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark,
      },
    };
  };

  const styleOutlined = (color: MButtonStyledColor) => {
    return {
      color: theme.palette[color].main,
      border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
      '&:hover': {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
    };
  };

  const textOutlined = (color: MButtonStyledColor) => {
    return {
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
    };
  };
  return {
    // Contained
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    containedWhite: {
      boxShadow: shadows[25].z8,
      color: theme.palette.getContrastText(theme.palette.common.white),
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[300],
      },
    },
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Text
    textInfo: textOutlined('info'),
    textSuccess: textOutlined('success'),
    textWarning: textOutlined('warning'),
    textError: textOutlined('error'),
  };
});

const MButton: React.ForwardRefRenderFunction<unknown, MButtonProps> = (
  props,
  ref
) => {
  const {
    color,
    variant = 'contained',
    children,
    className,
    loading = false,
    size,
    ...other
  } = props;
  const classes = useStyles();
  const variantStyle = `${variant}${capitalize(
    color as MButtonColor
  )}` as MVariantClassName;

  const buttonClass = classes[variantStyle];

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return (
      <Button
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        color={color}
        variant={variant}
        className={className}
        size={size}
        {...other}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      variant={variant}
      className={clsx(
        {
          [buttonClass]: color,
        },
        className
      )}
      {...other}
    >
      {children}
    </Button>
  );
};

export default React.forwardRef<unknown, MButtonProps>(MButton);
