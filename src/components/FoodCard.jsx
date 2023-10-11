import React from 'react'
import { useState } from 'react';

function FoodCard({name, brand, category, image}) {
  return (
    <div className = 'flex flex-col items-center bg-[#FFFFFF] py-4 px-8 rounded-lg shadow-md'>
        <img className='h-[250px]'src={image}></img>
        <p>{category}</p>
        <h3>{brand}</h3>
        <h4>{name}</h4>
    </div>
  )
}

export default FoodCard