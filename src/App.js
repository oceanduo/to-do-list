import CustomForm from "./component/CustomForm";
import TaskList from "./component/TaskList";
import {useEffect, useState} from "react";
import EditForm from "./component/EditForm";
import FilterButton from "./component/FilterButton";
import './index.scss';
import Footer from "./component/Footer";




function App() {

const [tasks, setTasks] = useState([
  {id: 1,
  name: 'Feed my dog before 4pm this Friday!',
  urgency: 2,
  checked: true},
  {id: 2,
    name: 'Take a spring photoshoot',
    urgency: '3',
    checked: false},
    {id: 3,
      name: 'Add your own staff :)',
      urgency: '3',
      checked: false},

])
const [newTasks, setNewTasks] = useState([])
const [editedTask, setEditedTask] = useState(null);
const [filter, setFilter] = useState('all')
const [isEditing, setIsEditing] = useState(false);




const addTask = (task) => {

  setTasks(prevState => [...prevState, task])

}


const toggleTask = (id) => {
  console.log(id)
  setTasks(prevState => prevState.map(t => (
    t.id === id
      ? { ...t, checked: !t.checked }
      : t
  )))
}


const deleteTask = (id) => {
  setTasks(prevState => prevState.filter(t => t.id !== id));
  Process(filter)
}


const enterEditMode = (task) => {
  setEditedTask(task)
  setIsEditing(true);
  console.log('edit item is' + JSON.stringify(editedTask))
  
}
const updateTask = (task) => {
  setTasks(prevState => prevState.map(t => (
    t.id === task.id
      ? { ...t, name: task.name , urgency: task.urgency}
      : t
  )))
 
  closeEditMode();
  Process(filter)
}

const closeEditMode = () => {
  setIsEditing(false)
}




  const Process = (filter) => {
  
    console.log(filter)

    if (filter === 'complited') { return setNewTasks(tasks.filter((el) => el.checked === true)) }
  
   else if (filter === 'uncomplited') { return setNewTasks(tasks.filter((el) => el.checked === false)) }

   
   else  { return setNewTasks(tasks)}

  }



  useEffect(
    ()=>{setNewTasks(tasks)}
  ,[tasks])

// 如果我不加这一步，更新就会一直慢一步





  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>

      <CustomForm 
     className='form' addTask={addTask}
      />


     {
        isEditing && (
          <EditForm
           editedTask={editedTask}
           updateTask={updateTask}
          />
        )
      }
      

      <FilterButton 
      Process ={Process}   
      setFilter={setFilter}
        filter={filter}
      />


      
        <TaskList
        newTasks={newTasks}
       tasks={tasks}
       deleteTask={deleteTask}
       enterEditMode={enterEditMode}
       toggleTask ={toggleTask } />

       <Footer/>
     
    </div>
  );
}

export default App;




