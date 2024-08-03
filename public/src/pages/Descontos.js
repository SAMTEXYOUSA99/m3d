import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import './Descontos.css';

import Line from '../components/line';

import logomain from '../asssets/logo.png';
import VideoBistro from '../components/videobistro';
import CasaSirlei from '../components/videosirlei';
import FormsDescontos from '../components/formsdescontos';  
import Footer from '../components/footerm3d'
import BtnWpp from '../components/btn-wpp';

import Img1 from '../asssets/imgdescontos1.webp';
import Img2 from '../asssets/imgdescontos2.webp';
import ImgVertical01 from '../asssets/ImgVertical01.webp';

import {MdNavigateNext, MdClose} from 'react-icons/md';
import {RiArrowLeftSLine} from 'react-icons/ri';
import { IconContext } from 'react-icons';

const images = [
    Img1,
    ImgVertical01,
    Img2,
    Img1,
    Img1,
    Img1,
  ]

function Descontos() {

    const [data, setData] = useState({img: '', i: 0})  

    const viewImage = (img, i)=>{
           setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
        }
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i: 0});
        }
    }

    return(
        <>
        <div className='lp-global'>

            <div className='lp-content'>

                <Line />
                <div className='arealogodesc'>
                <a href="https://mprojeto3d.com/"><img src={logomain} alt="teste" className='logomaindesc'/></a>
                </div>
               <VideoBistro /> 

                <div className='text-areaone'>
                    <h2 className='text-promo'>
                        Descubra a M Projeto 3D, um estúdio de arquitetura que transforma seus 
                        sonhos em obras de arte. Nossa equipe especializada oferece serviços
                        personalizados de renderização em 3D, criando projetos que atendem 
                        às suas necessidades. 
                        <br></br></h2>
                        <h2 className='text-promo-green'>
                            <div className="bg-green">Deixe seu WhatsApp e GANHE 15% DE DESCONTO EM SEU PRIMEIRO PROJETO!
                            Transforme seus sonhos em realidade!</div>
                        </h2>
                    </div>

                <FormsDescontos />
             
                <div className='text-areatwo'>
                    <h2 className='text-promo'>
                        Ou chame-nos no WhatsApp e
                    </h2> 
                    <h2 className='text-promo-green'>
                        <div className="bg-green">
                            GARANTA 5% DE DESCONTO NO SEU PRIMEIRO PROJETO!  Encante seus clientes e venda mais 
                            com nosso projeto 3D totalmente realista.
                        </div>
                    </h2>
                    <h2 className='text-promo'>
                            Estúdio M Projeto 3D: transformando ideias em imagens incríveis!
                    </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <BtnWpp />
                </div>

                <CasaSirlei />

                <div className='componente'>
                    <>
                        {data.img &&
                            <>
                                <div className='div-out'>
                                    <img src={data.img} className='img-out' alt=''/>
                                    <IconContext.Provider value={{ className: 'itprevious', color: 'white'}}>
                                        <RiArrowLeftSLine 
                                            onClick={() => imgAction('previous-img')}/>
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ className: 'it' }}>
                                        <MdClose onClick={() => imgAction()}/>
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ className: 'itnext' }}>
                                            <MdNavigateNext        
                                            onClick={() => imgAction('next-img')}/>
                                    </IconContext.Provider>
                                </div>
                            </>
                        }
                        <div className='gallery-global'>
                            <ResponsiveMasonry 
                                columnsCountBreakPoints={{350: 1, 750: 2, 900:3}}>
                                    <Masonry gutter='20px'>
                                        {
                                            images.map((image, i) => (
                                                <img 
                                                    key={i}
                                                    src={image}
                                                    className='img-responsive'
                                                    alt=""
                                                    onClick={()=> viewImage(image, i)}
                                                />
                                            ))
                                        }
                                    </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </>
                </div>
                
                <div className='text-areathree'>
                    <h2 className='text-promo'>
                        Fale conosco no WhatsApp e
                    </h2> 
                    <h2 className='text-promo-green'>
                        <div className="bg-green">
                            GARANTA 5% DE DESCONTO NO SEU PRIMEIRO PROJETO!  Encante seus clientes e venda mais 
                            com nosso projeto 3D totalmente realista.
                        </div>
                    </h2>
                    <h2 className='text-promo'>
                            Estúdio M Projeto 3D: transformando ideias em imagens incríveis!
                    </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <FormsDescontos />
                
            </div>
            
            <Footer /> 
        </div>
        
        </>
    );
}

export default Descontos;



