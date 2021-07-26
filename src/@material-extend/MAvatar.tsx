import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Avatar, useTheme, AvatarProps } from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/styles';

type MAvatarClassName =
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

export type MAvatarProps = {
  children: React.ReactNode;
  classes?: Object;
  className?: string;
  color?: MColor;
} & AvatarProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();

  const createStyle = (color: 'primary' | 'secondary' | MStyledColor) => {
    return {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    };
  };

  return {
    root: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    colorPrimary: createStyle('primary'),
    colorSecondary: createStyle('secondary'),
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error'),
  };
});

// ----------------------------------------------------------------------

const MAvatar = forwardRef<unknown, MAvatarProps>(
  ({ color = 'default', children, className, ...other }, ref) => {
    const classes = useStyles();
    const variantStyle = `color${capitalize(
      color as MColor
    )}` as MAvatarClassName;

    const avatarClass = classes[variantStyle];

    return (
      <Avatar
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        className={clsx(
          classes.root,
          {
            [avatarClass]: color,
          },
          className
        )}
        {...other}
      >
        {children}
      </Avatar>
    );
  }
);

export default MAvatar;
