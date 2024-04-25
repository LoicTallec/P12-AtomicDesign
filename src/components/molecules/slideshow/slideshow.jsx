import Card from '../card/card';
import './slideshow.css';
import React from 'react';
import { projets } from '../../../assets/data.json'; 

const Slideshow = () => {
    return (
        <section className="slideshow">
            {projets.map((projet) => (
                <Card 
                    key={projet.id} 
                    name={projet.name} 
                    picture={projet.cover} 
                />
            ))}
        </section>
    );
};  

export default Slideshow;