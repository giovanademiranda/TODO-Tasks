import todoLogo from '../assets/todo-logo.svg'
import styles from './Header.styles.css'
console.log(todoLogo)

export function Header() {
  return (
    <header className={styles.header}>
      <strong>todo</strong>
      <img src={todoLogo}></img>
    </header>
  )
}