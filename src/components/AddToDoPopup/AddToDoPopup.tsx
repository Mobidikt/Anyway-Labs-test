import React from 'react'
import  {Modal, Button, Form } from 'react-bootstrap';
import { AddToDoProps } from './AddToDoPopupProps';

function AddToDoPopup ({show, handleClose }:AddToDoProps){
    
    return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Task name</Form.Label>
                <Form.Control type="text" placeholder="Task name" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add task
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    );
}
export default AddToDoPopup; 