import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div key={product.id} className="product-item card card-product">
        <img src={product.imageUrl} alt={product.title} />
        <div className='product-details'>

        <h2>{product.title}</h2>
        <p> ${product.price.toFixed(2)}</p>
        </div>
        <button className='btn btn-primary mx-auto mt-5 mb-2 opacity-85 w-full hover:opacity-100'>افزودن به سبد خرید</button>

      </div>
    </Link>

  );
};

export default ProductsCard;
