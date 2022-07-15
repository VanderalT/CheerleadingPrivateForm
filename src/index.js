import React from 'react';
import ReactDOM from 'react-dom/client';
import handleViewPort from 'react-in-viewport';
import testimonialContainers from './testimonials';
import './index.scss';
import reportWebVitals from './reportWebVitals';

function TransformScroll(event){
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
}

var ScrollElement = document.scrollingElement || document.documentElement;
ScrollElement.addEventListener('wheel', TransformScroll);


class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <ul>
          <li><a href='#HeroSection'>Home</a></li>
          <li><a href='#TestimonialSection'>Testimonials</a></li>
          <li><a href='#PlanSection'>Plan</a></li>
          <li><a href='#ContactSection'>Contact</a></li>
        </ul>
      </nav>
    )
  }
}

class Hero extends React.Component {
  render(){
    //Need to create image carousel
    return(
      <div className='place-holder' id='HeroSection'>

      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className='home-container' id='HomeSection'>
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
    //Need to create floating sections that contain feedback from Privates
    return (
      <div className='testimonial-container' id='TestimonialSection'>
        <h1>Testimonials</h1>
      </div>
    )
  }
}

class Plan extends React.Component {
  //Need to create
  render() {
    return (
      <div className='plan-container' id='PlanSection'>
        <div className='plan-headergroup'>
          <h1>Plan</h1>
          <h2>Through working on my own tumble, the advice I have recieved from many a cheer coach and coaching <br></br> I have condensed the knowlege I wish I knew for each of the cheerleading levels.</h2>
        </div>
        <div className='plan-main'>
          <ul className='plan-list'>
            <li id='levelOne'>Level 1</li>
            <li id='levelTwo'>Level 2</li>
            <li id='levelThree'>Level 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container' id='ContactSection'>
        <h1>Contact</h1>
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className='website-container'>
        <Hero />
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