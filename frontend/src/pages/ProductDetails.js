import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://tech-world-bhtl.onrender.com/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>Price: ₹{product.price}</h2>
    </div>
  );
};

export default ProductDetails;
