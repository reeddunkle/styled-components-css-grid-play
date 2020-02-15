import React from "react";
import { Navigation } from "../common";
import pageRegistry from "../pageRegistry";

const pageNavigation = [
  {
    path: "/",
    name: "Home Page"
  },
  ...pages.map(page => ({
    path: page.path,
    name: page.name
  }))
];

const Nav = () => {
  return (
    <Navigation {...props}>
      {pageNavigation.map(({ path, name }) => (
        <Link key={name} to={path}>
          {name}
        </Link>
      ))}
    </Navigation>
  );
};
