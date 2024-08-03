import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa'; // Importando o ícone FaCoins
import './Vantagens.css';
import BackGroundMain from '../components/bgmain';
import { Link as ScrollLink } from 'react-scroll';
import {AiOutlineMenu, AiOutlineHome} from "react-icons/ai"
import {FaRegImages, FaHandHoldingUsd} from "react-icons/fa"
import {BsBarChart} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {GrContact} from 'react-icons/gr'
import { IconContext } from 'react-icons';
import logomain from '../asssets/logo.png';
import Advantages from '../components/advantage';
import Componente1 from './componente1';
import Componente2 from './componente2';
import Footer from '../components/footerm3d';

const M3DVantagensPage = () => {
  const [enabled, setEnabled] = useState(false);
   const [mostrarComponente1, setMostrarComponente1] = useState(true);

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  const alternarComponente = () => {
    setMostrarComponente1(!mostrarComponente1);
  };

  return (
    <>
    
    
    <NavItem icon={<AiOutlineMenu className='testunic'/>} >
      <DropdownMenu />
    </NavItem>
    <a href="https://mprojeto3d.com/"><img src={logomain} alt="teste" className='logomain'/> </a>

    <Advantages />

    <div className="container">
        <div className="header">
          <button onClick={alternarComponente}>Ganhe pontos</button>
          <button onClick={alternarComponente}>Use pontos</button>
        </div>
        <div className="component-container">
          {mostrarComponente1 ? <Componente1 /> : <Componente2 />}
        </div>
    </div>
    <div className='comtem'>
    <div className='topdiv'>
      <h1 className='title'>M3D Vantagens:<br/>
        Encante-se.<br/>
        Até nos benefícios.
      </h1>
      <div className='card one'>
        <h1 className="title">O que é o Programa M3D Vantagens?</h1>
        <p className="van-description">O M3D Vantagens é um 
          programa exclusivo que recompensa nossos clientes fiéis. 
          Cada real investido em nossos serviços conta como ponto, 
          e esses pontos podem ser acumulados e trocados por benefícios incríveis.
        </p>
      </div>
    </div>
    <div className='topdiv'>
    <h1 className='title secondtitle'>Explore os detalhes.<br/>
      Até nas vantagens.</h1>
      <div className='card two'>
      <h2 className="title">Como funciona o Programa M3D Vantagens?</h2>
          <p className="van-description">É simples! A cada R$1,00 investido em nossos serviços, você acumula 1 ponto. Quando acumular pontos suficientes, você poderá resgatar prêmios exclusivos, descontos em novos projetos e muito mais.</p>
        
      </div>
    </div>
    <div className='topdiv'>
      <div className='card two'>
      <h2 className="title">Como resgatar meus pontos?</h2>
          <p className="van-description">É simples! A cada R$1,00 investido em nossos serviços, você acumula 1 ponto. Quando acumular pontos suficientes, você poderá resgatar prêmios exclusivos, descontos em novos projetos e muito mais.</p>
          <div className={`switch ${enabled ? 'enabled' : 'disabled'}`} onClick={handleToggle}>
        <div className="side blue">{enabled ? '1.500 pts' : ''}</div>
        <div className="side red">{enabled ? '' : '2.500 pts'}</div>
      </div>
      </div>
      </div>
    </div>
    
  
    <Footer />  
    </>
  );
};

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return ( 
    <li className="nav-item">
      <a href="#" className="icon-buutton" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props){
    return (
      <a className='menu-item'>
          
          {props.children}

        <span className='icon-button-drop'>{props.leftIcon}</span>
      </a> 
    );
  }

  return (
    <div className="dropdown">
      
      
        
        <DropdownItem>
          <AiOutlineHome className='drop-icons'/>
          Home
        </DropdownItem>
   

      <ScrollLink to="portfolio" spy={true} smooth={true} offset={80} duration={1000}>
        <DropdownItem>
          <FaRegImages className='drop-icons'/>
          Portfolio
        </DropdownItem> 
      </ScrollLink>

     {/*  <Link to="/Descontos">
        <DropdownItem>
          <FaHandHoldingUsd className='drop-icons'/>
          Ganhe descontos!
        </DropdownItem>
      </Link>*/}

      <ScrollLink to="company" spy={true} smooth={true} offset={80} duration={1500}>
        <DropdownItem>
          <BsBarChart className='drop-icons'/>
          Empresa
        </DropdownItem>
      </ScrollLink>

      
      <ScrollLink to="clientes" spy={true} smooth={true} offset={70} duration={2000}>
        <DropdownItem>
          <HiOutlineUsers className='drop-icons'/>
          Clientes
        </DropdownItem>
      </ScrollLink>

      <ScrollLink to="contato" spy={true} smooth={true} offset={40} duration={2500}>
        <DropdownItem>
          <IconContext.Provider value={{ className: 'drop-icons', color: 'white'}}>
            <GrContact />
            Contato
          </IconContext.Provider>
        </DropdownItem>
      </ScrollLink>  
    </div>
  );
}

export default M3DVantagensPage;
