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
        <Carousel className='container-prog'>
            <Carousel.Item>
                <img className="image" src={Capstone} alt="Screenshot Capstone" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="image" src={LinkSmart} alt="Screenshot BarberLink" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="image" src={TodoList} alt="TodoList" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="image" src={ComingSoon} alt="Coming Soon" />
            </Carousel.Item>
        </Carousel>
    );
}

