import React from 'react';
import logo from './img/instagram-logo.png';
import heroImage from './img/coach-van.jpg';
import './index.scss';

class Hero extends React.Component {
    render(){
        return(
            <div className='hero-section'>
                <div className='hero-photos'>
                    <img src={heroImage} alt='Coach Van' className='hero-image' />
                </div>
                <div className='header-group'>
                    <div className='headers'>
                        <h1>Coach Van</h1>
                        <div className='book-now-button'>
                            <h2><a href='#contact-form'>Contact Me About Private Tumble Lessons</a></h2>
                        </div>
                        <div className='social-media'>
                            <a href='https://www.instagram.com/vanderaltalagi/'><img src={logo} alt='instagram' className='instagram-logo '></img></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Hero