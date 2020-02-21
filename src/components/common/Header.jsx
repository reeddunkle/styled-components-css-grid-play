import styled from 'styled-components';

import { media, theme } from '../../styles';

const Header = styled.header`
  background-color: ${theme.colors.lightblue};
  font-size: 40px;
  grid-area: ${props => props.gridArea};

  ${media.atLeast('largeMobile')} {
    background-color: ${theme.colors.tan};
    font-size: 50px;
  }

  ${media.atLeast('tablet')} {
    background-color: ${theme.colors.lightred};
    font-size: 65px;
  }

  ${media.atLeast('desktop')} {
    background-color: ${theme.colors.rose};
    font-size: 80px;
  }
`;

export default Header;
