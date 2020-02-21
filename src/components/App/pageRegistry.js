import { startCase } from 'lodash';

import { Blue, Green, SkyBlue } from '../pages';

const makePagePath = ({ name }) => {
  return `/${name.toLowerCase()}`;
};

const createPage = Component => ({
  component: Component,
  name: `${startCase(Component.name)} Page`,
  path: makePagePath(Component),
});

const pages = {
  blue: createPage(Blue),
  green: createPage(Green),
  skyBlue: createPage(SkyBlue),
};

export default pages;
