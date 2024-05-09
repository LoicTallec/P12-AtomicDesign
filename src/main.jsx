import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';

import Nav from './components/organisms/nav/nav.jsx';
import Portfolio from './components/organisms/portfolio/portfolio.jsx';
import Worker from './components/organisms/worker/worker.jsx';
import Footer from './components/organisms/footer/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Worker />
    <Portfolio />
    <Footer />
  </React.StrictMode>
);


