import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Progetti.css'
export default function App() {
    return (
        <div className='container-pro'>
            <h2 className='text-light'>Progetti</h2>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        alt='bello'
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        alt='bello'
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}
