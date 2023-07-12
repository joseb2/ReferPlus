import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = ({ ticker }) => {
  return (
    <div className="col-span-1 bg-gray-800 flex flex-col rounded-lg">
      {/* Ticker Symbol */}
      <div className="bg-gray-800 h-[3rem] w-[9rem] mx-auto mt-2 mb-5 flex items-center justify-center rounded-lg">
        <span className="text-white text-4xl">{ticker}</span>
      </div>
      {/* Left Sidebar */}
      <aside className="shadow-lg mt-2 mb-5 rounded-lg flex-grow">
        <div className="flex flex-col sidebar mt-5">
          <Link
            to="#"
            className="flex items-center py-4 px-6 text-white justify-center hover:bg-gray-900"
          >
            <span className="material-icons-sharp mr-2">dashboard</span>
            <h3 className="text-center">Home</h3>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default LeftSidebar;
