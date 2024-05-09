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
      <Button 
        className="close-button" 
        onClick={onClose} 
        content={'X'} 
      />
      
      <figure className="modale-slide arrow-container">
        <Image
          className='modale-image'
          src={projet.picture[currentImageIndex]}
          alt={projet.name}
        />
        
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
        <h2>{projet.name}</h2>
      </figure>
      <section className='modal-info'>
        <p>{projet.mission}</p>
        <p>{projet.info}</p>
      </section>
      <section className='modal-skills'>
      <h3>Compétences utilisées</h3>
        {projet.skills.map((skill, index) => (
          <figcaption key={index} className="skill">
            <Icon 
              cat={skill.cat} 
              name={skill.icon} 
            />
            {skill.name}
          </figcaption>
        ))}
      </section>
      <section className='modal-link'>
        <h3>Liens</h3>
        <figure>
        {projet.url ? (
          <Button
            className="url"
            onClick={() => window.open(projet.url, '_blank _noopener _noreferrer')}
            content="Voir le site"
          />
        ) : null}
        {projet.github ? (
          <Button
            className="url"
            onClick={() => window.open(projet.github, '_blank _noopener _noreferrer')}
            content="Voir le code"
          />
        ) : null}
</figure>
      </section>
    </section>
  );
};

export default Modale;
