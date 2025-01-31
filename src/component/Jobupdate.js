import React from "react";
import jobupdate from "../assets/images/jobupdate.png";

const Jobupdate = () => {
    return (
<>
        <div data-aos="zoom-in" class="mx-8 md:mx-[15px] my-5 bg-[#0082DA] text-white p-4 md:p-8 rounded-xl aos-init aos-animate">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="w-full md:w-[30%] mb-4 md:mb-0">
                    <h2 class="text-xl md:text-4xl font-bold text-center md:text-start">Get latest job updates</h2>
                    <p class="mt-10 text-sm md:text-[20px] md:leading-[30px] text-center md:text-start">Stay ahead in your career! Sign up for the latest job alerts and never miss an opportunity.</p>
                </div>
                <div class="w-full md:w-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 mb-4 md:mb-0">
                    <input type="email" placeholder="Enter email address" class="bg-transparent border-none outline-none flex-grow p-1 text-center md:text-start text-gray-700 text-2xl" required="" value="" />
                    <button class="w-full md:w-auto bg-blue-600 text-2xl text-white px-8 py-2 rounded-xl hover:bg-blue-700 mt-2 md:mt-0">Subscribe</button>
                </div>
                <div class="w-full md:w-[30%]">
                    <img src={jobupdate} alt="Job updates" class="w-full h-[400px] md:h-auto" />
                </div>
            </div>
           
        </div>
        </>

    );
};
export default Jobupdate;