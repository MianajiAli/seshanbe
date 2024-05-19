import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div key={product.id} className="product-item">
        <img src={product.imageUrl} alt={product.title} />
        <div className='product-details'>

        <h2>{product.title}</h2>
        <p> ${product.price.toFixed(2)}</p>
        </div>

      </div>
    </Link>

  );
};

export default ProductsCard;
