// src/components/PurchaseOrder.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function PurchaseOrder() {
  const [orderData, setOrderData] = useState({
    orderDate: '',
    supplier: '',
    itemTotal: 0,
    discount: 0,
    netAmount: 0
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mx-auto  bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Purchase Order Module</h2>
      <form className="flex flex-col gap-4">
        <label className="block">
          Order Date
          <input
            type="date"
            name="orderDate"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            onChange={handleChange}
          />
        </label>

        <label className="block">
          Supplier
          <select
            name="supplier"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            onChange={handleChange}
          >
            <option value="">Select Supplier</option>
            {/* Add options here */}
          </select>
        </label>

        <div className="my-4">
          <h3 className="text-lg font-semibold">Item List within Purchase Order</h3>
          <button className="bg-green-500 text-white py-1 px-2 rounded mt-2">Add Item</button>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Item No</th>
                <th className="border p-2">Item Name</th>
                <th className="border p-2">Stock Unit</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Order Qty</th>
                <th className="border p-2">Item Amount</th>
                <th className="border p-2">Discount</th>
                <th className="border p-2">Net Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Render items here */}
            </tbody>
          </table>
        </div>

        <label className="block">
          Item Total
          <input
            type="number"
            name="itemTotal"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            readOnly
            value={orderData.itemTotal}
          />
        </label>

        <label className="block">
          Discount
          <input
            type="number"
            name="discount"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            onChange={handleChange}
          />
        </label>

        <label className="block">
          Net Amount
          <input
            type="number"
            name="netAmount"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            readOnly
            value={orderData.itemTotal - orderData.discount}
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 w-fit px-10"
        >
          Save Purchase Order
        </button>
      </form>
    </div>
  );
}

export default PurchaseOrder;
