import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import banner1 from "../assets/images/banner1.jpg";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate(); 
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="text-gray-800">
                <div className="container mx-auto">
                    <div className="container mx-auto ">
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
                                ☰
                            </button>


                            <ul
                                className={`${menuOpen ? "block" : "hidden"
                                    } absolute top-20 left-0 w-full bg-white lg:flex lg:static lg:w-auto lg:bg-transparent lg:space-x-6`}
                            >
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="relative group">
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600 flex items-center"
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
                                                className="block px-4 py-2 hover:text-[#0082DA] text-2xl text-[#323b4b]"
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
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600 flex items-center"
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
                                            <a className="block text-2xl py-2 px-4 hover:bg-gray-200" href="">
                                                National
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block text-2xl py-2 px-4 hover:bg-gray-200" href="">
                                                International
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Clients
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600"
                                        href=""
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl font-semibold hover:text-blue-600"
                                        href="/Signin"
                                    >
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block p-4 text-lg lg:text-2xl text-white font-bold"
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
