import { useState } from "react";
// library imports


const CustomForm = (props) => {
  const [task, setTask] = useState("");
  const [urgency, setUrgency] = useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    props.addTask(
      
      {
      id: Date.now(),
      name: task,
      urgency: urgency,
      checked: false,
      
    })
    setTask("")
  }



  const Selected = (e) => {
    setUrgency(e.target.value) }

  
  return (
    <form
      className="todoform"
      onSubmit={handleFormSubmit}
      >
      
        <input
          type="text"
          id="task"
         
          placeholder="Enter Task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
         
          
        />
        
      
      <select name="urgency" onChange={Selected} required>
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
        +
      </button>
    </form>
  )
}
export default CustomForm