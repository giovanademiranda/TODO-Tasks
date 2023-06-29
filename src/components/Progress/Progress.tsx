import styles from './Progress.module.css'

export function Progress() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.tarefas}>
          <strong >Tarefas criadas</strong>
          <p>0</p>
        </div>
        <div className={styles.concluidas}>
          <strong>Concluídas</strong>
          <p>0</p>
        </div>
      </div>
    </>
  )
}