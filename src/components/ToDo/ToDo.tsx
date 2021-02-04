import React from 'react'
import  {Button } from 'react-bootstrap';

function ToDo (){
    const addToDo =()=>{
        console.log('Новая задача')
    }
    return(<>
    <div>
        <h2>To Do</h2>
    </div> 
    <div>
    <Button variant="primary" className="mr-1" onClick={addToDo}>
      Primary
    </Button>
    </div>
    </>);
}
export default ToDo; 