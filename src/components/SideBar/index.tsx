import Link from 'next/link'
import React from 'react'
import styles from './Sidebar.module.scss'
import {FiUsers} from 'react-icons/fi'
import {BsFillBagCheckFill, BsGearFill} from 'react-icons/bs'
import {BiSolidSpreadsheet} from 'react-icons/bi'

const SideBar = () => {
  return (
    <aside className={styles.sidebarContainer}>
        <ul className={styles.sidebarLinks}>
            <li className={styles.sidebarItem}>
                <Link href='/Clients' className={styles.sidebarLink}>
                    <FiUsers/>
                    Clientes
                </Link>
            </li>
            <li className={styles.sidebarItem}>
                <Link href='/Home' className={styles.sidebarLink}>
                    <BsFillBagCheckFill/>
                    Produtos
                </Link>
            </li>
            <li className={styles.sidebarItem}>
                <Link href='/Home' className={styles.sidebarLink}>
                    <BiSolidSpreadsheet/>
                    Pedidos
                </Link>
            </li>
            <li className={styles.sidebarItem}>
                <Link href='/Home' className={styles.sidebarLink}>
                    <BsGearFill/>
                    Geral
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar