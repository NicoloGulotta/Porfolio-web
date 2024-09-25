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
                        Professionista versatile con una passione predominante per lo sviluppo web, con particolare esperienza
                        nell'uso dello stack MERN (MongoDB, Express.js, React, Node.js). Ho maturato competenze nel creare soluzioni web
                        dinamiche e scalabili, sfruttando le potenzialità di questa tecnologia per sviluppare applicazioni moderne e reattive.
                        Oltre alla mia esperienza nella ristorazione e logistica, che ha affinato le mie capacità di problem-solving e di lavoro
                        in team, il mio vero interesse risiede nello sviluppo web. Sono continuamente impegnato nell'apprendimento di nuove
                        tecnologie e metodologie, con un focus specifico sull'ecosistema JavaScript, per migliorare le mie competenze tecniche
                        e creare progetti web di alta qualità.
                    </p>
                    <p>
                        Sto costantemente migliorando le mie abilità per offrire soluzioni innovative e di alta qualità ai miei clienti.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profilo;
