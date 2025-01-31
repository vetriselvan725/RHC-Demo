import React from "react";
import Group4 from '../assets/images/Group4.png';

const Happyclients = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#0082da] mt-5">
                    <div className="mx-auto p-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                            <div className="text-center md:text-left px-10" data-aos="zoom-in" data-aos-duration="2000">
                                <h1 className="text-5xl md:text-8xl font-bold text-white font-font-sans">200+</h1>
                                <p className="mt-6 text-xl md:text-4xl font-semibold text-white leading-relaxed" >
                                    Carers
                                </p>
                            </div>

                            <div className="text-center md:text-left" data-aos="zoom-in" data-aos-duration="2000">
                                <h1 className="text-5xl md:text-8xl font-bold text-white font-font-sans" >900+</h1>
                                <p className="mt-6 text-xl md:text-4xl font-semibold text-white leading-relaxed">
                                    Happy Clients
                                </p>
                            </div>

                            <div className="text-center md:text-left" data-aos="zoom-in" data-aos-duration="2000">
                                <h1 className="text-5xl md:text-8xl font-bold text-white font-font-sans">100+</h1>
                                <p className="mt-6 text-xl md:text-4xl font-semibold text-white leading-relaxed">
                                    Medical Experts
                                </p>
                            </div>

                            <div className="text-center md:text-left" data-aos="zoom-in" data-aos-duration="2000">
                                <h1 className="text-5xl md:text-8xl font-bold text-white font-font-sans">15+</h1>
                                <p className="mt-6 text-xl md:text-4xl font-semibold text-white leading-relaxed">
                                    Registered with CQC
                                </p>
                            </div>
                        </div>

                       
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="2000">
                            <img className="w-full object-cover" src={Group4} alt="Happy Clients" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Happyclients;
