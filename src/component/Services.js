import React from "react";

const Services = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#F4FEFF] mt-2">
                    <div className="mx-auto p-20">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="w-full text-center md:text-left">
                                <h1 className="text-2xl sm:text-5xl font-bold text-[#0082da] font-font-sans mt-2" data-aos="fade-up" data-aos-duration="2000">
                                    Services
                                </h1>
                                <h2 className="mt-10 text-3xl sm:text-6xl font-bold text-[#000] font-font-sans" data-aos="zoom-in" data-aos-duration="2000">
                                    Range of <span className="text-[#0082da]">Health Care</span> Services
                                </h2>
                                <p className="mt-8 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-7 sm:leading-[42px] md:leading-[56px]" data-aos="zoom-in" data-aos-duration="2000">
                                    RHC 360 Solutions provides a countrywide healthcare recruitment service to assist the UK NHS and care homes in identifying the best and qualified professionals to care for their patients in need. As a registered partner of clinical and non-clinical frameworks, RHC takes pride and responsibility in ensuring the acquisition of healthcare professionals are consistently aligned with the expected standards of the UK healthcare industry.
                                </p>
                                <button className="border-4 border-[#0082da] rounded font-bold mt-8 py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-3xl text-[#0082da]" data-aos="zoom-in" data-aos-duration="2000">
                                    View all Vacancies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
