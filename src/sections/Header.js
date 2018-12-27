import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: solid 1px rgba(144, 144, 144, 0.25);
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.05);
  color: #484848;
  cursor: default;
  font-size: 1.25em;
  height: 4.5em;
  left: 0;
  line-height: 4.4em;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const H1 = styled.h1`
  color: #484848;
  font-weight: 400;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  font-size: 1em;
`;

const StrongLink = styled.a`
  color: #484848;
  text-decoration: none;
  font-weight: 700;
`;

const Header = () => (
  <StyledHeader>
    <H1>
      <StrongLink href="#">Smokie's Butcher Shop //</StrongLink> Hohenwald, Tennessee
    </H1>
    <NavBar />
  </StyledHeader>
);

export default Header;