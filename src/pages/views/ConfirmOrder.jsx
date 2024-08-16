import React, { useState } from 'react';

const ConfirmOrder = () => {
  const [tableNumber, setTableNumber] = useState(0);

  const menuItems = [
    { name: 'Big Mac', price: 240, rating: 4.4, quantity: 1 },
    { name: 'Cheese Burst', price: 180, rating: 4.3, quantity: 1 },
  ];

  const subtotal = menuItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center border-b border-gray-200">
        <button className="text-2xl mr-4">☰</button>
        <h1 className="text-2xl font-bold text-gray-800">Order</h1>
      </div>

      {/* Order Items */}
      <div className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <img
                src={`path/to/${item.name.toLowerCase().replace(' ', '_')}.jpg`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
                <p className="text-sm text-gray-600">Rs {item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">-</button>
              <span className="mx-2 text-gray-800">{item.quantity}</span>
              <button className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Table Number Selection */}
      <div className="p-4 border-t border-gray-200">
        <p className="mb-2 font-semibold text-gray-800">Select Table Number:</p>
        <div className="flex items-center justify-center">
          <button
            className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
            onClick={() => setTableNumber(Math.max(0, tableNumber - 1))}
          >
            -
          </button>
          <span className="mx-4 text-xl font-semibold text-gray-800">{tableNumber.toString().padStart(2, '0')}</span>
          <button
            className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
            onClick={() => setTableNumber(tableNumber + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal and Confirm Button */}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-2xl font-bold text-gray-800">Rs {subtotal}</p>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
