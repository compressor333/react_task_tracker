import Task from "./Task"
import AddTasks from "./AddTasks"

const Tasks = ({ tasks, showAdd, addTask, onDelete, toggle }) => {



    return (
        <div className="containerr">
            <div className="task-container">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        toggle={toggle}
                    />
                ))}
            </div>
            {showAdd && <div><AddTasks addTask={addTask}/></div>}
        </div>
    )
}

export default Tasks