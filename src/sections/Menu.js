import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import H2 from '../components/H2';
import Text from '../components/Text';

const Table = styled.table`
  margin: 10px auto;
  text-align: left;
  width: 85%;

`;

const StyledText = styled(Text)`
  margin: 10px;

  @media only screen and (max-width: 725px) {
    font-size: 1em;
    margin: 0;
  }
`;

const Menu = () => (
  <Section id="menu">
    <H2 color="#484848">FEATURED ITEMS</H2>
    <StyledText>Choice beef - grass feed, grain finished</StyledText>
    <StyledText>Deli Sandwichs - Premuim Meat, made to order daily</StyledText>
    <Table className="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th colSpan="2">Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="pure-table-odd">
          <td colSpan="3"><b>STEAKS:</b></td>
        </tr>
        <tr>
          <td colSpan="2">Filet Mignon</td>
          <td>$16.39/lb</td>
        </tr>
        <tr>
          <td colSpan="2">Porterhouse</td>
          <td>$10.89/lb</td>
        </tr>
        <tr>
          <td colSpan="2">T-Bone</td>
          <td>$10.69/lb</td>
        </tr>
        <tr>
          <td colSpan="2">Ribeye</td>
          <td>$12.08/lb</td>
        </tr>
        <tr className="pure-table-odd">
        <td colSpan="3"><b>DELI ITEMS:</b></td>
        </tr>
        <tr>
          <td colSpan="2">Cajun Turkey Sandwich</td>
          <td>$4.09</td>
        </tr>
        <tr>
          <td colSpan="2">Mesquite Turkey Sandwich</td>
          <td>$4.09</td>
        </tr>
        <tr>
          <td colSpan="2">BBQ Ham Sandwich</td>
          <td>$4.09</td>
        </tr>
        <tr>
          <td colSpan="2">Chicken Sandwich</td>
          <td>$3.69</td>
        </tr>
        <tr>
          <td colSpan="2">Roast Beef Sandwich</td>
          <td>$4.89</td>
        </tr>
        <tr>
          <td colSpan="2">Ham Sandwich</td>
          <td>$3.99</td>
        </tr>
        <tr>
          <td colSpan="2">Corn Beef Sandwich</td>
          <td>$5.29</td>
        </tr>
        <tr>
          <td colSpan="2">Reuben Sandwich</td>
          <td>$5.99</td>
        </tr>
        <tr>
          <td colSpan="2">Bologna Sandwich</td>
          <td>$3.09</td>
        </tr>
      </tbody>
    </Table>
  </Section>
);

export default Menu;