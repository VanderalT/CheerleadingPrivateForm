import React from 'react';

var testimonials = [
    {
        testimonialName: 'Sharily',
        testimonialContent: 'Thanks for Lace\'s training tonight, both her and I left feeling like it was an awesome learning experience! You are a really good coach and we both appreciated your effort in making it a fun and structured session.'
    },
    {
        testimonialName: 'Joanne',
        testimonialContent: <p>As a parent of a daughter who loves cheer my daughter started privates with Van earlier this year to help advance her Stunting and tumbling skills further.<br></br> Van is fully invested and focused in the time he spends with Kate, he has an infectious positive attitude,  an eye for detail and  is an incredible athlete himself who is passionate about cheer.<br></br> Together they set goals that are tailored to her as an individual, what she wants to be able to achieve herself personally and then around her position in the team (currently as flyer). Van then sets about teaching her and supporting  her in every way he can to ensure these goals are reached so she can better herself and succeed.<br></br> I am thankful that coach Van is giving my daughter the techniques that will allow her to cheer and stunt for years to come.</p>
    },
    {
        testimonialName: 'Michael',
        testimonialContent: <p>My daughter Serena took private lessons with Van for two years, she improved her tumble skills quickly and accurately which made her confident during cheer routines.<br></br> Van is an experienced coach and had a plan for each level and helped Serena improve through each one step by step.<br></br>Serena had the benifit of not only and explanation from Van but he is also able to demonstrate skills for visual learners.</p>
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