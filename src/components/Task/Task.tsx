import { Trash } from 'phosphor-react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function Task({task}: TaskProps){
  
  return (
    <article className={styles.task}>
      <Checkbox id={task.id}/>
      <p>teste</p>
      <Trash size={24}/>
    </article>
  )
}