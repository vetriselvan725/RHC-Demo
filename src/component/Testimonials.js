import React from "react";
import qution1 from '../assets/images/qution1.png';
import qution2 from '../assets/images/qution2.png';
import profile from '../assets/images/profile.jpg';


const Testimonials = () => {
    return (
        <>
            <section className="text-grey-800">

                <div className="bg-[#F4FEFF] mt-20">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-full">
                                <h1 className="text-3xl font-bold text-[#0082da] font-font-sans mt-5">Testimonials</h1>
                                <h2 className="mt-5 text-4xl font-bold text-[#000] font-font-sans mt-5">What<span className="text-[#0082da]">Candidates Say</span>About Us</h2>
                                <img className="mt-10" src={qution1} alt="qution1"></img>
                                <p className=" p-20 text-4xl text-center font-semibold text-[#323b4b] leading-[66px]">I saw a recruiting banner and so RHC360 solutions was one of the first places I went to after landing in the UK. As a newcomer to the country, I had little idea about how to get started but WAYNE and his team guided me through. They provided bespoke advice and got me on the rotas for shifts that were perfectly suited to my needs. They have been very supportive and transparent in their work which is a great quality. I also never faced any problems regarding payments as all payments were done correctly and timely as discussed at the beginning. Overall, it worked out well and in a very professional manner.<img className="ml-auto" src={qution2} alt="qution2"></img></p>
                                <img className="mt-5 w-24 h-24 rounded-full mx-auto border-4 border-[#0082DA]" src={profile} alt="qution2"></img>
                                <h1 className="text-3xl font-bold text-center text-[#000] font-font-sans mt-5">Mohammed Imran Ali</h1>
                                <h2 className="text-3xl font-bold text-[#000] text-center font-font-sans mt-5">Support worker in social care,</h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Testimonials;