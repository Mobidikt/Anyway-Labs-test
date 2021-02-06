import { task } from '../../utils/projectProps';

export type CardToDoProps ={
    task:task,
    deleteTask: (task: task)=> void
}