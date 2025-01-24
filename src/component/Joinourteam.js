import React from "react";
import Group2 from '../assets/images/Group2.png';
import Group3 from '../assets/images/Group3.png';

const Joinourteam = () => {
    return (
        <>
            <section className="text-gray-800">
                <div
                    className="bg-[#F4FEFF]"
                    style={{
                        backgroundImage: `url(${Group2})`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="bg-[#0082da] mt-5">
                        <div className="mx-auto p-20">
                            <div className="flex flex-col-reverse md:flex-row items-center">
                                
                                <div className="w-full md:w-1/2 py-16 md:py-36 text-center md:text-left">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-font-sans">
                                        Join Our Team, View our current openings now!
                                    </h1>
                                    <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-white leading-8 md:leading-[42px] sm:leading-[42px]">
                                        Exciting Opportunities Await! Be Part of a Dynamic Community Dedicated to Transforming Lives and Shaping the Future of Healthcare.
                                    </p>
                                    <button className="border-4 border-white bg-white rounded font-bold mt-8 py-3 px-6 sm:py-5 sm:px-8 text-lg sm:text-2xl text-[#0082da]">
                                        View all Vacancies
                                    </button>
                                </div>

                                
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <img
                                        src={Group3}
                                        alt="Group3"
                                        className="w-full max-w-sm sm:max-w-md md:max-w-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Joinourteam;
