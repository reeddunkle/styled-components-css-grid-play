import styled from 'styled-components';
import { media } from '../../styles';

const Header = styled.header`
  background-color: #9dc4cc;
  font-size: 40px;
  grid-area: ${props => props.gridArea};

  ${media.small} {
    background-color: #a3874b;
    font-size: 50px;
  }

  ${media.medium} {
    background-color: #d1b5a9;
    font-size: 65px;
  }

  ${media.large} {
    background-color: #d1a9c0;
    font-size: 80px;
  }
`;

export default Header;
