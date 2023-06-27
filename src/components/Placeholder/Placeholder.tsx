import { Files } from 'phosphor-react'

export function Placeholder() {
  return (
    <div className={}>
      <strong>Tarefas criadas</strong>
      <p>0</p>
    </div>

    <div className={}>
        <strong>
          concluidas
        </strong>
        <p>0</p>
    </div>

    <div className={}>
      <Files size={32} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}