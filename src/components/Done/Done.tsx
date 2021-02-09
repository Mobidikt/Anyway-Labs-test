import React, { useEffect, useState } from 'react'
import  { Badge, Spinner } from 'react-bootstrap';
import { loadingTaskDone } from '../../transport/api';
import { Task } from '../../utils/projectProps';
import CardDone from '../CardDone/CardDone';
import {DoneProps} from './DoneProps';
import './Done.css'

function Done ({newTaskInDone, setNewTaskInDone}:DoneProps){
  const [doneTasks, setdoneTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(false) 
  useEffect(()=>{
    setLoading(true)
    loadingTaskDone().then((res)=>{
      setLoading(false)
      setdoneTasks(res)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)})
  },[])
  useEffect(()=>{
    if(newTaskInDone){
      const newCompletedTask = doneTasks.find(item=>item.title === newTaskInDone.title)
      if(!newCompletedTask){ 
        setdoneTasks([...doneTasks, newTaskInDone]);
        setNewTaskInDone(null);
      }
    }
  },[newTaskInDone, doneTasks, setNewTaskInDone])
  return(<div className='done'>
    <div className='done__header'>
      <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{doneTasks ? doneTasks.length : 0}</Badge>
      <h2 className='done__title'>Done</h2>
    </div> 
    <ul className='done__list'>
      {loading?<Spinner style={{margin: '10px auto'}} animation="border" />
      : doneTasks && doneTasks.map((item)=>{ return <CardDone key={item.title} task={item} />})}
    </ul>
  </div>);
}
export default Done; 