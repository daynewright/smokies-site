import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 2em 0;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  color: #666;
  font-weight: 700;
  text-transform: uppercase;
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Content>
        &copy; {year} Smokie's Butcher Shop
      </Content>
    </StyledFooter>
  );
};

export default Footer;
