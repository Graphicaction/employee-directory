import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyModal(props) {
    const [isOpen, setIsOpen] = useState(false);

    const hideModal = () => {
        setIsOpen(false);
        props.hideModal();
      };
      // When this component mounts, search employees
    useEffect(()=> {
        if(props.showModal)
            setIsOpen(true);
        else 
            setIsOpen(false);        
    },[props.showModal]);

    return(
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please enter valid characters!</Modal.Body>
            <Modal.Footer>
            <button onClick={hideModal}>Ok</button>
            </Modal.Footer>
        </Modal>
    );
}