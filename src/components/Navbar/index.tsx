"use client"

import React, { useState } from 'react';
import { NavbarContainer, NavbarLogo, NavbarToggle, NavbarLinks, NavbarLink } from './styles';

interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo href="/">
        Admin
      </NavbarLogo>
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
