import styled from 'styled-components';

const ButtonLink = styled.a`
  background-color: ${props => props.color ? props.color : '#323037'};
  color: #FFF;
  display: inline-block;
  font-size: 1em;
  border-radius: 4px;
  border: 0;
  font-weight: 700;
  height: 3.15em;
  line-height: 3.25em;
  padding: 0 2.2em;
  text-decoration: none;
  text-transform: uppercase;
  margin: 5px 25px;

  $:hover {
    background-color: ${props => props.hover ? props.hover: '#3e3c45'};
  }

  @media only screen and (max-width: 1000px) {
    font-size: .95em;
  }
`;

export default ButtonLink;