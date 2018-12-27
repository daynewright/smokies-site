import styled from 'styled-components';

const H2 = styled.h2`
color: ${props => props.color ? props.color : '#FFF'};
display: inline-block;
font-size: ${props => props.fontSize ? props.fontSize: '3.5em'};
line-height: 1.35;
margin-bottom: 0.5em;
`;

export default H2;