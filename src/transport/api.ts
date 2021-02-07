import {toDoDeeds} from '../lists-deeds/toDoDeeds'
import {inProgressDeeds} from '../lists-deeds/inProgressDeeds'
import {doneDeeds} from '../lists-deeds/doneDeeds'
import {Task} from '../utils/projectProps';

export const loadingTaskToDo =():Promise<Task[]> => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(toDoDeeds)},1000);
    }
);
export const loadingTaskInProgress = ():Promise<Task[]> => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(inProgressDeeds)},1000);
    }
); 
export const loadingTaskDone = ():Promise<Task[]> => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(doneDeeds)},1000);
    }
);
export const postTask =(task:Task) =>{
    toDoDeeds.push({
        title: task.title,
        time: task.time,
        requiredTime: task.requiredTime,
        start: task.start,
        end:task.end
      });
    const newTask = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(true)},1000);
    })
  return newTask  
};
export const inWorkTask = (task: Task):Promise<boolean> => new Promise((resolve, reject)=>{
    const currentTaskIndex = toDoDeeds.findIndex(item=>item.title === task.title)
    toDoDeeds.splice(currentTaskIndex, 1)
    inProgressDeeds.push(task)
    setTimeout(()=>{
        resolve(true)},1000);
    }
);