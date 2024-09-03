import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contatti.css';
import { Modal, Button } from 'react-bootstrap';

export default function Contatti() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className='container-con'>
            <h1 className='text-light'>Contattami</h1>
            <ul>
                <li>
                    <a className='info' href="https://www.linkedin.com/in/luca-giordano-1">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' /> LinkedIn
                    </a>
                </li>
                <li>
                    <a className='info' href="https://github.com/LucaGiordano97">
                        <FontAwesomeIcon icon={faGithub} className='icon' /> GitHub
                    </a>
                </li>
                <Button variant="outline-light" onClick={handleShow}>
                    Contattaci
                </Button>
            </ul>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contattaci</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-dark'>
                        Puoi contattarci al numero di telefono 123-456-7890 o
                        all'indirizzo email info@hairsalon.com.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}