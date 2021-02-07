import React, { useEffect, useState } from 'react'
import  {Modal, Button, Form } from 'react-bootstrap';
import { AddToDoProps } from './AddToDoPopupProps';

function AddToDoPopup ({open, addTask }:AddToDoProps){
    const [titleTask, setTitleTask] = useState<string>('')
    const [timeTask, setTimeTask] = useState<string>('00:00')
    useEffect(() => {
        setTitleTask('');
        setTimeTask('00:00')
      }, [open]);
      const handleTaskNameChange = (e:any) => {
        setTitleTask(e.target.value);
      }; 
      const handleTimeTaskChange = (e:any) => {
        setTimeTask(e.target.value);
      };

      const handleSubmit =(e:any)=>{
        e.preventDefault();
        addTask(titleTask, timeTask);
      }
    return(
    <Modal show={open} >
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group >
                <Form.Label>Task name</Form.Label>
                <Form.Control type="text" placeholder="Task name" onChange={handleTaskNameChange} value={titleTask}/>
                <Form.Text className="text-muted">
                </Form.Text>
                <Form.Label>Required time</Form.Label>
                <Form.Control     
    type="time"
    name="task-time"
    onChange={handleTimeTaskChange} value={timeTask}
    min="00:00"
    max="24:00"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add task
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    );
}
export default AddToDoPopup; 