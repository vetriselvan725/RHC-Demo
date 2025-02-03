import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import JobCard from "./jobCard";

const National = () => {
  const [showJobType, setShowJobType] = useState(true);
  const [showEmploymentType, setShowEmploymentType] = useState(true);
  const [sector, setSector] = useState(""); 
  const [keyword, setKeyword] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [data, setData] = useState(null); 
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, name]);
    } else {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== name));
    }
  };

  const handleEmploymentTypeChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedEmploymentTypes([...selectedEmploymentTypes, name]);
    } else {
      setSelectedEmploymentTypes(selectedEmploymentTypes.filter((type) => type !== name));
    }
  };

  const filteredJobs = data?.filter((job) => {
    const isSectorMatch = sector ? job.Sector.toLowerCase() === sector.toLowerCase() : true;
    const isKeywordMatch = keyword ? job.JobName.toLowerCase().includes(keyword.toLowerCase()) : true;
    const isLocationMatch = location ? job.Location.toLowerCase().includes(location.toLowerCase()) : true;
    const isJobTypeMatch = selectedJobTypes.length > 0 ? selectedJobTypes.includes(job.JobType) : true;
    const isEmploymentTypeMatch = selectedEmploymentTypes.length > 0 ? selectedEmploymentTypes.includes(job.EmploymentType) : true;

    return isSectorMatch && isKeywordMatch && isLocationMatch && isJobTypeMatch && isEmploymentTypeMatch;
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

              <button
                className="bg-blue-600 text-2xl text-white px-8 py-3 rounded-xl hover:bg-blue-700 w-full sm:w-auto mt-4 sm:mt-0"
                onClick={() => {}}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[10px] p-4 flex flex-row lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-1/3 lg:w-1/4 bg-white p-4 rounded-md shadow-md aos-init aos-animate">
          <div className="mb-4 mt-6" data-aos="zoom-in" data-aos-duration="2000">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm sm:text-3xl font-bold">Job Type</h2>
              <button className="focus:outline-none text-xl" onClick={() => setShowJobType(!showJobType)}>
                {showJobType ? "▲" : "▼"}
              </button>
            </div>
            {showJobType && (
              <div className="space-y-2 text-sm sm:text-2xl">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Permanent"
                    className="mr-2 w-5 h-5"
                    onChange={handleJobTypeChange}
                  />
                  Permanent
                </label>
                <label className="flex items-center pt-3">
                  <input
                    type="checkbox"
                    name="PartTime"
                    className="mr-2 w-5 h-5"
                    onChange={handleJobTypeChange}
                  />
                  Part-Time
                </label>
                <label className="flex items-center pt-3">
                  <input
                    type="checkbox"
                    name="Contract"
                    className="mr-2 w-5 h-5"
                    onChange={handleJobTypeChange}
                  />
                  Contract
                </label>
                <label className="flex items-center pt-3">
                  <input
                    type="checkbox"
                    name="Internship"
                    className="mr-2 w-5 h-5"
                    onChange={handleJobTypeChange}
                  />
                  Internship
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
                  <input
                    type="checkbox"
                    name="FullTime"
                    className="mr-2 w-5 h-5"
                    onChange={handleEmploymentTypeChange}
                  />
                  Full Time
                </label>
                <label className="flex items-center pt-3">
                  <input
                    type="checkbox"
                    name="PartTime"
                    className="mr-2 w-5 h-5"
                    onChange={handleEmploymentTypeChange}
                  />
                  Part Time
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

      <Footer />
      <Copyright />
    </>
  );
};

export default National;
