import React from 'react';
import foto from '../../../assets/image.png';
import { Container, Row, Col } from 'react-bootstrap';
import './Profilo.css';

const Profilo = () => {
    return (
        <Container className="profilo p-3">
            <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                    <img src={foto} alt="Nicolò Gulotta" className="profile-image" />
                </Col>
                <Col xs={12} md={8}>
                    <h3 className="text-white mb-4">WEB DEVELOPER FULL-STACK <strong>M.E.R.N.</strong></h3>
                    <p className='profile-text'>
                        Sono un web developer full-stack con esperienza nello stack MERN (MongoDB, Express.js, React, Node.js). Creo soluzioni web dinamiche e scalabili. Ho anche esperienza nella ristorazione e logistica, che ha migliorato le mie capacità di problem-solving e di lavoro in team. Mi dedico costantemente all'apprendimento di nuove tecnologie e metodologie, con un focus sull'ecosistema JavaScript, per migliorare le mie competenze tecniche e creare progetti web di alta qualità.
                    </p>
                    <p>
                        Miglioro continuamente le mie abilità per offrire soluzioni innovative e di alta qualità ai miei clienti.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profilo;
