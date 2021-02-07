import React from 'react'
import  { Badge } from 'react-bootstrap';
import {doneDeeds} from'../../lists-deeds/doneDeeds'
import CardDone from '../CardDone/CardDone';
import './Done.css'

function Done (){
    return(<div className='done'>
    <div className='done__header'>
    <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{doneDeeds.length}</Badge>
        <h2 className='done__title'>Done</h2>
    </div> 
    <ul className='done__list'>
        {doneDeeds.map((item)=>{ return <CardDone key={item.title} task={item} />})}
    
    </ul>
    </div>);
}
export default Done; 