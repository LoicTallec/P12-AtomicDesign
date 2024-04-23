import React from 'react';
import './image.css'

const Image = ({ url, alt }) => {

return (
    <img src={url} alt={alt} />
  )
}

export default Image;