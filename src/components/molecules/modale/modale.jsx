import React, { useState } from 'react';
import './modale.css';
import Icon from '../../atoms/icon/icon';
import Image from '../../atoms/image/image';
import Button from '../../atoms/button/button';
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
      <Button className="close-button" onClick={onClose} content={'X'} />
      
      <figure className="modale-slide arrow-container">
        <Image
          className='modale-image'
          url={projet.picture[currentImageIndex]}
          alt={projet.name}
        />
        <h2>{projet.name}</h2>
        <figcaption className="modale-arrow">
          {projet.picture.length > 1 && (
            <>
              <Button
                className="arrow-left arrow"
                onClick={prevSlide}
                content={'<'}
              />
              <Button
                className="arrow-right arrow"
                onClick={nextSlide}
                content={'>'}
              />
            </>
          )}
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
