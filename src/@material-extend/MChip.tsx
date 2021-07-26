import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Chip, useTheme } from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';
import { alpha, emphasize } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ChipProps } from '@material-ui/core';

type MChipClassName =
  | 'colorInfo'
  | 'clickableColorInfo'
  | 'deletableColorInfo'
  | 'colorSuccess'
  | 'clickableColorSuccess'
  | 'deletableColorSuccess'
  | 'colorError'
  | 'clickableColorError'
  | 'deletableColorError'
  | 'outlinedInfo'
  | 'outlinedSuccess'
  | 'outlinedWarning'
  | 'outlinedError';

export type MChipProps = {
  classes?: Object;
  className?: string;
  color?: MColor;
  clickableProp: boolean;
  onDeleteProp: () => void;
} & ChipProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  // Filled
  const styleFilled = (color: MStyledColor) => {
    return {
      backgroundColor: theme.palette[color].main,
      color: theme.palette[color].contrastText,
      '& .MuiChip-deleteIcon': {
        color: alpha(theme.palette[color].contrastText, 0.7),
        '&:hover, &:active': {
          color: theme.palette[color].contrastText,
        },
      },
      '& .MuiChip-avatar': {
        color: theme.palette[color].light,
        // color: theme.palette[color].lighter,
        backgroundColor: theme.palette[color].dark,
      },
      '& .MuiChip-icon': {
        color: 'inherit',
      },
    };
  };
  const styleFilledClickable = (color: MStyledColor) => {
    return {
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette[color].main, 0.08),
      },
    };
  };
  const styleFilledDeletable = (color: MStyledColor) => {
    return {
      '&:focus': {
        backgroundColor: emphasize(theme.palette[color].main, 0.2),
      },
    };
  };

  // Outlined
  const styleOutlined = (color: MStyledColor) => {
    return {
      color: theme.palette[color].main,
      border: `1px solid ${theme.palette[color].main}`,
      backgroundColor: 'transparent',
      '&:focus, .MuiChip-clickable&:hover': {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        ),
      },
      '& .MuiChip-deleteIcon': {
        color: alpha(theme.palette[color].main, 0.7),
        '&:hover, &:active': {
          color: theme.palette[color].main,
        },
      },
    };
  };

  return {
    // Filled
    colorInfo: styleFilled('info'),
    clickableColorInfo: styleFilledClickable('info'),
    deletableColorInfo: styleFilledDeletable('info'),

    colorSuccess: styleFilled('success'),
    clickableColorSuccess: styleFilledClickable('success'),
    deletableColorSuccess: styleFilledDeletable('success'),

    colorWarning: styleFilled('warning'),
    clickableColorWarning: styleFilledClickable('warning'),
    deletableColorWarning: styleFilledDeletable('warning'),

    colorError: styleFilled('error'),
    clickableColorError: styleFilledClickable('error'),
    deletableColorError: styleFilledDeletable('error'),

    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
  };
});

// ----------------------------------------------------------------------

const Mchip = forwardRef<unknown, MChipProps>(
  (
    {
      color,
      variant = 'filled',
      clickable: clickableProp,
      onDelete: onDeleteProp,
      className,
      ...other
    },
    ref
  ) => {
    const classes = useStyles();

    const colorStyle = `color${capitalize(color as MColor)}` as MChipClassName;

    const clickableStyle = `clickableColor${capitalize(
      color as MColor
    )}` as MChipClassName;

    const deletableStyle = `deletableColor${capitalize(
      color as MColor
    )}` as MChipClassName;

    const chipColorClass = classes[colorStyle];
    const chipClickableClass = classes[clickableStyle];
    const chipDeleteClass = classes[deletableStyle];

    if (color === 'default' || color === 'primary' || color === 'secondary') {
      return (
        <Chip
          ref={ref as React.MutableRefObject<HTMLDivElement>}
          color={color}
          variant={variant}
          clickable={clickableProp && clickableProp}
          onDelete={onDeleteProp && onDeleteProp}
          className={className}
          {...other}
        />
      );
    }

    return (
      <Chip
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        variant={variant}
        clickable={clickableProp && clickableProp}
        onDelete={onDeleteProp && onDeleteProp}
        className={clsx(
          chipColorClass,
          {
            [chipColorClass]: color,
            [chipClickableClass]: clickableProp && color,
            [chipDeleteClass]: onDeleteProp && color,
            [classes.outlinedInfo]: variant === 'outlined' && color === 'info',
            [classes.outlinedSuccess]:
              variant === 'outlined' && color === 'success',
            [classes.outlinedWarning]:
              variant === 'outlined' && color === 'warning',
            [classes.outlinedError]:
              variant === 'outlined' && color === 'error',
          },
          className
        )}
        {...other}
      />
    );
  }
);

export default Mchip;
