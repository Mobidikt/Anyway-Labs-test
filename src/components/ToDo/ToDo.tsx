import React from 'react'
import  {Button, Badge} from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'
import {toDoDeeds} from'../../lists-deeds/toDoDeeds'

import './ToDo.css'
import CardToDo from '../CardToDo/CardToDo';

function ToDo ({handleShow}:ToDoProps){
    const deleteTask=({task}:any)=>{
        console.log(task)
        // const result = inProgressDeeds.findIndex(item=>item.title === task.title)
        // console.log(result)
      }
    return(<div className='to-do'>
    <div className='to-do__header'>
    <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{toDoDeeds.length}</Badge>
        <h2 className='to-do__title'>To do</h2>
    </div> 
    <div className='to-do__list'>
        {toDoDeeds.map((item)=>{ return <CardToDo key={item.title} task={item} deleteTask={deleteTask}/>})}
    <Button variant="outline-secondary" className="to-do__button" onClick={handleShow}>
    &#10010; New task
    </Button>
    </div>

    </div>);
}
export default ToDo; 