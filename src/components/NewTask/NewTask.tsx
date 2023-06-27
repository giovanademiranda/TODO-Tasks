import { PlusCircle } from 'phosphor-react'
import styles from './AddNewTask.styles.css'

export function AddNewTask() {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar
        <PlusCircle size={12} />
      </button>
    </div>
  )
}