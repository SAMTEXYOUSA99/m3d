
import React, {useState} from 'react'; 
import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';





import Footer from '../components/footerm3d';
import BackGroundMain from '../components/bgmain';


import logomain from '../asssets/logo.png';

import {AiOutlineMenu, AiOutlineHome} from "react-icons/ai"
import {FaRegImages, FaHandHoldingUsd} from "react-icons/fa"
import {BsBarChart} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {GrContact} from 'react-icons/gr'
import { IconContext } from 'react-icons';

function Dashboard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    
  return (
    
    <>
   
    <div className="global">

    <BackGroundMain /> 
    <NavItem icon={<AiOutlineMenu className='testunic'/>} >
      <DropdownMenu />
    </NavItem>

      <div className='home page'>
        
        <div className='content-home'>
          <a href="https://mprojeto3d.com/"><img src={logomain} alt="teste" className='logomain'/> </a>
          <h1 className='text-content-home'>VALORIZE SUAS IDEIAS</h1>
          
          <h2 className='text-content-home'>CONECTE-SE COM A M PROJETO 3D</h2>
          <h1>DASHBOARD</h1>
          <Link to="/A8bba64a08e1c07f2d7af0da09a597b48577ddc662de234d1b19e01030e54da1">
          <button className='btn'>CRIAR ORÇAMENTO</button>
          </Link>
          
        </div>

      </div> 

      <Footer />  
      
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

export default Dashboard;
