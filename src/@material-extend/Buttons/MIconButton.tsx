import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { alpha, useTheme } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { IconButton, IconButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ButtonAnimate } from '../../components/Animate';

type MIconButtonClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError'
  | 'colorWhite';

export type MIconButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: MColor;
} & IconButtonProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: MButtonStyledColor) => {
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
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error'),
    colorWhite: {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: alpha(
          theme.palette.common.white,
          theme.palette.action.hoverOpacity
        ),
      },
    },
  };
});

// ----------------------------------------------------------------------

const MIconButton = forwardRef<unknown, MIconButtonProps>((props, ref) => {
  const { color = 'default', children, className, ...other } = props;
  const classes = useStyles();
  const isDefault = color === 'default';

  const variantStyle = `color${capitalize(
    color as MColor
  )}` as MIconButtonClassName;

  if (
    color === 'default' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary'
  ) {
    return (
      <ButtonAnimate>
        <IconButton
          ref={ref as React.MutableRefObject<HTMLButtonElement>}
          color={color}
          className={className}
          {...other}
        >
          {children}
        </IconButton>
      </ButtonAnimate>
    );
  }

  return (
    <ButtonAnimate>
      <IconButton
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        className={clsx(
          {
            [classes[variantStyle]]: !isDefault,
          },
          className
        )}
        {...other}
      >
        {children}
      </IconButton>
    </ButtonAnimate>
  );
});

export default MIconButton;
