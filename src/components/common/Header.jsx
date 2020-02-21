import styled from 'styled-components';
import { media } from '../../styles';

const Header = styled.header`
  font-size: 40px;
  grid-area: ${props => props.gridArea};

  ${media.small} {
    font-size: 50px;
  }

  ${media.medium} {
    font-size: 65px;
  }

  ${media.large} {
    font-size: 80px;
  }
`;

export default Header;
