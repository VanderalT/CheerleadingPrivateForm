import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <div className='contact-form-container'>
                <div>
                <h1 id='contact-form'>Contact Me</h1>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQmNwZC2YrfILlhYncAWxqnbFBeX2CKHNrpJTF4N_kJPk3Xg/viewform?embedded=true" className='contact-form' frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe>
            </div>
        )
    }
}
export default Form