import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import ProductsCard from './ProductsCard'; // Assuming ProductsCard is in a separate file

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
