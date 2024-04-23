import Card from '../card/card';
import './slideshow.css';
import React from 'react';
import { projets } from '../../../assets/data.json'; 

console.log(projets);
const Slideshow = () => {
    return (
        <div className="slideshow">
            {projets.map((projet) => (
                <Card 
                    key={projet.id} 
                    name={projet.name} 
                    picture={projet.cover} 
                />
            ))}
        </div>
    );
};  

export default Slideshow;