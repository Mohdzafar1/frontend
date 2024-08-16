import React, { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';

const MenuItem = ({ name, price, rating, quantity }) => (

  <div className="flex items-center justify-between p-4 border-b">
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Rs {price}</p>
      <div className="flex items-center">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 text-sm">{rating}</span>
      </div>
    </div>
    <div className="flex items-center">
      <button className="px-2 py-1 bg-gray-200 rounded-l">-</button>
      <span className="px-3 py-1 bg-gray-100">{quantity}</span>
      <button className="px-2 py-1 bg-gray-200 rounded-r">+</button>
    </div>
  </div>
);

const ProductList = () => {
    const[open,setOpen]=useState(false)

    const handleOpenSideBar=()=>{
        setOpen(true)
    }
  
    const handleClose=()=>{
        setOpen(false)
    }


  return (
     <>
            <div className="max-w-md mx-auto bg-white">
      <header className="flex justify-between items-center p-4 border-b">
        <button className="text-2xl" onClick={handleOpenSideBar}>☰</button>
        <h1 className="text-xl font-bold">Menu</h1> 
        <div className="relative">
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
          <button className="text-2xl">🛒</button>
        </div>
      </header>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search food here"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="flex justify-between p-4">
        {['Snacks', 'Drinks', 'Meals', 'Desserts'].map((category) => (
          <div key={category} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mb-1">
              {/* Icon placeholder */}
            </div>
            <span className="text-xs">{category}</span>
          </div>
        ))}
      </div>

      <section>
        <h2 className="font-bold text-lg p-4">Snacks</h2>
        <MenuItem name="Big Mac" price="240" rating="4.4" quantity="1" />
        <MenuItem name="Double Down" price="252" rating="4.5" quantity="0" />
        <MenuItem name="Cheese Burst" price="180" rating="4.3" quantity="1" />
      </section>

      <section>
        <h2 className="font-bold text-lg p-4">Drinks</h2>
        <MenuItem name="Crunchy Frappe" price="140" rating="4.3" quantity="0" />
      </section>
           </div>

           {open && <SideMenu handleClose={handleClose}/>}
     </>
  );
};

export default ProductList;