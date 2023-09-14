import { Link, useParams } from 'react-router-dom';

const Product = ({ products }) => {
  // Your code here...
  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="product-details">
        <span className="product-price">${product.price.toFixed(2)}</span>
        {product.stock > 0 ? (
          <span className="in-stock">In Stock: {product.stock}</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
      {/* Your code here... */}
    </div>
  );
};

export default Product;
