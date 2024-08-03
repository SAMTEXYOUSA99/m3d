import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import Img1 from '../asssets/img1.webp';
import Img2 from '../asssets/img2.webp';
import Img3 from '../asssets/img3.webp';
import Img4 from '../asssets/img4.webp';
import Img5 from '../asssets/img5.webp';
import Img6 from '../asssets/img6.webp';
import Img7 from '../asssets/img7.webp';
import Img8 from '../asssets/img8.webp';
import Img9 from '../asssets/img9.webp';

import ImgVertical01 from '../asssets/ImgVertical01.webp';
import ImgVertical02 from '../asssets/ImgVertical02.webp';
import ImgVertical03 from '../asssets/ImgVertical03.webp';
import ImgVertical04 from '../asssets/ImgVertical04.webp';
import ImgVertical05 from '../asssets/ImgVertical05.webp';
import ImgVertical06 from '../asssets/ImgVertical06.webp';


import './gallery.css';


import {MdNavigateNext, MdClose} from 'react-icons/md';
import {RiArrowLeftSLine} from 'react-icons/ri';
import { IconContext } from 'react-icons';

const images = [
  Img1,
  ImgVertical01,
  Img2,

  ImgVertical02,
  Img3,
  ImgVertical03,
  
  Img4,
  ImgVertical04,
  Img5,

  Img6,
  Img7,
  ImgVertical05,

  ImgVertical06,
  Img8,
  Img9,
]


const Gallery = () => {

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
    );
}

export default Gallery;



