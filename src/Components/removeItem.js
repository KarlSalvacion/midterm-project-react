import React, { useState } from 'react';
import '../CSS Components/removeItem.css';

function RemoveItem() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
    setMessage('');
    setMessageType('');
  };

  const handleRemove = () => {
    if (id.trim() === '') {
    return;
  }
  
    const foundItem = items.find((item) => item.id === id);
    if (foundItem) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      setMessage(`Item "${foundItem.id}" has been removed from the inventory`);
      setMessageType('success');
    } else {
      setMessage('Item not found!');
      setMessageType('error');
    }
    setId(''); 
  };

  return (
    <div className="remove-item-container">
      <h1 className="remove-item-title">Remove Item</h1>
      <div className="remove-item-form">
        <input 
          type="text" 
          value={id} 
          onChange={handleIdChange} 
          placeholder="Enter Item ID" 
          className="remove-item-input"
          required 
        />
        <button 
          type="button" 
          onClick={handleRemove} 
          className="remove-item-btn"
        >
          Remove
        </button>
      </div>
      <div className="remove-item-message">
        {message && (
          <p className={`${messageType}-message`}>{message}</p>
        )}
        {!message && (
          <p className="info-message">Enter ID to remove an item</p>
        )}
      </div>
    </div>
  );
}

export default RemoveItem;