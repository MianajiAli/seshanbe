import React, { useState } from 'react';
import Counter from './../Counter/Counter';

const Counters = () => {
  const [sabad, setSabad] = useState([
    { id: 1, title: 'گیفت کارت استیم', count: 5, color: 'red', price: 200 },
    { id: 2, title: 'گیفت کارت ایکس باکس', count: 10, color: 'green', price: 150 },
    { id: 3, title: 'گیفت کارت پلی استیشن', count: 7, color: 'blue', price: 250 },
    { id: 4, title: 'گیفت کارت آیتونز', count: 12, color: 'yellow', price: 100 },
    { id: 5, title: 'گیفت کارت گوگل پلی', count: 9, color: 'purple', price: 180 },
    { id: 6, title: 'گیفت کارت آمازون', count: 15, color: 'orange', price: 220 },
    { id: 7, title: 'گیفت کارت نتفلیکس', count: 8, color: 'black', price: 190 },
    { id: 8, title: 'گیفت کارت اسپاتیفای', count: 6, color: 'white', price: 170 },
    { id: 9, title: 'گیفت کارت والمارت', count: 11, color: 'pink', price: 130 },
    { id: 10, title: 'گیفت کارت ای بی', count: 5, color: 'grey', price: 160 },
    { id: 11, title: 'گیفت کارت زارا', count: 4, color: 'brown', price: 140 },
  ]);

  const inc = (id) => {
    const updatedSabad = sabad.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setSabad(updatedSabad);
  };

  const dec = (id) => {
    const updatedSabad = sabad.map(item =>
      item.id === id ? { ...item, count: item.count > 1 ? item.count - 1 : 1 } : item
    );
    setSabad(updatedSabad);
  };

  const del = (idToRemove) => {
    const updatedSabad = sabad.filter(item => item.id !== idToRemove);
    setSabad(updatedSabad);
    console.log("Removed item with id:", idToRemove);
  };

  return (
    <div>
      {sabad.map((item) => (
        <Counter
          key={item.id}
          id={item.id}
          title={item.title}
          count={item.count}
          color={item.color}
          price={item.price}
          onRemove={() => del(item.id)}
          onInc={() => inc(item.id)}
          onDec={() => dec(item.id)}
        />
      ))}
    </div>
  );
};

export default Counters;
