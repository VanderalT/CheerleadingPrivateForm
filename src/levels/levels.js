import React from 'react';
import LevelOne from './level-one';
import LevelTwo from './level-two';
import LevelThree from './level-three';

class Levels extends React.Component{
    render(){
        return(
            <div className='levels-container'>
                <div className='levels-header'>
                    <h1>Focuses for different levels</h1>
                </div>
                <div className='levels-content-container'>
                    <LevelOne />
                    <LevelTwo />
                    <LevelThree />
                </div>
            </div>
        )
    }
}

export default Levels