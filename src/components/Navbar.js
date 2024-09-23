import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  position: relative;

  &:hover {
    color: #ff6347;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #ff6347;
      transition: width 0.3s;
      width: 100%;
    }
  }
`;

const BurgerIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 60px; /* Adjust based on Navbar height */
  right: 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  display: block;
  transition: background-color 0.3s;

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
        <Logo>Rift Valley Roses</Logo>
        <BurgerIcon onClick={toggleDropdown}>
          &#9776; {/* Unicode for hamburger icon */}
        </BurgerIcon>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/flowers">Flowers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </NavLinks>
        <DropdownMenu isOpen={isDropdownOpen}>
          <DropdownLink to="/">Home</DropdownLink>
          <DropdownLink to="/about">About</DropdownLink>
          <DropdownLink to="/flowers">Flowers</DropdownLink>
          <DropdownLink to="/contact">Contact</DropdownLink>
          <DropdownLink to="/gallery">Gallery</DropdownLink>
        </DropdownMenu>
      </NavbarContainer>
      <div style={{ height: '60px' }} />
    </>
  );
};

export default Navbar;
