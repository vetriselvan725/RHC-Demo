import React from "react";
import Group1 from '../assets/images/Group1.png';
import phone1 from '../assets/images/phone1.png';
import email1 from '../assets/images/email1.png';
const Contactus = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">
                <div className="bg-[#F4FEFF]">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-3/4 py-36">
                                <h1 className="text-3xl font-bold text-[#0082da] font-font-sans mt-5">Contact Us<br /> </h1>
                                <h2 className="mt-5 text-4xl font-bold text-[#000] font-font-sans mt-5"><span className="text-[#0082da] mr-3">Get in touch</span>to book your appointment</h2>
                                <p className="mt-10 text-2xl font-semibold text-[#323b4b] leading-[42px]">"Don't hesitate to reach out with any questions, we are here to help."</p>
                                <div className="flex mt-10">
                                    <img className="w-20 h-20 " src={phone1} alt="Group1"></img>
                                    <p className="text-3xl flex items-center ml-8 font-semibold text-[#323b4b]">+44 (0)20 3500 1100</p>
                                </div>
                                <div className="flex mt-10">
                                    <img className="w-20 h-20 " src={email1} alt="Group1"></img>
                                    <p className="text-3xl flex items-center ml-8 font-semibold text-[#323b4b]">bookings@rhc360.com</p>
                                </div>
                            </div>
                            <div className="w-1/2 p-4">
                                <div class="bg-white rounded-lg mt-10">
                                    <form className="bg-white rounded-lg p-12">
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Full Name" className="w-full text-2xl p-4 border border-2 hover:border-[blue] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Phone Number" className="w-full text-2xl p-4 border-2 hover:border-[blue] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Email Id" className="w-full text-2xl p-4 border-2 hover:border-[blue] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                        <select name="enquiryType" class="w-full text-2xl p-4 border-2 hover:border-[blue] rounded-md" required="">
                                                <option value="">Enquiry Type</option>
                                                <option value="Health Care">Health Care</option>
                                                <option value="Jobs">Jobs</option>
                                                <option value="Training">Training</option>
                                            </select>
                                            </div>
                                        <div class="mb-4">
                                            <textarea type="text" name="name" placeholder="Enter your message here..." rows="4" className="w-full text-2xl p-4 border-2 hover:border-[blue] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                        <button className="w-full text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-[#FFFF]">Get in Touch</button>
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