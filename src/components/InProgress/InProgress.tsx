import React, { useEffect, useState } from 'react'
import  {Badge, Spinner } from 'react-bootstrap';
import CardInProgress from '../CardInProgress/CardInProgress';
import './InProgress.css'
import { loadingTaskInProgress } from '../../transport/api';
import { Task } from '../../utils/projectProps';

function InProgress (){
  const [inProgressTasks, setInProgressTasks] = useState<Task[]|undefined>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    loadingTaskInProgress().then((res)=>{
        console.log(res)
        setLoading(false)
        setInProgressTasks(res)
    })
    .catch((err)=>{
        setLoading(false)
        console.log(err)})
},[])
  const taskComleted=(task:Task)=>{
    console.log(task)
    // const result = inProgressDeeds.findIndex(item=>item.title === task.title)
    // console.log(result)
  }

    return(<div className='in-progress'> 
      <div className='in-progress__header'> 
      <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{inProgressTasks?inProgressTasks.length: 0}</Badge>
        <h2 className='in-progress__title'>In progress</h2>
        </div>
    <ul className='in-progress__list'>  
    { loading?<Spinner style={{margin: '10px auto'}} animation="border" />
        :
      inProgressTasks && inProgressTasks.map((item)=>{return <CardInProgress key={item.title} task={item} taskComleted={taskComleted}/> }) 
    }
    </ul></div>);
}
export default InProgress; 