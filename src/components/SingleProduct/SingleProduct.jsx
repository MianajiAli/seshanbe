// SingleProduct.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
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
        setTotal(productData.price * count);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, count]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function plusCount() {
    setCount(prevCount => prevCount + 1);
  }

  function minusCount() {
    setCount(prevCount => Math.max(1, prevCount - 1));
  }

  const handleChangeCount = (e) => {
    let tempCount = parseInt(e.target.value);
    if (!isNaN(tempCount)) {
      setCount(Math.min(Math.max(tempCount, 1), 999));
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className='singleProductContainer'>
      <div className='w-full flex flex-col justify-between md:flex-row gap-10'>
        <div className='image-container'>
          <img className='product-image' src={product.imageUrl} alt={product.title} />
        </div>
        <div className='details-container'>
          <h2 className='text-2xl lg:text-3xl font-bl pb-4 text-c-text1'>{product.title}</h2>
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
          <p>Count: {product.count}</p>
          <p>Color: {product.color}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
      <div className='w-full lg:w-6/12 h-min flex items-center justify-between flex-wrap md:flex-nowrap bg-c-back3 px-3 py-5 rounded-md'>
        <input
          className='input-field'
          onChange={(e) => handleChangeCount(e)}
          onFocus={handleFocus}
          value={count}
          id="countInput11"
        />
        <span className='total-price'>${total}</span>
        <div className='quantity-buttons'>
          <button className='btn-round26 smooth-300 bg-[#080808]' onClick={() => { minusCount() }}>-</button>
          <button className='btn-round26 smooth-300 bg-[#080808]' onClick={() => { plusCount() }}>+</button>
        </div>
        <button className='add-to-cart-button btn-25 smooth-300 dropshadowPurple10'>افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default SingleProduct;
