import React, { useEffect, useState } from 'react'
import  {Button, Badge, Spinner} from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'
import CardToDo from '../CardToDo/CardToDo';
import { loadingTaskToDo } from '../../transport/api';
import { Task } from '../../utils/projectProps';
import './ToDo.css'

function ToDo ({handleShow, addNewTask, loadingNewTaskSuccess}:ToDoProps){
    const [toDoTasks, setToDoTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(()=>{
        setLoading(true)
        loadingTaskToDo().then((res)=>{
            setLoading(false)
            setToDoTasks(res)
        })  
        .catch((err)=>{
            setLoading(false)
            console.log(err)})
    },[]) 
    useEffect(()=>{
        if(addNewTask){ 
            setLoading(true)
            loadingTaskToDo().then((res)=>{
                setLoading(false)
                loadingNewTaskSuccess()
            })
            .catch((err)=>{
                setLoading(false)
                console.log(err)})
        }
    },[addNewTask, loadingNewTaskSuccess])
    const moveToInProgress=(task:Task)=>{
        const result = toDoTasks.find(item=>item.title === task.title)
        console.log(result)
      }
    return(<div className='to-do'>
    <div className='to-do__header'>
        <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{toDoTasks? toDoTasks.length: 0}</Badge>
        <h2 className='to-do__title'>To do</h2>
    </div> 
    <div className='to-do__list'>
        { loading?<Spinner style={{margin: '10px auto'}} animation="border" />
        :
        toDoTasks && toDoTasks.map((item)=>{ return <CardToDo key={item.title} task={item} moveToInProgress={moveToInProgress}/>})}
        <Button variant="outline-secondary" className="to-do__button" onClick={handleShow}>
            &#10010; New task
        </Button>
    </div>
    </div>);
}
export default ToDo; 