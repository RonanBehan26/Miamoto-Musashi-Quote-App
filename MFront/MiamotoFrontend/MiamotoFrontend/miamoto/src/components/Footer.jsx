import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                    }}>
        Miamoto Musashi
      </h1>
      
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Aims</FooterLink>
          </Column>
          <Column>
            <Heading>About Musashi</Heading>
            <FooterLink href="#">Life and Writings</FooterLink>
          </Column>
          <Column>
            <Heading>Why study the master</Heading>
            <FooterLink href="#">Master yourself</FooterLink>

          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;