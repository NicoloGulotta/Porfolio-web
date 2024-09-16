import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contatti.css';
import { Modal, Button } from 'react-bootstrap';

export default function Contatti() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className='container-con'>
            <h2 className='text-light'>Contatti</h2>
            <ul className='social-icons'>
                <li>
                    <a className='info' href="https://www.linkedin.com/in/gulotta13">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' /> LinkedIn
                    </a>
                </li>
                <li>
                    <a className='info' href="https://github.com/NicoloGulotta">
                        <FontAwesomeIcon icon={faGithub} className='icon' /> GitHub
                    </a>
                </li>
                <li>
                    <a className='info' href="https://www.facebook.com/Nik.Gulotta.98/?locale=it_IT">
                        <FontAwesomeIcon icon={faFacebook} className='icon' /> Facebook
                    </a>
                </li>
            </ul>
            <Button variant="outline-light" onClick={handleShow}>
                Contattami
            </Button>
            <a href="../contatti/CV_NG_2024.pdf" download>
                <Button variant="outline-light">Scarica il mio CV</Button>
            </a>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Scrivimi qui</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-dark'>
                        Email:
                        <a className='text-dark' href="gulottanico1998@gmail.com">gulottanico1998@gmail.com</a>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>

            </Modal>
        </div >
    );
}