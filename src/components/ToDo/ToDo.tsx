import React from 'react'
import  {Button, Card, Badge} from 'react-bootstrap';
import {ToDoProps} from './ToDoProps'
import {toDoDeeds} from'../../lists-deeds/toDoDeeds'

import './ToDo.css'

function ToDo ({handleShow}:ToDoProps){

    return(<div className='to-do'>
    <div className='to-do__header'>
    <Badge variant="secondary" className='badger'>{toDoDeeds.length}</Badge>
        <h2 className='to-do__title'>To do</h2>
    </div> 
    <div className='to-do__list'>
    <Card  className='to-do__card' >
        <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
            <div style={{height: '100%'}}>
            <Card.Title >Card Title</Card.Title>
            <Card.Text>
                
            </Card.Text>
            </div>
            
            <Button variant="primary" className='card__button'>Start</Button>
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
    &#10010; New task
    </Button>
    </div>

    </div>);
}
export default ToDo; 