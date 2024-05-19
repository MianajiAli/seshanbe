import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Count: {product.count}</p>
      <p>Color: {product.color}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default SingleProduct;
