import React, { useState, useEffect } from "react";
import signup1 from "../assets/images/signup/signup1.png";
import signup2 from "../assets/images/signup/signup2.png";
import footerimg from "../assets/images/signup/footerimg.jpg";
import axios from "axios";

const Forgotpassword = () => {  

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log(handleSubmit);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/sendemail", { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error sending reset link. Try again.");
    }
  };

  return (
    <>
      <section className="text-grey-800 mt-10">
        <div className="bg-[#FFEFF]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
             
              <div className="w-full lg:w-1/2 p-4 shadow-md rounded">
                <div className="bg-white rounded-lg mt-10">
                  <a href="/">
                    <div className="w-full ml-4 lg:ml-12">
                      <img className="w-[50%] lg:w-[35%] pr-10" src={footerimg} alt="footerimg" 
                      />
                    </div>
                  </a>
                  <div className="mt-4 flex flex-row">
                    <a className="focus:outline-none text-2xl lg:text-2xl font-bold ml-10" href="/SignIn">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="mt-1 text-[#0082DA] text-md" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                      </path>
                      </svg>
                      </a>
                      <div className="ml-3 text-[#0082DA] text-[16px]"><a href="/SignIn" className="text-2xl lg:text-2xl font-bold">Back to Sign in</a></div>
                      </div>
                  <h2 className="mt-5 text-2xl lg:text-3xl font-bold text-[#000] font-font-sans ml-4 lg:ml-12">
                    Forgot password? Enter your email ID
                  </h2>
                 
                  <form  className="bg-white rounded-lg p-4 lg:p-12" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-lg lg:text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md"
                        required
                      />
                    </div>
                   
                   
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full text-lg lg:text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold"
                      >
                       Send Reset Link
                      </button>
                     
                      <a href="/Signup">
                        <h2 className="mt-5 text-lg lg:text-2xl text-[#000] font-font-sans">
                        Having problems with your account?
                          <span className="text-[#0082da] ml-3">Contact us</span>
                        </h2>
                      </a>
                     
                    </div>
                  </form>
                  {message && <p className="text-center text-red-600">{message}</p>}
                </div>
              </div>

             
              <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center">
                <div className="relative">
                  <img className="max-w-full h-auto" src={signup1} alt="signin" />
                  <div className="absolute bottom-0 top-0">
                    <img
                      className="max-w-full h-auto"
                      src={signup2}
                      alt="signin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgotpassword;