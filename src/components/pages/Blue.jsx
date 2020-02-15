import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import { Aside, Footer, Header, Section } from "../common";

const Layout = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "header"
    "nav"
    "section"
    "aside-1"
    "aside-2"
    "footer";

  & > * {
    --blue: #3a789e;
    background-color: var(--blue);
    border: 1px solid black;
    font-family: Roboto;
    text-align: center;
  }

  ${media.small} {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "aside-1 section"
      "aside-2 footer";
  }

  ${media.medium} {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header header"
      "nav section aside-1"
      "nav section aside-2"
      "footer footer footer";
  }
`;

const Blue = ({ renderNav }) => {
  return (
    <Layout>
      <Header gridArea="header">Blue</Header>
      {renderNav({ gridArea: "nav" })}
      <Aside gridArea="aside-1">Aside 1</Aside>
      <Section gridArea="section">Section</Section>
      <Aside gridArea="aside-2">Aside 2</Aside>
      <Footer gridArea="footer">Footer</Footer>
    </Layout>
  );
};

export default Blue;
