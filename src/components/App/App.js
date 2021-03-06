import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { Link, Navigation } from '../common';
import GlobalStyles from './GlobalStyles';
import pageRegistry from './pageRegistry';

const pages = [pageRegistry.green, pageRegistry.blue, pageRegistry.skyBlue];

const pageNavigationDefault = [
  {
    name: 'Home Page',
    path: '/',
  },
  ...pages.map(page => ({
    name: page.name,
    path: page.path,
  })),
];

const renderSiteNavigation = (
  props,
  pageNavigation = pageNavigationDefault
) => (
  <Navigation {...props}>
    {pageNavigation.map(({ path, name }) => (
      <Link key={name} to={path}>
        {name}
      </Link>
    ))}
  </Navigation>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect
            to={{
              pathname: pageRegistry.green.path,
            }}
          />
        </Route>
        <>
          <GlobalStyles />
          {pages.map(({ component: Component, name, path }) => (
            <Route key={name} path={path}>
              <Component renderNav={renderSiteNavigation} />
            </Route>
          ))}
        </>
      </Switch>
    </Router>
  );
};

export default App;
