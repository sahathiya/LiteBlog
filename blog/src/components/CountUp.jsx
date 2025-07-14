


import React from 'react';
import CountUp from '@/styles/count';

function Count() {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl font-extrabold text-black mb-2">
            <CountUp
              from={0}
              to={100}
              duration={1.5}
              className="inline"
            />
            +
          </h2>
          <p className="text-gray-600 text-lg font-medium">Blog Posts</p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl font-extrabold text-black mb-2">
            <CountUp
              from={0}
              to={5678}
              duration={2}
              separator=","
              className="inline"
            />
            +
          </h2>
          <p className="text-gray-600 text-lg font-medium">Active Users</p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl font-extrabold text-black mb-2">
            <CountUp
              from={0}
              to={910}
              duration={1.5}
              className="inline"
            />
            +
          </h2>
          <p className="text-gray-600 text-lg font-medium">Projects Completed</p>
        </div>
      </div>



  
    </div>
  );
}

export default Count;
