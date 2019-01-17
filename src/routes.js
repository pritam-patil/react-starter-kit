import React, { lazy, Suspense } from 'react';
import { object } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './containers';
import PageLoader from './components/page-loader';

const NoMatchPage = lazy(() => import('./components/no-match'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <HomeScreen />} />
        <Route render={() => <NoMatchPage />} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: object,
};

export default Routes;
