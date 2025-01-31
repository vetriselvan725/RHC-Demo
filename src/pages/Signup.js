import React from "react";
import signup1 from '../assets/images/signup/signup1.png';
import signup2 from '../assets/images/signup/signup2.png';
import footerimg from '../assets/images/signup/footerimg.jpg';

const Signup = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">
                <div className="bg-[#FFEFF]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start">

                            <div className="w-full lg:w-1/2 p-4 shadow-md rounded mb-8 lg:mb-0">
                                <div className="bg-white rounded-lg mt-10">
                                    <a href="/">
                                        <div className="w-full ml-12">
                                            <img className="w-[35%] pr-10" src={footerimg} alt="Logo" />
                                        </div>
                                    </a>
                                    <h2 className="mt-5 text-3xl font-bold text-[#000] font-font-sans ml-12">
                                        <span className="text-[#0082da] mr-3">Welcome,</span>
                                        Sign up to RHC 360 Solutions
                                    </h2>
                                    <form className="bg-white rounded-lg p-6 sm:p-12">
                                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                                            <div className="mb-4 w-full">
                                                <input type="text" name="firstName"
                                                    placeholder="First Name"
                                                    className="w-full text-2xl p-2 border hover:border-[#0082DA] rounded-md"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    className="w-full text-2xl p-2 border hover:border-[#0082DA] rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                                            <div className="mb-4 w-full">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Id"
                                                    className="w-full text-2xl p-2 border shadow-lg hover:border-[#0082DA] rounded-md"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone Number (Optional)"
                                                    className="w-full text-2xl p-2 border hover:border-[#0082DA] rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="w-full text-2xl p-2 border hover:border-[#0082DA] rounded-md"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                className="w-full text-2xl p-2 border hover:border-[#0082DA] rounded-md"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <button className="w-full text-2xl p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md">
                                                Sign Up
                                            </button>
                                            <a href="/Signin">
                                                <h2 className="mt-5 text-2xl text-[#000] font-font-sans">
                                                    Already have an account?
                                                    <span className="text-[#0082da] ml-3 font-bold">Sign in</span>
                                                </h2>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/2">
                                <div className="relative h-[300px] sm:h-[400px] lg:h-auto">
                                    <img src={signup1} alt="Sign-up image" className="w-full h-full object-cover rounded-lg" />
                                    <img src={signup2} alt="Sign-up image overlay" className="absolute inset-0 w-full h-full object-cover opacity-75"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
