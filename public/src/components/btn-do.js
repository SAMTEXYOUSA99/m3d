import React, { useEffect } from 'react';
import $ from 'jquery';

import './btn-do.css';


function BtnDo() {

    function querofazerprojeto() {
        window.fbq('track', 'QUERO FAZER PROJETO');
      }
    

    return(
        <>
            <button type="button" className='btn-do' id="querofazerprojetobtn" onClick={querofazerprojeto}>QUERO FAZER MEU PROJETO</button>
        </>
    );
}

function BtnDoProj() {

    function querofazerprojeto() {
        window.fbq('track', 'QUERO FAZER PROJETO');
      }
    

    return(
        <>
            <button type="button" className='btn-do-proj' id="querofazerprojetobtn" onClick={querofazerprojeto}>QUERO FAZER MEU PROJETO</button>
        </>
    );
}

function BtnDoStudio() {

    function querofazerprojeto() {
        window.fbq('track', 'QUERO FAZER PROJETO');
      }
    

    return(
        <>
            <button type="button" className='btn-do-studio' id="querofazerprojetobtn" onClick={querofazerprojeto}>QUERO FAZER MEU PROJETO</button>
        </>
    );
} 

export {BtnDo, BtnDoProj, BtnDoStudio};