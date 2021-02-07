import React, { useEffect, useState } from 'react'
import  {Badge } from 'react-bootstrap';
import CardInProgress from '../CardInProgress/CardInProgress';
import './InProgress.css'
import {inProgressDeeds} from'../../lists-deeds/inProgressDeeds'
import { loadingTaskInProgress } from '../../transport/api';
import { InProgressProps } from './InProgressProps';
import { task } from '../../utils/projectProps';

function InProgress (){
  const [inProgressTasks, setInProgressTasks] = useState<task[]|undefined>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    loadingTaskInProgress.then((res)=>{
        console.log(res)
        setLoading(false)
        // setInProgressTasks(res)
    })
    .catch((err)=>{
        setLoading(false)
        console.log(err)})
},[])
  const taskComleted=(task:task)=>{
    console.log(task)
    // const result = inProgressDeeds.findIndex(item=>item.title === task.title)
    // console.log(result)
  }

    return(<div className='in-progress'> 
      <div className='in-progress__header'> 
      <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{inProgressDeeds.length}</Badge>
        <h2 className='in-progress__title'>In progress</h2>
        </div>
    <ul className='in-progress__list'>  
    {
      inProgressDeeds.map((item)=>{return <CardInProgress key={item.title} task={item} taskComleted={taskComleted}/>         }) 
    }
    </ul></div>);
}
export default InProgress; 