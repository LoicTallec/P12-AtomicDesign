import './icon.css'
import React from 'react';
const Icon = ({cat, name}) => {
    return (
        <i className={`fa-${cat} fa-${name} fa-lg`}></i>
    )
}

export default Icon;