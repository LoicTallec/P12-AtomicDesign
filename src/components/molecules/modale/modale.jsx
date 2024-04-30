import React, { useState } from 'react';
import './modale.css';
import Icon from '../../atoms/icon/icon';
import Image from '../../atoms/image/image';
import leftArrow from '../../../assets/images/arrow_left.png';
import rightArrow from '../../../assets/images/arrow_right.png';
const Modale = ({ projet, onClose }) => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projet.picture.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projet.picture.length) % projet.picture.length);
  };

  return (
    <section className="modal">
      <button className="close-button" onClick={onClose}>X</button>
      
      <figure className="modale-slide">
        <Image
          className='modale-image'
          url={projet.picture[currentImageIndex]}
          alt={projet.name}
        />
        <h2>{projet.name}</h2>
        <figcaption className="modale-arrow">
          <img
            src={leftArrow}
            alt="Left Arrow"
            className="arrow"
            onClick={prevSlide}
          />
          <img
            src={rightArrow}
            alt="Right Arrow"
            className="arrow"
            onClick={nextSlide}
          />
        </figcaption>
      </figure>
      <figure>
        {projet.skills.map((skill, index) => (
          <figcaption key={index} className="skill">
            <Icon cat={skill.cat} name={skill.icon} />
            {skill.name}
          </figcaption>
        ))}
      </figure>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsum. Accusamus rerum voluptates ipsum praesentium magnam hic tempora reprehenderit minus, saepe ut impedit asperiores dolores suscipit et ducimus quaerat maxime.</p>
    </section>
  );
};

export default Modale;
