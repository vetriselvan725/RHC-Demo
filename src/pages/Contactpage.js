import React, { useState, useEffect } from "react";
import Header from '../component/Header';
import Footer from '../component/Footer';
import Menu from '../component/Menu';

const Contactpage = () => {

  const [fullname, setfullname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [enquirytype, setenquirytype] = useState("");
  const [entermessage, setentermessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      fullname,
      phonenumber,
      email,
      enquirytype,
      entermessage,
    };

    try {
      const response = await fetch('http://localhost:3000/contactmessage', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {

        setfullname('');
        setphonenumber('');
        setemail('');
        setenquirytype('');
        setentermessage('');
        alert('Contact successful!');
      } else {
        const data = await response.json();
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <div className="bg-[#0082DA]">
        <div className=" px-4 sm:px-6 md:mx-[10px] mx-auto py-16 lg:px-12">
          <div className="text-6xl mb-4 font-semibold text-center md:text-start  w-full lg:w-[70%] text-white">
            <h1>We’re here to help.</h1>
            <p className="mb-8 mt-10 text-white text-2xl font-semibold">Dont hesitate to reach out with any questions, we are here to help.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f4f2] py-12  mx-auto px-2 ">
        <h1 data-aos="fade-up" className="sm:mx-[60px] text-[24px] md:text-5xl font-bold mb-8 lg:mx-[75px]  aos-init aos-animate mx-[40px] md:mx-[40px]">Leave us a message</h1>
        <div className="gap-8 md:gap-0 md:grid-cols-2 grid grid-cols-1">
          <form onSubmit={handleSubmit} data-aos="zoom-in" className="h-full lg:h-[80%] mx-auto bg-white shadow-md md:h-[80%] rounded-lg p-6 lg:p-12 aos-init w-[80%]">
            <div className="flex flex-row mb-4 gap-4">
              <input type="text" name="fullname" placeholder="Full Name" value={fullname}
                onChange={(e) => setfullname(e.target.value)} className="w-full p-2 border-2 hover:border-[#0082DA] rounded-md text-2xl" />
              <input type="tel" name="phonenumber" placeholder="Phone Number" value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)} minlength="13" maxlength="13" className="w-full p-2 border-2 hover:border-[blue] rounded-md text-2xl" />
            </div>
            <div className="flex flex-row mb-4 gap-4">
              <input type="email" name="email" placeholder="Email ID" value={email}
                onChange={(e) => setemail(e.target.value)} className="w-full p-2 border-2 hover:border-[#0082DA] rounded-md text-2xl" />
              <select name="enquirytype" value={enquirytype}
                onChange={(e) => setenquirytype(e.target.value)} className="w-full p-2 border-2 hover:border-[#0082DA] rounded-md text-2xl" >
                <option value="">Enquiry Type</option>
                <option value="Health Care">Health Care</option>
                <option value="Jobs">Jobs</option>
                <option value="Training">Training</option>
              </select>
            </div>
            <div className="mb-4"><textarea name="entermessage" value={entermessage}
              onChange={(e) => setentermessage(e.target.value)} placeholder="Enter your message here..." className="w-full p-2 border-2 hover:border-[#0082DA] rounded-md text-2xl" rows="8"  ></textarea>
            </div>
            <div className="flex flex-col xl:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <input type="checkbox" id="termsAccepted" name="termsAccepted" className="h-5 w-5 text-blue-600 border-gray-300 rounded" />
                <label for="termsAccepted" className="ml-2 text-gray-900 text-2xl">I agree to the Terms &amp; Conditions</label>
              </div>
              <button type="submit" className="mt-5 xl:mt-0 w-[80%] xl:w-[30%] bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300 text-2xl">Send</button>
            </div>
          </form>
          <div className="w-[100%] gap-8 flex flex-col items-center">
            <div data-aos="zoom-in" className="w-[80%] bg-white rounded-lg shadow-md p-4 flex flex-col aos-init">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-blue-600 text-5xl mb-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
              </svg>
              <h3 className="text-3xl font-semibold mb-6">Email us</h3>
              <p className="text-2xl mb-6">Ask us a question by email and we will respond within a few days.</p>
              <a href="" className="text-blue-600 font-medium text-2xl">bookings@rhc360.com</a>
            </div>
            <div data-aos="zoom-in" className="w-[80%] bg-white rounded-lg shadow-md p-4 flex flex-col aos-init">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-green-500 text-5xl mb-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <h3 className="text-3xl font-semibold mb-6">Call us anytime</h3>
              <p className="text-2xl mb-6">Call us if your question requires an immediate response.</p>
              <a href="" className="text-blue-600 font-medium text-2xl">+44 (0)20 3500 1100</a>
            </div>
            <div data-aos="zoom-in" className="w-[80%] bg-white rounded-lg shadow-md p-4 flex flex-col aos-init">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-red-500 text-5xl mb-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <h3 className="text-3xl font-semibold mb-6">Visit us</h3>
              <p className="text-2xl mb-6">You can meet us at our office and discuss the details of your question.</p>
              <a href="" className="text-blue-600 font-medium text-2xl">Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default Contactpage;