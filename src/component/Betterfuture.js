import React from "react";
import Group1 from '../assets/images/Group1.png';

const Betterfuture = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">

                <div className="bg-[#F4FEFF]">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#0082da] font-font-sans">RHC 360 Solutions <br/> </h1>
                                <h2 className="mt-10 text-6xl font-bold text-[#0082da] font-font-sans">Caring For a Better Future </h2>
                            </div>
                            <div className="w-1/2">
                                <img src={Group1} alt="Group1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Betterfuture;