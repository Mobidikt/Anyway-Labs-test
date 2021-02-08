import React, { useEffect, useState } from 'react'
import  {Badge, Spinner } from 'react-bootstrap';
import CardInProgress from '../CardInProgress/CardInProgress';
import './InProgress.css'
import { loadingTaskInProgress, inDoneTask } from '../../transport/api';
import { Task } from '../../utils/projectProps';
import { InProgressProps } from './InProgressProps';

function InProgress ({newTaskInProgress, setNewTaskInProgress, moveTaskInDone}:InProgressProps){
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    loadingTaskInProgress().then((res)=>{ 
      setLoading(false) 
      setInProgressTasks(res)  
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)})
  }, []) 
  useEffect(()=>{
    if(newTaskInProgress){
      const newTask = inProgressTasks.find(item=>item.title === newTaskInProgress.title)
      if(!newTask){ 
        setInProgressTasks([...inProgressTasks, newTaskInProgress]);
        setNewTaskInProgress(null);
      }
    }
  },[newTaskInProgress, inProgressTasks, setNewTaskInProgress])
  const moveToDone=(task:Task)=>{
    const currentTask = inProgressTasks.find(item=>item.title === task.title)
    if(currentTask){
      currentTask.end = Date.now();
      inDoneTask(currentTask) 
      .then(()=>{
        moveTaskInDone(currentTask)
      })
      .catch((err)=>console.log(err))
    } else console.log('Error: Task not found')  
  }
  return(<div className='in-progress'> 
    <div className='in-progress__header'> 
      <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{inProgressTasks?inProgressTasks.length: 0}</Badge>
      <h2 className='in-progress__title'>In progress</h2>
    </div>
    <ul className='in-progress__list'>  
      {loading?<Spinner style={{margin: '10px auto'}} animation="border" />
      : inProgressTasks && inProgressTasks.map((item)=>{return <CardInProgress key={item.title} task={item} moveTaskDone={moveToDone}/> })}
    </ul>
  </div>);
}
export default InProgress; 