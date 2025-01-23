import React from "react";
import Group2 from '../assets/images/Group2.png';
import Group3 from '../assets/images/Group3.png';

const Joinourteam = () => {
    return (
        <>
            <section className="text-grey-800">

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
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 py-36">
                                <h1 className="text-6xl font-bold text-[#FFFF] font-font-sans">Join Our Team, View our current openings now!</h1>
                                <p className="mt-10 text-2xl font-semibold text-[#FFFF] leading-[42px]">Exciting Opportunities Await! Be Part of a Dynamic Community Dedicated to Transforming Lives and Shaping the Future of Healthcare</p>
                                <button className="border-4 border-[#FFFF] bg-[#FFFF] rounded font-bold mt-10 py-5 px-8 text-2xl text-[#0082da]">View all Vacancies</button>
                            </div>
                            
                            <div className="w-1/2">
                                <img src={Group3} alt="Group1"></img>
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