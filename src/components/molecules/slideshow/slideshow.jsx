import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import './slideshow.css';
import { projets } from '../../../assets/data.json';
import Modale from '../modale/modale';

const Slideshow = () => {
  const [selectedProjet, setSelectedProjet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjetClick = (projet) => {
    setSelectedProjet(projet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjet(null);
  };

  useEffect(() => {
    if (isModalOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  return (
    <div className={`slideshow ${isModalOpen ? 'modal-open' : ''}`}>
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
            closeModal();
          }}
        />
      )}
      <div className="modal-backdrop" onClick={closeModal} />
    </div>
  );
};

export default Slideshow;