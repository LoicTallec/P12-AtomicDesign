import React from 'react';
import NavLinks from '../../molecules/navlinks/navlinks.jsx';
import logo from '../../../assets/images/visuart.webp';
import Logo from '../../atoms/logo/logo.jsx';
import './nav.css';
const Nav = () => {
    return (
        <nav>
            <Logo
                logo={logo}
                alt={'Logo de VisuArt'}
            />
            <NavLinks />
        </nav>
    )
}

export default Nav;