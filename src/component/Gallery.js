import React from "react";
import Group5 from '../assets/images/Group5.jpg';

const Gallery = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#0082da] ">
                    <div className="mx-auto p-20 pb-20">
                        
                        <div className="text-center py-10 ">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white font-font-sans">
                                Gallery
                            </h1>
                            <p className="mt-9 text-lg sm:text-2xl lg:text-5xl text-white leading-relaxed">
                                Capturing Moments of Healing, Care, and Hope
                            </p>
                        </div>

                        
                        <div className="w-full mt-9">
                            <img
                                className="w-full h-auto rounded-lg"
                                src={Group5}
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
