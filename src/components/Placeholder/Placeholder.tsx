import { Files } from 'phosphor-react'
import styles from './Placeholder.module.css'

export function Placeholder() {
  return (
    <>
      <div className={styles.tarefas}>
        <strong className={styles.tarefas}>Tarefas criadas</strong>
        <p>0</p>
        <strong className={styles.concluidas}>Concluídas</strong>
        <p>0</p>
      </div>
      <div className={styles.placeholder}>
        <Files size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  )
}