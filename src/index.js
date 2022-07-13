import React from 'react';
import ReactDOM from 'react-dom/client';
import handleViewPort from 'react-in-viewport';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <ul>
          <li>Home</li>
          <li>Testimonials</li>
          <li>Plan</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className="home-headergroup">
          <h1>Private Tumble Lessons</h1>
          <h2>With Coach Van</h2>
        </div>
      </div>
    )
  }
}

class Testimonials extends React.Component {
  render() {
    return (
      <h1>This is a new section</h1>
    )
  }
}

class Plan extends React.Component {
  render() {
    return (
      <h1>This is a new section</h1>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <h1>This is a new section</h1>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className='website-container'>
        <Home />
        <Testimonials />
        <Plan />
        <Contact />
      </div>
    )
  }
}

class Page extends React.Component {
  render(){
    return(
      <>
        <Body />
        <Navbar />
      </>
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