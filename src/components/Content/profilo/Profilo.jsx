import React from 'react';
import foto from '../../../assets/image.png';
import { Container } from 'react-bootstrap';
import './ProfiloCSS.css';

const Profilo = () => {
    return (
        <Container className="profilo d-flex align-items-center p-0">
            <img src={foto} alt="Nicolò Gulotta" className="profile-image" />
            <div className="text-part ms-4">
                <span>WEB DEVELOPER FULL-STACKS <strong>M.E.R.N.</strong> </span>
                <p>Professionista versatile con una passione predominante per lo sviluppo web, con particolare esperienza nell'uso dello stack MERN (MongoDB, Express.js, React, Node.js). Ho maturato competenze nel creare soluzioni web dinamiche e scalabili, sfruttando le potenzialità di questa tecnologia per sviluppare applicazioni moderne e reattive.

                    Oltre alla mia esperienza nella ristorazione e logistica, che ha affinato le mie capacità di problem-solving e di lavoro in team, il mio vero interesse risiede nello sviluppo web. Sono continuamente impegnato nell'apprendimento di nuove tecnologie e metodologie, con un focus specifico sull'ecosistema JavaScript, per migliorare le mie competenze tecniche e creare progetti web di alta qualità.</p>
            </div>
        </Container>
    );
};

export default Profilo;