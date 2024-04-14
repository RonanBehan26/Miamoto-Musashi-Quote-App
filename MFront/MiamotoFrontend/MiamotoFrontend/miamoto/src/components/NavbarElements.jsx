import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// Styled Nav component
export const Nav = styled.nav`
  background: #FF2400; // Sets background color to scarlet
  height: 85px; // Sets the height of the navigation bar
  display: flex; // Uses flexbox layout
  justify-content: space-between; // Distributes space evenly between items
  align-items: center; // Centers items vertically
  padding: 0 2rem; // Adds padding to the sides of the navigation bar
  z-index: 12; // Sets the stacking order
`;

// Styled NavLink component
export const NavLink = styled(Link)`
  color: #2C3E50; // Sets the default color of the link
  text-decoration: none; // Removes underline from links
  margin: 0 1rem; // Adds margin around the link
  font-size: 1.6rem; // Sets the font size of the link
  cursor: pointer; // Changes cursor to pointer on hover
  &:hover {
    color: #000000; // Changes color of the link on hover
  }
`;

// Styled Bars component
export const Bars = styled(FaBars)`
  display: none; // Hides the bars icon by default
  color: #808080; // Sets the color of the bars icon
  @media screen and (max-width: 768px) {
    display: block; // Shows the bars icon on smaller screens
    position: absolute; // Positions the icon absolutely
    top: 0;
    right: 0;
    transform: translate(-100%, 75%); // Moves the icon off-screen
    font-size: 1.8rem; // Sets the font size of the icon
    cursor: pointer; // Changes cursor to pointer on hover
  }
`;

// Styled NavMenu component
export const NavMenu = styled.div`
  display: flex; // Uses flexbox layout
  justify-content: center; // Centers the navigation links horizontally
  align-items: center; // Centers items vertically
  flex-grow: 1; // Allows the links to take up remaining space
`;

// Styled NavBtn component
export const NavBtn = styled.nav`
  display: flex; // Uses flexbox layout
  align-items: center; // Aligns items vertically
`;

// Styled NavBtnLink component
export const NavBtnLink = styled(Link)`
  border-radius: 4px; // Adds border radius to the button
  background: #808080; // Sets background color of the button
  padding: 10px 22px; // Adds padding to the button
  color: #000000; // Sets the color of the button text
  outline: none; // Removes outline when button is clicked
  border: none; // Removes border from the button
  cursor: pointer; // Changes cursor to pointer on hover
  transition: all 0.2s ease-in-out; // Adds transition effect
  text-decoration: none; // Removes underline from the button text
  margin-left: 24px; // Adds margin to the left side of the button
  &:hover {
    transition: all 0.2s ease-in-out; // Adds transition effect on hover
    background: #2C3E50; // Changes background color on hover
    color: #808080; // Changes text color on hover
  }
`;
