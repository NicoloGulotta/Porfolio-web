import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contatti.css'
export default function Contatti() {
    return (
        <div className='container-con'>
            <h1>Contatti</h1>

            <ul>
                <li>
                    <a className='info' href="https://www.linkedin.com/in/luca-giordano-1">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' /> LinkedIn
                    </a>
                </li>
                <li>
                    <a className='info' href="https://github.com/LucaGiordano97">
                        <FontAwesomeIcon icon={faGithub} className='icon' /> GitHub
                    </a>
                </li>


            </ul>
        </div>
    )
}
