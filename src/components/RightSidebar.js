import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = ({ tooltipContent }) => {
  return (
    <aside className="shadow-lg mt-2 mb-5 bg-gray-800 rounded-lg flex-grow">
      <div className="flex flex-col sidebar mt-5">
        <Link to="#" className="flex items-center py-4 px-6 text-white justify-center hover:bg-gray-900">
          <span className="material-icons-sharp mr-2">dashboard</span>
          <h3 className="text-center">Right Sidebar</h3>
        </Link> 
        {/* Tooltip Information */}
         {tooltipContent && (
          <div className="custom-tooltip text-center text-white">
            <p className="label">{`Date : ${tooltipContent.date}`}</p>
            <p className="desc">{`Open price : ${tooltipContent.openPrice}`}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default RightSidebar;
