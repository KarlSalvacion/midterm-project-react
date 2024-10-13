import React, { useState, useEffect } from 'react';
import '../CSS Components/addItem.css';
import { Modal, Button } from 'react-bootstrap'

function AddItem() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('')

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.some((item) => item.id === id)) {
      setError('ID already exists. Please enter a unique ID.');
    } else if (price < 0) {
      setError('Price cannot be negative.');
    } else {
      const newItem = { id, name, quantity, price, category };
      setItems([...items, newItem]); 
      setId(''); setName(''); setQuantity(0); setPrice(0); setCategory('');
      setError(null);
      setShowModal(true);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
    }
  };

  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0) {
      setPrice(0);
    } else {
      setPrice(value);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  
  return (
    <div className="addItem-container">
      <h1 className="addItem-text">ADD ITEM</h1>
      <div className="addItem-placeholder">
        <form onSubmit={handleSubmit} className="addItem-form">
          <div>
            <input type="text" className="inputID" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <input type="text" className="inputName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <input
              type="number"
              className="inputQuantity"
              placeholder="Quantity"
              value={quantity === 0 ? '' : quantity}
              onChange={handleQuantityChange}
              required
            />
            <input
              type="number"
              className="inputPrice"
              placeholder="Price"
              value={price === 0 ? '' : price}
              onChange={handlePriceChange}
              required
            />
          </div>
          
          <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <button type="submit" className="addItem-btn">Add Item</button>
        </form>
      </div>

      {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        
      <Modal show={showModal} onHide={handleModalClose} className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Item Added Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Item {id} has been added to the list.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose} className="modalBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="recently-added">
        <p className="recent-text">Recently Added Items:</p>
        <table className="recently-added-data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.slice().reverse().slice(0,3).map((item, index) => (
              < tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td style={{ color: item.quantity <= 5 ? '#ef4545' : 'inherit' }}>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddItem;