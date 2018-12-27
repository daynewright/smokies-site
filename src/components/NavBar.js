import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  height: inherit;
  line-height: inherit;
  position: absolute;
  right: 1.25em;
  top: 0;
  vertical-align: middle;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const Li = styled.li`
  border-radius: 4px;
  display: inline-block;
  margin-left: 2.5em;
  padding-left: 0;
`;

const Link = styled.a`
  transition: color 0.2s ease-in-out;
  color: #666;
  display: inline-block;
  text-decoration: none;

  &:hover {
    color: #484848;
  }
`;

const NavBar = () => (
  <Nav>
    <Ul>
      <Li><Link href="#">Home</Link></Li>
      <Li><Link href="#menu">Menu</Link></Li>
      <Li><Link href="#contactUs">Contact Us</Link></Li>
    </Ul>
  </Nav>
);

export default NavBar;