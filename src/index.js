import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <ul>
          <li id="home">Home</li>
          <li id="testimonials">Testimonials</li>
          <li id="plan">Plan</li>
          <li id="contact">Contact</li>
        </ul>
      </nav>
    )
  }
}

class Page extends React.Component {
  render(){
    return(
      <Navbar />
    )
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ===============================================================>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);