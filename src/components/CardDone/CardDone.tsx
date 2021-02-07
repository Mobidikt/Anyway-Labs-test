import React from 'react'
import  { Card} from 'react-bootstrap';
import { CardDoneProps } from './CardDoneProps';
import { costCalculation } from '../../utils/costCalculation';
import './CardDone.css'

function CardDone ({task}:CardDoneProps){
    return(<li>
        <Card className='done__card'>
            <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
            <div style={{height: '100%'}}>
               <Card.Title>{task.title}</Card.Title>
                <Card.Text>{
                `${costCalculation(task.end-task.start)} руб.`
                    }
                </Card.Text>
                </div>
            </Card.Body>
        </Card>
    </li>) 
}
export default CardDone; 

