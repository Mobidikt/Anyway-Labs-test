import React, { useState } from 'react'
import Done from '../../components/Done/Done';
import InProgress from '../../components/InProgress/InProgress';
import ToDo from '../../components/ToDo/ToDo';
import { Task } from '../../utils/projectProps';
import { MainProps } from './MainProps';

function Main ({handleShow, newTask, setNewTask}:MainProps){
  const [newTaskInProgress, setNewTaskInProgress] = useState<Task|null>(null);
  const [newTaskInDone, setNewTaskInDone] = useState<Task|null>(null);
  const moveTaskInProgress = (task:Task) =>{
    setNewTaskInProgress(task)
  } 
  const moveTaskInDone = (task:Task) =>{
    setNewTaskInDone(task)
  }
  return(<main className='main'>
    <ToDo handleShow={handleShow} newTask={newTask} setNewTask={setNewTask} moveTaskInProgress={moveTaskInProgress}/>
    <InProgress newTaskInProgress={newTaskInProgress} setNewTaskInProgress={setNewTaskInProgress} moveTaskInDone={moveTaskInDone}/>
    <Done newTaskInDone={newTaskInDone} setNewTaskInDone={setNewTaskInDone}/>
  </main>);
}
export default Main; 