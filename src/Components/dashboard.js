import React, { useState, useEffect } from 'react';
import '../CSS Components/dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faPencilAlt, faList, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from  'react-router-dom';


const Dashboard = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [electronics, setElectronics] = useState(0);
  const [clothing, setClothing] = useState(0);  
  const [entertainment, setEntertainment] = useState(0);
  const [lowStock, setLowStock] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    setItems(items);
    const electronicsCount = items.filter(item => item.category === 'Electronics').length;
    setElectronics(electronicsCount);
    const clothingCount = items.filter(item => item.category === 'Clothing').length;
    setClothing(clothingCount);
    const entertainmentCount = items.filter(item => item.category === 'Entertainment').length;
    setEntertainment(entertainmentCount);
    const lowStockCount = items.filter(item => item.quantity < 5).length;
    setLowStock(lowStockCount);
  }, []);

  return (
    <div className="dashboard-section">
      <TopSection />
      <div className="bottom-section">
        <RecentlyAddedSection items={items} />
        <SummarySection
          items={items}
          electronics={electronics}
          clothing={clothing}
          entertainment={entertainment}
          lowStock={lowStock}
        />
      </div>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="top-section">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="button-section">
        
        <Link to="/search-item">
          <button className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icons"/>
            Search Item
          </button>
        </Link>

        <Link to="/add-item">
          <button className="button">
            <FontAwesomeIcon icon={faPlus} className="icons" />
            Add Item
          </button>
        </Link>
        
        <Link to="/update-item">
          <button className="button">
            <FontAwesomeIcon icon={faPencilAlt} className="icons"/>
            Update Item
          </button>
        </Link>

        <Link to="/display-items">
          <button className="button">
            <FontAwesomeIcon icon={faList} className="icons"/>
            Display Item
          </button>
        </Link>

        <Link to="/sort-items">
          <button className="button">
            <FontAwesomeIcon icon={faSort} className="icons"/>
            Sort Item
          </button>
        </Link>

        <Link to="/remove-item">
          <button className="button">
            <FontAwesomeIcon icon={faTrash} className="icons"/>
            Remove Item
          </button>
        </Link>
      </div>
    </div>
  );
};

const RecentlyAddedSection = ({ items }) => {
  return (
    <div className="recently-added-section">
      <h2 className="recently-added-title">
        Recently Added Items
      </h2>
      <table className="recently-added-table">
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          {items.slice(-5).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td style={{ color: item.quantity <= 5 ? '#ef4545' : 'inherit'}}>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SummarySection = ({ items, electronics, clothing, entertainment, lowStock }) => {
  return (
    <div className="summary-section">
      <h2 className="summary-title">
        Summary
      </h2>
        <div className="summary-item">
          <p className="summary-label">Total Items:</p>
          <p className="summary-value">{items.length}</p>
        </div>
        <div className="summary-item">
          <p className="summary-label">Electronics Items:</p>
          <p className="summary-value">{electronics}</p>
        </div>
        <div className="summary-item">
          <p className="summary-label">Clothing  Items:</p>
          <p className="summary-value">{clothing}</p>
        </div>
        <div className="summary-item">
          <p className="summary-label">Entertainment Items:</p>
          <p className="summary-value">{entertainment}</p>
        </div>
        <div className="summary-item">
          <p className="summary-label">Low Stock Items:</p>
          <p className="summary-value">{lowStock}</p>
        </div>
    </div>
  );
};

export default Dashboard;