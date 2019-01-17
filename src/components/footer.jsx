import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  AppBar: {
    top: 'auto',
    bottom: 0,
    minHeight: 44,
    textAlign: 'center',
  },
};

const BottomNav = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.AppBar}>
        <Typography variant="title" color="inherit">
          This is a Material-ui footer!
        </Typography>
      </AppBar>
    </div>
  );
};

BottomNav.propTypes = {
  classes: object,
};

export default withStyles(styles)(BottomNav);
