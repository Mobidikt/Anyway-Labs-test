import { Task } from '../../utils/projectProps';

export type ToDoProps = {
    handleShow: ()=>void,
    moveTaskInProgress: (task:Task)=> void,
    setNewTask:(task:Task|null)=>void,
    newTask: Task|null
}