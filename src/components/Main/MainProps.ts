import { Task } from '../../utils/projectProps';

export type MainProps = {
    handleShow: ()=>void,
    setNewTask:(task:Task|null)=>void,
    newTask: Task|null
}