import { useState} from 'react';

// library imports


const EditForm = ({ editedTask, updateTask }) => {
  
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const [updatedUrgency, setUpdatedUrgency] = useState(editedTask.urgency);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    updateTask({...editedTask, name: updatedTaskName, urgency: updatedUrgency})
  }

  return (
    <div className='editBackground'>
    <form
    className="editform"
    onSubmit={handleFormSubmit}
    
    >
    
      <input    
        type="textarea" 
        rows={5}
                  cols={60}
        id="task"
        className="input"
        placeholder="Enter Task"
        
        value={updatedTaskName}
        onInput={(e) => setUpdatedTaskName(e.target.value)}
        required
        autoFocus
        maxLength={60}
       
        
      />
      
   <div className='editButtons'>
    <select className='editselect' name="urgency" value={updatedUrgency}
        onInput={(e) => setUpdatedUrgency(e.target.value)} required>
        <option value="">select the urgency level </option>
        <option value="3" > ⭐⭐⭐ urgent </option>
        <option value="2" >  ⭐⭐ normal</option>
        <option value="1" >  ⭐ later</option>
      </select>

    <button
      className="btn"
      aria-label="Add Task"
      type="submit"
      >
      update
    </button>
    </div>
  </form>
  </div>
  )
}
export default EditForm