import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div style={{border: '1px solid #ddd', padding: '1rem', margin: '1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100px',height: '100px' }} />
    </div>
    <h2>{product.name}</h2>
    <p style={{overflow:'hidden', maxWidth: '200px'}}>{product.description}</p>
    <h3>₹{product.price}</h3>
    <div style={{marginTop:'20px'}}>
      <Link to={`/product/${product._id}`}>View Details</Link>
    </div>
  </div>
);

export default ProductCard;
