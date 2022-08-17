import React from 'react';
import IndividualTestimonials from './testimonials';

class Testimonials extends React.Component {
    render(){
        return(
            <div className='testimonials-container'>
                <div className='testimonials-headers'>
                    <h1>Testimonials</h1>
                </div>
                <IndividualTestimonials/>
            </div>
        )
    }
}

export default Testimonials