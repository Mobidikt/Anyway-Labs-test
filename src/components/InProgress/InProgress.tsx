import React, { useState } from 'react'
import  {Button, Card } from 'react-bootstrap';
import CardInProgress from '../CardInProgress/CardInProgress';
import './InProgress.css'

function InProgress (){

    return(<div className='in-progress'>
    <div>
        <h2>In progress</h2>
    </div> 
    <CardInProgress/>
    
    
    </div>);
}
export default InProgress; 