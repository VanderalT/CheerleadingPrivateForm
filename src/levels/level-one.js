import React from 'react';

class LevelOne extends React.Component {
    render(){
        return(
            <div className='level-one-container'>
                <h1>Level One</h1>
                <p>
                    Level one skills are the foundation of not only all skills in the higher levels but are also the foundation for a long and healthy cheer/tumble career!
                    <br></br>My aim at this level is to get on the same page with the athlete as to what muscles they need to engage to get into optimal shapes for the skills they need to perform.
                    <br></br>I subscribe to this idea from <a href='https://youtu.be/PZ7lDrwYdZc?t=149' target='_blank'> James Clears book Atomic Habits </a> that progress is not linear but is rather a slope that improves exponentially over time with purposeful practice. 
                    <br></br>The more time spent perfecting skills at this level the less time skills at a higher level will take.
                </p>
                <h1>Skills</h1>
                <ul>
                    <li>Handstand</li>
                    <li>Cartwheel</li>
                    <li>Back Walkover</li>
                    <li>Front Walkover</li>
                    <li>Roundoff</li>
                </ul>
            </div>
        )
    }
}

export default LevelOne