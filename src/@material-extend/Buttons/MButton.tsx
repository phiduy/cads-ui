import React, { forwardRef } from 'react';
import { Button, ButtonProps, capitalize } from '@material-ui/core';
import { useTheme, alpha } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { ClassNames } from '@emotion/react';
// ----------------------------------------------------------------------

export type MButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: MColor;
  variant?: MButtonType;
  loading?: boolean;
  block?: boolean;
} & ButtonProps;

// ----------------------------------------------------------------------

let blockStyle = `
width: 100%
`;

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const shadows = (theme.shadows as unknown) as Shadows;

  const styleContained = (color: MStyledColor) => {
    return {
      boxShadow: shadows[25][color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark,
      },
    };
  };

  const styleOutlined = (color: MStyledColor) => {
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

  const textOutlined = (color: MStyledColor) => {
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

const MButton = forwardRef<unknown, MButtonProps>(
  (props: MButtonProps, ref) => {
    const {
      color = 'primary',
      variant = 'contained',
      children,
      className,
      loading = false,
      block = false,
      size = 'medium',
      disabled,
      ...other
    } = props;
    const classes = useStyles();
    const variantStyle = `${variant}${capitalize(
      color as MColor
    )}` as MVariantClassName;

    const buttonClass = classes[variantStyle];

    if (color === 'inherit' || color === 'primary' || color === 'secondary') {
      return (
        <ClassNames>
          {({ css }) => (
            <Button
              ref={ref as React.MutableRefObject<HTMLButtonElement>}
              color={color}
              variant={variant}
              className={clsx(
                {
                  [css`
                    ${blockStyle}
                  `]: block,
                },
                className
              )}
              size={size}
              disabled={disabled || loading}
              {...other}
            >
              {children}
            </Button>
          )}
        </ClassNames>
      );
    }

    return (
      <ClassNames>
        {({ css }) => (
          <Button
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            variant={variant}
            className={clsx(
              {
                [css`
                  ${blockStyle}
                `]: block,
              },
              {
                [buttonClass]: color,
              },
              className
            )}
            disabled={disabled || loading}
            {...other}
          >
            {children}
          </Button>
        )}
      </ClassNames>
    );
  }
);

export default MButton;
