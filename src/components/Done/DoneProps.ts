import { Task } from '../../utils/projectProps';

export type DoneProps ={
    newTaskInDone: Task|null,
    setNewTaskInDone:(arg: Task|null)=>void
}