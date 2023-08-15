import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
const links = [
  {label: 'Home', href: '/Home'}
]

  return (
    <div>
      <Navbar links={links} />
      <h1>Olá Admin, Seja Bem Vindo! a página de Dashboard</h1>
    </div>
  )
}

export default Dashboard
