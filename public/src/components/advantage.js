import React from 'react';
import './advantage.css';
import caralho from '../asssets/try.png';
import {Link} from 'react-router-dom';

function Advantages() {
  return (
    <div className="advantages-container">
      <div className="text-section">
        <h1 className="title-v van">M3D Vantagens</h1>
        <div className="gradient-line"></div>
        <h1 className="subtitle-v van">Um Programa de Vantagens<br /> recheado de benefícios.</h1>
      </div>
      <div className="info-section">
        <p className="points">R$ 10 = 10 pts</p>
        <Link to="/vantagens">
        <button className="learn-more-button">QUERO SABER MAIS</button>
        </Link>
      </div>
    </div>
  );
}

export default Advantages;
