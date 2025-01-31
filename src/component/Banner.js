import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const CustomPrevArrow = (props) => {
  const { onClick } = props; 
  return (
    <div
      className="absolute top-1/2 left-2 md:left-5 z-10 transform -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props; 
  return (
    <div
      className="absolute top-1/2 right-2 md:right-5 z-10 transform -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-400 text-black rounded-full p-2"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />, 
  };

  return (
    <div className="overflow-hidden relative" data-aos="zoom-in" data-aos-duration="2000">
      <Slider {...settings}>
        <div>
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          />
        </div>
        <div>
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          />
        </div>
        <div>
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          />
        </div>
        <div>
          <img
            src={banner4}
            alt="Banner 4"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
