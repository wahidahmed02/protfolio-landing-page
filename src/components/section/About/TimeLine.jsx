import React from "react";
import { FaRegCircle, FaCircle } from "react-icons/fa";

const Timeline = ({ items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 ">Timeline</h1>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Timeline items */}
        {items.map((item, index) => (
          <div key={index} className={`relative mb-8 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-500 z-10 absolute left-0 md:left-1/2 transform -translate-x-1/2">
              {index === items.length - 1 ? ( <FaCircle className="text-blue-500 text-xs" />
              ) : ( <FaRegCircle className="text-blue-500 text-xs" />)}
            </div>

            {/* Timeline content */}
            <div  className={`ml-12 md:ml-0 md:w-5/12 ${ index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8" }`}>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline