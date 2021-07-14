import React, { FC } from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { ButtonGroup, ButtonGroupProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

export type MButtonGroupProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: MColor;
  variant?: MButtonType;
} & ButtonGroupProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const shadows = (theme.shadows as unknown) as Shadows;

  const styleContained = (color: MButtonStyledColor) => {
    return {
      '& button': {
        boxShadow: shadows[25][color],
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
        '&:hover': {
          backgroundColor: theme.palette[color].dark,
        },
        '&:not(:last-child)': {
          borderColor: theme.palette[color].dark,
        },
      },
    };
  };

  const styleOutlined = (color: MButtonStyledColor) => {
    return {
      '& button': {
        color: theme.palette[color].main,
        border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
        '&:hover': {
          border: `1px solid ${theme.palette[color].main}`,
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          ),
        },
      },
    };
  };

  const textOutlined = (color: MButtonStyledColor) => {
    return {
      '& button': {
        color: theme.palette[color].main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          ),
        },
        '&:not(:last-child)': {
          borderColor: theme.palette[color].main,
        },
      },
    };
  };
  return {
    // Contained
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedWarning: styleOutlined('success'),
    outlinedSuccess: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Text
    textInfo: textOutlined('info'),
    textSuccess: textOutlined('success'),
    textWarning: textOutlined('warning'),
    textError: textOutlined('error'),
  };
});

// ----------------------------------------------------------------------

const MButtonGroup: FC<MButtonGroupProps> = (props: MButtonGroupProps) => {
  const {
    color = 'primary',
    variant = 'outlined',
    size = 'medium',
    children,
    className,
    ...other
  } = props;
  const classes = useStyles();
  const variantStyle = `${variant}${capitalize(
    color as MColor
  )}` as MVariantClassName;

  const buttonGroupClass = classes[variantStyle];

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return (
      <ButtonGroup
        color={color}
        variant={variant}
        className={className}
        size={size}
        {...other}
      >
        {children}
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup
      variant={variant}
      className={clsx(
        {
          [buttonGroupClass]: color,
        },
        className
      )}
      size={size}
      {...other}
    >
      {children}
    </ButtonGroup>
  );
};

export default MButtonGroup;
