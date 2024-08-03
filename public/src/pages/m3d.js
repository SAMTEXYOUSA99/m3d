import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './M3DStudio.css';
import logom3dstudiowhite from '../m3dasset/logom3dstudiowhite.png';
import headerunic from '../m3dasset/headerunic.png';
import logom3d from '../m3dasset/logom3d.png';
import logoiconm3dhomecolor from '../m3dasset/logoiconm3dhomecolor.png';
import logom3dprojetowhitevertical from '../m3dasset/logom3dprojetowhitevertical.png';
import Advantages from '../components/advantage'; 
import FooterM3D from '../components/footerm3d'
import ClientsCarousel from '../components/clientscarousel';
import m3dhometextwhite from '../m3dasset/m3dhometextwhite.png';
import { BtnDoStudio } from '../components/btn-do';
import { BtnRenderStudio } from '../components/btn-render';





import logom3dpro from '../asssets/logom3dpro.png'; // Adicione a imagem do logo no seu projeto
import logom3dho from '../asssets/logom3dho.png';
import { IconContext } from 'react-icons';// Adicione o ícone de menu no seu projeto
import Img1 from '../asssets/homepage.webp'
import Img2 from '../asssets/homepage.webp'
import DropdownMenu from '../components/dropdownmenu';
import BackGroundMainStudio from '../components/bgmainstudio';


function M3D() {
  

  return (
    <>
    <div className="global">
      <BackGroundMainStudio /> 
     <header className="header">
    
          <img src={headerunic} alt="Logo" className="header1red"/>
          <img src={logom3dstudiowhite} alt="Logo" className="logo"/>
          <DropdownMenu className='dropm'/>
          
      </header>

      <div className="container-home">
        <div className="top-section">
          <img src={logom3d} alt="Foto" className="top-image" />
         
          <div className="top-text">Somos especialistas em dar <strong>vida</strong><br/>para suas ideias e projetos</div>
        </div>
        <div className="background-section">
          <div className="blurred-area">
            <img src={logoiconm3dhomecolor} alt="Outra Foto" className="blur-logo"/>
            <img src={m3dhometextwhite} alt="" className='top-image' />
            <p className='text-bl'>Veja seu sonho<br/>ganhando vida!</p>
            <Link to="/m3dhome" className='home-btn-area'><button className='home-btn'>Saiba mais</button></Link>
          </div>
        </div>
      </div>

      <div className="hero-section">
      <div className="overlay"></div>
      <div className="content-proj">
        <img src={logom3dprojetowhitevertical} alt="Left" className="left-image" />
        <div className="text-button-container">
          <h1 className="hero-text">Mais segurança para<br/>seu investimento.</h1>
          <Link to="/m3dprojeto" className='home-btn-area'><button className="hero-button">Saiba mais</button></Link>
        </div>
      </div>
      </div>

      <div className="top-section">
          <img src={logom3d} alt="Foto" className="top-image" />
          <div className="top-text-2">e você</div>
      </div>
      
      <Advantages />

      <div className='company page'>
      <div className="gradient-line-studio"></div>
        <h1 className="titles-st">EMPRESA</h1>
        <div className='about-company'>
       <p> Somos um estúdio especializado em dar vida para suas ideias e projetos. Contamos com uma equipe criativa, detalhista e comprometida com os resultados de cada projeto.
<br/><br/>
Desenvolvemos imagens 3D, vídeos e experiências realistas que surpreendem e encantam com cada detalhe. Movimentamos emoções através de tecnologias que promovem e aproximam o futuro com projetos incríveis e imersões virtuais.
<br/><br/>
Contamos histórias através de projetos arquitetônicos, com foco na essência de cada cliente e cada proposta, com extrema fidelidade e originalidade, tornando um sonho, uma realidade 3D.</p>
          
        </div>
        <div className='btns'>
        <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' alt="" target='_blank' rel="noreferrer">
            <BtnDoStudio />
            <BtnRenderStudio />
          </a>
        </div>
      </div>
 
      <div className="top-section">
          <div className="top-text-3">clientes</div>
      </div>
      <ClientsCarousel />
      <div className="top-section">
      </div>
      
      <FooterM3D />

      </div>

    </>
  );
};

export default M3D;
