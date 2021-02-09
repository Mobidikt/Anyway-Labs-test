import React, { useCallback, useEffect, useState } from 'react'
import  {Button, Card } from 'react-bootstrap';
import { CardInProgressProps } from './CardInProgressProps';
import './CardInProgress.css'

function CardInProgress ({task, moveTaskDone}:CardInProgressProps){
  const [time, setTime]=useState<string>('00:00:00')
  const [timeOut, setTimeOut]=useState<boolean>(false)
  const startTime = task.start;

  const addZero =useCallback<(n:number)=>string>((n)=>{
    return (n < 10 ? '0' : '') + n; 
  },[])

  const showTimer =useCallback(()=>{
    let today = Date.now();
    const timer:number = today - startTime;
    if(task.requiredTime<=timer) {
      setTimeOut(true)
    } else {setTimeOut(false) }
    const hour:string = addZero((Math.floor(timer/3600000)));
    const min:string = addZero((Math.floor(timer/60000))%60);
    const sec:string = addZero((Math.floor(timer/1000))%60); 
    return (`${hour}:${min}:${sec}`)
  },[setTimeOut, startTime, task.requiredTime, addZero])

  useEffect(() => {
    const interval = setInterval(() => {
      let timer = showTimer();
      setTime(timer) 
    }, 1000);
    return () => clearInterval(interval);
  }, [showTimer, setTime]);

  const completedTask=()=>{
    task.end=Date.now()-startTime
    moveTaskDone(task)
  }

  return(<li>
  <Card className='in-progress__card'>
      <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 2rem'}} className='card__body'>
        <div style={{height: '100%'}}>
          <Card.Title className='card__title'>{task.title}</Card.Title>
          <Card.Text className='card__info'>{timeOut ? <span>&#128293; </span> :null}{time}</Card.Text>
        </div>
        <Button variant="success" className='card__button' onClick={completedTask}>Resolve</Button>  
      </Card.Body>
      <Card.Text className='card__time'>Required time: {task.time}</Card.Text>
  </Card>
  </li>);
}
export default CardInProgress; 