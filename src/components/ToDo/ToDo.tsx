import React from 'react'
import  {Button } from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'

function ToDo ({handleShow}:ToDoProps){
    return(<>
    <div>
        <h2>To Do</h2>
    </div> 
    <div>
    <Button variant="primary" className="mr-1" onClick={handleShow}>
      Primary
    </Button>
    </div>
    </>);
}
export default ToDo; 