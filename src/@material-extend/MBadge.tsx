import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { Badge, BadgeProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type MBadgeClassName = 'colorInfo' | 'colorSuccess' | 'colorWarning';

export type MBadgeProps = {
  children: React.ReactNode;
  classes?: Object;
  className?: string;
  color?: MColor;
} & BadgeProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: 'info' | 'warning' | 'success') => {
    return {
      '& .MuiBadge-badge ': {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
      },
    };
  };
  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
  };
});

// ----------------------------------------------------------------------

const MBadge = forwardRef<unknown, MBadgeProps>(
  ({ color = 'default', children, className, ...other }, ref) => {
    const classes = useStyles();

    const variantStyle = `color${capitalize(
      color as MColor
    )}` as MBadgeClassName;

    const badgeClass = classes[variantStyle];

    if (
      color === 'default' ||
      color === 'error' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <Badge
          color={color}
          className={className}
          ref={ref as React.MutableRefObject<HTMLSpanElement>}
          {...other}
        >
          {children}
        </Badge>
      );
    }

    return (
      <Badge
        ref={ref as React.MutableRefObject<HTMLSpanElement>}
        className={clsx(
          {
            [badgeClass]: color,
          },
          className
        )}
        {...other}
      >
        {children}
      </Badge>
    );
  }
);

export default MBadge;
