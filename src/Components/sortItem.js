import React, { useState, useEffect } from 'react';
import '../CSS Components/sortItem.css'

function SortItems() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('none');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    setItems(storedItems || []);
  }, []);

  useEffect(() => {
    const sortItems = () => {
      let sortedItems = [...items]; 
      
      if (sortBy === 'quantity') {
        sortedItems.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.quantity - b.quantity;
          } else {
            return b.quantity - a.quantity;
          }
        });
      } else if (sortBy === 'price') {
        sortedItems.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      } else if (sortBy === 'name') {
        sortedItems.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.category.localeCompare(b.category);
          } else {
            return b.category.localeCompare(a.category);
          }
        });
      }

      setSortedItems(sortedItems);
    };
    sortItems();
  }, [sortBy, sortOrder, items]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="sort-items-container">
      <h1 className="sort-items-text">Sort Items</h1>
      <div className="sort-item-placeholder">
        <div className="sort-container">
          <select value={sortBy} onChange={handleSortChange} className="dropdown-choice">
            <option value="none">Select a field to sort by</option>
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrderChange} className="dropdown-choice">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
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
              {sortedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td style={{color: item.quantity <= 5 ? 'red' : 'inherit'}}>{item.quantity}</td>

                  <td>${item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>      
    </div>
  );
}

export default SortItems;