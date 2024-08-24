import React from 'react';
import './Jumbotron.css';
import pic from '../assets/logo-large-gray.png'

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron">
                <img src={pic} alt="Big logo" className="jumbotron-image" />
            </div>

        </>);
};

export default Jumbotron;
