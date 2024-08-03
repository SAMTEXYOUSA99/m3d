import React from 'react';
import casasirleivideo from '../asssets/CASASIRLEI916.webm';
import './bgmain.css';

function CasaSirlei() {
    return(
        <div className='tw'>
            <video src={casasirleivideo} cover autoPlay loop muted playsInline/>
        </div>
    );
}

export default CasaSirlei;