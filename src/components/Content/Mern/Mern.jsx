import React from 'react';
import mern from '../../../assets/Mern-stack.png';
import './Mern.css'
export default function MernStack() {
    return (
        <div className='container-mern'>
            <h1 className='title'>Work-Flow</h1>
            <img className='pic' src={mern} alt="mern-pic" />
        </div>
    );
}