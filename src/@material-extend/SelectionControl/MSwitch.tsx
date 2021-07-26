import React, { FC } from 'react';
import clsx from 'clsx';
import { alpha } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { Switch, SwitchProps, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type MSwitchClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

export type MSwitchProps = {
  classes?: Object;
  className?: string;
  color?: MColor;
} & SwitchProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: MStyledColor) => {
    return {
      '& .Mui-checked': {
        color: theme.palette[color].main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          ),
        },
      },
      '& .Mui-checked + .MuiSwitch-track': {
        backgroundColor: theme.palette[color].main,
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

const MSwitch: FC<MSwitchProps> = ({
  color = 'primary',
  className,
  ...other
}) => {
  const classes = useStyles();

  const variantStyle = `color${capitalize(
    color as MColor
  )}` as MSwitchClassName;

  const switchColor = classes[variantStyle];

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return <Switch color={color} className={className} {...other} />;
  }

  return (
    <Switch
      className={clsx(
        {
          [switchColor]: color,
        },
        className
      )}
      {...other}
    />
  );
};

export default MSwitch;
