import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// ----------------------------------------------------------------------

type MButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

// type MButtonStyledColor = "info" | "success" | "warning" | "error"

type MButtonType = 'contained' | 'outlined' | 'text';

// ----------------------------------------------------------------------

export type MButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: MButtonColor;
  variant?: MButtonType;
  loading?: boolean;
} & ButtonProps;

// ----------------------------------------------------------------------

const MButton: React.ForwardRefRenderFunction<unknown, MButtonProps> = (
  props,
  ref
) => {
  const {
    color,
    variant = 'contained',
    children,
    className,
    loading,
    size,
    ...other
  } = props;
  const theme = useTheme();
  console.log(theme);

  return (
    <Button
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      color={color}
      variant={variant}
      className={className}
      {...other}
    >
      {children}
    </Button>
  );
};

export default React.forwardRef<unknown, MButtonProps>(MButton);
