import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './hero';
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
      </div>
    )
  }
}

// ===============================================================>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);