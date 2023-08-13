"use client"

import Navbar from "@/components/Navbar"

const HomePage = () => {
  const links = [
    { label: 'Home', href: '/Home' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <Navbar links={links} /> {/* Use o componente Navbar aqui */}
      <h1>Olá Admin, Seja Bem Vindo!</h1>
    </div>
  )
}

export default HomePage