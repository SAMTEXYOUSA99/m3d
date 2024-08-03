import React, {useState, useEffect} from 'react'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ClientsCarousel.css';


import Img1 from '../asssets/clientOne.png';
import Img2 from '../asssets/clientTwo.png';
import Img3 from '../asssets/clientThree.png';
import Img4 from '../asssets/clientFour.png';
import Img5 from '../asssets/clientFive.png';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function ClientsCarousel  () {
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
    <div className='behind-area'>
      <div className='area-slider'>
        <div className="slider-container">
          <Slider {...settings}>
            <div className='img-area-normal1'>
              <img src={Img1} alt="" className='img-carousel'/>
            </div>
            <div className='img-area-normal2'>
              <img src={Img2} alt=""  className='img-carousel'/>
            </div>
            <div className='img-area-normal3'>
              <img src={Img3} alt=""  className='img-carousel'/>
            </div>
            <div className='img-area-normal2'>
              <img src={Img4} alt=""  className='img-carousel'/>
            </div>
            <div className='img-area-normal4'>
              <img src={Img5} alt=""  className='img-carousel-4'/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default ClientsCarousel;


