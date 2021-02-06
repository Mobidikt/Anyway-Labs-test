import React from 'react'
import  {Button, Card} from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'
import './ToDo.css'

function ToDo ({handleShow}:ToDoProps){
    return(<div className='to-do'>
    <div>
        <h2>To do</h2>
    </div> 
    <div className='to-do__list'>
    <Card  className='to-do__card' >
        <Card.Body className='card__body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">Start</Button>
        </Card.Body> 
    </Card>
    <Card  className='to-do__card' >
        <Card.Body className='card__body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">Start</Button>
        </Card.Body> 
    </Card>
    <Button variant="outline-secondary" className="to-do__button" onClick={handleShow}>
      New task
    </Button>
    </div>

    </div>);
}
export default ToDo; 