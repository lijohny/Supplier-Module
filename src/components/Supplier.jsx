// src/components/Supplier.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Supplier() {
  const [supplierData, setSupplierData] = useState({
    supplierName: '',
    address: '',
    taxNo: '',
    country: '',
    mobileNo: '',
    email: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Supplier Module</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          Supplier Name
          <input
            type="text"
            name="supplierName"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter supplier name"
          />
        </label>
        
        <label className="block">
          Address
          <input
            type="text"
            name="address"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter address"
          />
        </label>

        <label className="block">
          TAX No
          <input
            type="text"
            name="taxNo"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter TAX number"
          />
        </label>

        <label className="block">
          Country
          <select
            name="country"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </label>

        <label className="block">
          Mobile No
          <input
            type="text"
            name="mobileNo"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
        </label>

        <label className="block">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>

        <label className="block">
          Status
          <select
            name="status"
            className="mt-1 block w-full border border-gray-400 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Blocked">Blocked</option>
          </select>
        </label>
      </form>
      
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 px-10"
        >
          Save Supplier
        </button>
      </div>
    </div>
  );
}

export default Supplier;
