import React from "react";
import Group4 from '../assets/images/Group4.png';


const Happyclients = () => {
    return (
        <>
            <section className="text-grey-800">

                <div className="bg-[#0082da] mt-5">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#FFFF] font-font-sans">200+</h1>
                                <p className="mt-10 text-2xl font-semibold text-[#FFFF] leading-[42px]">Carers</p>
                            </div>
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#FFFF] font-font-sans">900+</h1>
                                <p className="mt-10 text-2xl font-semibold text-[#FFFF] leading-[42px]">Happy Clients</p>
                            </div>
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#FFFF] font-font-sans">100+</h1>
                                <p className="mt-10 text-2xl font-semibold text-[#FFFF] leading-[42px]">Medical Experts</p>
                            </div>
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#FFFF] font-font-sans">15+</h1>
                                <p className="mt-10 text-2xl font-semibold text-[#FFFF] leading-[42px]">Registered with CQC</p>
                            </div>
                        </div>
                        <div className="w-full pb-20">
                            <img className="w-full " src={Group4}></img>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Happyclients;