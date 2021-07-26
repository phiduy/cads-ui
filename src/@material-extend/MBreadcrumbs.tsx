import React, { FC } from 'react';
import { last } from 'lodash';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Link,
  Breadcrumbs,
  BreadcrumbsProps,
  useTheme,
} from '@material-ui/core';

type MBreadcrumbLinkProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export type MBreadcrumbsProps = {
  activeLast?: boolean;
  className?: string;
  links: MBreadcrumbLinkProps[];
} & BreadcrumbsProps;

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      '& $separator': {
        width: 4,
        height: 4,
        borderRadius: '50%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        backgroundColor: theme.palette.text.disabled,
      },
    },
    link: {
      lineHeight: 2,
      display: 'flex',
      alignItems: 'center',
      '& > div': { display: 'inherit' },
      '& svg': { width: 20, height: 20 },
    },
    separator: {},
  };
});

// ----------------------------------------------------------------------

const LinkItem = ({ link }: { link: MBreadcrumbLinkProps }) => {
  const classes = useStyles();
  const { href, name, icon } = link;
  return (
    <Link
      to={href}
      key={name}
      variant="body2"
      color="textPrimary"
      component={RouterLink}
      className={classes.link}
    >
      {icon && <Box sx={{ mr: 1 }}> {icon} </Box>}
      {name}
    </Link>
  );
};

const MBreadcrumbs: FC<MBreadcrumbsProps> = ({
  links,
  activeLast = false,
  className,
  ...other
}) => {
  const classes = useStyles();
  const currentLink = last(links)?.name;

  const listDefault = links.map((link) => <LinkItem link={link} />);
  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Box
          component="p"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            typography: 'body2',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Box>
      )}
    </div>
  ));

  return (
    <Breadcrumbs
      separator={<span />}
      classes={{ separator: classes.separator }}
      className={clsx(classes.root, className)}
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
};

export default MBreadcrumbs;
