import React from 'react';
import 'Counter.css'
const Counter = (props) => {
  const { title, count, id, onRemove, onInc, onDec, color, price,imageUrl } = props;

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
    <div className="rounded-md p-4 mb-4 flex items-center justify-between  card text-c-text2 ">
      <img
        src={imageUrl}
        alt={title}
        className="w-[200px] min-h-20 object-contain flex justify-center items-center bg-c-back2 text-c-text2 rounded-md"
      />
      <div className="flex flex-col gap-3" dir='rtl'>
        <h2 className="text-lg font-bl mb-2 text-c-text1">{title || 'NoTitle'}</h2>
        <div className='flex flex-row gap-1'>
          <div className='flex flex-row gap-1'>
          <span className='w-7 h-7 rounded-md border-c-text2 bg-opacity-50 border-solid border-[1px]' style={{backgroundColor:color}}></span>
          <p className="" >{color || 'NoColor'}</p>
          </div>
          <p className="">{price || 'NoPrice'}$</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleDecrement}
            className="btn-control bg-violet-900"
          >
            -
          </button>
          <span className="btn-control ">{count || "No0"}</span>
          <button
            onClick={handleIncrement}
            className="btn-control bg-violet-900"
          >
            +
          </button>
          <button
            onClick={handleRemove}
            className="btn-control bg-red-800 btn-control-red"
          >
            X
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default Counter;
