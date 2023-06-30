import { Files } from 'phosphor-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';
import { Progress } from './components/Progress/Progress';
import { Task, TaskType } from './components/Task/Task';
import './global.css';

const task2: TaskType[] = [
  {
    id: uuidv4(),
    title: 'Terminar desafio',
    isComplete: true
  },
  {
    id: uuidv4(),
    title: 'Estudar TypeScript',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Terminar o livro',
    isComplete: false
  },
]

//deletar task por id
//tasks.filter(task => task.isComplete)

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [completed, setCompleted] = useState(0)
  const addNewTask = (task: TaskType) => {
    setTasks([...tasks, task])
  }
  const setComplete = (task: TaskType) => {
    setTasks(tasks.map(t=>{
      if(t.id === task.id) t.isComplete = ! t.isComplete
      return t
    }))
    setCompleted(tasks.filter(t => t.isComplete).length)
  }
  const deleteTask = (task: TaskType) => {
    const data = tasks.filter(t => t.id !== task.id)
    setTasks(data)
    setCompleted(data.filter(t => t.isComplete).length)
  }
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask addNewTask={addNewTask}/>
      </div>
      <main className={styles.main}>
        <Progress taskCompleted={completed} taskCreated={tasks.length}/>
        {
          tasks.length == 0 ? (
            <div className={styles.placeholder}>
            <Files size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          ): (<>{
            tasks.map((task) => {
              return <Task deleteTask={deleteTask} setComplete={setComplete} key={task.id} task={task} />
            })
          }</>)
        }
      </main>
    </div>
  )
}

export default App
