import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Progetti.css'
import Capstone from './Screenshot-Capstone.png'
import BarberLinks from './Screenshot-BarberLink.png'
export default function App() {
    return (
        <div className='container-pro'>
            <h2 className='text-light'>Progetti</h2>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img className='image' src={Capstone} alt="Screenshot Capstone" />
                    <h1 className='text-light' >Capstone-ShissorHand</h1>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={BarberLinks} alt="Screenshot BarberLink" />
                    <h1 className='text-light'>Barber-links</h1>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}
