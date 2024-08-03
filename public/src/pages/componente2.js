import React, { useState } from 'react';
import FaixaPontos1 from '../components/faixapontos1';
import FaixaPontos2 from '../components/faixapontos2';

const Componente2 = () => {
  const [enabled, setEnabled] = useState(false);
   const [mostrarFaixaPontos1, setMostrarFaixaPontos1] = useState(true);

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  const alternarComponente = () => {
    setMostrarFaixaPontos1(!mostrarFaixaPontos1);
  };
  return (
    <div className="componente">
      <h2>Componente 2</h2>
      <p>Conteúdo do Componente 2</p>
      <h1>Compre primeiro e depois use seus pontos</h1>

      <div className="container">
        <div className="header">
          <button onClick={alternarComponente}>1000 pts</button>
          <button onClick={alternarComponente}>1800 pts</button>
        </div>
        <div className="component-container">
          {mostrarFaixaPontos1 ? <FaixaPontos1 /> : <FaixaPontos2 />}
        </div>
      </div>
    </div>
  );
};

export default Componente2;
