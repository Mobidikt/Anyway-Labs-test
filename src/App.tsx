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
  const [addNewTask, setAddNewTask] = useState(false);
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
      setAddNewTask(true)
      handleClose()
    }).catch((err)=>{console.log(err)})
  }
  const loadingNewTaskSuccess = () =>{
    setAddNewTask(false)
  }
  return (
    <>
    <Header/>
    <main className='main'>
      <ToDo handleShow={handleShow} addNewTask={addNewTask} loadingNewTaskSuccess={loadingNewTaskSuccess}/>
      <InProgress />
      <Done />
    </main>
      <AddToDoPopup open={openPopupNewTask} addTask={addTask}/>
    </>
  );
}

export default App;
 