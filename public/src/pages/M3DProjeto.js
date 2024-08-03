
import React, {useState} from 'react'; 
import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom';
 
import logom3dprojcolortextwhite from '../m3dasset/logom3dprojcolortextwhite.png';


import './M3DProjeto.css';

import ClientsCarousel from '../components/clientscarousel';
import {FooterProj} from '../components/footerm3dhome';
import WrapperClients from '../components/wrapper-clients';
import {BtnDoProj} from '../components/btn-do';
import {BtnRenderProj} from '../components/btn-render';
import BackGroundMain from '../components/bgmain';
import {LineAbsoluteProj} from '../components/lineabsolute';
import Gallery from '../components/gallery';
import Advantages from '../components/advantage';
import { SocialMediaProj } from '../components/socialmedia';

import {AiOutlineMenu, AiOutlineHome} from "react-icons/ai"
import {FaRegImages, FaHandHoldingUsd} from "react-icons/fa"
import {BsBarChart} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {GrContact} from 'react-icons/gr'
import { IconContext } from 'react-icons';

function homepage() {
  return (
    
    <>
   
    <div className="global">

    <BackGroundMain /> 
 {/*    <NavItem icon={<AiOutlineMenu className='testunic'/>} >
      <DropdownMenu />
    </NavItem>*/}

      <div className='home page'>
        
        <div className='content-home'>
          <a href="https://m3dstudio.com.br/"><img src={logom3dprojcolortextwhite} alt="teste" className='logomain'/> </a>
          <h1 className='text-content-home'>VALORIZE SUAS IDEIAS</h1>
          <LineAbsoluteProj />
          <h2 className='text-content-home'>CONECTE-SE COM A M3D PROJETO</h2>
          <a href='https://www.instagram.com/m3d_studiorender/' target="_blank" rel="noreferrer"><h3>INSTAGRAM</h3></a>
        </div>

      </div>

      <Advantages />

      <div className="portfolio page">
      <div className="gradient-line"></div>
        <h1 className="titles">PORTFOLIO</h1>
        <Gallery />   
      </div>

      <div className='company page'>
      <div className="gradient-line"></div>
        <h1 className="titles">EMPRESA</h1>
        <div className='about-company'>
       <p> Somos um estúdio especializado em dar vida para suas ideias e projetos. Contamos com uma equipe criativa, detalhista e comprometida com os resultados de cada projeto.
<br/><br/>
Desenvolvemos imagens 3D, vídeos e experiências realistas que surpreendem e encantam com cada detalhe. Movimentamos emoções através de tecnologias que promovem e aproximam o futuro com projetos incríveis e imersões virtuais.
<br/><br/>
Contamos histórias através de projetos arquitetônicos, com foco na essência de cada cliente e cada proposta, com extrema fidelidade e originalidade, tornando um sonho, uma realidade 3D.</p>
          
        </div>
        <div className='btns'>
        <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' alt="" target='_blank' rel="noreferrer">
            <BtnDoProj />
            <BtnRenderProj />
          </a>
        </div>
      </div>

      <div className="top-section">
          <div className="top-text-3">clientes</div>
      </div>
      <ClientsCarousel />
      <div className="top-section">
      </div>
  
      <div className="contato page">

      <div className="gradient-line"></div>
        <h1 className="titles">CONTATO</h1>

        <div className='content-contact'>

          <SocialMediaProj />

          <div className="smallline-proj">
          </div>
          

          <div className='btns-contact'>
            <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' alt="" target='_blank' rel="noreferrer">
              <BtnDoProj />
              <BtnRenderProj />
            </a>
          </div>

        </div>


      </div>  

      <FooterProj />  
      
    </div>
  
    </>
  );
}

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

export default homepage;
