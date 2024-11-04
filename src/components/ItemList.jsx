// ItemList.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Sample function to add an item (replace with actual logic)
  const addItem = () => {
    const newItem = {
      itemNo: items.length + 1,
      itemName: 'Sample Item',
      stockUnit: 'pcs',
      unitPrice: 100,
      orderQty: 1,
      discount: 0,
      itemAmount: 100,
      netAmount: 100
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h3>Item List within Purchase Order</h3>
      <button onClick={addItem}>Add Item</button>
      <table>
        <thead>
          <tr>
            <th>Item No</th>
            <th>Item Name</th>
            <th>Stock Unit</th>
            <th>Unit Price</th>
            <th>Order Qty</th>
            <th>Item Amount</th>
            <th>Discount</th>
            <th>Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemNo}</td>
              <td>{item.itemName}</td>
              <td>{item.stockUnit}</td>
              <td>{item.unitPrice}</td>
              <td>{item.orderQty}</td>
              <td>{item.itemAmount}</td>
              <td>{item.discount}</td>
              <td>{item.netAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
