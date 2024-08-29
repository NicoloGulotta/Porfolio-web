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
        <div className="container-content m-3">
            <div>
                <div>
                    <Profilo />
                </div>
                <div>
                    <Progetti />
                </div>
                <div>
                    <Contatti />
                </div>
            </div>
        </div>
    );
}