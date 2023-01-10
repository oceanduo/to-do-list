import { useState } from 'react';
import UrgencyStar from './UrgencyStar';


const TaskItem = ({ task, toggleTask, deleteTask, enterEditMode }) => {

  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }




  return (
    <li >
     
        

        <p className={isChecked ? 'underline' : ''}>{task.name}</p>

      


     
     <UrgencyStar i = {task.urgency}/>
   


      <div className='itemButton'>
      {/* <input
          type="checkbox"
          checked={task.checked}
        
        /> */}

        <button
         onClick={handleCheckboxChange}
        
        >
        {!isChecked ? 'finished' : 'restart'}
        </button>


        
        <button
          className='btn'
          onClick={() => { enterEditMode(task) }}
        >
          change
        </button>

        <button
          onClick={() => { deleteTask(task.id) }}
        >
          delete
        </button>

      </div>
    </li>
  )
}
export default TaskItem