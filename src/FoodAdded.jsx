import React from 'react'
import { useState } from 'react';

function FoodAdded({qty, setQty}) {

  return (
    <div className='h-full w-full flex flex-col bg-gray-500 rounded-lg absolute bottom-0 left-0 text-center justify-center items-center opacity-90 transition ease-in-out cursor-pointer'>
        <p className='text-white text-4xl font-thin'><span className='text-5xl'>&#10003;</span><br/>Added</p>
        {/* <div className='flex text-white text-4xl font-thin mt-5 gap-3'>
          <button className='bg-[#f5f5f5] text-gray-500 z-10' onClick={()=>setQty(qty - 1)}>-</button>
          {qty}
          <button className='bg-[#f5f5f5] text-gray-500 z-10' onClick={()=>setQty(qty + 1)}>+</button>
        </div> */}
    </div>
  )
}

export default FoodAdded