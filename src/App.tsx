import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import Done from './components/Done/Done';
import Header from './components/Header/Header';
import InProgress from './components/InProgress/InProgress';
import ToDo from './components/ToDo/ToDo';

function App() {
  const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
  const handleClose = () =>  setOpenPopupNewTask(false);
  const handleShow = () => setOpenPopupNewTask(true);
  const addTask =(taskName:string)=>{
    console.log(taskName)
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
 