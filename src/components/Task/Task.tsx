import { Trash } from 'phosphor-react';
import { useState } from 'react';

export function Task({task}: TaskType){
  const [task, setTask] = useState([])

  function handleDeleteTasks() {
    onDeleteTasks(content);
  }
  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = task.filter((task) => {
      return task !== taskToDelete;
    });
    setTask(taskWithoutDeletedOne);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleDeleteTasks} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  )
}