import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  z-index: 1000; /* Ensure it stays above other elements */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  &:hover {
    color: #ff6347;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 50px; /* Adjust based on Navbar height */
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000; /* Ensure it stays above other elements */
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  display: block;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>Flower Farm</Logo>
        <BurgerIcon onClick={toggleDropdown}>
          {/* &#9776; Unicode for hamburger icon */}
        </BurgerIcon>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/flowers">Flowers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
		  <NavLink to="/Gallery">Gallery</NavLink>
        </NavLinks>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownLink to="/">Home</DropdownLink>
            <DropdownLink to="/about">About</DropdownLink>
            <DropdownLink to="/flowers">Flowers</DropdownLink>
            <DropdownLink to="/contact">Contact</DropdownLink>
			<DropdownLink to="/Gallery">Gallery</DropdownLink>
          </DropdownMenu>
        )}
      </NavbarContainer>
      {/* Placeholder to ensure content doesn't overlap the Navbar */}
      <div style={{ height: '60px' }} />
    </>
  );
};

export default Navbar;
