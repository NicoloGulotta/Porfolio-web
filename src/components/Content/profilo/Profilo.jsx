import React from 'react'
import './Profilo.css'
import foto from './profilo.jpg'
export default function Profilo() {
    return (
        <div className='container-profile'>
            <div className='image-part'>
                <h1>Chi sono</h1>
                <img src={foto} alt="Nicolò Gulotta" className="profile-image" />
            </div>
            <div className="text-part">
                <h2 className='name'>Nicolò Gulotta</h2>
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
        </div>
    )
}
