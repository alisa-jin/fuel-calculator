import React from 'react'
import FoodCard from './FoodCard'
import { useQuery } from '@tanstack/react-query';
import fetchFoods from '../fetchFoods';


function FoodContainer() {
    const results = useQuery(["foods"], fetchFoods);
    if (results.isLoading) {
      return (
        <div className='loading-pane'>
            <h2 className='loader'>🐡</h2>
        </div>
      )
    }
  
    const foods = results.data;
  return (
    <div className='food-container'>
        Food Container
        <div className='flex justify-center items-center h-screen bg-[#F5F5F5] gap-3 flex-wrap'>
            {foods.map(food => <FoodCard key={food._id} name={food.name} brand={food.brand} category={food.category} image={food.image} water={food.water}/>)}
        </div>
    </div>

  )
}

export default FoodContainer