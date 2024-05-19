import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Count: {product.count}</p>
      <p>Color: {product.color}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>

  );
};

export default ProductsCard;
