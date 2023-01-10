import TaskItem from "./TaskItem"

const TaskList = ({ tasks, newTasks, deleteTask, toggleTask, enterEditMode }) => {


 
  return (
    <ul className="taskList" >
      {newTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask ={toggleTask } 
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList