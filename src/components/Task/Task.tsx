
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
    <div>
      oi
    </div>
  )
}