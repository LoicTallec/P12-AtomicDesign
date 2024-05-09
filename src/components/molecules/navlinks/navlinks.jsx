import React from 'react';
import Link from '../../atoms/link/link';
import './navlinks.css';
import data from '../../../assets/data.json'; // Importe les données JSON

const NavLinks = () => {
  return (
      <ul className="navlist">
        {data.nav.map((item) => (
          <li key={item.id}>
            <Link url={item.url} content={item.content} />
          </li>
        ))}
      </ul>
  );
};

export default NavLinks;