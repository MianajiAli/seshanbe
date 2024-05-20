
import React from 'react'

const RenderProductDetails = (product) => {
    return (
        <div className='details-container'>
            <h2 className='text-2xl lg:text-3xl font-bl pb-4 text-c-text1'>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
            <p>Count: {product.count}</p>
            <p>Color: {product.color}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default RenderProductDetails