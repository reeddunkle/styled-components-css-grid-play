import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  --blue-600: #0077cc;
  border: 0;
  border-radius: 1000px;
  box-sizing: border-box;
  color: var(--black-600);
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: 100%;
  list-style: none;
  margin: 0;
  padding: 6px 16px;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: baseline;
`;

export default LinkButton;
