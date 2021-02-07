export type AddToDoProps= {
    open:boolean , 
    handleClose : ()=> void,
    addTask: (taskName: string, timeTask: string)=>void
}