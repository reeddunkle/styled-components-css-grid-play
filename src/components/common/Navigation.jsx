import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles';

const NavLayout = styled.nav`
  grid-area: ${props => props.gridArea};
  background-color: #c4beab;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.atLeast('largeMobile')} {
    display: flex;
    justify-content: space-between;
  }

  ${media.atLeast('tablet')} {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 5px;
`;

const Navigation = ({ children, ...props }) => {
  return (
    <NavLayout {...props}>
      <NavList>
        {React.Children.map(children, child => (
          <NavItem>{React.cloneElement(child)}</NavItem>
        ))}
      </NavList>
    </NavLayout>
  );
};

export default Navigation;
