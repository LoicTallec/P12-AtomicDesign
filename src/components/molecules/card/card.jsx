import './card.css';
import React from 'react';
import Image from '../../atoms/image/image.jsx';

const Card = ({ name, picture }) => {
    return (
        <figure>
            <Image url={picture} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
};

export default Card;