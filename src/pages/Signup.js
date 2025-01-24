import React from "react";
import signup1 from '../assets/images/signup/signup1.png';
import signup2 from '../assets/images/signup/signup2.png';
import footerimg from '../assets/images/signup/footerimg.jpg';
const Signup = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">
                <div className="bg-[#FFEFF]">
                    <div className="container mx-auto">
                        <div className="flex">
                        <div className="w-1/2 p-4 shadow-md rounded">
                                <div class="bg-white rounded-lg mt-10">
                                <a href="/"><div className="w-full  ml-12">
                                 <img className="w-[35%] pr-10" src={footerimg}></img>
                                </div> </a> 
                                <h2 className="mt-5 text-3xl font-bold text-[#000] font-font-sans ml-12"><span className="text-[#0082da] mr-3">Welcome,</span>Sign up to RHC 360 Solutions</h2>
                                    <form className="bg-white rounded-lg p-12">
                                    <div className="flex">
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="First Name" className="w-full text-2xl p-2 border border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4 pl-8">
                                            <input type="text" name="name" placeholder="Last Name" className="w-full shadow text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Email Id" className="w-full text-2xl p-2 border-2 shadow-lg hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4 pl-8">
                                            <input type="text" name="name" placeholder="PhoneNumber(Optional" className="w-full text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                    </div>
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Password" className="w-full text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Confirm Password" className="w-full text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                            <button className="w-full text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-[#FFFF] font-bold">SignUp</button>
                                            <a href="/Signin"><h2 className="mt-5 text-2xl text-[#000] font-font-sans mt-5 ">Already have an account?<span className="text-[#0082da] ml-3 font-bold">Sign in</span></h2></a>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="w-1/2 ">
                                <div className="relative">
                                    <img src={signup1} alt="signin image"></img>
                                </div>
                                <div className="absolute bottom-0 top-10">
                                    <img src={signup2} alt="signin image"></img>
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