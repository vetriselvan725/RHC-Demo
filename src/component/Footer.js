import React from "react";
import footerimg from '../assets/images/footerimg.jpg';
import phone2 from '../assets/images/phone2.png';
import email2 from '../assets/images/email2.png';
import location1 from '../assets/images/location1.png';
import facebook1 from '../assets/images/facebook1.png';
import instagram1 from '../assets/images/instagram1.png';
import linkin1 from '../assets/images/linkin1.jpg';
import tiktok1 from '../assets/images/tiktok1.png';
import qrcode1 from '../assets/images/qrcode1.jpg';
import client1 from '../assets/images/client/client1.png';
import client2 from '../assets/images/client/client2.png';
import client3 from '../assets/images/client/client3.png';
import client4 from '../assets/images/client/client4.png';
import client5 from '../assets/images/client/client5.jpeg';
import client6 from '../assets/images/client/client6.png';
import client7 from '../assets/images/client/client7.jpeg';
import client8 from '../assets/images/client/client8.png';
import client9 from '../assets/images/client/client9.png';
import client10 from '../assets/images/client/client10.jpg';
import client11 from '../assets/images/client/client11.png';
import client12 from '../assets/images/client/client12.png';
import client13 from '../assets/images/client/client13.jpg';
import client14 from '../assets/images/client/client14.jpg';

const Footer = () => {
    return (
        <>
            <section className="text-grey-800">

                <div className="bg-[#0082da] mt-5">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 py-10">
                                <div className="w-full pb-10">
                                    <img className="w-[50%] pr-10" src={footerimg}></img>
                                </div>
                                <div className="flex ">
                                    <img className="w-7 h-7" src={phone2} alt="Group1"></img>
                                    <p className="text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">+44 (0)20 3500 1100</p>
                                </div>
                                <div className="flex mt-8">
                                    <img className="w-7 h-7" src={email2} alt="Group1"></img>
                                    <p className="text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">bookings@rhc360.com</p>
                                </div>
                                <div className="flex mt-8">
                                    <img className="w-7 h-7" src={location1} alt="Group1"></img>
                                    <p className="text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">422 High Street North, London E12 6RH, UK</p>
                                </div>
                            </div>
                            <div className="w-1/4 py-8">
                                <h1 className="text-3xl font-semibold text-[#FFFF] font-font-sans">Quick Links</h1>
                                <ul className="text-[#FFFF] text-2xl font-semibold p-3">
                                    <li className="mt-5"><a href="">Home</a></li>
                                    <li className="mt-3"><a href="">Service</a></li>
                                    <li className="mt-3"><a href="">Client</a></li>
                                    <li className="mt-3"><a href="">Contact Us</a></li>
                                    <li className="mt-3"><a href="">Carbon Reduction Plan</a></li>
                                </ul>
                            </div>
                            <div className="w-1/4 py-10">
                                <h1 className="text-3xl font-semibold text-[#FFFF] font-font-sans">Recruitment</h1>
                                <ul className="text-[#FFFF] text-2xl font-semibold p-3">
                                    <li className="mt-5"><a href="">Candidates</a></li>
                                    <li className="mt-3"><a href="">Privacy Policy</a></li>
                                    <li className="mt-3"><a href="">Terms & Condition</a></li>
                                </ul>
                            </div>
                            <div className="w-1/4 py-10">
                                <h1 className="text-3xl font-semibold text-[#FFFF] font-font-sans">Stay In Touch</h1>
                                <div className="flex mt-10">
                                    <img className="w-[20%] pr-5" src={facebook1}></img>
                                    <img className="w-[20%] pr-5" src={instagram1}></img>
                                    <img className="w-[20%] pr-5" src={linkin1}></img>
                                    <img className="w-[20%] pr-5" src={tiktok1}></img>
                                </div>
                                <button className="border-4 border-[#FFFF] bg-[#FFFF] rounded mt-4 py-5 px-8 text-2xl text-[#0082da]">RHC Brochure</button>
                                <img className="w-[80%] mt-4 pr-5" src={qrcode1}></img>
                            </div>
                        </div>

                        <div className="w-full py-10">
                                <div className="flex gap-14 justify-center">
                                    <img className="w-[200px] h-[100px]" src={client1}></img>
                                    <img className="w-[200px] h-[100px]" src={client2}></img>
                                    <img className="w-[200px] h-[100px]" src={client3}></img>
                                    <img className="w-[200px] h-[100px]" src={client4}></img>
                                    <img className="w-[200px] h-[100px]" src={client5}></img>
                                </div>
                                <div className="w-full py-10">
                                <div className="flex gap-14 justify-center">
                                    <img className="w-[200px] h-[100px]" src={client6}></img>
                                    <img className="w-[200px] h-[100px]" src={client7}></img>
                                    <img className="w-[200px] h-[100px]" src={client8}></img>
                                    <img className="w-[200px] h-[100px]" src={client9}></img>
                                    <img className="w-[200px] h-[100px]" src={client10}></img>
                                    
                                </div>
                                </div>
                                <div className="flex gap-14 justify-center">
                                    <img className="w-[200px] h-[100px]" src={client11}></img>
                                    <img className="w-[200px] h-[100px]" src={client12}></img>
                                    <img className="w-[200px] h-[100px]" src={client13}></img>
                                    <img className="w-[200px] h-[100px]" src={client14}></img>
                                </div>
                                
                            </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Footer;