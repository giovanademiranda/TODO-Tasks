import { PlusCircle } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskType } from '../Task/Task';
import styles from './NewTask.module.css';

interface NewTaskProps {
  addNewTask: (value: TaskType) => void;
}

export function NewTask({addNewTask}: NewTaskProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask: TaskType = {
        id: uuidv4(),
        title: newTaskTitle,
        isComplete: false
      };
      
      addNewTask(newTask);
      setNewTaskTitle('');

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className={styles.newTask}>
      <input className={styles.inputActive} type="text" placeholder='Adicione uma nova tarefa' ref={inputRef}  onChange={handleInputChange} value={newTaskTitle} />
      <button type='button' onClick={handleButtonClick}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  )
}