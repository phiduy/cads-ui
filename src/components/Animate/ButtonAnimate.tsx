import React, { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { varSmallClick } from './variants';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

export type ButtonAnimateProps = {
  children: React.ReactNode;
  className?: string;
  small?: boolean;
};

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
  },
}));

// ----------------------------------------------------------------------

const ButtonAnimate: FC<ButtonAnimateProps> = (props) => {
  const { children, className, ...other } = props;
  const classes = useStyles();

  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={varSmallClick}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Box>
  );
};

export default ButtonAnimate;
