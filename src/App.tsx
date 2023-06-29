import { Files } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { AddNewTask } from './components/NewTask/NewTask';
import { Progress } from './components/Progress/Progress';
import { Task, TaskType } from './components/Task/Task';
import './global.css';

const tasks: TaskType[] = [
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
tasks.filter(task => task.isComplete)

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddNewTask />
      </div>
      <main className={styles.main}>
        <Progress />
        {
          tasks.length == 0 ? (
            <div className={styles.placeholder}>
            <Files size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          ): (<>{
            tasks.map((task) => {
              return <Task key={task.id} task={task} />
            })
          }</>)
        }
      </main>
    </div>
  )
}

export default App
