import React from 'react';
import phone2 from '../assets/images/phone2.png';
import location1 from '../assets/images/location1.png';

const Header = () => {
    
    return (
        <>
            <section className="text-grey-800">
              
                <div className="bg-[#0082da] p-7 ">
                    <div className="mx-auto px-20">
                        <div className="flex flex-wrap items-center justify-between text-center md:text-left">
                           
                            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                            <img className="w-7 h-7 mr-5" src={location1} alt="Group1"></img>
                                <p className="text-base md:text-2xl text-white mr-10">
                                    422 High Street North, London E12 6RH, UK
                                </p>
                            </div>

                         
                            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                            <img className="w-7 h-7 mr-5" src={phone2} alt="Group1"></img>
                                <p className="text-base md:text-2xl text-white">
                                    +44 (0)20 3500 1100
                                </p>
                            </div>

                            
                            <a
                                className="text-base md:text-2xl text-white w-full md:w-auto md:ml-auto"
                                href=""
                            >
                                Modern Slavery
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
