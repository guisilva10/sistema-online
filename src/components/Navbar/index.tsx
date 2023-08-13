"use client"

import React, { useState } from 'react';
import styled from 'styled-components';

interface NavbarProps {
  links: { label: string; href: string }[];
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000080;
  color: white;
  transition: 0.3s all;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const NavbarLogo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const NavbarLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;

  

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background-color: #000800;
    padding: 10px;
  }
`;

const NavbarLink = styled.a`
  font-size: 18px;
  color: #fff;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavbarToggle = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;


  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo href="/">Logo</NavbarLogo>
      <NavbarToggle onClick={toggleNavbar}>
        {isOpen ? '×' : '☰'}
      </NavbarToggle>
      <NavbarLinks isOpen={isOpen}>
        {links.map((link, index) => (
          <NavbarLink key={index} href={link.href}>
            {link.label}
          </NavbarLink>
        ))}
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
