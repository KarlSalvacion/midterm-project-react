import React, { useState, useEffect } from 'react';
import '../CSS Components/dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [electronics, setElectronics] = useState(0);
  const [clothing, setClothing] = useState(0);
  const [entertainment, setEntertainment] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    setItems(items);
    const electronicsCount = items.filter(item => item.category === 'Electronics').length;
    setElectronics(electronicsCount);
    const clothingCount = items.filter(item => item.category === 'Clothing').length;
    setClothing(clothingCount);
    const entertainmentCount = items.filter(item => item.category === 'Entertainment').length;
    setEntertainment(entertainmentCount);
  }, []);

  return (
    <div className="dashboard-section">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="summary-section">
        <h2 className="summary-title">Summary</h2>
        <div className="summary-container">
          <div className="summary-item">
            <p className="summary-label">Total Items:</p>
            <p className="summary-value">{items.length}</p>
          </div>
          <div className="summary-item">
            <p className="summary-label">Electronics:</p>
            <p className="summary-value">{electronics}</p>
          </div>
          <div className="summary-item">
            <p className="summary-label">Clothing:</p>
            <p className="summary-value">{clothing}</p>
          </div>
          <div className="summary-item">
            <p className="summary-label">Entertainment:</p>
            <p className="summary-value">{entertainment}</p>
          </div>
        </div>
      </div>
      <div className="recently-added-section">
        <h2 className="recently-added-title">Recently Added Items</h2>
        <ul className="recently-added-list">
          {items.slice(-5).map((item, index) => (
            <li key={index} className="recently-added-item">
              <p className="item-id">ID: {item.id}</p>
              <p className="item-name">Name: {item.name}</p>
              <p className="item-category">Category: {item.category}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              <p className="item-price">Price: {item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;