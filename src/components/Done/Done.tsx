import React from 'react'
import  { Badge, Card } from 'react-bootstrap';
import { costCalculation } from '../../utils/costCalculation';
import {doneDeeds} from'../../lists-deeds/doneDeeds'
import './Done.css'

function Done (){
    return(<div className='done'>
    <div className='done__header'>
    <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{doneDeeds.length}</Badge>
        <h2 className='done__title'>Done</h2>
    </div> 
    <div>
        {doneDeeds.map((item)=>{ return(
            <Card className='done__card'>
            <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
            <div style={{height: '100%'}}>
               <Card.Title>{item.title}</Card.Title>
                <Card.Text>{
                costCalculation(item.end-item.start)
                    }
                </Card.Text>
                </div>
            </Card.Body>
        </Card>)
        })}
    
    </div>
    </div>);
}
export default Done; 