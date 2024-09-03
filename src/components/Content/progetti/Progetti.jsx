import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Progetti.css'
import Capstone from './Screenshot-Capstone.png'
import BarberLinks from './Screenshot-BarberLink.png'
import LinkSmart from './Screenshot BarberLink-Smartphone.jpg'
export default function Progetti() {
    return (
        <div className='container-pro'>
            <h2 className='text-light'>Progetti</h2>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img className='image' src={Capstone} alt="Screenshot Capstone" />
                    <h4 className='text-light' >Capstone-ShissorHand</h4>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={BarberLinks} alt="Screenshot BarberLink" />
                    <h4 className='text-light'>Barber-links</h4>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={LinkSmart} alt="Screenshot BarberLink" />
                    <h4 className='text-light'>Barber-links-Smartphone</h4>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}
