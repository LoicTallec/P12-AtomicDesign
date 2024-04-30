import React from 'react';
import './image.css'

const Image = ({ url, alt, className = '' }) => {
  return (
    <img src={url} alt={alt} className={className} />
  );
};

export default Image;