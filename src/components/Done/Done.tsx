import React, { useEffect, useState } from 'react'
import  { Badge, Spinner } from 'react-bootstrap';
import {doneDeeds} from'../../lists-deeds/doneDeeds'
import { loadingTaskDone } from '../../transport/api';
import { task } from '../../utils/projectProps';
import CardDone from '../CardDone/CardDone';
import './Done.css'

function Done (){
    const [doneTasks, setdoneTasks] = useState<task[]|undefined>([])
    const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    loadingTaskDone.then((res)=>{
        console.log(res)
        setLoading(false)
        // setInProgressTasks(res)
    })
    .catch((err)=>{
        setLoading(false)
        console.log(err)})
},[])
    return(<div className='done'>
    <div className='done__header'>
    <Badge style={{borderRadius: '50%', display: 'flex'}} variant="secondary" className='badger'>{doneTasks ? doneTasks.length : 0}</Badge>
        <h2 className='done__title'>Done</h2>
    </div> 
    <ul className='done__list'>
    { loading?<Spinner style={{margin: '10px auto'}} animation="border" />
        :
        doneTasks && doneTasks.map((item)=>{ return <CardDone key={item.title} task={item} />})}
    
    </ul>
    </div>);
}
export default Done; 