import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { postTask } from './transport/api';
import {calcTimeTask} from './utils/calcTimeTask'
import { Task } from './utils/projectProps';

function App() {
  const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
  const [newTask, setNewTask] = useState<Task|null>(null);
  const handleClose = () =>  setOpenPopupNewTask(false);
  const handleShow = () => setOpenPopupNewTask(true);
  async function addTask (taskName:string, timeTask:string){
    const requiredTimeTask = calcTimeTask(timeTask);
    const newTask ={
      title: taskName,
      time: timeTask,
      requiredTime: requiredTimeTask,
      start: 0,
      end:0
    }
    await postTask(newTask).then(()=>{
      setNewTask(newTask)
      handleClose()
    }).catch(()=>{console.log('Задача не добавлена')})
  }
  return (
    <>
    <Header/>
    <Main handleShow={handleShow} newTask={newTask} setNewTask={setNewTask}/>
    <AddToDoPopup open={openPopupNewTask} addTask={addTask} handleClose={handleClose}/>
    </>  
  );
}

export default App; 
 