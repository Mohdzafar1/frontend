import React from 'react';

const SingleDetail = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-white border-b">
        <button className="text-2xl">&larr;</button>
      </div>

      {/* Product Image */}
      <div className="relative pb-[100%]">
        <img
          src="https://path-to-your-burger-image.jpg"
          alt="Big Mac"
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="bg-green-500 rounded-full w-3 h-3 mr-2"></span>
          <div className="flex items-center text-yellow-500">
            ★ <span className="ml-1 text-black">4.4</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Big Mac</h2>
        <p className="text-xl font-semibold mb-4">₹240</p>

        <p className="text-gray-600 mb-4">
          The Big Mac is a hamburger consisting of two 1.6 oz (45.4 g) beef patties, iceberg lettuce, American cheese, pickles, minced onions, and special Mac Sauce.
        </p>

        {/* Add/Remove buttons */}
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-white py-2 px-4 rounded-l-full">
            -
          </button>
          <span className="bg-yellow-400 text-white py-2 px-4">1</span>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded-r-full">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDetail;