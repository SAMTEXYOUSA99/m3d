import './footerm3dhome.css';

import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

import logoiconm3dhomewhite from '../m3dasset/logoiconm3dhomewhite.png';
import logoiconm3dprojwhite from '../m3dasset/logoiconm3dprojwhite.png';



function FooterProj() {
    return(
        <div className="globalfooterhome">

            <div className="iconsspace">
                <a href="https://www.instagram.com/m3d_studiorender/" target="_blank" rel="noreferrer"><BsInstagram className='icon'/></a>
                <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' alt="" target='_blank' rel="noreferrer"><ImWhatsapp className='icon'/></a>
                <a href="https://www.linkedin.com/company/m3dprojeto" target="_blank" rel="noreferrer"><HiOutlineMail className='icon'/></a>
            </div>

            <h1 className="legend">Valorize suas ideias. <br></br>Conecte-se com a M3D PROJETO</h1>
 
            <div className='arealogo'>
                <img src={logoiconm3dprojwhite} alt="teste" className='logofooterproj'/>
            </div>

            <h3 className="officialinfo">2023 © M3D PROJETO - Todos os direitos reservados.
            <br></br>M3D PROJETO - CNPJ 46.393.667/0001-00</h3>
        </div>
    );
}

function FooterHome() {
    return(
        <div className="globalfooterhome">

            <div className="iconsspace">
                <a href="https://www.instagram.com/m3dhome/" target="_blank" rel="noreferrer"><BsInstagram className='icon'/></a>
                <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' alt="" target='_blank' rel="noreferrer"><ImWhatsapp className='icon'/></a>
                <a href="https://www.linkedin.com/company/m3dprojeto" target="_blank" rel="noreferrer"><HiOutlineMail className='icon'/></a>
            </div>

            <h1 className="legend">Valorize suas ideias. <br></br>Conecte-se com a M3D HOME</h1>
 
            <div className='arealogo'>
                <img src={logoiconm3dhomewhite} alt="teste" className='logofooter'/>
            </div>

            <h3 className="officialinfo">2023 © M3D HOME - Todos os direitos reservados.
            <br></br>M3D HOME- CNPJ 46.393.667/0001-00</h3>
        </div>
    );
}

export {FooterHome, FooterProj};