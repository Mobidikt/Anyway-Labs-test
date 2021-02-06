import React from 'react'
import  {Button, Card } from 'react-bootstrap';
import './InProgress.css'

function InProgress (){
    return(<div className='in-progress'>
    <div>
        <h2>In progress</h2>
    </div> 
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="success">Resolve</Button>
        </Card.Body>
    </Card>
    </div>
    </div>);
}
export default InProgress; 