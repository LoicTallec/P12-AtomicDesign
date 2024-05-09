import React from 'react';
import Link from '../../atoms/link/link';
import Icon from '../../atoms/icon/icon';
import { icons } from '../../../assets/data.json'; 
import './footer.css';


const Footer = () => {
  return (
    <footer>
      <ul className="footer">
        {icons.map((icon, index) => (
          <li key={index}>
            <Link 
              url={icon.url} 
              content={<Icon cat={icon.cat} name={icon.icon} />} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;