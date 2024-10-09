import React, { useState } from 'react';
import '../CSS Components/addItem.css'

function AddItem() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('')

  const [items, setItems] = useState([]); 
  const [error, setError] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.some(item => item.id === id)) {
      setError('ID already exists. Please enter a unique ID.');
    } else {
      const newItem = { id, name, quantity, price, category };
      setItems([...items, newItem]); 
      localStorage.setItem('items', JSON.stringify([...items, newItem])); // save to local storage
      alert('Item added successfully!');
      setId(''); setName(''); setQuantity(0); setPrice(0); setCategory('');
      setError(null);
    }
  };

  return (
    <div className="addItem-container">
      <h1 className="addItem-text">ADD ITEM</h1>
      <form onSubmit={handleSubmit} className="addItem-form">
        <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} required />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button type="submit" className="addItem-btn">Add Item</button>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </form>
      
      <div className="recently-added">
        <h2>Recently Added Items:</h2>
        <ul>
          {items.slice(-10).map((item, index) => (
            <li key={index}>
              ID: {item.id}, Name: {item.name}, Quantity: {item.quantity}, Price: {item.price}, Category: {item.category}
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
}

export default AddItem;