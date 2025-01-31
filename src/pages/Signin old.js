import React, { useState } from "react";
// import { auth } from "../Firebase/config"; // Import auth from your Firebase setup file
import signup1 from "../assets/images/signup/signup1.png";
import signup2 from "../assets/images/signup/signup2.png";
import footerimg from "../assets/images/signup/footerimg.jpg";

const Signin = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Firebase login
      
      console.log("Logged in:", email);
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
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
                      <img
                        className="w-[50%] lg:w-[35%] pr-10"
                        src={footerimg}
                        alt="footerimg"
                      />
                    </div>
                  </a>
                  <h2 className="mt-5 text-2xl lg:text-3xl font-bold text-[#000] font-font-sans ml-4 lg:ml-12">
                    <span className="text-[#0082da] mr-3">Welcome,</span>
                    Sign up to RHC 360 Solutions
                  </h2>
                 
                  <form
                    onSubmit={handleLogin}
                    className="bg-white rounded-lg p-4 lg:p-12"
                  >
                    <div className="mb-4">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-lg lg:text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full text-lg lg:text-2xl p-2 border-2 hover:border-[#0082DA] rounded-md"
                        required
                      />
                    </div>
                    <div className="py-4 flex items-center w-full">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-4 mt-2"
                      />
                      <label className="text-lg lg:text-2xl text-[#000]">
                        Save Password
                      </label>
                      <a
                        className="ml-auto text-lg lg:text-2xl text-[#000]"
                        href="#"
                      >
                        Forget Password?
                      </a>
                    </div>
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full text-lg lg:text-2xl p-3 border-2 hover:border-[blue] rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold"
                      >
                        Sign Up
                      </button>
                      <a href="/Signup">
                        <h2 className="mt-5 text-lg lg:text-2xl text-[#000] font-font-sans">
                          Already have an account?
                          <span className="text-[#0082da] ml-3">Sign in</span>
                        </h2>
                      </a>
                    </div>
                  </form>
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

export default Signin;
