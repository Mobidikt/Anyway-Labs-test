import React from 'react'
import  {Badge } from 'react-bootstrap';
import CardInProgress from '../CardInProgress/CardInProgress';
import './InProgress.css'
import {inProgressDeeds} from'../../lists-deeds/inProgressDeeds'
import { InProgressProps } from './InProgressProps';

function InProgress (){
  const deleteTask=({task}:any)=>{
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
      inProgressDeeds.map((item)=>{return <CardInProgress key={item.title} task={item} deleteTask={deleteTask}/>         }) 
    }
    </ul></div>);
}
export default InProgress; 