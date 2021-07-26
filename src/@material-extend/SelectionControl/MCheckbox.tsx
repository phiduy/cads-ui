import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { alpha, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { capitalize } from '@material-ui/core/utils';
import { Checkbox } from '@material-ui/core';
import { CheckboxProps } from '@material-ui/core';

// ----------------------------------------------------------------------

type MCheckboxClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

export type MCheckboxProps = {
  classes?: Object;
  className?: string;
  color?: MColor;
} & CheckboxProps;

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: MStyledColor) => {
    return {
      '&.Mui-checked': {
        color: theme.palette[color].main,
      },
      '&.MuiCheckbox-indeterminate': {
        color: theme.palette[color].main,
      },
      '&:hover, &.Mui-checked:hover': {
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
  };
});

// ----------------------------------------------------------------------

const MCheckbox = forwardRef<unknown, MCheckboxProps>(
  ({ color = 'primary', className, ...other }, ref) => {
    const classes = useStyles();

    const variantStyle = `color${capitalize(
      color as MColor
    )}` as MCheckboxClassName;

    const checkboxClass = classes[variantStyle];

    if (color === 'default' || color === 'primary' || color === 'secondary') {
      return (
        <Checkbox
          ref={ref as React.MutableRefObject<HTMLButtonElement>}
          color={color}
          className={className}
          {...other}
        />
      );
    }

    return (
      <Checkbox
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        className={clsx(
          {
            [checkboxClass]: color,
          },
          className
        )}
        {...other}
      />
    );
  }
);

export default MCheckbox;
