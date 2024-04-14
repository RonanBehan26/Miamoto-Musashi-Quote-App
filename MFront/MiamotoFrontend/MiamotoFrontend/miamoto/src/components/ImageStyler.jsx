
import styled from 'styled-components'; // Import styled-components

// Styled component for the container div
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 85px); /* Subtract the height of the footer from the viewport height */
`;

// Styled component for the image
const StyledImage = styled.img`
  max-width: 100%; /* Make sure the image doesn't exceed its container */
  height: auto; /* Maintain the aspect ratio */
`;