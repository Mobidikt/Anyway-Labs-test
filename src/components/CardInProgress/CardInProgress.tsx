import React, { useState } from 'react'
import  {Button, Card } from 'react-bootstrap';
import { CardInProgressProps } from './CardInProgressProps';
import './CardInProgress.css'

function CardInProgress ({task, moveTaskDone}:CardInProgressProps){
  const [time, setTime]=useState<string>('00:00:00')
  const [timeOut, setTimeOut]=useState<boolean>(false)
  const startTime = task.start;
  let timer:number,hour, min,sec:any;

function addZero(n:any) { 
  return (parseInt(n, 10) < 10 ? '0' : '') + n; 
};
function showTimer() { 
      let today = Date.now();
      timer = today - startTime;
      if(task.requiredTime<=timer) {
        setTimeOut(true)
      } else {setTimeOut(false) }
      hour = addZero((Math.floor(timer/3600000))%60);
      min = addZero((Math.floor(timer/60000))%60);
      sec = addZero((Math.floor(timer/1000))%60); 
  return (`${hour}:${min}:${sec}`)
};
const startTimer =()=>{
    setInterval(()=>{
      let timer = showTimer();
      setTime(timer) 
  },1000)
};
startTimer()
const completedTask=()=>{
    task.end=Date.now() - startTime
    moveTaskDone(task)
}
    return(<li>
  <Card className='in-progress__card'>
      <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
        <div style={{height: '100%'}}>
          <Card.Title>{timeOut ? <span>&#128293; </span> :null}{task.title}</Card.Title>
          <Card.Text className='card__info'>{time}</Card.Text>
        </div>
        <Button variant="success" className='card__button' onClick={completedTask}>Resolve</Button>  
      </Card.Body>
      <Card.Text className='card__time'>Required time: {task.time}</Card.Text>
  </Card>
  </li>);
}
export default CardInProgress; 