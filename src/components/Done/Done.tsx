import React from 'react'
import  { Badge, Card } from 'react-bootstrap';
import './Done.css'

function Done (){
    return(<div className='done'>
    <div className='done__header'>
    <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'></Badge>
        <h2 className='done__title'>Done</h2>
    </div> 
    <div>
    <Card className='done__card'>
        <Card.Body style={{padding: '0.5rem 1.25rem 0.5rem 0.5rem'}} className='card__body'>
        <div style={{height: '100%'}}>
           <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            </div>
        </Card.Body>
    </Card>
    </div>
    </div>);
}
export default Done; 