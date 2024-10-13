import React, { useState } from 'react';
import '../CSS Components/searchItem.css';

function SearchItem() {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const [searchId, setSearchId] = useState('');
  const [itemDetails, setItemDetails] = useState(null);
  const [searched, setSearched] = useState(false); 

  console.log('Items:', items);

  const handleSearch = () => {
    if (searchId.trim() === '') {
      console.log('Please enter a valid ID');
      return;
    }

    console.log('Searching for item with ID:', searchId);
    const foundItem = items.find((item) => item.id === searchId);
    console.log('Found item:', foundItem);
    if (foundItem) {
      setItemDetails(foundItem);
    } else {
      setItemDetails(null);
    }
    setSearched(true);
  };

  const handleInputChange = (e) => {
    setSearchId(e.target.value);
  };

  return (
    <div className="search-item-container">
      <div className="search-placeholder"></div>
      <h1 className="search-item-text">Search Item</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchId}
          onChange={handleInputChange}
          placeholder="Enter ID"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {searched && itemDetails ? (
        <div className="item-details-container">
          <h2>Item Details</h2>
          <p>ID: {itemDetails.id}</p>
          <p>Name: {itemDetails.name}</p>
          <p>Quantity: {itemDetails.quantity}</p>
          <p>Price: ${itemDetails.price}</p>
          <p>Category: {itemDetails.category}</p>
        </div>
      ) : searched ? (
        <p className="not-found-text">Item not found!</p>
      ) : (
        <p className="search-prompt">Enter an ID to search</p>
      )}
    </div>
  );
}

export default SearchItem;