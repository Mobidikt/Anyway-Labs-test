export type AddToDoProps= {
    open:boolean , 
    handleClose : ()=> void,
    addTask: (taskName: string)=>void
}