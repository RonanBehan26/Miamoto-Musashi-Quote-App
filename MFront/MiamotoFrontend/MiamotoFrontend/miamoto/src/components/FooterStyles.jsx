// FooterStyles.js

import styled from 'styled-components';

export const Box = styled.div`
  background: black;

  color: white;
  position: fixed; /* Set position to fixed */
  bottom: 0; /* Stick to the bottom of the viewport */
  width: 100%; /* Take up full width */
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

export const FooterLink = styled.a`
  color: white;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
