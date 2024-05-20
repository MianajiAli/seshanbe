import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import RenderProductDetails from './RenderProductDetails';

const SingleProduct = () => {
  const userId = 10069;
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setTotal(product.price * count);
    }
  }, [product, count]);


  const addToCart = () => {
    console.log(count, id)
  }





  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function plusCount() {
    if (count >= product.count) {
      setCount(product.count);
    } else setCount(prevCount => prevCount + 1);
  }

  function minusCount() {
    setCount(prevCount => Math.max(1, prevCount - 1));
  }

  const handleChangeCount = (e) => {
    let tempCount = parseInt(e.target.value);
    if (!isNaN(tempCount)) {
      setCount(Math.min(Math.max(tempCount, 1), product.count));
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
        {RenderProductDetails(product)}
      </div>

      <div className='w-full lg:w-6/12 h-min flex items-center justify-between flex-wrap md:flex-nowrap bg-c-back3 px-3 py-5 rounded-md card card-control'>

        <div className='quantity-buttons '>
          <input
            className={`opacity-50 focus:opacity-70 input-field ${isNaN(count) || count < 1 || count > product.count ? 'invalid' : ''}`}
            onChange={(e) => handleChangeCount(e)}
            onFocus={handleFocus}
            value={count}
            id="countInput11"
          />
          <button className='btn-round26 smooth-300 bg-[#080808]' onClick={() => { minusCount() }}>-</button>
          <button className='btn-round26 smooth-300 bg-[#080808]' onClick={() => { plusCount() }}>+</button>
        </div>
        <span className='total-price'>${total}</span>
        <button className='btn btn-primary opacity-85 hover:opacity-100' onClick={addToCart}>افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default SingleProduct;
