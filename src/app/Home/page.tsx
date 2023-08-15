

import Navbar from "@/components/Navbar"
import SideBar from "@/components/SideBar";
import styles from '../../styles/Home.module.scss'

const HomePage = () => {
  const links = [
    { label: 'Dashboard', href: '/dashboard' },

  ];

  return (
    <div>
      <Navbar links={links} /> {/* Use o componente Navbar aqui */}
      <h1 className={styles.title}>Seja Bem Vindo!</h1>
      <SideBar/> 
    </div>
  )
}

export default HomePage