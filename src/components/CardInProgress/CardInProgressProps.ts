import { Task } from '../../utils/projectProps';

export type CardInProgressProps ={
    task:Task,
    taskComleted: (task: Task)=> void
}