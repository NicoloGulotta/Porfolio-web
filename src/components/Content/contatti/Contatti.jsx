import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
                <li>
                    <a className='info' href="https://twitter.com/your-username">
                        <FontAwesomeIcon icon={faInstagram} className='icon' /> Instagram
                    </a>
                </li>
                <li>
                    <a className='info' href="https://twitter.com/your-username">
                        <FontAwesomeIcon icon={faInstagram} className='icon' /> Instagram
                    </a>
                </li>
            </ul>
            <Button variant="outline-dark" onClick={handleShow}>
                Contattami
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contattaci</Modal.Title>
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
        </div>
    );
}