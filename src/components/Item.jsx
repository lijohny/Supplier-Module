// src/components/Item.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Item() {
  const [itemData, setItemData] = useState({
    itemName: '',
    inventoryLocation: '',
    brand: '',
    category: '',
    supplier: '',
    stockUnit: '',
    unitPrice: '',
    status: 'Enabled'
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Item Module</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          Item Name
          <input
            type="text"
            name="itemName"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter item name"
          />
        </label>

        <label className="block">
          Inventory Location
          <input
            type="text"
            name="inventoryLocation"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter inventory location"
          />
        </label>

        <label className="block">
          Brand
          <input
            type="text"
            name="brand"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter brand"
          />
        </label>

        <label className="block">
          Category
          <input
            type="text"
            name="category"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter category"
          />
        </label>

        <label className="block">
          Supplier
          <select
            name="supplier"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
          >
            <option value="">Select Supplier</option>
            {/* Add options here */}
          </select>
        </label>

        <label className="block">
          Stock Unit
          <select
            name="stockUnit"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
          >
            <option value="pcs">Pcs</option>
            <option value="kg">Kg</option>
          </select>
        </label>

        <label className="block">
          Unit Price
          <input
            type="number"
            name="unitPrice"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
            placeholder="Enter unit price"
          />
        </label>

        <label className="block">
          Status
          <select
            name="status"
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md shadow-sm p-2 text-lg"
            onChange={handleChange}
          >
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </label>
      </form>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 px-10"
        >
          Save Item
        </button>
      </div>
    </div>
  );
}

export default Item;
