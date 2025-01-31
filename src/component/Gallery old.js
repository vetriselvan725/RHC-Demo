import React from "react";
import Group5 from '../assets/images/Group5.jpg';
import Group6 from '../assets/images/Group6.jpg';
import Group7 from '../assets/images/Group7.jpg';
import Group8 from '../assets/images/Group8.jpg';
import Group9 from '../assets/images/Group9.jpg';
import Group10 from '../assets/images/Group10.jpg';
import Group11 from '../assets/images/Group11.jpg';
import Group12 from '../assets/images/Group12.jpg';

const Gallery = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#0082da] ">
                    <div className="mx-auto p-20 pb-20">
                        
                        <div className="text-center py-10 ">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white font-font-sans" data-aos="fade-up" data-aos-duration="2000">
                                Gallery
                            </h1>
                            <p className="mt-9 text-lg sm:text-2xl lg:text-5xl text-white leading-relaxed" data-aos="zoom-in" data-aos-duration="2000">
                                Capturing Moments of Healing, Care, and Hope
                            </p>
                        </div>

                        
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group5}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group6}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group7}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group8}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group9}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group10}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group11}
                                alt="Gallery"
                            />
                        </div>
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                                src={Group12}
                                alt="Gallery"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
