export function calcTimeTask(timeTask: string){
    const requiredTimeTask = timeTask.split(':');
    const hour = Number(requiredTimeTask[0])*3600000
    const min = Number(requiredTimeTask[1])*60000
    const sec = Number(requiredTimeTask[2])*1000
    return hour+min+sec
}