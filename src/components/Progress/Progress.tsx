import styles from './Progress.module.css';

interface ProgressProps {
  taskCompleted: number;
  taskCreated: number;
}

export function Progress({taskCompleted = 0, taskCreated = 0}: ProgressProps) {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.tarefas}>
          <strong >Tarefas criadas</strong>
          <p>{taskCreated}</p>
        </div>
        <div className={styles.concluidas}>
          <strong>Concluídas</strong>
          <p>{taskCompleted}</p>
        </div>
      </div>
    </>
  )
}