import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background: #FCE51E;
  width: 100%;
  position: relative; /* Add relative positioning */
  z-index: 1; /* Ensure the box appears above other content */
`;

export const quoteBox = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  background: black;
  display: flex;
  width: 100%;
  max-width: 1000px; /* Limit the maximum width of the container */
  margin: 0 auto;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
`;

// Styled Heading component
export const Heading = styled.p`
  font-size: 24px;
  color: #ffb3b3;
  margin-bottom: 0; /* Removes bottom margin */
  text-align: center; /* Centers text horizontally */
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

