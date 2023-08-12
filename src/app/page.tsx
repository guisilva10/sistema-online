import Link from 'next/link'
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          <h1>Olá, Seja Bem Vindo!</h1>
         <div className={styles.formGroup}>
         <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
         </div>
         <div className={styles.formGroup}>
         <label htmlFor="name">Email</label>
          <input type="email" name="email" id="email" />
         </div>
         <Link href='/dashboard' className={styles.btn}>
          Entrar         
         </Link>
        </form>
      </div>
    </div>
  )
}
