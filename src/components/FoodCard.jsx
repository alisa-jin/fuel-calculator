import React from 'react'
import { useState } from 'react';
import backpack from '../images/backpack.png'


// ON HOVER --> OVERLAY OF ADD TO PACKPACK IMAGE?

// one div thats just on hover will ask to add food
// another div that once added is overlayed on food item --> hover will change content


function FoodCard({name, brand, category, image}) {
  const [foodAdded, setFoodAdded] = useState('false');

  return (
    <div className='food-container relative' onClick={()=>setFoodAdded(!foodAdded)}>
      <div className = 'flex flex-col items-center bg-[#FFFFFF] py-4 px-8 rounded-lg shadow-md hover:bg-zinc-50'>
          <img className='h-[250px]'src={image} />
          <p className='font-medium'>{brand}</p>
          <p className='text-slate-400 text-sm'>{category}</p>
          <p>{name}</p>
      </div>
      {foodAdded ? 
      (<div className='h-full w-full flex flex-col bg-gray-500 rounded-lg absolute bottom-0 left-0 text-center justify-center opacity-90 transition ease-in-out cursor-pointer'>
        <p className='text-white text-4xl font-thin'><span className='text-5xl'>&#10003;</span><br/>Added</p>
      </div>) : 
      (<div className='h-full w-full flex flex-col bg-gray-500 rounded-lg absolute bottom-0 left-0 text-center justify-center opacity-0 hover:opacity-90 transition ease-in-out cursor-pointer'>
          <p className='text-white text-4xl font-thin'><span className='text-5xl'>+</span><br/>Add to<br/>Backpack</p>
      </div>)}


    </div>
  )
}

export default FoodCard