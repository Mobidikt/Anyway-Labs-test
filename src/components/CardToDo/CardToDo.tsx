import React from 'react'
import  {Button, Card} from 'react-bootstrap';
import { CardToDoProps } from './CardToDoProps';
import './CardToDo.css'


function CardToDo ({task, moveToInProgress}:CardToDoProps){
 const startTask =() =>{
    moveToInProgress(task);
 }
    return(<li>
        <Card  className='to-do__card' >
            <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 2rem'}} className='card__body'>
                <div style={{height: '100%'}}>
                    <Card.Title >{task.title}</Card.Title>
                </div>
                <Button variant="primary" className='card__button' onClick={startTask}>Start</Button>
            </Card.Body> 
            <Card.Text className='card__time'>Required time: {task.time}</Card.Text>
        </Card>
    </li>)
}
export default CardToDo; 