import { task } from '../../utils/projectProps';

export type CardInProgressProps ={
    task:task,
    deleteTask: (task: task)=> void
}