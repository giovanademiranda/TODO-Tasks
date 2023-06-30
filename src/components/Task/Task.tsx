import { Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
  setComplete: (value: TaskType) => void;
  deleteTask: (value: TaskType) => void;
}

export function Task({task, setComplete, deleteTask}: TaskProps){
  const [checked, setChecked] = useState(false)
  useEffect(() => setComplete(task), [checked])
  return (
    <article className={styles.task}>
      <Checkbox id={task.id} setChecked={setChecked} checked={checked}/>
      <div className={styles.content}>
      <p style={checked ? {textDecoration: 'line-through', color: 'var(--gray-300)'} : {}}>{task.title}</p>
      </div>
      <Trash size={24} onClick={() => deleteTask(task)}/>
    </article>
  )
}
