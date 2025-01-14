
import React from "react";
import { Link } from "react-router-dom";


const Sidebar = ({
  onClose,
  isMobileView,
}) => {
  return (
    <div className="h-full w-full min-w-[240px] max-w-[320px] bg-[#16213E] text-white overflow-y-auto relative">
      {/* Header */}
      <div className="sticky top-0 bg-[#16213E] z-10 p-4 flex justify-between items-center">
        <h3 className="text-xl lg:text-2xl font-bold">Sketches</h3>
        {isMobileView && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-white"
            aria-label="Close sidebar"
          >
            <span className="text-2xl">✕</span>
          </button>
        )}
      </div>
      {/* Sketches List */}
      <ul className="p-4 space-y-4">
          <li>
            <Link
              to='/'
              onClick={() => isMobileView && onClose?.()}
              className="block bg-[#0F3460] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" >
            
              <p className="text-sm font-medium p-3 truncate">
                cube
              </p>
            </Link>
          </li>
          <li>
            <Link
              to='/sphere'
              onClick={() => isMobileView && onClose?.()}
              className="block bg-[#0F3460] rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" >
            
              <p className="text-sm font-medium p-3 truncate">
                sphere
              </p>
            </Link>
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;
