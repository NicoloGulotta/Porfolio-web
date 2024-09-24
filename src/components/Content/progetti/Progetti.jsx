import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Progetti.css';

import Capstone from '../../../assets/Screenshot-Capstone.png';
import LinkSmart from '../../../assets/Screenshot BarberLink-Smartphone.jpg';
import ComingSoon from '../../../assets/images.png';
import TodoList from '../../../assets/Screenshot 2024-09-05 211849.png';
import Epibooks from '../../../assets/Screenshot 2024-09-19 182247.png';
import NetflixClone from '../../../assets/Netflix-clone.png';

const projects = [
    {
        img: Capstone,
        title: "Capstone Barber Shop",
        description: "Gestionale completo per barbieri sviluppato con lo stack MERN. Frontend responsive per la prenotazione intuitiva di servizi; backend sicuro con autenticazione a token per la gestione degli utenti e delle operazioni CRUD.",
    },
    {
        img: LinkSmart,
        title: "Barber Links",
        description: "Codice QR per accedere rapidamente alle recensioni e ai canali social di 'Vito Gallo Barber Shop'",
    },
    {
        img: TodoList,
        title: "TodoList-app",
        description: "Interfaccia di un'applicazione ToDo List minimalista, con funzionalità per gestire e aggiungere compiti.",
    },
    {
        img: Epibooks,
        title: "EpiBooks",
        description: "EpiBooks è una piattaforma per scoprire libri, con dettagli visivi e recensioni personalizzate. Permette di cercare titoli, leggere riassunti e lasciare valutazioni in modo semplice e veloce.",
    },
    {
        img: NetflixClone,
        title: "NetClone",
        description: "Ho creato un'interfaccia simile a Netflix con un sistema multi-carousel, che permette di navigare tra categorie di contenuti in modo fluido e responsive.",
    },
    { img: ComingSoon, title: "...", description: "" },
];

export default function Progetti() {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (cardIndex) => {
        setExpandedCard(prev => (prev === cardIndex ? null : cardIndex)); // Utilizza il valore precedente per semplificare
    };

    return (
        <div className="container">
            <h2 className="text-light mb-5">Progetti</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`col-md-4 col-sm-6 ${expandedCard === index ? ' expanded' : 'col-md-4 col-sm-6'}`}
                        onClick={() => toggleExpand(index)}
                        style={{ transition: 'transform 0.3s ease-in-out' }} // Aggiunta transizione generale
                    >
                        <div className="card bg-dark">
                            <img className="card-image" src={project.img} alt={project.title} />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h4 className="card-title text-light">{project.title}</h4>
                                {project.description && <p className="card-text text-light">{project.description}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}