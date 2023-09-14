import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { products } from '../mock/mockData';

const EditProduct = () => {
  // Your code here...

  const [formData, setFormData] = useState({
    // Your code here...
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code here...
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </div>
        <button className="submit-btn" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
