import React from "react";
import qution1 from '../assets/images/qution1.png';
import qution2 from '../assets/images/qution2.png';
import profile from '../assets/images/profile.jpg';
import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';

const Testimonials = () => {
    return (
        <>
            <section className="text-gray-800">
                <div className="bg-[#F4FEFF] mt-10">
                    <div className="mx-auto p-20">
                        <div className="text-left">
                            <h1 className="text-2xl sm:text-4xl font-bold text-[#0082da] font-font-sans mt-5" data-aos="fade-up" data-aos-duration="2000">
                                Testimonials
                            </h1>
                            <h2 className="mt-3 sm:mt-5 text-2xl sm:text-6xl font-bold text-black font-font-sans" data-aos="zoom-in" data-aos-duration="2000">
                                What <span className="text-[#0082da]">Candidates Say</span> About Us
                            </h2>
                        </div>
                        <div className="relative mt-10" data-aos="zoom-in" data-aos-duration="2000">
                            <img
                                className="absolute top-0 left-2 w-8 h-8 sm:w-12 sm:h-12"
                                src={qution1}
                                alt="Quotation Mark"
                            />
                            <p className="p-5 sm:p-10 text-lg sm:text-5xl font-medium text-gray-700 leading-relaxed text-center leading-[42px] md:leading-[67px]" data-aos="zoom-in" data-aos-duration="2000">
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
                        <div className="mt-10 text-center">
                            <img
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-[#0082DA]"
                                src={profile2}
                                alt="Profile"
                            />
                            <h1 className="mt-5 text-xl sm:text-2xl font-bold text-black font-font-sans">
                            Bhanu Prasad
                            </h1>
                            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-600">
                            Senior HCA,
                            </h2>

                        </div>
                        <div className="mt-10 text-center">
                            <img
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-[#0082DA]"
                                src={profile3}
                                alt="Profile"
                            />
                            <h1 className="mt-5 text-xl sm:text-2xl font-bold text-black font-font-sans">
                                Choice Okabova
                            </h1>
                            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-600">
                                 Senior HCA,
                            </h2>

                        </div>
                        <div className="mt-5 flex items-center justify-center">
                            <button className="focus:outline-none">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#0082DA] text-2xl mx-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                                </svg>
                                </button>

                                <div className="flex space-x-2">
                                    <span className="dot "></span>
                                    <span className="dot active"></span>
                                    <span className="dot "></span>
                                    </div>
                                    <button className="focus:outline-none">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#0082DA] text-2xl mx-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                        </svg></button></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
