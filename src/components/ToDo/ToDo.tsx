import React, { useEffect, useState } from 'react'
import  {Button, Badge, Spinner} from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'
import CardToDo from '../CardToDo/CardToDo';
import { loadingTaskToDo } from '../../transport/api';
import { task } from '../../utils/projectProps';
import './ToDo.css'

function ToDo ({handleShow}:ToDoProps){
    const [toDoTasks, setToDoTasks] = useState<task[]|undefined>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(()=>{
        setLoading(true)
        loadingTaskToDo.then((res)=>{
            console.log(res)
            setLoading(false)
            // setToDoTasks(res)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)})
    },[])

    const taskStarted=({task}:any)=>{
        console.log(task)
        // const result = inProgressDeeds.findIndex(item=>item.title === task.title)
        // console.log(result)
      }
    return(<div className='to-do'>
    <div className='to-do__header'>
        {toDoTasks &&<Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{toDoTasks.length}</Badge>}
        <h2 className='to-do__title'>To do</h2>
    </div> 
    <div className='to-do__list'>
        { loading?<Spinner style={{margin: '10px auto'}} animation="border" />
        :
        toDoTasks && toDoTasks.map((item)=>{ return <CardToDo key={item.title} task={item} taskStarted={taskStarted}/>})}
        <Button variant="outline-secondary" className="to-do__button" onClick={handleShow}>
            &#10010; New task
        </Button>
    </div>
    </div>);
}
export default ToDo; 