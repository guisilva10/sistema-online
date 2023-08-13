import { FunctionComponent } from 'react'
import styles from './loading.styles.module.scss'
import SyncLoader from 'react-spinners/SyncLoader'

interface LoadingProps{
  message?: string
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return <div className={styles.loginContainer}>
    {message && <p>{ message }</p>}
    <SyncLoader size={30}/>
  </div>
}

export default Loading