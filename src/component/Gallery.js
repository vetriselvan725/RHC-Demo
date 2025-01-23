import React from "react";
import Group5 from '../assets/images/Group5.jpg';

const Gallery = () => {
    return (
        <>
            <section className="text-grey-800">

                <div className="bg-[#0082da] mt-5">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-full py-36">
                                <h1 className="text-3xl font-bold text-center text-[#FFFF] font-font-sans">Gallery</h1>
                                <p className="mt-10 text-5xl text-center text-[#FFFF] leading-[42px]">Capturing Moments of Healing, Care, and Hope</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <img className="w-full" src={Group5}></img>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Gallery;