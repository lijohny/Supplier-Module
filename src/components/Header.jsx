// src/components/Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-around">
        <Link to="/" className="text-lg font-semibold hover:underline">
          Home
        </Link>
        <Link to="/supplier" className="text-lg font-semibold hover:underline">
          Supplier Module
        </Link>
        <Link to="/item" className="text-lg font-semibold hover:underline">
          Item Module
        </Link>
        <Link to="/purchase-order" className="text-lg font-semibold hover:underline">
          Purchase Order Module
        </Link>
      </nav>
    </header>
  );
}

export default Header;
