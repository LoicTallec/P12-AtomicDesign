import './icon.css'
import React from 'react';
const Icon = ({cat, name, url}) => {
    return (
        <i className={`fa-${cat} fa-${name} fa-lg`}>{url}</i>
    )
}

export default Icon;