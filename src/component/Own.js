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