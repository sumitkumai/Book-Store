import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='mx-4 mb-16 max-w-sm rounded-lg border border-gray-300 shadow-lg hover:scale-95 cursor-pointer w-full'>
  
      <div className='h-64 w-full overflow-hidden rounded-t-lg'>
        <img src={item.image} alt="Product" className='object-contain w-full h-full' />
      </div>

      <div className='p-5'>
        
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <span className='text-sm text-gray-500'>{item.category}</span>
        </div>

        <p className='text-gray-700 mb-4 text-left'>{item.description}</p>

        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold text-green-600'>$ {item.price}</p>
          <button className='bg-pink-500 text-white py-1 px-2 rounded-md hover:bg-pink-600'>
            Book Slot
          </button>
        </div>

      </div>

    </div>
  );
};

export default Card;
