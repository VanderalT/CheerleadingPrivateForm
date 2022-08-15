import React from 'react';
import './index.scss';

class Hero extends React.Component {
    render(){
        return(
            <div className='hero-section'>
                <div className='hero-photos'>
                    <div className='placeholder'/>
                </div>
                <div className='header-group'>
                    <div className='headers'>
                        <h1>Coach Van</h1>
                        <h2>Private Tumble Lessons</h2>
                        <div className='book-now-button'>
                            <h2><a href='#contact-form'>GET IN TOUCH!</a></h2>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Hero