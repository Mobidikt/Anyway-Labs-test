import { Task } from '../../utils/projectProps';

export type InProgressProps ={
    newTaskInProgress:Boolean,
    moveTaskInDone: (task:Task)=>void,
    loadingNewTaskInProgressSuccess: ()=>void
}