import React, { useState, useEffect } from "react";
import Header from '../../src/component/Header';
import Footer from '../../src/component/Footer';
import Menu from '../../src/component/Menu';

const Clients = () => {
  return (
<>
    <Header />
    <Menu />
    <div className="bg-[#0082DA]"><div className="md:mx-[10px] mx-auto py-12 px-4 sm:px-6 lg:px-8"><div class="text-center md:text-start w-full lg:w-[70%] text-white text-4xl mb-4"><h1 className="text">Your Trust Is Our Commitment.</h1></div></div></div>
    <Footer />
    </>
);
};

export default Clients;