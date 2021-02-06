import React from 'react'
import  {Button, Card} from 'react-bootstrap';
import { CardToDoProps } from './CardToDoProps';
import './CardToDo.css'


function CardToDo ({task, deleteTask}:CardToDoProps){
 const startTask =() =>{
    deleteTask(task);
 }
    return(<li>
            <Card  className='to-do__card' >
            <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
                <div style={{height: '100%'}}>
                <Card.Title >{task.title}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                </div>
                <Button variant="primary" className='card__button' onClick={startTask}>Start</Button>
            </Card.Body> 
        </Card>
    </li>)
       

    
    
  
}
export default CardToDo; 