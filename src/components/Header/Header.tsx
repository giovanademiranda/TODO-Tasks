import todoLogo from '../../assets/todo-logo.svg'
import styles from './Header.module.css'
console.log(todoLogo)

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo}></img>
      <strong className={styles.strongBlue}>to</strong><strong className={styles.strongPurpleDark}>do</strong>
    </header>
  )
}