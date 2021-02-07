import { task } from '../../utils/projectProps';

export type CardInProgressProps ={
    task:task,
    taskComleted: (task: task)=> void
}