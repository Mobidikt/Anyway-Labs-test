import React, { useState } from 'react'
import  {Button, Card } from 'react-bootstrap';
// import './InProgress.css'

function CardInProgress (){
  const [time, setTime]=useState<string>('00:00:00')
let timer,hour, min,sec,startTime:any;
startTime = 1612611882710;
function addZero(n:any) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
};
  function showTimer() {
      let today = Date.now();
    timer = today - startTime;
    hour = addZero((Math.round(timer/360000))%60);
    min = addZero((Math.round(timer/60000))%60);
    sec = addZero((Math.round(timer/1000))%60);
return (`${hour}:${min}:${sec}`)
    
};
const startTimer =()=>{
    setInterval(()=>{
      let timer = showTimer();
      setTime(timer)
  },1000)
};

startTimer()

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            {time}
            </Card.Text>
            <Button variant="success">Resolve</Button>
        </Card.Body>
    </Card>
);
}
export default CardInProgress; 