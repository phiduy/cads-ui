import * as React from 'react';
import clsx from 'clsx';
import {
  CircularProgress,
  CircularProgressProps,
  useTheme,
} from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/styles';

type MCircularProgressClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

export type MCircularProgressProps = {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: number | string;
  value?: number;
  thickness?: number;
  variant?: 'determinate' | 'indeterminate';
  className?: string;
} & CircularProgressProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    colorInfo: { color: theme.palette.info.main },
    colorSuccess: { color: theme.palette.success.main },
    colorWarning: { color: theme.palette.warning.main },
    colorError: { color: theme.palette.error.main },
  };
});

// ----------------------------------------------------------------------

export const MCircularProgress: React.FC<MCircularProgressProps> = (props) => {
  const { color = 'primary', className, ...other } = props;
  const classes = useStyles();

  const variantStyle = `color${capitalize(
    color as MColor
  )}` as MCircularProgressClassName;

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return <CircularProgress color={color} className={className} {...other} />;
  }

  return (
    <CircularProgress
      color={color}
      className={clsx(
        {
          [classes[variantStyle]]: color,
        },
        className
      )}
      {...other}
    />
  );
};

export default MCircularProgress;
