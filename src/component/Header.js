import React from 'react';


const Header = () => {
    
    return (
        <>
            <section className="text-grey-800">
              
                <div className="bg-[#0082da] p-7 ">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center justify-between text-center md:text-left">
                           
                            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>
                                <p className="text-base md:text-xl text-white mr-10">
                                    422 High Street North, London E12 6RH, UK
                                </p>
                            </div>

                         
                            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                    />
                                </svg>
                                <p className="text-base md:text-xl text-white">
                                    +44 (0)20 3500 1100
                                </p>
                            </div>

                            
                            <a
                                className="text-base md:text-xl text-white w-full md:w-auto md:ml-auto"
                                href=""
                            >
                                Modern Slavery
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
