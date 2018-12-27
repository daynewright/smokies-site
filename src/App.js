import React from 'react';
import styled from 'styled-components';
import Header from './sections/Header';
import TopSection from './sections/TopSection';
import Description from './sections/Description';
import Menu from './sections/Menu';
import ContantUs from './sections/ContactUs';
import Footer from './sections/Footer';

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    header {
      display: none;
    }
    font-size: .75rem;
  }
`;

const App = () => (
  <Container>
    <Header />
    <TopSection />
    <Description />
    <Menu />
    <ContantUs />
    <Footer />
  </Container>
);

export default App;
