import React from 'react';
import './logo.css';

const Logo = ({ logo, alt, className }) => {
    return (
        <figure className="logo">
            <img src={logo} className={className} alt={alt} />
        </figure>
    )
}

export default Logo;