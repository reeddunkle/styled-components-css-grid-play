import React from "react";
import styled from "styled-components";

import { media } from "../../styles";

const NavLayout = styled.nav`
  grid-area: ${props => props.gridArea};

  & > * {
    background-color: #afc88a;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.small} {
    display: flex;
    justify-content: space-between;
  }

  ${media.medium} {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  --black-800: #242729;
  color: var(--black-800);
  font: inherit;
  font-size: 100%;
  list-style: none;
  margin: 5px;
  vertical-align: baseline;
  padding: 0;
  box-sizing: border-box;
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
