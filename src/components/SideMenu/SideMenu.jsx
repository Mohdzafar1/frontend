import React from 'react';

const SideMenu = ({handleClose}) => {
  return (
    <div className="w-64 h-screen bg-white border-r border-blue-400 flex flex-col z-50 absolute left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-400">Virt</span>ual Wa<span className="text-yellow-400">i</span>ter
        </h1>
        <div>
        <button onClick={handleClose} className="absolute top-4 right-4 text-2xl">&times;</button>
        </div>
      </div>
      
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              ORDERS
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 bg-yellow-100 text-yellow-600 rounded">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              ADD ITEM
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              EDIT MENU
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              MENU QR
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 mt-auto">
        <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default SideMenu;