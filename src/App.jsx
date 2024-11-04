// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Supplier from './components/Supplier';
import Item from './components/Item';
import PurchaseOrder from './components/PurchaseOrder';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/item" element={<Item />} />
          <Route path="/purchase-order" element={<PurchaseOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
