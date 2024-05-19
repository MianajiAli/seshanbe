import React from 'react';

const Counter = (props) => {
  const { title, count, id, onRemove, onInc, onDec, color, price } = props;

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
    <div className="border rounded-md p-4 mb-4 flex items-center justify-between">
      <img
        src={`/giftcards/${id}.png`}
        alt={`Gift Card ${id}`}
        className="w-20 h-20 object-contain mr-4"
      />
      <div className="flex flex-col gap-3" dir='rtl'>
        <h2 className="text-lg font-bold mb-2">{title || 'NoTitle'}</h2>
        <div className='flex flex-row gap-10'>

          <p className="text-gray-600 mb-2">{color || 'NoColor'}</p>
          <p className="text-gray-600 mb-2">{price || 'NoPrice'}$</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2"
          >
            -
          </button>
          <span className="mr-2">{count || "No0"}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2"
          >
            +
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      </div>

    </div>
  );
};

export default Counter;
