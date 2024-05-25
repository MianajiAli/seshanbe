import React, { useState, useEffect } from 'react';
import Counter from './Counter/Counter';

const Counters = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/carts')
      .then(response => response.json())
      .then(data => setCart(data));
  }, []);

  const inc = (id) => {
    const updatedItem = cart.find(item => item.id === id);
    if (!updatedItem) return;

    const updatedCount = updatedItem.count + 1;
    fetch(`http://localhost:3001/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: updatedCount }),
    })
      .then(response => response.json())
      .then(() => {
        const updatedCart = cart.map(item =>
          item.id === id ? { ...item, count: updatedCount } : item
        );
        setCart(updatedCart);
      })
      .catch(error => console.error('Error updating count:', error));
  };

  const dec = (id) => {
    const updatedItem = cart.find(item => item.id === id);
    if (!updatedItem) return;

    const updatedCount = updatedItem.count > 1 ? updatedItem.count - 1 : 1;
    fetch(`http://localhost:3001/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: updatedCount }),
    })
      .then(response => response.json())
      .then(() => {
        const updatedCart = cart.map(item =>
          item.id === id ? { ...item, count: updatedCount } : item
        );
        setCart(updatedCart);
      })
      .catch(error => console.error('Error updating count:', error));
  };

  const del = (idToRemove) => {
    fetch(`http://localhost:3001/carts/${idToRemove}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedCart = cart.filter(item => item.id !== idToRemove);
        setCart(updatedCart);
        console.log("Removed item with id:", idToRemove);
      })
      .catch(error => console.error('Error removing item:', error));
  };

  return (
    <div className='w-[80%] max-w-[40rem] mx-auto'>
      {cart.map((item) => (
        <Counter
          key={item.id}
          id={item.id}
          title={item.title}
          count={item.count}
          color={item.color}
          price={item.price}
          imageUrl={item.imageUrl}
          onRemove={() => del(item.id)}
          onInc={() => inc(item.id)}
          onDec={() => dec(item.id)}
        />
      ))}
    </div>
  );
};

export default Counters;
