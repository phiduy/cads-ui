import clsx from 'clsx';
import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core';

type MIconClassName =
  | 'colorInitial'
  | 'colorInherit'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorInfo'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError'
  | 'colorPaper';

type MIconColor =
  | 'initial'
  | 'inherit'
  | 'action'
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'paper';

export type MIconProps = {
  classes?: Object;
  className?: string;
  color?: MIconColor;
  src: string;
  size?: number;
};

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  const createStyle = (color: any) => {
    return {
      '& svg path': { fill: color },
    };
  };

  return {
    root: {
      lineHeight: 0,
      '& svg': { height: '100%' },
    },
    colorInitial: {},
    colorInherit: createStyle('currentColor'),
    colorAction: createStyle(theme.palette.action.active),
    colorDisabled: createStyle(theme.palette.action.disabled),
    colorPrimary: createStyle(theme.palette.primary.main),
    colorSecondary: createStyle(theme.palette.secondary.main),
    colorInfo: createStyle(theme.palette.info.main),
    colorSuccess: createStyle(theme.palette.success.main),
    colorWarning: createStyle(theme.palette.warning.main),
    colorError: createStyle(theme.palette.error.main),
    colorPaper: createStyle(theme.palette.background.paper),
  };
});

// ----------------------------------------------------------------------

const MIcon: FC<MIconProps> = ({
  src,
  color = 'inherit',
  size = 24,
  className,
  ...other
}) => {
  const classes = useStyles();

  const colorStyle = `color${capitalize(color as MColor)}` as MIconClassName;

  const iconClass = classes[colorStyle];

  return (
    <ReactSVG
      src={src}
      beforeInjection={(svg: {
        setAttribute: (arg0: string, arg1: string) => void;
      }) => {
        svg.setAttribute('style', `width: ${size}px`);
      }}
      className={clsx(
        classes.root,
        {
          [iconClass]: color,
        },
        className
      )}
      {...other}
    />
  );
};

export default MIcon;
