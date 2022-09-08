import { AiOutlineScissor } from "react-icons/ai";


const Task = ({ task, onDelete, toggle}) => {
  return (
    <div className="block">
      <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => {toggle(task.id)}}>
        
        <h3>{task.text}<AiOutlineScissor style={{cursor: 'pointer'}} onClick={() => {onDelete(task.id)}}/></h3>
        <p>{task.day}</p>
        
      </div>
    </div>
  )
}

export default Task