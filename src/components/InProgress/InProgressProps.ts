import { Task } from '../../utils/projectProps';

export type InProgressProps ={
    newTaskInProgress:Task|null,
    setNewTaskInProgress: (task:Task|null)=>void,
    moveTaskInDone: (task:Task)=>void,
}