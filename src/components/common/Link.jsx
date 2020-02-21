import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(LinkBase)`
  &:hover {
    cursor: pointer;
  }
`;

export default Link;
