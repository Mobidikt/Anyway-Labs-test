import { Task } from '../../utils/projectProps';

export type CardToDoProps ={
    task:Task,
    moveToInProgress: (task: Task)=> void
}