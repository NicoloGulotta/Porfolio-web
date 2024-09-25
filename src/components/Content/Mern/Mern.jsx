import React, { useState } from 'react';
import mern from '../../../assets/Mern-stack.png';
import './Mern.css';
import { Button } from 'react-bootstrap';

export default function MernStack() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(prevState => !prevState);
    };

    return (
        <div className='container-mern mb-4'>
            <h1 className='title'>Work-Flow dello stack M.E.R.N.</h1>
            <img className='pic' src={mern} alt="Diagramma dello stack M.E.R.N." />
            <Button variant="outline-light m-4" className="mt-3" onClick={toggleDetails}>
                {showDetails ? 'Nascondi Dettagli' : 'Mostra Dettagli'}
            </Button>

            {showDetails && (
                <section className="text-white mt-3 box-info">
                    <ol>
                        <li>
                            <strong>HTML, CSS & JS:</strong>
                            <ul>
                                <li><strong>HTML:</strong> Struttura semantica delle pagine web.</li>
                                <li><strong>CSS:</strong> Stile e layout delle pagine, adattamento responsivo.</li>
                                <li><strong>JavaScript:</strong> Interattività e dinamismo sul lato client.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>React:</strong>
                            <ul>
                                <li>Libreria JavaScript per la costruzione di interfacce utente dinamiche e componenti riutilizzabili.</li>
                                <li>Gestione dello stato dell'applicazione con facilità, attraverso componenti e hook.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Node:</strong>
                            <ul>
                                <li>Ambiente di runtime JavaScript lato server, che permette l'esecuzione di JavaScript al di fuori del browser.</li>
                                <li>Creazione di applicazioni server-side con efficienza e scalabilità.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Express:</strong>
                            <ul>
                                <li>Framework minimalista per Node.js, utilizzato per creare API e gestire routing e middleware.</li>
                                <li>Semplificazione della gestione delle richieste HTTP, autenticazione e gestione delle sessioni.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>MongoDB:</strong>
                            <ul>
                                <li>Database NoSQL orientato ai documenti, che consente di memorizzare dati in formato JSON-like.</li>
                                <li>Flessibilità nella gestione di dati non strutturati e scalabilità per grandi volumi di dati.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Connecting & Deploying:</strong>
                            <ul>
                                <li><strong>Connecting:</strong> Integrazione del front-end e back-end, assicurando un flusso di dati senza interruzioni tra server e client.</li>
                                <li><strong>Deploying:</strong> Distribuzione delle applicazioni su piattaforme cloud, ottimizzazione delle performance e scalabilità.</li>
                            </ul>
                        </li>
                    </ol>
                </section>
            )}
        </div>
    );
}
