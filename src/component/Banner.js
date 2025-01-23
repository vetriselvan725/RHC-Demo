import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // 2 seconds delay
  };

  return (
    
    <Slider {...settings}>
      <div className="">
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
  );
};

export default Banner;
