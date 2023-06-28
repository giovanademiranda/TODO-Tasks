import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { AddNewTask } from './components/NewTask/NewTask';
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

//deletar por id
tasks.filter(task => task.isComplete)

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddNewTask />
      </div>
    </div>
  )
}

export default App
