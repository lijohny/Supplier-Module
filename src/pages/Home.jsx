// src/pages/Home.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Home() {
  // Placeholder data, replace with actual data fetched from the backend or API.
  const totalSuppliers = 45;
  const totalItems = 120;
  const recentOrders = [
    { id: 1, supplier: 'Supplier A', date: '2024-11-01', totalAmount: '$500' },
    { id: 2, supplier: 'Supplier B', date: '2024-11-02', totalAmount: '$300' },
    { id: 3, supplier: 'Supplier C', date: '2024-11-03', totalAmount: '$450' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Project-Int</h1>
      <p className="text-lg text-center mb-8">
        Here is an overview of your procurement data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">Total Suppliers</h2>
          <p className="text-4xl mt-2">{totalSuppliers}</p>
        </div>
        
        <div className="bg-green-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">Total Items</h2>
          <p className="text-4xl mt-2">{totalItems}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">Recent Orders</h2>
          <p className="text-4xl mt-2">{recentOrders.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Purchase Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Supplier</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2 text-center">{order.id}</td>
                <td className="border p-2 text-center">{order.supplier}</td>
                <td className="border p-2 text-center">{order.date}</td>
                <td className="border p-2 text-center">{order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
