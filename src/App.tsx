import { useState } from 'react';
import './App.css';
import AddToDoPopup from './components/AddToDoPopup/AddToDoPopup';
import ToDo from './components/ToDo/ToDo';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () =>  setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <ToDo handleShow={handleShow}/>
      <AddToDoPopup show={show} handleClose={handleClose}/>
    </>
  );
}

export default App;
 