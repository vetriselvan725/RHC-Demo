import React from "react";

const Footer = () => {
    return (
        <>
         

        </>
    );
};

export default Footer;

import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
const Header = () => {
    return (
        <>
            <section className="text-grey-800">
                <div className="bg-[#0082da] p-5">
                    <div className="container mx-auto">
                        <div className="flex mx-auto ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-white mr-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p className="text-xl pr-5 text-white">422 High Street North, London E12 6RH, UK</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-white mr-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className="text-xl  text-white ">+44 (0)20 3500 1100</p>
                            <a className="text-xl text-white ml-auto" href="">Modern Slavery</a>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    );
};

export default Header;

import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
const Menu = () => {
    return (
        <>
            <section className="text-grey-800">
                <div className="mt-10">
                    <div className="container mx-auto">
                        <div className="flex  mx-auto ">
                            <a href=""><img src={logo} alt="logo" class="h-24 md:h-32 lg:h-44 w-[150px] md:w-[200px] lg:w-[200px] xl:w-[300px]"></img></a>
                            <ul className="flex p-10">
                                <a className="p-6 text-2xl font-semibold" href=""><li>Home</li></a>
                                <a className="p-6 text-2xl font-semibold flex"><li>Services </li>
                                    <svg aria-hidden="true" focusable="false" className="w-10 h-9" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg></a>

                                <a className="p-6 text-2xl font-semibold flex" href=""><li>Candidates</li>
                                    <svg aria-hidden="true" focusable="false" className="w-10 h-9" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </a>
                                <a className="p-6 text-2xl text-[#323b4b] font-semibold" href=""><li>Clients</li></a>
                                <a className="p-6 text-2xl text-[#323b4b] font-semibold" href=""><li>Contact Us</li></a>
                                <a className="p-6 text-2xl text-[#323b4b] font-semibold" href=""><li>FAQs</li></a>
                                <a className="p-6 text-2xl text-[#323b4b] font-semibold" href=""><li>Sign In</li></a>
                                <a className="p-6 text-2xl text-white font-bold " href=""><li>
                                    <span className="bg-[#0082da] rounded px-3 py-2">Sign Up</span></li></a>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;

import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="text-gray-800">
                <div className="container mx-auto">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center mx-auto ">

                            <a href="">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-24 md:h-32 lg:h-44 w-[150px] md:w-[200px] lg:w-[200px] xl:w-[300px] aos-init aos-animate"
                                />
                            </a>

                            <button
                                className="block lg:hidden text-3xl focus:outline-none"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>


                            <ul className={`${menuOpen ? "block" : "hidden"
                                    } absolute top-20 left-0 w-full bg-white lg:flex lg:static md:w-auto lg:w-auto lg:bg-transparent lg:space-x-6`}>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="relative group">
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600 flex items-center"
                                        href=""
                                    >
                                        Services
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            className="w-4 h-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            fill="currentColor"
                                        >
                                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                        </svg>
                                    </a>

                                    <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-[300px] lg:w-[400px] z-10">
                                        <li>
                                            <a
                                                className="block px-4 py-2 hover:text-[#0082DA] text-xl text-[#323b4b]"
                                                href=""
                                            >
                                                Clinical
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block text-2xl py-2 px-4 hover:bg-gray-200"
                                                href=""
                                            >
                                                Non Clinical
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block text-2xl py-2 px-4 hover:bg-gray-200"
                                                href=""
                                            >
                                                Domiciliary care
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block text-2xl py-2 px-4 hover:bg-gray-200"
                                                href=""
                                            >
                                                Supported Living
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block text-2xl py-2 px-4 hover:bg-gray-200"
                                                href=""
                                            >
                                                International Recruitment
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block text-2xl py-2 px-4 hover:bg-gray-200"
                                                href=""
                                            >
                                                Trainings
                                            </a>
                                        </li>
                                    </ul>

                                </li>
                                <li className="relative group">
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600 flex items-center"
                                        href=""
                                    >
                                        Candidates
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            className="w-4 h-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            fill="currentColor"
                                        >
                                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                        </svg>
                                    </a>

                                    <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 z-10">
                                        <li>
                                            <a className="block text-xl py-2 px-4 hover:bg-gray-200" href="">
                                                National
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block text-xl py-2 px-4 hover:bg-gray-200" href="">
                                                International
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Clients
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="block p-4 text-xl  font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-xl font-semibold hover:text-blue-600"
                                        href="/Signin"
                                    >
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-xl text-white font-bold"
                                        href="/Signup"
                                    >
                                        <span className="bg-blue-500 rounded px-4 py-2">Sign Up</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;

import React from "react";
import Group1 from '../assets/images/Group1.png';

const Betterfuture = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">

                <div className="bg-[#F4FEFF]">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#0082da] font-font-sans">RHC 360 Solutions <br/> </h1>
                                <h2 className="mt-10 text-6xl font-bold text-[#0082da] font-font-sans">Caring For a Better Future </h2>
                            </div>
                            <div className="w-1/2">
                                <img src={Group1} alt="Group1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Betterfuture;

import React from "react";
import qution1 from '../assets/images/qution1.png';
import qution2 from '../assets/images/qution2.png';
import profile from '../assets/images/profile.jpg';


const Testimonials = () => {
    return (
        <>
            <section className="text-grey-800">

                <div className="bg-[#F4FEFF] mt-20">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-full">
                                <h1 className="text-3xl font-bold text-[#0082da] font-font-sans mt-5">Testimonials</h1>
                                <h2 className="mt-5 text-4xl font-bold text-[#000] font-font-sans mt-5">What<span className="text-[#0082da]">Candidates Say</span>About Us</h2>
                                <img className="mt-10" src={qution1} alt="qution1"></img>
                                <p className=" p-20 text-4xl text-center font-semibold text-[#323b4b] leading-[66px]">I saw a recruiting banner and so RHC360 solutions was one of the first places I went to after landing in the UK. As a newcomer to the country, I had little idea about how to get started but WAYNE and his team guided me through. They provided bespoke advice and got me on the rotas for shifts that were perfectly suited to my needs. They have been very supportive and transparent in their work which is a great quality. I also never faced any problems regarding payments as all payments were done correctly and timely as discussed at the beginning. Overall, it worked out well and in a very professional manner.<img className="ml-auto" src={qution2} alt="qution2"></img></p>
                                <img className="mt-5 w-24 h-24 rounded-full mx-auto border-4 border-[#0082DA]" src={profile} alt="qution2"></img>
                                <h1 className="text-3xl font-bold text-center text-[#000] font-font-sans mt-5">Mohammed Imran Ali</h1>
                                <h2 className="text-3xl font-bold text-[#000] text-center font-font-sans mt-5">Support worker in social care,</h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Testimonials;

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
    
    <Slider {...settings} >
      <div className="overflow: hidden;">
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

