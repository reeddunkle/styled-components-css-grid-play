import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Navigation } from '../common';
import pageRegistry from './pageRegistry';

const pages = [pageRegistry.green, pageRegistry.blue, pageRegistry.skyBlue];

const pageNavigationDefault = [
  {
    path: '/',
    name: 'Home Page',
  },
  ...pages.map(page => ({
    path: page.path,
    name: page.name,
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
        {pages.map(({ component: Component, name, path }) => (
          <Route key={name} path={path}>
            <Component renderNav={renderSiteNavigation} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
