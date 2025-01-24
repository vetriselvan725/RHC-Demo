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
                    <div className="mx-auto px-20">
                        <div className="flex flex-col lg:flex-row">
                           
                            <div className="w-full lg:w-1/2 py-10">
                                <div className="pb-10">
                                    <img className="w-[50%] pr-10 mx-auto lg:mx-0" src={footerimg} alt="Footer image" />
                                </div>
                                <div className="flex items-center">
                                    <img className="w-7 h-7" src={phone2} alt="Phone" />
                                    <p className="text-xl sm:text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">+44 (0)20 3500 1100</p>
                                </div>
                                <div className="flex items-center mt-8">
                                    <img className="w-7 h-7" src={email2} alt="Email" />
                                    <p className="text-xl sm:text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">bookings@rhc360.com</p>
                                </div>
                                <div className="flex items-center mt-8">
                                    <img className="w-7 h-7" src={location1} alt="Location" />
                                    <p className="text-xl sm:text-2xl flex items-center ml-4 font-semibold text-[#FFFF]">422 High Street North, London E12 6RH, UK</p>
                                </div>
                            </div>

                           
                            <div className="w-full lg:w-1/4 py-8">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-[#FFFF]">Quick Links</h1>
                                <ul className="text-[#FFFF] text-xl sm:text-2xl font-semibold p-3">
                                    <li className="mt-5"><a href="">Home</a></li>
                                    <li className="mt-3"><a href="">Service</a></li>
                                    <li className="mt-3"><a href="">Client</a></li>
                                    <li className="mt-3"><a href="">Contact Us</a></li>
                                    <li className="mt-3"><a href="">Carbon Reduction Plan</a></li>
                                </ul>
                            </div>

                           
                            <div className="w-full lg:w-1/4 py-8">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-[#FFFF]">Recruitment</h1>
                                <ul className="text-[#FFFF] text-xl sm:text-2xl font-semibold p-3">
                                    <li className="mt-5"><a href="">Candidates</a></li>
                                    <li className="mt-3"><a href="">Privacy Policy</a></li>
                                    <li className="mt-3"><a href="">Terms & Condition</a></li>
                                </ul>
                            </div>

                            
                            <div className="w-full lg:w-1/4 py-8">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-[#FFFF]">Stay In Touch</h1>
                                <div className="flex justify-center sm:justify-start mt-10">
                                    <img className="w-10 h-10 sm:w-14 sm:h-14 pr-4" src={facebook1} alt="Facebook" />
                                    <img className="w-10 h-10 sm:w-14 sm:h-14 pr-4" src={instagram1} alt="Instagram" />
                                    <img className="w-10 h-10 sm:w-14 sm:h-14 pr-4" src={linkin1} alt="LinkedIn" />
                                    <img className="w-10 h-10 sm:w-14 sm:h-14 pr-4" src={tiktok1} alt="TikTok" />
                                </div>
                                <button className="border-4 border-[#FFFF] bg-[#FFFF] rounded mt-4 py-4 px-6 text-xl sm:text-2xl text-[#0082da]">
                                    RHC Brochure
                                </button>
                                <img className="w-[55%] mt-4 " src={qrcode1} alt="QR Code" />
                            </div>
                        </div>

                       
                        <div className="w-full py-10">
                            <div className="flex flex-wrap gap-14 justify-center">
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client1} alt="Client 1" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client2} alt="Client 2" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client3} alt="Client 3" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client4} alt="Client 4" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client5} alt="Client 5" />
                            </div>
                            <div className="flex flex-wrap gap-14 justify-center mt-8">
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client6} alt="Client 6" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client7} alt="Client 7" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client8} alt="Client 8" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client9} alt="Client 9" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client10} alt="Client 10" />
                            </div>
                            <div className="flex flex-wrap gap-14 justify-center mt-8">
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client11} alt="Client 11" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client12} alt="Client 12" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client13} alt="Client 13" />
                                <img className="w-[200px] h-[100px] sm:w-[150px] sm:h-[75px]" src={client14} alt="Client 14" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
