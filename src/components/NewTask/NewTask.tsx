import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function AddNewTask() {
  return (
    <div className={styles.newTask}>
      <input className={styles.inputActive} type="text" placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  )
}