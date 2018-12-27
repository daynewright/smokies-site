import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import H2 from '../components/H2';
import Text from '../components/Text';
import ImageBlock from '../components/ImageBlock';

const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 725px) {
    flex-direction: column;
  }
`;

const Description = () => (
  <Section color="#f6f6f6">
    <H2 color="#484848" fontSize="2.5em">SMOKIE'S ONLY SERVES THE BEST!</H2>
    <Text>The Best Meat at The Best Quality!</Text>
    <Flex>
      <ImageBlock imageSrc="images/img1.jpg" title="PREMIUM SMOKED MEATS"/>
      <ImageBlock imageSrc="images/img2.jpg" title="TOP QUALITY ROASTS AND STEAKS"/>
    </Flex>
  </Section>

);

export default Description;