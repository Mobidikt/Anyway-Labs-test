import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import Done from './components/Done/Done';
import Header from './components/Header/Header';
import InProgress from './components/InProgress/InProgress';
import ToDo from './components/ToDo/ToDo';
import { postTask } from './transport/api';
import {calcTimeTask} from './utils/calcTimeTask'
import { Task } from './utils/projectProps';

function App() {
  const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
  const [newTask, setNewTask] = useState({});
  const [newTaskInProgress, setNewTaskInProgress] = useState(false);
  const [newTaskInDone, setNewTaskInDone] = useState<Task|null>(null);
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
    }).catch((err)=>{console.log(err)})
  }
  const moveTaskInProgress = () =>{
    setNewTaskInProgress(true)
  } 
  const loadingNewTaskInProgressSuccess = () => {
    setNewTaskInProgress(false)
  }
  const moveTaskInDone = (task:Task) =>{
    setNewTaskInDone(task)
  }
  return (
    <>
    <Header/>
    <main className='main'>
      <ToDo handleShow={handleShow} newTask={newTask} moveTaskInProgress={moveTaskInProgress}/>
      <InProgress newTaskInProgress={newTaskInProgress} loadingNewTaskInProgressSuccess={loadingNewTaskInProgressSuccess} moveTaskInDone={moveTaskInDone}/>
      <Done newTaskInDone={newTaskInDone} setNewTaskInDone={setNewTaskInDone}/>
    </main>
      <AddToDoPopup open={openPopupNewTask} addTask={addTask} handleClose={handleClose}/>
    </>  
  );
}

export default App; 
 