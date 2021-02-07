import {toDoDeeds} from '../lists-deeds/toDoDeeds'
import {inProgressDeeds} from '../lists-deeds/inProgressDeeds'
import {doneDeeds} from '../lists-deeds/doneDeeds'

export  const loadingTaskToDo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(toDoDeeds)},1000);
    }
);
export  const loadingTaskInProgress = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(inProgressDeeds)},1000);
    }
); 
export  const loadingTaskDone = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(doneDeeds)},1000);
    }
);