import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import Jobupdate from "./Jobupdate";
import JobCard from "./jobCard";

const National = () => {

 
  const [showJobType, setShowJobType] = useState(true);
  const [showEmploymentType, setShowEmploymentType] = useState(true);
  const [sector, setSector] = useState(""); 
  const [keyword, setKeyword] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:3000/api/job")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  
  const filteredJobs = data?.filter((job) => {
    const isSectorMatch = sector ? job.sector === sector : true;
    const isKeywordMatch = keyword ? job.jobName.toLowerCase().includes(keyword.toLowerCase()) : true;
    const isLocationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
    return isSectorMatch && isKeywordMatch && isLocationMatch;
  });

  return (
    <>
      <Header />
      <Menu />
      
      <div className="bg-[#0082DA]">
        <div className="md:mx-[10px] mx-auto py-14 px-4 sm:px-6 lg:px-12">
          <div className="text-center sm:text-start">
            <h1 className="text-white text-4xl mb-4">Discover your ideal job role here.</h1>
            <div className="bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-2">
              <select
                className="text-2xl bg-transparent border-none outline-none text-gray-500 p-2 rounded-full w-full sm:w-1/4"
                value={sector}
                onChange={handleSectorChange}
              >
                <option value="">Select sector</option>
                <option value="Clinical">Clinical</option>
                <option value="Non Clinical">Non Clinical</option>
              </select>
              <input
                type="text"
                placeholder="Job title or Keyword"
                className="text-2xl bg-transparent border-none outline-none flex-grow p-4 text-gray-700 w-full sm:w-auto"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Set your location"
                className="text-2xl bg-transparent border-none outline-none flex-grow p-4 text-gray-700 w-full sm:w-auto"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="bg-blue-600 text-2xl text-white px-8 py-3 rounded-xl hover:bg-blue-700 w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[10px] p-4 flex flex-row lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div data-aos="zoom-in" className="w-1/3 lg:w-1/4 bg-white p-4 rounded-md shadow-md aos-init aos-animate">
          <div className="mb-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm sm:text-3xl font-bold">Job Type</h2>
              <button className="focus:outline-none text-xl" onClick={() => setShowJobType(!showJobType)}>
                {showJobType ? "▲" : "▼"}
              </button>
            </div>
            {showJobType && (
              <div className="space-y-2 text-sm sm:text-2xl">
                <label className="flex items-center">
                  <input type="checkbox" name="Permanent" className="mr-2 w-5 h-5" />Permanent
                </label>
                <label className="flex items-center pt-3">
                  <input type="checkbox" name="PartTime" className="mr-2 w-5 h-5" />PartTime
                </label>
                <label className="flex items-center pt-3">
                  <input type="checkbox" name="Contract" className="mr-2 w-5 h-5" />Contract
                </label>
                <label className="flex items-center pt-3">
                  <input type="checkbox" name="Internship" className="mr-2 w-5 h-5" />Internship
                </label>
              </div>
            )}
          </div>

          <div className="mb-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm sm:text-3xl font-bold">Employment Type</h2>
              <button className="focus:outline-none text-xl" onClick={() => setShowEmploymentType(!showEmploymentType)}>
                {showEmploymentType ? "▲" : "▼"}
              </button>
            </div>
            {showEmploymentType && (
              <div className="space-y-2 text-sm sm:text-2xl">
                <label className="flex items-center pt-3">
                  <input type="checkbox" name="Full_time" className="mr-2 w-5 h-5" />Full Time
                </label>
                <label className="flex items-center pt-3">
                  <input type="checkbox" name="Part_time" className="mr-2 w-5 h-5" />Part Time
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-3/4 p-4">
          <h2 className="text-xs sm:text-lg lg:text-3xl font-bold mb-2 md:mb-0">Showing: {filteredJobs?.length} filtered jobs</h2>
          <div data-aos="zoom-in" className="space-y-4 aos-init aos-animate">
            {filteredJobs?.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-[20px] lg:mx-[50px] lg:my-[50px]">
        <h1 data-aos="fade-up" className="font-bold text-[#0082DA] text-[24px] md:text-6xl mb-2 text-center aos-init aos-animate">
          <span className="home-text">DBS</span>
        </h1>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init aos-animate">RHC 360 Solutions is dedicated to providing comprehensive support for candidates navigating the complexities of Disclosure and Barring Service (DBS) checks. Understanding the importance of these checks in ensuring the safety and welfare of vulnerable populations, RHC 360 Solutions offers tailored assistance to streamline the process.</p>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">A DBS check is crucial for individuals seeking employment in roles that involve working with children or vulnerable adults. The process can often be daunting, with various requirements and documentation needed. RHC 360 Solutions aims to demystify this process by guiding candidates through each step, ensuring they understand what is required and how to fulfill those requirements efficiently.</p>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">One of the key services offered by RHC 360 Solutions is assistance with the processing of DBS checks. This includes helping candidates fill out the necessary forms accurately, gathering the required identification documents, and ensuring that all information is submitted correctly. By providing this support, RHC 360 Solutions minimizes the risk of delays that can occur due to errors or incomplete applications.</p>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">Additionally, RHC 360 Solutions accepts current DBS checks, which can significantly expedite the hiring process for candidates who already have an up-to-date check. This flexibility allows candidates to demonstrate their commitment to safety and compliance without undergoing the lengthy process of obtaining a new check.</p>
      </div>

      <div className="mx-[20px] lg:mx-[50px] lg:my-[50px]">
        <h1 data-aos="fade-up" className="font-bold text-[#0082DA] text-[24px] md:text-6xl mb-2 text-center aos-init aos-animate"><span className="home-text">Immigration Check&nbsp;</span></h1>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">The UK is transitioning to a digital immigration system featuring eVisas, which serve as online records of your immigration status. To access your eVisa and share your status with employers, landlords, or other relevant parties, you'll need to create a UK Visas and Immigration (UKVI) account.</p>
      </div>

      <div className="mx-[20px] lg:mx-[50px] lg:my-[50px]">
        <h1 data-aos="fade-up" className="font-bold text-[#0082DA] text-[24px] md:text-6xl mb-2 text-center aos-init aos-animate"><span className="home-text">Proving Your Status</span></h1>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">You can utilize the UKVI online service to view and prove your immigration status. This process involves generating a share code that you can provide to employers or landlords, allowing them to verify your right to work or rent in the UK.</p>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">These measures are designed to ensure compliance with UK immigration laws and enhance border security.</p>
      </div>

      <div className="mx-[20px] lg:mx-[50px] lg:my-[50px]">
        <h1 data-aos="fade-up" className="font-bold text-[#0082DA] text-[24px] md:text-6xl mb-2 text-center aos-init aos-animate"><span className="home-text">Right to work check</span></h1>
        <p data-aos="zoom-in" className="mt-10 text-lg sm:text-xl md:text-3xl font-semibold text-[#323b4b] leading-8 md:leading-[52px] sm:leading-[42px] aos-init">The UK right to work check is a crucial process for employers to verify that potential employees have the legal authorization to work in the country. Employers are required to check an individual's immigration status before hiring them, ensuring compliance with UK immigration laws. This check can be conducted using various methods, including reviewing original documents, utilizing the online UK Visas and Immigration (UKVI) service, or generating a share code that provides access to the individual's immigration status. By carrying out these checks, employers help prevent illegal working and contribute to the overall integrity of the UK labor market.</p>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default National;


