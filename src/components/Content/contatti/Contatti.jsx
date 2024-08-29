import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contatti() {
    return (
        <div>
            <h2>Contatti</h2>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/luca-giordano-1">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LucaGiordano97">
                        <FontAwesomeIcon icon={faGithub} className='icon' /> GitHub
                    </a>
                </li>


            </ul>
        </div>
    )
}
