import React from "react";
import Group1 from '../assets/images/Group1.png';
import phone1 from '../assets/images/phone1.png';
import email1 from '../assets/images/email1.png';

const Contactus = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">
                <div className="bg-[#F4FEFF]">
                    <div className="mx-auto p-20">
                        <div className="flex flex-col lg:flex-row">
                           
                            <div className="w-full lg:w-3/4 py-10">
                                <h1 className="text-2xl sm:text-4xl font-bold text-[#0082da] font-font-sans" data-aos="fade-up" data-aos-duration="2000">Contact Us</h1>
                                <h2 className="mt-9 text-3xl sm:text-5xl font-bold text-[#000] font-font-sans" data-aos="zoom-in" data-aos-duration="2000">
                                    <span className="text-[#0082da] mr-3" >Get in touch</span>to book your appointment
                                </h2>
                                <p className="mt-10 text-xl sm:text-3xl font-semibold text-[#323b4b] leading-[42px]" data-aos="zoom-in" data-aos-duration="2000">
                                    "Don't hesitate to reach out with any questions, we are here to help."
                                </p>

                                <div className="flex mt-20 items-center">
                                    <img className="w-12 h-12 sm:w-16 sm:h-16" data-aos="zoom-in" data-aos-duration="2000" src={phone1} alt="Phone" />
                                    <p className="text-xl sm:text-3xl flex items-center ml-6 font-semibold text-[#323b4b]" data-aos="zoom-in" data-aos-duration="2000">
                                        +44 (0)20 3500 1100
                                    </p>
                                </div>

                                <div className="flex mt-10 items-center" >
                                    <img className="w-12 h-12 sm:w-16 sm:h-16" data-aos="zoom-in" data-aos-duration="2000" src={email1} alt="Email" />
                                    <p className="text-xl sm:text-3xl flex items-center ml-6 font-semibold text-[#323b4b]" data-aos="zoom-in" data-aos-duration="2000">
                                        bookings@rhc360.com
                                    </p>
                                </div>
                            </div>

                           
                            <div className="w-full lg:w-1/2 p-4" data-aos="zoom-in" data-aos-duration="2000">
                                <div className="bg-white rounded-lg mt-10">
                                    <form className="bg-white rounded-lg p-6 sm:p-12">
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Full Name" 
                                                className="w-full text-xl sm:text-2xl p-4 border border-2 hover:border-[blue] rounded-md" 
                                                required 
                                            />
                                        </div>
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <input 
                                                type="text" 
                                                name="phone" 
                                                placeholder="Phone Number" 
                                                className="w-full text-xl sm:text-2xl p-4 border-2 hover:border-[blue] rounded-md" 
                                                required 
                                            />
                                        </div>
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email Id" 
                                                className="w-full text-xl sm:text-2xl p-4 border-2 hover:border-[blue] rounded-md" 
                                                required 
                                            />
                                        </div>
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <select 
                                                name="enquiryType" 
                                                className="w-full text-xl sm:text-2xl p-4 border-2 hover:border-[blue] rounded-md" 
                                                required
                                            >
                                                <option value="">Enquiry Type</option>
                                                <option value="Health Care">Health Care</option>
                                                <option value="Jobs">Jobs</option>
                                                <option value="Training">Training</option>
                                            </select>
                                        </div>
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <textarea 
                                                name="message" 
                                                placeholder="Enter your message here..." 
                                                rows="4" 
                                                className="w-full text-xl sm:text-2xl p-4 border-2 hover:border-[blue] rounded-md" 
                                                required 
                                            />
                                        </div>
                                        <div className="mb-6" data-aos="zoom-in" data-aos-duration="2000">
                                            <button 
                                                className="w-full text-xl sm:text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-[#FFFF]" data-aos="zoom-in" data-aos-duration="2000"
                                            >
                                                Get in Touch
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contactus;
