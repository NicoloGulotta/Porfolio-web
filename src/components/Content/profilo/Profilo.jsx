import React from 'react';
import foto from '../../../assets/profilo.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './Profilo.css';

const Profilo = () => {
    return (
        <Container className="profilo">
            <Row>
                <Col md={4} sm={12}>
                    <img src={foto} alt="Nicolò Gulotta" className="profile-image" />
                </Col>
                <Col md={8} sm={12}>
                    <div className="text-part">
                        <span>WEB DEVELOPER FULL-STACKS <strong>M.E.R.N.</strong> </span>
                        <p>Professionista versatile con esperienza nella
                            ristorazione, nella logistica e una forte passione per lo sviluppo
                            web. Orientato al cliente, con ottime
                            capacità comunicative, di problem-solving e di lavoro
                            in team. Esperienza nella gestione di magazzino, organizzazione del
                            lavoro e coordinamento di team. In cerca di nuove sfide
                            professionali nel settore dello sviluppo web, mettendo a frutto le
                            competenze
                            tecniche acquisite e la passione per l'apprendimento continuo.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Profilo;