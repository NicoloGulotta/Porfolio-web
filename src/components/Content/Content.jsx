import React from 'react';
import './Content.css';
import './profilo/Profilo.jsx'
import './contatti/Contatti.jsx'
import './progetti/Progetti.jsx'
import Profilo from './profilo/Profilo.jsx';
import Contatti from './contatti/Contatti.jsx';
import Progetti from './progetti/Progetti.jsx';
export default function Content() {
    return (
        <div className="container">
            <div className="row-column text-white">
                <div className="col-md-4">
                    <Profilo />
                </div>
                <div className="col-md-4">
                    <Contatti />
                </div>
                <div className="col-md-4">
                    <Progetti />
                </div>
            </div>
        </div>
    );
}