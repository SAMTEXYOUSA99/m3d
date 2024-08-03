import React, { useState } from 'react';
import './Proposal.css';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import headerunic from '../m3dasset/headerunic.png';
import FooterM3D from '../components/footerm3d'
import logom3dstudiowhite from '../m3dasset/logom3dstudiowhite.png';

import modelain from '../m3dasset/modelain.jpg'
import modelaexin from '../m3dasset/backgroundblockhome.jpg'
import modelaex from '../m3dasset/modelaext.jpg'

import modelcex from '../m3dasset/modelcext.jpg'
import modelcexin from '../m3dasset/modelcexin.jpg'
import modelcin from '../m3dasset/modelcin.jpg'
  
const MVPProposal = () => {
  return (
    <div className="global">
       <header className="header">
      <img src={headerunic} alt="Logo" className="header1red"/>
      <img src={logom3dstudiowhite} alt="Logo" className="logo"/>    
    </header>
    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    
    <div className="container">
        <h1>Criação de Proposta de Investimento</h1>
        <h2>Selecione o modelo de orçamento:</h2>
        <div className='imgcontainer'>

        <div className="images-section">
            <h3>Modelo A<br/><br/></h3>
            <div className="small-images">

            <Link to="/mvpproposals/aintern">
              <div className="image-wrapper">
                <img src={modelain} alt="Small 1" className="small-image" />
                 <div className="overlay-prp">
                  <div className="overlay-text">Interno</div>
                </div>
              </div>
              </Link>

              <Link to="/mvpproposals/aextern">
              <div className="image-wrapper">
                <img src={modelaex} alt="Small 2" className="small-image" />
                <div className="overlay-prp">
                  <div className="overlay-text">Externo</div>
                </div>
              </div>
              </Link>

            </div>

            <Link to="/mvpproposals/ainextern">
              <div className="image-wrapper">
                <img src={modelaexin} alt="Large" className="large-image" />
                <div className="overlay-prp">
                  <div className="overlay-text">Externo e interno</div>
                </div>
              </div>
            </Link>
        </div>

        <div className="gradient-line-studio-prp"></div>

        <div className="images-section">
            <h3>Modelo C<br/><br/></h3>
            <div className="small-images">

            <Link to="/mvpproposals/cintern">
              <div className="image-wrapper">
                <img src={modelcin} alt="Small 1" className="small-image" />
                <div className="overlay-prp">
                  <div className="overlay-text">Interno</div>
                </div>
              </div>
            </Link>

              <Link to="/mvpproposals/cextern">
                <div className="image-wrapper">
                  <img src={modelcex} alt="Small 2" className="small-image" />
                  <div className="overlay-prp">
                    <div className="overlay-text">Externo</div>
                  </div>
                </div>
              </Link>

            </div>

            <Link to="/mvpproposals/cinextern">
              <div className="image-wrapper">
                <img src={modelcexin} alt="Large" className="large-image" />
                <div className="overlay-prp">
                  <div className="overlay-text">Externo e interno</div>
                </div>
              </div>
            </Link>
        </div>
    </div>
    </div>
    <FooterM3D />
    </div>
  );
};

export default MVPProposal;
