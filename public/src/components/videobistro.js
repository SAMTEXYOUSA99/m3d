import React from 'react';
import bistrobeachvideo from '../asssets/BISTROBEACH916.webm';
import './bgmain.css';


function VideoBistro() {
    return(
        <div className='tww'>
           <video src={bistrobeachvideo} cover autoPlay loop muted playsInline/>
        </div>
    );
}



export default VideoBistro;




