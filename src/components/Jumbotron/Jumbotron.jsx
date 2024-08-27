import React from 'react';
import './Jumbotron.css';
import logobig from '../../assets/logo-big.jpeg'

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron-big">
                <img src={logobig} alt="Big logo" className="jumbotron-image" />
            </div>
        </>);
};

export default Jumbotron;
