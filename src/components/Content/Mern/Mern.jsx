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
                        <li><strong>HTML, CSS & JS:</strong> HTML for structure, CSS for style, and JavaScript for interactivity.</li>
                        <li><strong>React:</strong> JavaScript library for building dynamic user interfaces and reusable components.</li>
                        <li><strong>Node:</strong> JavaScript runtime for server-side applications, enabling efficient and scalable server-side code.</li>
                        <li><strong>Express:</strong> Minimalist framework for Node.js, used for creating APIs and handling routing and middleware.</li>
                        <li><strong>MongoDB:</strong> NoSQL database for storing JSON-like documents, offering flexibility and scalability for large data volumes.</li>
                        <li><strong>Connecting & Deploying:</strong> Integrating front-end and back-end for seamless data flow, and deploying applications on cloud platforms for optimized performance and scalability.</li>
                        <Button variant="outline-light m-4" className="mt-3" onClick={toggleDetails}>
                            {showDetails ? 'Nascondi Dettagli' : 'Mostra Dettagli'}
                        </Button>
                    </ol>
                </section>
            )}
        </div>
    );
}
