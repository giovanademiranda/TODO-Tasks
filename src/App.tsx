import { v4 as uuidv4 } from 'uuid';
import styles from './App.styles.css';
import { Header } from './components/Header/Header';
import { AddNewTask } from './components/NewTask/AddNewTask';
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
        <main>
          <AddNewTask/>
        </main>
      </div>
    </div>
  )
}

export default App
