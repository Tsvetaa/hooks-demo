import { Button, Modal, Form } from 'react-bootstrap';

export const AddTodoModal = () => {
    const onTodoSubmit = (e) => {
        e.preventDefault();
        console.log('submited')
    };

    return (

        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit = {onTodoSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" placeholder="Enter todo" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginRight:'10px'}}>Submit</Button>
                    <Button variant="secondary">Close</Button>
                </Form >
            </Modal.Body>
        </Modal>

    )
}