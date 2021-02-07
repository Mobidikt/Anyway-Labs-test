import { task } from '../../utils/projectProps';

export type CardToDoProps ={
    task:task,
    taskStarted: (task: task)=> void
}