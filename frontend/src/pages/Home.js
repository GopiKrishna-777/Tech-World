import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/auth');
    } else {
      axios
        .get('http://localhost:5001/api/products')
        .then((response) => {
          setProducts(response.data);
          setFilteredProducts(response.data); // Initially show all products
          setLoading(false);
        })
        .catch((err) => {
          setError('Error fetching products. Please try again later.');
          setLoading(false);
        });
    }
  }, [navigate]);

   // Handle search functionality
   const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    
    setFilteredProducts(filtered);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (

    <div style={{ textAlign: 'center', padding: '1rem' }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: '10px',
          width: '60%',
          marginBottom: '1rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />

      {/* Products Display */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p style={{fontSize:'30px',margin:'100px'}}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
