import React, { useState } from 'react';
import '../CSS Components/updateItem.css';

function UpdateItem() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [id, setId] = useState('');
  const [updateType, setUpdateType] = useState('');
  const [newValue, setNewValue] = useState('');
  const [itemFound, setItemFound] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleUpdateTypeChange = (e) => {
    setUpdateType(e.target.value);
  };

  const handleNewValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleUpdate = () => {
    if (id === '' || updateType === '' || newValue === '') {
      return;
    }
    setFormSubmitted(true);
    const foundItem = items.find((item) => item.id === id);
    if (foundItem) {
      setItemFound(foundItem);
      let previousValue;
      if (updateType === 'Quantity') {
        previousValue = foundItem.quantity !== undefined ? foundItem.quantity : 0;
        foundItem.quantity = parseInt(newValue);
      } else if (updateType === 'Price') {
        previousValue = foundItem.price !== undefined ? foundItem.price : 0;
        foundItem.price = parseFloat(newValue);
      }
      setItems([...items.filter((item) => item.id !== id), foundItem]);
      localStorage.setItem('items', JSON.stringify([...items.filter((item) => item.id !== id), foundItem]));
      setUpdated(true);
      setUpdateMessage(`${updateType.charAt(0).toUpperCase() + updateType.slice(1).toLowerCase()} of item "${id}" is successfully updated from ${previousValue} to ${newValue}`);
      setTimeout(() => {
        setFormSubmitted(false);
        setId('');
        setUpdateType('');
        setNewValue('');
        setUpdated(false);
        setUpdateMessage('');
      }, 20000);
    } else {
      setUpdated(false);
    }
  };

  return (
    <div className="update-item-container">
      <h1 className="update-item-text">Update Item</h1>
      <div className="update-item-placeholder">
        <form className="update-item-form">
          <div className="enterID">
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              placeholder="Enter ID"
              required
              className="input-field id"
            />
          </div>
          <div className="dropdown">
            <select
              value={updateType}
              onChange={handleUpdateTypeChange}
              required
              className="input-field dropdown"
            >
              <option value="">Select field to update</option>
              <option value="Quantity">Quantity</option>
              <option value="Price">Price</option>
            </select>
          </div>
          <div className="inputUpdatedID">
            <input
              type="number"
              value={newValue}
              onChange={handleNewValueChange}
              placeholder="Enter new value"
              required
              className="input-field updated"
            />
          </div>
          <button type="button" onClick={handleUpdate} className="update-item-btn">Update</button>
        </form>
        {formSubmitted && (
          updated ? (
            <p className="update-prompt">{updateMessage}</p>
          ) : itemFound === null ? (
            <p className="not-found-text">Item not found</p>
          ) : (
            <p className="update-prompt">Enter ID and select field to update</p>
          )
        )}
      </div>
    </div>
  );
}

export default UpdateItem;