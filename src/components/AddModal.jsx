import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function AddModal({ show, handleClose }) {
  const [name, setName] = useState("");
  const [date, serDate] = useState("");
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control type="datetime-local" placeholder="Date" />
            </Form.Group>
            <div className="text-end ">
              <Button variant="primary" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
