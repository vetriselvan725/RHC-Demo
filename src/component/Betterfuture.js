import React from "react";
import Group1 from '../assets/images/Group1.png';

const Betterfuture = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#F4FEFF]">
                    <div className="mx-auto px-20 mt-5">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2 py-10 md:py-36 text-center md:text-left" data-aos="fade-right" data-aos-duration="2000">
                                <h1 className="text-4xl md:text-7xl font-bold text-[#0082da] font-font-sans">
                                    RHC 360 Solutions <br />
                                </h1>
                                <h2 className="mt-12 text-3xl md:text-7xl font-bold text-[#0082da] font-font-sans">
                                    Caring For a Better Future
                                </h2>
                            </div>
                            <div
                                className="w-full md:w-1/2 flex justify-center relative group"
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                <img
                                    src={Group1}
                                    alt="Group1"
                                    className="max-w-full h-auto transform group-hover:scale-105 transition duration-300 ease-in-out"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Betterfuture;
