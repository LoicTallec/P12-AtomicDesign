import React from 'react';
import './image.css'

const Image = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={className} loading='lazy'/>
  );
};

export default Image;