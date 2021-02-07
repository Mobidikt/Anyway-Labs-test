import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import Done from './components/Done/Done';
import Header from './components/Header/Header';
import InProgress from './components/InProgress/InProgress';
import ToDo from './components/ToDo/ToDo';
import {toDoDeeds} from'./lists-deeds/toDoDeeds'
import {calcTimeTask} from './utils/calcTimeTask'

function App() {
  const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
  const handleClose = () =>  setOpenPopupNewTask(false);
  const handleShow = () => setOpenPopupNewTask(true);
  const addTask =(taskName:string, timeTask:string)=>{
    const requiredTimeTask = calcTimeTask(timeTask);
    toDoDeeds.push({
      title: taskName,
      time: timeTask,
      requiredTime: requiredTimeTask,
      start: 0,
      end:0
    })
  }
  return (
    <>
    <Header/>
    <main className='main'>
      <ToDo handleShow={handleShow}/>
      <InProgress />
      <Done />
    </main>
      <AddToDoPopup open={openPopupNewTask} handleClose={handleClose} addTask={addTask}/>
    </>
  );
}

export default App;
 