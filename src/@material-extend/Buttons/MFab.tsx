import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/styles';
import { Fab, FabProps, useTheme } from '@material-ui/core';
import { ButtonAnimate } from '../../components';

export type MFabProps = {
  children?: React.ReactNode;
  className?: string;
  color?: MColor;
} & FabProps;

type MFabClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const shadows = (theme.shadows as unknown) as Shadows;

  const createStyle = (color: MStyledColor) => {
    return {
      boxShadow: shadows[25][color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark,
      },
    };
  };

  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error'),
  };
});

// ----------------------------------------------------------------------

const MFab = forwardRef<unknown, MFabProps>((props, ref) => {
  const { color = 'primary', children, className, ...other } = props;
  const classes = useStyles();

  const variantStyle = `color${capitalize(
    color as MColor
  )}` as MFabClassName;

  if (
    color === 'default' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary'
  ) {
    return (
      <ButtonAnimate>
        <Fab
          ref={ref as React.MutableRefObject<HTMLButtonElement>}
          color={color}
          className={className}
          {...other}
        >
          {children}
        </Fab>
      </ButtonAnimate>
    );
  }

  return (
    <ButtonAnimate>
      <Fab
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        className={clsx(
          {
            [classes[variantStyle]]: color,
          },
          className
        )}
        {...other}
      >
        {children}
      </Fab>
    </ButtonAnimate>
  );
});

export default MFab;
