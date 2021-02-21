import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constants';


const AddPresentation = (props) =>{
    const [show, setShow] = useState(false);
    const [presentationsList, setPresentationsList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [state, setState] = useState({
        title: '',
        description: ''
      });
    const { fileNames } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleInputChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        });
      };

    const addPresentation = async () => {
        let files = [];
        fileNames.map((fil)=>{
            files.push(`${API_URL}/${fil}`)
        })
        const { title, description } = state;
        const params = {
            title,
            description,
            files: files
        }
        try {
          const { data } = await axios.post(`${API_URL}/presentation`, params);
          setErrorMsg('');
          setPresentationsList(data);
          props.history.push('/presentations');
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create presentation
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finish Presentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
                type="text"
                name="title"
                value={state.title || ''}
                placeholder="Enter title"
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>description</Form.Label>
            <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter description"
                onChange={handleInputChange}
            />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addPresentation}>
            Finish
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default AddPresentation;
