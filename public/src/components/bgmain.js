import React from 'react';
import video from '../asssets/videositeatualizado.webm';
import './bgmain.css';


function BackGroundMain() {
    return(
        <div className='tw'>
            <video src={video} cover autoPlay loop muted />
        </div>
    );
}

export default BackGroundMain;



