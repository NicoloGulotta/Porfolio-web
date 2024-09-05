import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Progetti.css'
import Capstone from './Screenshot-Capstone.png'
import BarberLinks from './Screenshot-BarberLink.png'
import LinkSmart from './Screenshot BarberLink-Smartphone.jpg'
import ComingSoon from './images.png'

export default function Progetti() {
    return (
        <div className='container-pro'>
            <h2 className='text-light'>Progetti</h2>
            <Carousel indicators={false} controls={false} fade={false} pause={false}>
                <Carousel.Item interval={3000}>
                    <img className='image' src={Capstone} alt="Screenshot Capstone" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={BarberLinks} alt="Screenshot BarberLink" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={LinkSmart} alt="Screenshot BarberLink" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='image' src={ComingSoon} alt="Coming Soon" />
                </Carousel.Item>
            </Carousel>
        </div >
    );
}
