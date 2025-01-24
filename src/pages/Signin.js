import React from "react";
import signup1 from '../assets/images/signup/signup1.png';
import signup2 from '../assets/images/signup/signup2.png';
import footerimg from '../assets/images/signup/footerimg.jpg';
const Signin = () => {
    return (
        <>
            <section className="text-grey-800 mt-10">
                <div className="bg-[#FFEFF]">
                    <div className="container mx-auto">
                        <div className="flex">
                            <div className="w-1/2 p-4 shadow-md rounded">
                                <div class="bg-white rounded-lg mt-10">
                                <a href="/"> <div className="w-full  ml-12">
                                        <img className="w-[35%] pr-10" src={footerimg} alt="footerimg"></img>
                                    </div></a>
                                    <h2 className="mt-5 text-3xl font-bold text-[#000] font-font-sans ml-12"><span className="text-[#0082da] mr-3">Welcome,</span>Sign up to RHC 360 Solutions</h2>
                                    <form className="bg-white rounded-lg p-12">
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Email" className="w-full text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div class="mb-4">
                                            <input type="text" name="name" placeholder="Password" className="w-full text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md" required="" value="" />
                                        </div>
                                        <div className="py-4 flex w-full ">
                                            <input type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-4 mt-2" />
                                        
                                            <label className="text-2xl text-[#000]">Save Password</label>
                                            <a className="text-right" href="">
                                                 <label className="text-2xl text-[#000] ml-64">Forget Password?</label>
                                            </a>
                                        </div>
                                        <div class="mb-4">
                                            <button className="w-full text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-[#FFFF] font-bold">SignUp</button>
                                            <a href="/Signup"><h2 className="mt-5 text-2xl text-[#000] font-font-sans mt-5 ">Already have an account?<span className="text-[#0082da] ml-3 ">Sign in</span></h2></a>
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

export default Signin;