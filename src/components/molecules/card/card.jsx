import './card.css';
import React from 'react';
import Image from '../../atoms/image/image.jsx';

const Card = ({ name, picture, onClick }) => {
    return (
        <figure className="card" onClick={onClick}>
            <Image url={picture} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
};

export default Card;