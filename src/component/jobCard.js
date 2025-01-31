import React from "react";

const JobCard = ({ job }) => {
  return (

<>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 border rounded-xl shadow-xl bg-white p-10 mt-10">
      <ul className="w-full flex flex-col sm:flex-row gap-6 list-none mx-auto">
        <li className="flex flex-col w-full items-center sm:items-start">
          <label className="font-bold text-gray-700 text-2xl text-center sm:text-left">Job Name</label>
          <p className="font-medium text-xl text-gray-600 text-center sm:text-left mt-10">{job.JobName}</p>
        </li>
        <li className="flex flex-col w-full items-center sm:items-start">
          <label className="font-bold text-gray-700 text-2xl text-center sm:text-left">Sector</label>
          <p className="font-medium text-xl text-gray-600 text-center sm:text-left mt-10">{job.Sector}</p>
        </li>
        <li className="flex flex-col w-full items-center sm:items-start">
          <label className="font-bold text-gray-700 text-2xl text-center sm:text-left">Location</label>
          <p className="font-medium text-xl text-gray-600 text-center sm:text-left mt-10">{job.Location}</p>
        </li>
      </ul>
      <button className="bg-[#0082DA] text-xl font-semibold text-white px-6 py-3 rounded-lg 
        hover:bg-[#006bb3] transition-all duration-300 shadow-md">
        Apply
      </button>
    </div>
    </>
    
  );
};

export default JobCard;



