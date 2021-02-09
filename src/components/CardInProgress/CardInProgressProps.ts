import { Task } from '../../utils/projectProps';

export type CardInProgressProps ={
    task:Task,
    moveTaskDone: (task: Task)=> void
}