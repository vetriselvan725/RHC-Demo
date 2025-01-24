import React from "react";
import qution1 from '../assets/images/qution1.png';
import qution2 from '../assets/images/qution2.png';
import profile from '../assets/images/profile.jpg';

const Testimonials = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#F4FEFF] mt-10">
                    <div className="mx-auto p-20">
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-4xl font-bold text-[#0082da] font-font-sans mt-5">
                                Testimonials
                            </h1>
                            <h2 className="mt-3 sm:mt-5 text-2xl sm:text-6xl font-bold text-black font-font-sans">
                                What <span className="text-[#0082da]">Candidates Say</span> About Us
                            </h2>
                        </div>
                        <div className="relative mt-10">
                            <img
                                className="absolute top-0 left-2 w-8 h-8 sm:w-12 sm:h-12"
                                src={qution1}
                                alt="Quotation Mark"
                            />
                            <p className="p-5 sm:p-10 text-lg sm:text-5xl font-medium text-gray-700 leading-relaxed text-center leading-[42px] md:leading-[67px]">
                                I saw a recruiting banner and so RHC360 solutions was one of the first places I went to
                                after landing in the UK. As a newcomer to the country, I had little idea about how to get
                                started but WAYNE and his team guided me through. They provided bespoke advice and got me
                                on the rotas for shifts that were perfectly suited to my needs. They have been very
                                supportive and transparent in their work which is a great quality. I also never faced any
                                problems regarding payments as all payments were done correctly and timely as discussed
                                at the beginning. Overall, it worked out well and in a very professional manner.
                            </p>
                            <img
                                className="absolute bottom-0 right-2 w-8 h-8 sm:w-12 sm:h-12"
                                src={qution2}
                                alt="Quotation Mark"
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <img
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-[#0082DA]"
                                src={profile}
                                alt="Profile"
                            />
                            <h1 className="mt-5 text-xl sm:text-2xl font-bold text-black font-font-sans">
                                Mohammed Imran Ali
                            </h1>
                            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-600">
                                Support Worker in Social Care
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
