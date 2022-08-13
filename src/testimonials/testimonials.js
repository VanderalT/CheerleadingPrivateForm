import React from 'react';

var testimonials = [
    {
        testimonialName: 'Sharily',
        testimonialContent: 'Thanks for Lace\'s training tonight, both her and I left feeling like it was an awesome learning experience! You are a really good coach and we both appreciated your effort in making it a fun and structured session.'
    },
    {
        testimonialName: 'Caryn',
        testimonialContent: 'Tatum was at the BHS clinic. She loved it and learned heaps!!'
    },
]

const TestimonialBubbles = ({testimonials}) => (
    <div className='testimonial-inner-container'>
    {testimonials.map(testimonials => (
        <div className='testimonial' key={testimonials.testimonialName}>
            <h1>{testimonials.testimonialName}</h1>
            <p>{testimonials.testimonialContent}</p>
        </div>
    ))}
    </div>
)


class IndividualTestimonials extends React.Component{
    render(){
        return(
            <TestimonialBubbles testimonials={testimonials}/>
        )

    }
}

export default IndividualTestimonials