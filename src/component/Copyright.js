import React from 'react';
import copyright1 from '../assets/images/copyri/copyright1.png';

const Copyright = () => {
    return (
        <>
            <section>
                <div className="bg-[#363535] flex justify-center items-center min-h-[80px]">
                    <div className="container">
                        <div className="flex justify-center items-center">
                            <a className="text-[#FFFF] flex items-center text-2xl" href="">
                                <img className="w-10 mr-2" src={copyright1} alt="Footer Icon" />
                                <span>Copyright © 2024 RHC 360 Solution. All rights reserved</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Copyright;
