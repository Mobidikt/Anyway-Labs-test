import React from 'react'
import  { Card } from 'react-bootstrap';
import './Done.css'

function Done (){
    return(<div className='done'>
    <div>
        <h2>Done</h2>
    </div> 
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </div>);
}
export default Done; 