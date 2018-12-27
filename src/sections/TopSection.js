import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';
import Text from '../components/Text';
import H2 from '../components/H2';
import Section from '../components/Section';

const StyledSection = styled(Section)`
  background-attachment: fixed;
  background-image: url("images/overlay.png"), url("images/team2.png");
  background-position: center top;
  background-size: cover;
  line-height: 1.75;
  text-align: center;
  background-position: 0 90px;
  padding: 16em 0 4em 0;

  @media only screen and (max-width: 1000px) {
    background-position: 0;
    background-position: center;
    padding: 5em 0 4em 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #E16B34;
`;

const TopSection = () => (
  <StyledSection>
    <H2>Smokie's Butcher Shop</H2>
    <Text><Link href="tel:(931) 295-3525">(931) 295-3525</Link></Text>
    <Text>Smokie’s offers a wide variety of meats and deli items at a competitive price.</Text>
    <ButtonLink href="#menu" color="#E16B34" hover="">View Featured Items</ButtonLink>
  </StyledSection>
);

export default TopSection;