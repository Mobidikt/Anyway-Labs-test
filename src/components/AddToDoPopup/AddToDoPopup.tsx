import React, { useEffect, useState } from 'react'
import  {Modal, Button, Form } from 'react-bootstrap';
import { AddToDoProps } from './AddToDoPopupProps';

function AddToDoPopup ({open, handleClose, addTask }:AddToDoProps){
    const [titleTask, setTitleTask] = useState<string>('')
    useEffect(() => {
        setTitleTask('');
      }, [open]);
      const handleTaskNameChange = (e:any) => {
        setTitleTask(e.target.value);
      };
      const handleSubmit =(e:any)=>{
        e.preventDefault();
        addTask(titleTask);
        handleClose();
      }
    return(
    <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Task name</Form.Label>
                <Form.Control type="text" placeholder="Task name" onChange={handleTaskNameChange} value={titleTask}/>
                <Form.Text className="text-muted">
                </Form.Text>
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