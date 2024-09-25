import React, { useEffect, useState } from 'react';
import './Content.css';
import Profilo from './profilo/Profilo';
import Progetti from './progetti/Progetti';
import Contatti from './contatti/Contatti';
import MernStack from './Mern/Mern';

export default function Content() {
    const [currentBlock, setCurrentBlock] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBlockClick = (index) => setCurrentBlock(index);

    const blocks = [
        { component: <Profilo />, title: "Profilo" },
        { component: <MernStack />, title: "MERN Stack" },
        { component: <Progetti />, title: "Progetti" },
        { component: <Contatti />, title: "Contatti" },
    ];

    return (
        <div className="container-content">
            {blocks.map((block, index) => (
                <div
                    key={index}
                    className={`blocco ${isScrolled ? 'hidden' : ''} ${index === currentBlock ? 'active' : ''}`}
                    onClick={() => handleBlockClick(index)}
                >
                    {block.component}
                </div>
            ))}
        </div>
    );
}
