import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import Done from './components/Done/Done';
import Header from './components/Header/Header';
import InProgress from './components/InProgress/InProgress';
import ToDo from './components/ToDo/ToDo';
import { postTask } from './transport/api';
import {calcTimeTask} from './utils/calcTimeTask'

function App() {
  const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [newTaskInProgress, setNewTaskInProgress] = useState(false);
  const [newTaskInDone, setNewTaskInDone] = useState(false);
  const handleClose = () =>  setOpenPopupNewTask(false);
  const handleShow = () => setOpenPopupNewTask(true);
  async function addTask (taskName:string, timeTask:string){
    const requiredTimeTask = calcTimeTask(timeTask);
    await postTask({
      title: taskName,
      time: timeTask,
      requiredTime: requiredTimeTask,
      start: 0,
      end:0
    }).then((res)=>{
      setNewTask(true)
      handleClose()
    }).catch((err)=>{console.log(err)})
  }
  const loadingNewTaskSuccess = () =>{
    setNewTask(false)
  }
  const moveTaskInProgress = () =>{
    setNewTaskInProgress(true)
  }
  const loadingNewTaskInProgressSuccess = () => {
    setNewTaskInProgress(false)
  }
  const moveTaskInDone = () =>{
    setNewTaskInDone(true)
  }
  const loadingNewTaskInDone = () => {
    setNewTaskInDone(false)
  }
  return (
    <>
    <Header/>
    <main className='main'>
      <ToDo handleShow={handleShow} newTask={newTask} loadingNewTaskSuccess={loadingNewTaskSuccess} moveTaskInProgress={moveTaskInProgress}/>
      <InProgress newTaskInProgress={newTaskInProgress} loadingNewTaskInProgressSuccess={loadingNewTaskInProgressSuccess} moveTaskInDone={moveTaskInDone}/>
      <Done newTaskInDone={newTaskInDone} loadingNewTaskInDone={loadingNewTaskInDone}/>
    </main>
      <AddToDoPopup open={openPopupNewTask} addTask={addTask}/>
    </> 
  );
}

export default App;
 