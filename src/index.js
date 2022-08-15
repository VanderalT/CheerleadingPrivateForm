import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './hero';
import Levels from './levels/levels';
import Testimonials from './testimonials/testimonials-container';
import Form from './contact-form';
import Footer from './footer/footer';
import './index.scss';

/*
TO DO:
Minimum viable product
-Hero + Header
-Testimonials
-Levels
-Booking Form//
*/

class Page extends React.Component {
  render(){
    return(
      <div className='website-container'>
        <Hero/>
        <Testimonials />
        <Levels />
        <Form />
        <Footer />
      </div>
    )
  }
}

// ===============================================================>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);