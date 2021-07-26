import React, { FC } from 'react';
import clsx from 'clsx';
import { alpha } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { Radio, useTheme, RadioProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type MRadioClassName =
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError';

export type MRadioProps = {
  classes?: Object;
  className?: string;
  color?: MColor;
} & RadioProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: MStyledColor) => {
    return {
      '&.Mui-checked': {
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

const MRadio: FC<MRadioProps> = ({
  color = 'primary',
  className,
  ...other
}) => {
  const classes = useStyles();

  const variantStyle = `color${capitalize(color as MColor)}` as MRadioClassName;
  const radioClass = classes[variantStyle];

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return <Radio color={color} className={className} {...other} />;
  }

  return (
    <Radio
      className={clsx(
        {
          [radioClass]: color,
        },
        className
      )}
      {...other}
    />
  );
};

export default MRadio;
