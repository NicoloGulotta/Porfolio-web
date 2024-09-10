import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Progetti.css';

import Capstone from '../../../assets/Screenshot-Capstone.png';
import LinkSmart from '../../../assets/Screenshot BarberLink-Smartphone.jpg';
import ComingSoon from '../../../assets/images.png';
import TodoList from '../../../assets/Screenshot 2024-09-05 211849.png';

export default function Progetti() {
    return (
        <div className="container-pro">
            <h2 className='text-light'>Progetti</h2>
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src={Capstone} alt="Screenshot Capstone" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h4 className="card-title text-light">Capstone Barber Shop</h4>
                            <p className="card-text text-ligh">Gestionale completo per barbieri sviluppato con lo stack MERN. Frontend responsive per la prenotazione intuitiva di servizi; backend sicuro con autenticazione a token per la gestione degli utenti e delle operazioni CRUD.</p>
                            {/* <a href="/#" className="btn btn-dark text-ligh">Scopri di più</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src={LinkSmart} alt="Screenshot Barberlink" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h4 className="card-title text-light">Barber Links</h4>
                            <p className="card-text text-ligh">Codice QR per accedere rapidamente alle recensioni e ai canali social di 'Vito Gallo Barber Shop</p>
                            {/* <a href="/#" className="btn btn-dark text-ligh">Scopri di più</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src={TodoList} alt="TodoList-app" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h4 className="card-title text-light">TodoList-app</h4>
                            <p className="card-text text-ligh">Interfaccia di un'applicazione ToDo List minimalista, con funzionalità per gestire e aggiungere compiti.</p>
                            {/* <a href="/#" className="btn btn-dark text-ligh">Scopri di più</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src={ComingSoon} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}