import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;
  position: relative;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  display: block;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: #ff6347;
    color: #fff;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo to="/">Flower Farm</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
