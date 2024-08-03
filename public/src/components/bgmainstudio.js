import React from 'react';
import video from '../m3dasset/bgm3dstudio.webm';
import './bgmain.css';


function BackGroundMainStudio() {
    return(
        <div className='tw'>
            <video src={video} cover autoPlay loop muted />
        </div>
    );
}

export default BackGroundMainStudio;



