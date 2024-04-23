import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';

import Nav from './components/organisms/nav/nav.jsx';
import Slideshow from './components/molecules/slideshow/slideshow.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Slideshow />
  </React.StrictMode>
);


