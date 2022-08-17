import React from 'react';
import logo from '../img/instagram-logo.png'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='social-media'>
                    <a href='https://www.instagram.com/vanderaltalagi/' target='_blank'><img src={logo} alt='Instagram' className='instagram-logo'/></a>
                </div>    
            </footer>
        )
    }
}

export default Footer