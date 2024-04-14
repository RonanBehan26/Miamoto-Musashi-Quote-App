import React, { useState } from 'react';

import {
  Box,
  Row,
  Container,
  Column,
  Heading
} from "./HomeElements";
  
const Home = () => {

  const [quote, setQuote] = useState(""); // State to store the generated quote
  //let navigate = useNavigate(); 

  // Function to generate a random quote
  const generateQuote = () => {
    // Fetch a random quote from the backend API
    //fetch('http://localhost:8080/api/v1/random/quote')
    fetch('http://3.255.105.188:8080/api/v1/random/quote')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        return response.json();
      })
      .then(data => {
        // Extract the random quote from the response data
        const randomQuote = data.quoteText;
        setQuote(randomQuote); // Update the quote state with the fetched quote
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        // Handle error condition, such as displaying an error message to the user
      });
  };

  return (
    <div className='body'>   
      <h1 style={{ color: "red", textAlign: "center" }}>
        Musashi's Place
      </h1>
      <h2 style={{ color: "red", textAlign: "center" }}>
        One stop shop for quotes from the master of war.
      </h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px" }}>
        <button onClick={generateQuote} style={{ color: "blue", textAlign: "center" }}>
          Get a new quote
        </button>  
      </div> 
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Quote</Heading>
              {/* Display the generated quote */}
              <p style={{ textAlign: "center", color: "red" }}>{quote}</p>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
 );
};
  
export default Home;