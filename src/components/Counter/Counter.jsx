import React, { useState, useEffect } from 'react';

const Counter = ({ title, count, id, onRemove, onInc, onDec, color, price }) => {
  const [itemCount, setItemCount] = useState(count);

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  const handleIncrement = () => {
    onInc(id);
  };

  const handleDecrement = () => {
    onDec(id);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="select-none w-min my-5 px-20 h-20 mx-auto items-center gap-5 justify-center flex text-xl font-bold rounded-md border-[1.5px] border-red-50 border-solid">
      <span className="min-w-[20rem] w-max h-10 text-center flex justify-center items-center">{title || 'NoTitle'}</span>
      <span>{color || 'NoColor'}</span>
      <span>{price || 'NoPrice'}</span>
      <button
        className="hover:bg-stone-900 text-white h-10 w-10 text-center flex justify-center items-center rounded-md border-[1.5px] border-red-50 border-solid"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="min-w-10 h-10 text-center flex justify-center items-center rounded-md border-[1.5px] border-red-50 border-solid">{itemCount}</span>
      <button
        className="hover:bg-stone-900 text-white h-10 w-10 text-center flex justify-center items-center rounded-md border-[1.5px] border-red-50 border-solid"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="hover:bg-stone-900 text-white h-10 w-10 text-center flex justify-center items-center rounded-md border-[1.5px] border-red-50 border-solid"
        onClick={handleRemove}
      >
        x
      </button>
    </div>
  );
};

export default Counter;
