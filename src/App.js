import React from 'react';
import './resources/style.css';


import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Element>
        <Header/>
      </Element>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="info">
        <Info />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>
      
      <Element name="location">
        <Location />
      </Element>
 
      <Footer />
    </div>
  );
}

export default App;
