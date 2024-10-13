import React, { useState } from 'react';
import '../CSS Components/displayItems.css';

function DisplayItems() {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('');

  const filteredItems = () => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'category') {
      return items.filter(item => item.category === category);
    } else if (filter === 'lowStock') {
      return items.filter(item => item.quantity <= 5);
    }
  };

  const totalCount = items.length;
  const electronicsCount = items.filter(item => item.category === 'Electronics').length;
  const entertainmentCount = items.filter(item => item.category === 'Entertainment').length;
  const clothingCount = items.filter(item => item.category === 'Clothing').length;
  const lowstockCount = items.filter(item =>  item.quantity <= 5).length;


  return (
    <div className="display-all-container">
      <h1 className="display-all-text">Display Items</h1>
      <div className="content-container">
        <div className="main-content">
          <div className="filter-container">
            <select value={filter} onChange={e => setFilter(e.target.value)} className="dropdown-choice">
              <option value="all">Display All</option>
              <option value="category">Display by Category</option>
              <option value="lowStock">Display Low Stock Items</option>
            </select>
            {filter === 'category' && (
              <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {Array.from(new Set(items.map(item => item.category))).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems().map((item, index) => (
                  <tr key={index} className="rows">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td style={{ color: item.quantity <= 5 ? 'ef4545' : 'inherit' }}>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div className="sidebar">
          <h2 className="sidebar-title">Inventory Summary</h2>
          <div className="sidebar-contents">
            <p>Total Items: {totalCount}</p>
            <p>Total Electronics: {electronicsCount}</p>
            <p>Total Entertainment: {entertainmentCount}</p>
            <p>Total Clothing: {clothingCount}</p>
            <p>Total Low Stock Items: {lowstockCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayItems;