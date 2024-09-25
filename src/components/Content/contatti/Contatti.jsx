import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contatti.css';
import { Modal, Button } from 'react-bootstrap';

export default function Contatti() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='container-con'>
            <h2 className='text-light'>Contatti</h2>
            <ul className='social-icons'>
                <li>
                    <a className='info' href="https://www.linkedin.com/in/gulotta13" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' /> LinkedIn
                    </a>
                </li>
                <li>
                    <a className='info' href="https://github.com/NicoloGulotta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='icon' /> GitHub
                    </a>
                </li>
                <li>
                    <a className='info' href="https://www.facebook.com/Nik.Gulotta.98/?locale=it_IT" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className='icon' /> Facebook
                    </a>
                </li>
            </ul>
            <Button variant="outline-light" onClick={() => setShowModal(true)}>
                Contattami
            </Button>
            <a href="/CV_NG_2024.pdf" download>
                <Button variant="outline-light">Scarica il mio CV</Button>
            </a>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Scrivimi qui</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-dark'>
                        Email:
                        <a className='text-dark' href="mailto:gulottanico1998@gmail.com">gulottanico1998@gmail.com</a>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
