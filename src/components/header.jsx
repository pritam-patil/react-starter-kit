import React from 'react';
import { object } from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MoreVert as OptionsIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { APP_NAME } from '../constants';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    maxHeight: 60,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  moreButton: {
    marginRight: 0,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            {APP_NAME}
          </Typography>
          <IconButton className={classes.moreButton} color="inherit" aria-label="More">
            <OptionsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
