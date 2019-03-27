import React, { Component } from 'react';
import Client from 'airbrake-js';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  // airbrake init
  client = new Client({
    projectId: 219984,
    projectKey: 'd2baf1e679b9bf1e6ea849654ca333fc',
  });

  state = {
    hasError: false,
  };

  componentDidCatch({ error, info }) {
    this.client.notify({
      error,
      params: { info },
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <span> Oops, something went wrong </span>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.instanceOf(Component).isRequired,
};

export default ErrorBoundary;
