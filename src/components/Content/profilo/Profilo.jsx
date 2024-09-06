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
        </Container>
    );
};

export default Profilo;