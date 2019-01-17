import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  wrapper: {
    marginTop: 64,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    paddingBottom: 20,
    height: 100,
  },
  button: {
    marginTop: 16 * 4,
    marginBottom: theme.margin,
  },
});

const NoMatchPage = ({ classes }) => (
  <div className={`container ${classes.wrapper}`}>
    <img className={classes.logo} src="/images/test_icon.svg" alt="site-logo" />
    <Typography variant="display3" gutterBottom>
      404.
    </Typography>
    <Typography variant="title" gutterBottom color="textSecondary">
      This is an error.
    </Typography>
    <Typography variant="body1" gutterBottom color="textSecondary">
      The requested URL was not found.
    </Typography>
    <Typography variant="body1" gutterBottom color="textSecondary">
      This is all we know.
    </Typography>
    <Button component={Link} to="/" variant="contained" color="primary" className={classes.button}>
      Go Back
    </Button>
  </div>
);

NoMatchPage.propTypes = {
  location: PropTypes.object, // react router
  classes: PropTypes.object, // Material UI Injecte
};

export default withStyles(styles)(NoMatchPage);
