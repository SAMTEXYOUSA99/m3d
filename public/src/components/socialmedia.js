// SocialMedia.js
import './socialmedia.css';
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

function SocialMediaHome() {
    return( 
        <div className='globalsocialmedia'>
            <div className="icons-space">
                <div className="content-icon">
                    <a href="https://www.instagram.com/m3dhome/" target="_blank" className='socialmedialink' rel="noreferrer">
                        <BsInstagram className='icon-social-home'/>
                    </a>
                </div>
                <div className="content-text-home">
                    <a href='https://www.instagram.com/m3dhome/' target="_blank" rel="noreferrer">
                        <h2>@m3dhome</h2>
                    </a>
                </div>

                <div className="content-icon">
                    <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' className='socialmedialink' target='_blank' rel="noreferrer">
                        <ImWhatsapp className='icon-social-home'/>
                    </a>
                </div>
                <div className="content-text-home">
                    <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' target='_blank' rel="noreferrer">
                        <h2>+55 (51) 99392-6662</h2> 
                    </a> 
                </div>

                <div className="content-icon">
                    <a href="https://www.linkedin.com/company/m3dprojeto" target="_blank" className='socialmedialink' rel="noreferrer">
                        <HiOutlineMail className='icon-social-home'/>
                    </a>
                </div>
                <div className="content-text-home">
                    <h2>projetos@m3dstudio.com.br</h2>
                </div>
            </div>
        </div>
    );
}

function SocialMediaProj() {
    return( 
        <div className='globalsocialmedia'>
            <div className="icons-space">
                <div className="content-icon">
                    <a href="https://www.instagram.com/m3d_studiorender/" target="_blank" className='socialmedialink' rel="noreferrer">
                        <BsInstagram className='icon-social-proj'/>
                    </a>
                </div>
                <div className="content-text-proj">
                    <a href='https://www.instagram.com/m3d_studiorender/' target="_blank" rel="noreferrer">
                        <h2>@m3d_studiorender</h2>
                    </a>
                </div>

                <div className="content-icon">
                    <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' className='socialmedialink' target='_blank' rel="noreferrer">
                        <ImWhatsapp className='icon-social-proj'/>
                    </a>
                </div>
                <div className="content-text-proj">
                    <a href='https://api.whatsapp.com/send/?phone=5551993926662&text=Ol%C3%A1%21+Visitei+o+site+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21&type=phone_number&app_absent=0' target='_blank' rel="noreferrer">
                        <h2>+55 (51) 99392-6662</h2> 
                    </a> 
                </div>

                <div className="content-icon">
                    <a href="https://www.linkedin.com/company/m3dprojeto" target="_blank" className='socialmedialink' rel="noreferrer">
                        <HiOutlineMail className='icon-social-proj'/>
                    </a>
                </div>
                <div className="content-text-proj">
                    <h2>projetos@m3dstudio.com.br</h2>
                </div>
            </div>
        </div>
    );
} 

export { SocialMediaProj, SocialMediaHome };
