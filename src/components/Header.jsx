
import styles from './Header.module.css';
import Logo from '../assets/icon.svg'
export function Header() {
  return(
    <header className={styles.Header}>
      <img src={Logo} alt="Logo"/>
      <strong>Feed</strong>
    </header>
  )
}