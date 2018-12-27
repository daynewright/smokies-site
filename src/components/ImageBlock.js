import React from 'react';
import styled from 'styled-components';

const Caption = styled.h3`
  background-color: #fff;
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.15);
  padding: 2em 1em;
  color: #666;
  margin: 0;
`;

const Image = styled.img`
  display: block;
  max-width: 700px;
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  margin: 15px;
`;

const ImageBlock = ({ imageSrc, title }) => (
  <Container>
    <Image alt="" src={imageSrc} />
    <Caption>{title}</Caption>
  </Container>
);

export default ImageBlock;