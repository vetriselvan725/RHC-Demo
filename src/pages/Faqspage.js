import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu"; 
import Footer from "../component/Footer";
import Jobupdate from "../component/Jobupdate";

const Faqpage = () => {
    return (
        <>
       < Header></Header>
       < Menu></Menu>
       <div className="bg-[#0082DA]">
        <div className=" px-4 sm:px-6 md:mx-[10px] mx-auto py-16 lg:px-12">
          <div className="text-5xl mb-4 font-semibold text-center md:text-start  w-full lg:w-[70%] text-white">
            <h1>Frequently Asked Questions (FAQs)</h1>
           
          </div>
        </div>
      </div>
      <Jobupdate></Jobupdate>
       <Footer></Footer>
       </>
    );
};

export default Faqpage;