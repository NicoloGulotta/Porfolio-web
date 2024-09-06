import React, { useEffect, useState } from 'react';
import './Content.css';
import Profilo from './profilo/Profilo.jsx';
import Progetti from './progetti/Progetti.jsx';
import Contatti from './contatti/Contatti.jsx';
import MernStack from './Mern/Mern.jsx';
export default function Content() {
    const [currentBlock, setCurrentBlock] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBlockClick = (index) => {
        setCurrentBlock(index);
    };

    const blocks = [
        { component: <Profilo /> },
        { component: <Progetti /> },
        { component: <MernStack /> },
        { component: <Contatti /> },
    ];

    return (
        <div className="container-content">

            {blocks.map((block, index) => (
                <div
                    key={index}
                    className={`blocco ${isScrolled ? 'hidden' : ''} ${index === currentBlock ? 'active' : ''}`}
                    onClick={() => handleBlockClick(index)}
                >
                    <h2 className="block-title">{block.title}</h2>
                    {block.component}
                </div>
            ))}
        </div>

    );
}