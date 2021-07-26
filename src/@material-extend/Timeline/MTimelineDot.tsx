import React, { FC } from 'react';
import clsx from 'clsx';
import { capitalize } from '@material-ui/core/utils';
import { TimelineDot, TimelineDotProps } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core';

type MTimelineDotClassName =
  | 'filledInfo'
  | 'filledSuccess'
  | 'filledWarning'
  | 'filledError'
  | 'outlinedInfo'
  | 'outlinedSuccess'
  | 'outlinedWarning'
  | 'outlinedError';

export type MTimelineDotProps = {
  classes?: Object;
  className?: string;
  color?:
    | 'grey'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
} & TimelineDotProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    // Filled
    filledInfo: { backgroundColor: theme.palette.info.main },
    filledSuccess: { backgroundColor: theme.palette.success.main },
    filledWarning: { backgroundColor: theme.palette.warning.main },
    filledError: { backgroundColor: theme.palette.error.main },

    // Outlined
    outlinedInfo: { borderColor: theme.palette.info.main },
    outlinedSuccess: { borderColor: theme.palette.success.main },
    outlinedWarning: { borderColor: theme.palette.warning.main },
    outlinedError: { borderColor: theme.palette.error.main },
  };
});

// ----------------------------------------------------------------------

const MTimelineDot: FC<MTimelineDotProps> = ({
  color = 'grey',
  variant = 'default',
  className,
  ...other
}) => {
  const classes = useStyles();

  const variantStyle = `color${capitalize(
    color as MColor
  )}` as MTimelineDotClassName;

  const timelineColor = classes[variantStyle];

  if (
    color === 'grey' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary'
  ) {
    return (
      <TimelineDot
        color={color}
        variant={variant}
        className={className}
        {...other}
      />
    );
  }

  return (
    <TimelineDot
      variant={variant}
      className={clsx(
        timelineColor,
        {
          [timelineColor]: color,
        },

        className
      )}
      {...other}
    />
  );
};

export default MTimelineDot;
