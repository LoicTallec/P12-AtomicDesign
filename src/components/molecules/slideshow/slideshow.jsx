import Card from '../card/card';
import './slideshow.css';
import React, { useState } from 'react';
import { projets } from '../../../assets/data.json';
import Modale from '../modale/modale';

const Slideshow = () => {
    const [selectedProjet, setSelectedProjet] = useState(null);

    const handleProjetClick = (projet) => {
        setSelectedProjet(projet);
    };
    return (
        <section className="slideshow">
            {projets.map((projet) => (
                <Card 
                    key={projet.id} 
                    name={projet.name} 
                    picture={projet.cover}
                    onClick={() => handleProjetClick(projet)}
                />
            ))}
            {selectedProjet && (
                <Modale 
                    projet={selectedProjet} 
                    onClose={() => {
                        setSelectedProjet(null);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </section>
    );
};  

export default Slideshow;