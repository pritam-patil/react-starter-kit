import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: theme.spacing.unit * 5,
  },
});

const PageLoader = ({ classes }) => {
  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

PageLoader.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(PageLoader);
