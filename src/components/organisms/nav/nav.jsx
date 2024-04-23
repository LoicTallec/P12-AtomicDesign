import React from 'react';
import NavLinks from '../../molecules/navlinks/navlinks.jsx';
import Logo from '../../atoms/logo/logo.jsx';
import './nav.css';
const Nav = () => {
    return (
        <nav>
            <Logo />
            <NavLinks />
        </nav>
    )
}

export default Nav;