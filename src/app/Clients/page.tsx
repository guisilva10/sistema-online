import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/Clients.module.scss'
import SideBar from '@/components/SideBar';

const Clients = () => {
    const links = [
        { label: 'Home', href: '/Home' },
    
      ];
    
  return (
    <>
    <Navbar links={links}/>
    <h1 className={styles.title}>Pagína de Clientes</h1>
    <SideBar/>
    </>
  )
}

export default Clients