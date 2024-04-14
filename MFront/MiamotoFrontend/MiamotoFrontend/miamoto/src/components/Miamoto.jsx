import React from 'react';
import styled from 'styled-components';
import musashiImage from './musashi.jpg';
import { Row } from './FooterStyles'; // Import the Row component from FooterStyles

const ImageContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MusashiImage = styled.img`
  max-height: 40vh;
  width: auto;

  @media (max-width: 768px) {
    max-height: 20vh; /* Adjust height for smaller screens */
  }
`;

const MiamotoImage = () => {
  return (
    <Row style={{ marginBottom: '40px' }}> {/* Add margin to push the image above the footer */}
      <ImageContainer>
        <MusashiImage src={musashiImage} alt="Miyamoto Musashi" />
        <MusashiImage src={musashiImage} alt="Miyamoto Musashi" />
        <MusashiImage src={musashiImage} alt="Miyamoto Musashi" />
        <MusashiImage src={musashiImage} alt="Miyamoto Musashi" />
        <MusashiImage src={musashiImage} alt="Miyamoto Musashi" />
      </ImageContainer>
    </Row>
  );
};

export default MiamotoImage;
